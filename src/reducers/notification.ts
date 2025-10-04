import type { Notification } from "../types/notification";

export type NotificationActions = { type: "display", payload: Notification } | { type: "remove", payload: number }

export const notificationReducer = (state: Notification | null, action: NotificationActions) => {
  switch (action.type) {
    case "display": {
      return action.payload;
    }
    case "remove":
      return state?.id === action.payload ? null : state;
    default:
      return state;
  }
}