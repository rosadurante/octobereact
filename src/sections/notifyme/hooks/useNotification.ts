import { useContext } from "react"
import { NotificationContext } from "../contexts/notification";
import type { Notification, NotificationType } from "../types/notification";


export const useNotification = () => {
  const { notification, dispatch } = useContext(NotificationContext);
  const _duration = 3000;
  
  const _shouldDisappear = (type: NotificationType) => {
    return type === "success" || type === "info";
  }

  const removeNotification = (id: number) => {
    dispatch({ type: "remove", payload: id });
  }

  const displayNotification = (notification: Notification) => {
    dispatch({ type: "display", payload: notification });

    if (_shouldDisappear(notification.props.type)) {
      setTimeout(() => {
        dispatch({ type: "remove", payload: notification.id });
      }, _duration);
    }
  }

  return { notification, displayNotification, removeNotification };
}

