import { Field } from "./field"
import { useForm } from "react-hook-form";
import type { FormFields } from "../types";

export const Form = ({ id, onSubmit }: { id: string, onSubmit: (data: FormFields) => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} className="w-full h-full space-y-4">
      <div className="w-full space-y-4">
        <Field id="firstName" label="First Name" type="text" required="First Name is required" delay={0} register={register} errors={errors} />
        <Field id="lastName" label="Last Name" type="text" required="Last Name is required" delay={0.3} register={register} errors={errors} />
        <Field id="email" label="Email" type="email" required="Email is required" delay={0.6} register={register} errors={errors} />
        <Field id="phone" label="Phone" type="tel" required="Phone is required" delay={0.9} register={register} errors={errors} />
        <Field id="city" label="City" type="text" delay={1.2} register={register} errors={errors} />
      </div>
    </form>
  );
}