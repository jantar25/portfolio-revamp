import React, { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaTimes, FaExclamationTriangle } from 'react-icons/fa';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationProps {
    type: NotificationType;
    message: string;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
    title?: string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    hasProgress?: boolean;
    className?: string;
    'data-testid'?: string;
}

const Notification: React.FC<NotificationProps> = ({
    type,
    message,
    isVisible,
    onClose,
    duration = 5000,
    title,
    position = 'top-right',
    hasProgress = true,
    className = '',
    'data-testid': testId = 'notification',
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [progress, setProgress] = useState(100);
    const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
    const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


    useEffect(() => {
        if (isVisible) {
            setIsClosing(false);
            setProgress(100);
        }
    }, [isVisible]);


    useEffect(() => {
        if (!isVisible) return;


        cleanupTimers();

        if (duration === 0) return;

        if (hasProgress) {
            setupProgressBar();
        }


        closeTimeout.current = setTimeout(() => {
            handleClose();
        }, duration);


        return cleanupTimers;
    }, [isVisible, duration, hasProgress]);

    const cleanupTimers = () => {
        if (progressInterval.current) {
            clearInterval(progressInterval.current);
            progressInterval.current = null;
        }
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
    };

    const setupProgressBar = () => {
        const intervalStep = 100 / (duration / 100);
        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                if (prev <= intervalStep) {
                    if (progressInterval.current) {
                        clearInterval(progressInterval.current);
                        progressInterval.current = null;
                    }
                    return 0;
                }
                return prev - intervalStep;
            });
        }, 100);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const pauseTimer = () => {
        cleanupTimers();
    };

    const resumeTimer = () => {
        if (isClosing || !isVisible || duration === 0) return;

        const remainingTime = (progress / 100) * duration;

        if (hasProgress) {
            const intervalStep = 100 / (remainingTime / 100);
            progressInterval.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev <= intervalStep) {
                        if (progressInterval.current) {
                            clearInterval(progressInterval.current);
                            progressInterval.current = null;
                        }
                        return 0;
                    }
                    return prev - intervalStep;
                });
            }, 100);
        }

        closeTimeout.current = setTimeout(() => {
            handleClose();
        }, remainingTime);
    };

    if (!isVisible) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <FaCheckCircle className="text-text-light dark:text-text-dark" size={18} data-testid="notification-icon" />;
            case 'error':
                return <FaTimesCircle className="text-text-light dark:text-text-dark" size={18} data-testid="notification-icon" />;
            case 'warning':
                return <FaExclamationTriangle className="text-text-light dark:text-text-dark" size={18} data-testid="notification-icon" />;
            case 'info':
            default:
                return <FaInfoCircle className="text-text-light dark:text-text-dark" size={18} data-testid="notification-icon" />;
        }
    };

    const getBgColor = () => {
        switch (type) {
            case 'success':
                return 'bg-primary-success';
            case 'error':
                return 'bg-primary-error';
            case 'warning':
                return 'bg-primary-warning';
            case 'info':
                return 'bg-primary-info';
            default:
                return 'bg-blue-600';
        }
    };

    const getPositionClasses = () => {
        switch (position) {
            case 'top-left':
                return 'top-16 left-4';
            case 'bottom-right':
                return 'bottom-4 right-4';
            case 'bottom-left':
                return 'bottom-4 left-4';
            case 'top-right':
            default:
                return 'top-32 right-4 md:right-8 lg:right-16 xl:right-24 2xl:right-64';
        }
    };

    const defaultTitle = () => {
        if (title) return title;

        switch (type) {
            case 'success':
                return 'Success';
            case 'error':
                return 'Error';
            case 'warning':
                return 'Warning';
            case 'info':
            default:
                return 'Information';
        }
    };

    return (
        <div
            className={`fixed ${getPositionClasses()} z-50 max-w-md shadow-lg rounded-md overflow-hidden transition-all duration-300 transform
                ${isClosing ? 'opacity-0 translate-x-2' : 'opacity-100'} ${className}`}
            style={{ minWidth: '300px', maxWidth: '400px' }}
            onMouseEnter={pauseTimer}
            onMouseLeave={resumeTimer}
            data-testid={testId}
            data-type={type}
            data-position={position}
        >
            <div className={`${getBgColor()} text-white px-4 py-2 flex items-center justify-between`}>
                <div className="flex items-center space-x-2">
                    {getIcon()}
                    <span className="font-medium" data-testid="notification-title">{defaultTitle()}</span>
                </div>
                <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors"
                    data-testid="notification-close-btn"
                >
                    <FaTimes size={14} />
                </button>
            </div>

            <div className="bg-background-light dark:bg-background-dark p-4">
                <p className="text-sm" data-testid="notification-message">{message}</p>
            </div>

            {hasProgress && (
                <div
                    className={`h-1 ${getBgColor()} transition-all duration-100 ease-linear`}
                    style={{ width: `${progress}%` }}
                    data-testid="notification-progress-bar"
                />
            )}
        </div>
    );
};

export default Notification;