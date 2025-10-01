import { Section } from "./components/section"
import { TablePagination } from "./sections/tablePagination"
import { TodoList } from "./sections/todoList"

export const Challenges = () => {

  const datas = [
  {
      title: "Day 1: Paginated table",
      description: (
        <>
          <p>You start your journey by building a paginated table. In this case, it will load random data an will set dynamically the pagination and will enable/disable the right buttons to interact with it. TailwindCSS ensures the layout is responsive and visually appealing, highlighting hover rows.</p>
          <p>Tools: React, TailwindCSS, useState, useEffect, useMemo</p>
        </>
      ),
      children: (
        <>
          <TablePagination />
        </>
      ),
    },
    {
      title: "Day 2: Dynamic Todo List",
      description: (
        <>
          <p>Next challenge is a dynamic todo list. This is not just a static list; users can add tasks, mark them complete, or delete them. Each task enters and leaves with smooth animations, fading or sliding into view. TailwindCSS ensures the layout is responsive and visually appealing, highlighting completed tasks differently from pending ones. By the end of this day, you’ll have a fully functional, animated todo list.</p>
          <p>Tools: React, TailwindCSS, Motion, useState, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <TodoList />
        </>
      ),
    },
  ]

  return datas.map((data) => (
    <Section title={data.title} description={data.description}>
      {data.children}
    </Section>
  ));
}
