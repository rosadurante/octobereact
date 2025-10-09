import { createContext } from "react";
import type { NotificationActions } from "../reducers/notification";
import type { Notification } from "../types/notification";

export type NotificationContextType = {
  notification: Notification | null
  dispatch: React.Dispatch<NotificationActions>
}

export const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  dispatch: () => {}
});