import { X } from "lucide-react"
import { useNotification } from "../hooks/useNotification"
import { cn, getBgByType } from "../utils"
import { AnimatePresence, motion } from "framer-motion";

export const Banner = () => {
  const { notification, removeNotification } = useNotification();

  return (
    <AnimatePresence>
      {notification && notification.props.mode === "banner" && (
      <motion.div className={cn("absolute top-0 left-0 right-0 h-8 p-2 border-1 border-[#ccc]", getBgByType(notification.props.type), notification.props.className)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex items-center justify-end px-2 ">
          <X onClick={() => removeNotification(notification.id)} className="w-4 h-4 text-[#333]" />
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}