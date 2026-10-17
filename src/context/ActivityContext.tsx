import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ActivityEvent {
  id: string;
  type: 'download_cv' | 'view_project' | 'view_certificate' | 'copy_contact' | 'send_message' | 'recruiter_visit' | 'filter_change';
  title: string;
  detail: string;
  timestamp: Date;
  isSimulated?: boolean;
}

interface ActivityContextType {
  activities: ActivityEvent[];
  unreadCount: number;
  isMonitorOpen: boolean;
  setIsMonitorOpen: (open: boolean) => void;
  markAllAsRead: () => void;
  clearActivities: () => void;
  recordActivity: (event: Omit<ActivityEvent, 'id' | 'timestamp'>) => void;
  latestToast: ActivityEvent | null;
  dismissToast: () => void;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

const SIMULATED_VISITOR_ACTIONS = [
  { title: 'Kunjungan Recruiter', detail: 'HR Talent Acquisition dari Jakarta Selatan meninjau portofolio' },
  { title: 'Tinjauan Proyek', detail: 'Pengunjung membuka proyek Absensi Mobile Face Detection' },
  { title: 'Verifikasi Sertifikat', detail: 'Pengunjung melihat sertifikat BNSP Akuntansi & Keuangan' },
  { title: 'Unduhan Profil', detail: 'Seorang Headhunter dari BSD Tangerang meninjau CV Nia Surniati' },
  { title: 'Tinjauan Tech Stack', detail: 'Recruiter mengecek keahlian React.js, Flutter, dan Express.js' },
  { title: 'Sertifikat MSIB', detail: 'Pengunjung memeriksa Sertifikat Predikat Luar Biasa Kampus Merdeka' },
];

export const ActivityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activities, setActivities] = useState<ActivityEvent[]>(() => {
    return [
      {
        id: 'initial-1',
        type: 'recruiter_visit',
        title: 'Sesi Dimulai',
        detail: 'Halaman portofolio Nia Surniati aktif dan siap ditinjau recruiter',
        timestamp: new Date(),
        isSimulated: false,
      },
      {
        id: 'initial-2',
        type: 'recruiter_visit',
        title: 'Aktivitas Terkini',
        detail: 'HR dari Perusahaan Tech Jabodetabek meninjau portofolio (2 menit lalu)',
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        isSimulated: true,
      },
    ];
  });

  const [unreadCount, setUnreadCount] = useState<number>(1);
  const [isMonitorOpen, setIsMonitorOpen] = useState<boolean>(false);
  const [latestToast, setLatestToast] = useState<ActivityEvent | null>(null);

  const recordActivity = (event: Omit<ActivityEvent, 'id' | 'timestamp'>) => {
    const newEvent: ActivityEvent = {
      ...event,
      id: 'act-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
      timestamp: new Date(),
    };

    setActivities((prev) => [newEvent, ...prev.slice(0, 49)]); // keep last 50
    setUnreadCount((prev) => prev + 1);
    setLatestToast(newEvent);

    // Auto dismiss toast after 4.5 seconds
    setTimeout(() => {
      setLatestToast((current) => (current?.id === newEvent.id ? null : current));
    }, 4500);
  };

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  const clearActivities = () => {
    setActivities([]);
    setUnreadCount(0);
  };

  const dismissToast = () => {
    setLatestToast(null);
  };

  // Periodic simulated recruiter interest pulse (every 45-65 seconds) to demonstrate real-time activity monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      const randomAction = SIMULATED_VISITOR_ACTIONS[Math.floor(Math.random() * SIMULATED_VISITOR_ACTIONS.length)];
      recordActivity({
        type: 'recruiter_visit',
        title: randomAction.title,
        detail: randomAction.detail,
        isSimulated: true,
      });
    }, 55000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        activities,
        unreadCount,
        isMonitorOpen,
        setIsMonitorOpen,
        markAllAsRead,
        clearActivities,
        recordActivity,
        latestToast,
        dismissToast,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = (): ActivityContextType => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};
