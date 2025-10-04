import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { NotificationType } from './types/notification';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// NotifyMe utils
export const getBgByType = (type: NotificationType) => {
    return type === "success" ? "bg-[#b8f2b6]/70" : type === "error" ? "bg-[#ffb3b3]/70" : type === "info" ? "bg-[#eee]/70" : type === "warning" ? "bg-[#ffd9b3]/70" : "bg-[#333]";
  }