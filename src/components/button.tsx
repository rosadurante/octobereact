import { cn } from "../utils"


export const Button = ({ label, onClick, disabled, className }: { label: string, onClick: () => void, disabled?: boolean, className?: string }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cn("flex items-center justify-center min-w-32 px-8 py-1 hover:bg-[#eee] border-1 border-[#eee] hover:border-[#333] hover:text-[#333] bg-[#333] text-[#eee] rounded-md transition-all duration-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#333] disabled:text-[#eee] disabled:hover:border-[#eee] disabled:hover:text-[#eee] disabled:hover:bg-[#333]", className)}>
      {label}
    </button>
  )
}

export const IconButton = ({ icon, onClick, disabled, className }: { icon: React.ReactNode, onClick: () => void, disabled?: boolean, className?: string }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cn("flex items-center justify-center px-8 py-1 hover:bg-[#eee] border-1 border-[#eee] hover:border-[#333] hover:text-[#333] bg-[#333] text-[#eee] rounded-md transition-all duration-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#333] disabled:text-[#eee] disabled:hover:border-[#eee] disabled:hover:text-[#eee] disabled:hover:bg-[#333]", className)}>
      {icon}
    </button>
  );
}