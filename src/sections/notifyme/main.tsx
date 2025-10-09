import { useState } from "react"
import { X } from "lucide-react"
import { Button, IconButton } from "../../components/button"
import { Toast } from "./components/toast"
import { Banner } from "./components/banner"
import { useNotification } from "./hooks/useNotification"
import type { NotificationMode, NotificationType } from "./types/notification"
import { NotificationProvider } from "./providers/notification"


export const NotifyMe = () => {
  return (
    <NotificationProvider>
      <NotifyApp />
    </NotificationProvider>
  )
}

export const NotifyApp = () => {

  const { displayNotification } = useNotification();
  const [id, setId] = useState(0);

  const _randomTypes = () => (["success", "error", "info", "warning"][Math.floor(Math.random() * 4)]) as NotificationType;
  const _randomModes = () => (["banner", "toast"][Math.floor(Math.random() * 2)]) as NotificationMode;

  const _showRandomNotification = () => {
    const type = _randomTypes();
    const mode = _randomModes();

    displayNotification({
      id: id + 1,
      props: { type, mode, className: "" }
    });
    setId(id + 1);
  };

  return (
    <div className="w-full h-96 flex flex-row">
      <div className="flex flex-col w-48 h-full bg-[#111] p-4 gap-4">
        <Button label="" onClick={() => _showRandomNotification()} className="w-full h-12 bg-[#fff] rounded-md"></Button>
        <hr className="w-full border-[#fff]" />
        <Button label="" onClick={() => _showRandomNotification()} className="w-full h-4 bg-[#fff] rounded-md"></Button>
        <Button label="" onClick={() => _showRandomNotification()} className="w-full h-4 bg-[#fff] rounded-md"></Button>
      </div>

      <div className="w-full h-full bg-[#fff] flex flex-col">
        <div className="w-full h-12 bg-[#ccc] flex items-center justify-between px-4">
          <p className="text-[#333]">NotifyMe System</p>
          <div className="flex items-center gap-2">
            <IconButton icon={<X />} onClick={() => _showRandomNotification()} className="rounded-full p-2 w-4 h-4 bg-[#333] text-[#fff]" />
            <IconButton icon={<X />} onClick={() => _showRandomNotification()} className="rounded-full p-2 w-4 h-4 bg-[#333] text-[#fff]"/>
            <IconButton icon={<X />} onClick={() => _showRandomNotification()} className="rounded-full p-2 w-4 h-4 bg-[#333] text-[#fff]"/>
          </div>
        </div>
        <div className="w-full flex-1 relative">
          <Banner />
          <Toast />
        </div>

      </div>
    </div>
  )
}