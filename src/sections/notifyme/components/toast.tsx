import { X } from "lucide-react";
import { useNotification } from "../hooks/useNotification";
import { motion, AnimatePresence } from "framer-motion";
import { cn, getBgByType } from "../utils";

export const Toast = () => {
  const { notification, removeNotification } = useNotification();

  return (
    <AnimatePresence>
      {notification && notification.props.mode === "toast" && (
        <motion.div className={cn("absolute bottom-0 right-0 w-48 h-8 rounded-md border-1 border-[#ccc] shadow-md p-1 m-2", getBgByType(notification.props.type), notification.props.className)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex flex-col items-end justify-end px-2">
            <X onClick={() => removeNotification(notification.id)} className="w-4 h-4 text-[#333]" />
          </div>
        </motion.div>

      )}
      </AnimatePresence>
    )
  }