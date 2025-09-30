import { Heading } from "./heading"

export const Section = ({ title, description, children }: { title: string, description: React.ReactNode, children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-4 h-screen w-full space-y-4 overflow-hidden justify-center items-center text-center align-center max-w-3xl mx-auto">
      <Heading level={1}>{title}</Heading>
      {description && <p className="text-md text-gray-500 text-left space-y-2">{description}</p>}
      <div className="flex flex-col gap-4  w-full p-4 mb-4 border border-gray-800 rounded-md">
        {children}
      </div>
    </section>
  )
}