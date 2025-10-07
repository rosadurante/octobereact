import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Heading } from "../components/heading";
import { Button } from "../components/button";
import { Drawer } from "../components/drawer";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

export const PanelForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFields>();

  const onClose = () => {
    setIsOpen(false);
    reset();
  }

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    setIsLoading(true);
    // This is the place to organize data and send it to the server
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      onClose();
    }, 3000);
  }

  const fieldClasses = "flex flex-row gap-2 w-full justify-start items-start"
  const labelClasses = "text-sm font-bold w-32 text-left";
  const inputClasses = "w-64 p-1 border border-[#333] rounded-md";

  const fieldForm = ({ id, label, type, required, delay = 0 }: { id: keyof FormFields, label: string, type: string, required?: string | null, delay?: number }) => {

    const input = (() => {
      switch (type) {
      case "email":
        return <input type="email" id={id} {...register(id, { required: required ? required : false, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} className={inputClasses} />
      case "tel":
        return <input type="tel" id={id} {...register(id, { required: required ? required : false, pattern: { value: /^[0-9]{9}$/, message: 'Invalid phone number' } })} className={inputClasses} />
      default:
        return <input type="text" id={id} {...register(id, { required: required ? required : false })} className={inputClasses} />
      }
    })();

    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, delay: delay }}>
      <div className={fieldClasses}>
        <label htmlFor={id} className={labelClasses}>{label}</label>
        {input}
      </div>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, delay: 0 }} className="text-red-500 text-sm text-right">{errors[id]?.message}</motion.p>
      </motion.div>
    )
  }

  const panelForm = (
    <div className="w-full h-full relative p-2">
      {isLoading &&
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
          <Loader className="animate-spin w-12 h-12 text-white" />
      </div>
      }
    <form id="panelForm" onSubmit={handleSubmit(onSubmit)} className="w-full h-full space-y-4">
        <div className="w-full space-y-4">
          {fieldForm({ id: "firstName", label: "First Name", type: "text", required: 'First Name is required', delay: 0 })}
          {fieldForm({ id: "lastName", label: "Last Name", type: "text", required: 'Last Name is required', delay: 0.3 })}
          {fieldForm({ id: "email", label: "Email", type: "email", required: 'Email is required', delay: 0.6 })}
          {fieldForm({ id: "phone", label: "Phone", type: "tel", required: 'Phone is required', delay: 0.9 })}
          {fieldForm({ id: "city", label: "City", type: "text", delay: 1.2 })}
        </div>
      </form>
    </div>
  )

  const footerForm = (
    <div className="flex flex-row gap-2 w-full justify-end items-end">
      <Button label="Cancel" onClick={onClose} />
      <button type="submit" form="panelForm" className="bg-[#333] text-[#eee] rounded-md px-4 py-1 w-32">Submit</button>
    </div>
  )

  return (
    <div className="w-full h-96 relative">
    <div className="bg-white h-full rounded-md p-4">
      <div className="flex flex-col space-y-4">
        <Heading level={2}>Panel Form</Heading>
          <Button label={!isOpen ? "Open Form" : "Close Form"} onClick={() => { setIsOpen(!isOpen);  setSubmitted(false);}} disabled={isOpen} className="w-48"/>
        {submitted && <p className="bg-[#ccc] p-4 rounded-md text-black shadow-md text-sm w-48">Form submitted successfully</p>}
      </div>
    </div>
    <Drawer title="Panel Form" open={isOpen} onClose={onClose} footer={footerForm}>
      {panelForm}
    </Drawer>
    </div>
  )
}