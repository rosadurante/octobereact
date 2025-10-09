import { useState } from "react";
import { useForm } from "react-hook-form";
import { Heading } from "../../components/heading";
import { Button } from "../../components/button";
import { Drawer } from "../../components/drawer";
import { Loader } from "lucide-react";
import type { FormFields } from "./types";
import { Form } from "./components/form";
import { footerForm } from "./components/footer";


export const PanelForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { reset } = useForm<FormFields>();

  const onClose = () => {
    setIsOpen(false);
    reset();
  }

  const onSubmit = (data: FormFields) => {
    setIsLoading(true);
    // This is the place to organize data and send it to the server
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      onClose();
    }, 3000);
  }

  return (
    <div className="w-full h-96 relative">
    <div className="bg-white h-full rounded-md p-4">
      <div className="flex flex-col space-y-4">
        <Heading level={2}>Panel Form</Heading>
          <Button label={!isOpen ? "Open Form" : "Close Form"} onClick={() => { setIsOpen(!isOpen);  setSubmitted(false);}} disabled={isOpen} className="w-48"/>
        {submitted && <p className="bg-[#ccc] p-4 rounded-md text-black shadow-md text-sm w-48">Form submitted successfully</p>}
      </div>
    </div>
      
    <Drawer title="Panel Form" open={isOpen} onClose={onClose} footer={footerForm({ id: "panelForm", onClose })}>
      <div className="w-full h-full relative p-2">
      {isLoading &&
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
          <Loader className="animate-spin w-12 h-12 text-white" />
        </div>
      }
      <Form id="panelForm" onSubmit={onSubmit} />
      </div>
    </Drawer>
      
    </div>
  )
}