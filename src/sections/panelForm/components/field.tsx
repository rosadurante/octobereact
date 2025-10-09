import { motion } from "framer-motion";
import type { FormFields } from "../types";
import { type UseFormRegister, type FieldErrors } from "react-hook-form";

export type FieldProps = {
  id: keyof FormFields;
  label: string;
  type: string;
  required?: string | null;
  delay?: number;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const Field = ({ id, label, type, required, delay = 0, register, errors }: FieldProps) => {

  const fieldClasses = "flex flex-row gap-2 w-full justify-start items-start"
  const labelClasses = "text-sm font-bold w-32 text-left";
  const inputClasses = "w-64 p-1 border border-[#333] rounded-md";

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