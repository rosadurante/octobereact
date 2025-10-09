

export type NotificationType = "success" | "error" | "warning" | "info" | "neutral"
export type NotificationMode = "toast" | "banner"

export type Notification = {
  id: number
  props: {
    type: NotificationType
    mode: NotificationMode
    className: string
  }
}