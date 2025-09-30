export const Heading = ({children, level}: {children: React.ReactNode, level: 1 | 2 | 3}) => {
  switch (level) {
    case 1:
      return <h1 className="text-4xl font-bold uppercase text-left w-full">{children}</h1>
    case 2:
      return <h2 className="text-3xl font-bold uppercase text-left w-full">{children}</h2>
    case 3:
      return <h3 className="text-2xl font-bold uppercase text-left w-full">{children}</h3>
    default:
      return <h1 className="text-4xl font-bold uppercase text-left w-full">{children}</h1>
  }
}