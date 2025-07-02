import { X } from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of a notification
interface Notification {
  id: number; // Unique ID for the notification
  title: string; // notification title
  message: string; // notification message
  variant?: "success" | "error" | "info"; // Optional variant for styling
  duration?: number; // Optional duration (default 3000ms)
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
  closed?: boolean;
}

// Define the context value
interface NotificationContextType {
  addNotifications: (notification: Omit<Notification, "id">) => void; // Function to add a notification
}

// Create the notification context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);


// Custom hook to use the notification context
export function useNotification(): NotificationContextType {
  const notficationContext = useContext(NotificationContext);
  if (!notficationContext) {
    throw new Error("usenotification must be used within a notificationProvider");
  }
  return notficationContext;
}

// notificationProvider props
interface NotificationProviderProps {
  children: ReactNode;
}

// notificationProvider Component
export function NotificationProvider({ children }: NotificationProviderProps): JSX.Element {
  const [notifications, setNotfications] = useState<Notification[]>([]);

  // Add a new notification
  const addNotifications = (notification: Omit<Notification, "id">) => {
    const id = Date.now(); // Generate a unique ID
    setNotfications((prevNotifications) => [...prevNotifications, { ...notification, id }]);

    // Automatically remove notification after the specified duration or 3000ms
    const duration = notification.duration || 5000;
    setTimeout(() => removeNotification(id), duration);
  };

  const closeNotification = (id: number) => {
    setNotfications((prevNotifications) =>
      prevNotifications.map((n) =>
        n.id === id ? { ...n, closed: true } : n
      )
    );
  }

  // Remove a notification by ID
  const removeNotification = (id: number) => {
    setNotfications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotifications }}>
      {children}
      <div /*className="fixed top-4 right-4 space-y-2 z-50"*/>
        {notifications.map((notifcation) => (
          <div key={notifcation.id} className={`fixed ${notifcation.vertical === "top" ? "top-0" : "bottom-0"} ${notifcation.horizontal === "left" ? "left-0" : "right-0"} bg-headerBackground shadow-sm w-auto h-auto m-10 p-2 ${notifcation.closed ? "opacity-0" : "opacity-100"} transition-opacity duration-300 ease-in-out`}>
            <div className="flex justify-between items-center">
              <div className="text-textSecondary font-semibold text-base">{notifcation.title}</div>
              <div onClick={(e) => { closeNotification(notifcation.id); setTimeout(() => removeNotification(notifcation.id), 1100) }} className="cursor-pointer rounded text-textSecondary hover:bg-buttonHover border-none p-1"><X className="w-4 h-4" /></div>
            </div>
            <div className="text-sm text-textSecondary">{notifcation?.message}</div>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
