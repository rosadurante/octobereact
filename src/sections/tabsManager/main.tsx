import { useState, useEffect } from "react";
import { type TabList } from "./type";
import { motion } from "framer-motion";
import { Button } from "../../components/button";
import { TicTacToe } from "../ticTacToe";
import { TablePagination } from "../tablePagination";
import { CatGallery } from "../catGallery";
import { TodoList } from "../todoList";


const tabOptions: TabList = [{
    id: -1,
    label: "Table",
    children: <TablePagination />
  }, {
    id: -1,
    label: "Gallery",
    children: <CatGallery />
  }, {
    id: -1,
    label: "List",
    children: <TodoList />
  }, {
    id: -1,
    label: "Game",
    children: <TicTacToe />
  }, {
    id: -1,
    label: "Empty",
    children: <></>
}];

export const TabsManager = () => {
  const [activeTab, setActiveTab] = useState<number>(-1);
  const [tabs, setTabs] = useState<TabList>([]);

  const _addRandomTab = () => {

    const randomTab = tabOptions[Math.floor(Math.random() * tabOptions.length)];
    const newTabId = tabs.reduce((max, tab) => Math.max(max, tab.id), 0) + 1;

    setTabs([...tabs, { ...randomTab, id: newTabId }]);
    setActiveTab(newTabId);
  }

  const _removeRandomTab = () => {
    const randomTab = tabs[Math.floor(Math.random() * tabs.length)];
    setTabs(tabs.filter((tab) => tab.id !== randomTab.id));

    if (randomTab.id === activeTab) {
      setActiveTab(tabs[0].id === randomTab.id ? tabs[1].id : tabs[0].id);
    }
  }

  // Initialize with the first tab
  useEffect(() => {
    setTabs([
      { id: 1, label: "Empty", children: <></> },
    ]);
    setActiveTab(1);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Button label="Add Random Tab" onClick={() => _addRandomTab()} disabled={tabs.length >= 10}/>
        <Button label="Remove RandomTab" onClick={() => _removeRandomTab()} disabled={tabs.length <= 1}/>
      </div>
    <div className="flex flex-col rounded-md">
      <div className="flex flex-row relative flex-wrap">
        {tabs.map((tab) => (
        <div className="relative">
          <button key={tab.id} className="relative z-10" onClick={() => setActiveTab(tab.id)}>
            <p className="flex items-center justify-center py-2 px-4 z-10">{tab.label}</p>
          </button>
          {activeTab === tab.id &&
            <motion.div layoutId="underline"
              className="absolute bottom-0 left-0 right-0 top-0 bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 50 }}
            />
          }
        </div>
        ))}
      </div>
      <div className="bg-white p-4 flex overflow-hidden h-68 w-full justify-center">
        {tabs.find((tab) => tab.id === activeTab)?.children}
      </div>
    </div>
    </div>
  )
}