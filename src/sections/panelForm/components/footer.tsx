import { Button } from "../../../components/button"

export const footerForm = ({ id, onClose }: { id: string, onClose: () => void }) => {
  return (
    <div className="flex flex-row gap-2 w-full justify-end items-end">
      <Button label="Cancel" onClick={onClose} />
      <button type="submit" form={id} className="bg-[#333] text-[#eee] rounded-md px-4 py-1 w-32">Submit</button>
    </div>
  )
}