
import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode } from 'react';

import { X } from "lucide-react"
import { Heading } from "./heading"

export const Drawer = ({ title, open, onClose, children, footer }: { title: string, open: boolean, onClose: () => void, children: ReactNode, footer: ReactNode }) => {
  
  const drawer = (
    <div className="absolute top-0 left-0 w-full h-full flex items-start justify-end">
      {/* Overlay */}
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          closed: { opacity: 0, },
          open: { opacity: 1, },
        }}
        className='absolute left-0 top-0 h-full w-full bg-black/50'
        transition={{ duration: 1 }}
      />
      {/* Drawer */}
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: '320px' },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 40 }}

        className='relative flex h-full w-[320px] flex-col items-stretch justify-start overflow-hidden bg-white p-4 space-y-4 border border-[#ccc]'
      >
        {/* Header */}
        <header className="flex flex-row justify-between items-center">
          <Heading level={2}>{title}</Heading>
          <X className="w-6 h-6" onClick={onClose} />
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-row justify-end items-center">
          {footer}
        </footer>
      </motion.div>

    </div>
  )

  return (<AnimatePresence>{open && drawer}</AnimatePresence>);
}