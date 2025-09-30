

export const Button = ({ label, onClick, disabled }: { label: string, onClick: () => void, disabled?: boolean }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="flex items-center justify-center min-w-40 px-8 py-1 hover:bg-[#eee] border-1 border-[#eee] hover:border-[#333] hover:text-[#333] bg-[#333] text-[#eee] rounded-md transition-all duration-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#333] disabled:text-[#eee] disabled:hover:border-[#eee] disabled:hover:text-[#eee] disabled:hover:bg-[#333]">
      {label}
    </button>
  )
}