import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import Notification from './Notification';
import type { NotificationType } from './Notification';

export interface NotificationItem {
    id: string;
    type: NotificationType;
    message: string;
    title?: string;
    duration?: number;
}

export interface NotificationContextType {
    notifications: NotificationItem[];
    showNotification: (notification: Omit<NotificationItem, 'id'>) => string;
    dismissNotification: (id: string) => void;

    hasNotificationWithMessage: (message: string) => boolean;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export interface NotificationProviderProps {
    children: React.ReactNode;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    generateId?: () => string;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children, position = 'top-right', generateId = () => Date.now().toString() }) => {
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const timersRef = useRef<{ [id: string]: number }>({});

    useEffect(() => {
        return () => {
            Object.values(timersRef.current).forEach((timerId) => {
                clearTimeout(timerId);
            });
            timersRef.current = {};
        };
    }, []);

    const hasNotificationWithMessage = useCallback(
        (message: string) => {
            return notifications.some((notification) => notification.message === message);
        },
        [notifications]
    );

    const showNotification = useCallback(
        (notification: Omit<NotificationItem, 'id'>) => {
            if (hasNotificationWithMessage(notification.message)) {
                const existingNotification = notifications.find((n) => n.message === notification.message);
                return existingNotification?.id || generateId();
            }

            const id = generateId();
            const newNotification = { ...notification, id };

            setNotifications((prev) => [...prev, newNotification]);

            if (notification.duration !== 0) {
                const duration = notification.duration || 5000;
                const timerId = window.setTimeout(() => {
                    dismissNotification(id);
                }, duration);

                timersRef.current[id] = timerId;
            }

            return id;
        },
        [generateId, hasNotificationWithMessage, notifications]
    );

    const dismissNotification = useCallback((id: string) => {
        if (timersRef.current[id]) {
            clearTimeout(timersRef.current[id]);
            delete timersRef.current[id];
        }

        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, []);

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                showNotification,
                dismissNotification,
                hasNotificationWithMessage,
            }}
        >
            {children}

            <div className={`notification-container ${position}`} data-testid="notification-container">
                {notifications.map((notification) => (
                    <div key={notification.id} data-testid="notification" className={`notification notification-${notification.type}`} data-position={position} data-type={notification.type}>
                        <Notification
                            type={notification.type}
                            message={notification.message}
                            title={notification.title}
                            isVisible={true}
                            onClose={() => dismissNotification(notification.id)}
                            duration={notification.duration || 5000}
                            position={position}
                        />
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotificationHelpers = () => {
    const { showNotification, hasNotificationWithMessage } = useNotification();

    return {
        success: (message: string, options?: { title?: string; duration?: number }) => {
            if (!hasNotificationWithMessage(message)) {
                return showNotification({
                    type: 'success',
                    message,
                    ...options,
                });
            }
            return '';
        },

        error: (message: string, options?: { title?: string; duration?: number }) => {
            if (!hasNotificationWithMessage(message)) {
                return showNotification({
                    type: 'error',
                    message,
                    ...options,
                });
            }
            return '';
        },

        info: (message: string, options?: { title?: string; duration?: number }) => {
            if (!hasNotificationWithMessage(message)) {
                return showNotification({
                    type: 'info',
                    message,
                    ...options,
                });
            }
            return '';
        },

        warning: (message: string, options?: { title?: string; duration?: number }) => {
            if (!hasNotificationWithMessage(message)) {
                return showNotification({
                    type: 'warning',
                    message,
                    ...options,
                });
            }
            return '';
        },
    };
};

export default NotificationProvider;