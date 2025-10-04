import { useReducer } from 'react'
import { notificationReducer } from '../reducers/notification'
import { NotificationContext, type NotificationContextType } from '../contexts/notification'



export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, dispatch] = useReducer(notificationReducer, null);
  const contextValue: NotificationContextType = { notification, dispatch };
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  )
}