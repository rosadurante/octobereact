export type Tab = {
  id: number;
  label: string;
  children: React.ReactNode;
}

export type TabList = Tab[];