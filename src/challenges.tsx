import { Section } from "./components/section"
import { TablePagination } from "./sections/tablePagination"
import { TodoList } from "./sections/todoList"
import { NotifyMe } from "./sections/notifyme"
import { TicTacToe } from "./sections/ticTacToe"
import { PanelForm } from "./sections/panelForm"
import { Geometrics } from "./sections/geometrics"
import { CatGallery } from "./sections/catGallery"

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
    {
      title: "Day 3: NotifyMe System",
      description: (
        <>
          <p>In this case, it will create a system of two different type of notifications that can be displayed to the user: a toast and a banner. Both of them will have a different animation and will be displayed in a different position of the screen. Will use this challenge to set the basis of context, providers and reducers from React.</p>
          <p>Tools: React, TailwindCSS, Motion, useReducer, useContext, React.Provider, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <NotifyMe />
        </>
      ),
    },
    {
      title: "Day 4: Tic-tac-toe",
      description: (
        <>
          <p>Tic-tac-toe is a classic game that can be implemented using React and TailwindCSS. It is a two-player game where the players take turns marking the spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. By the end of this day, you will have a fully functional, animated tic-tac-toe game.</p>
          <p>Tools: React, TailwindCSS, useState, useMemo, useEffect</p>
        </>
      ),
      children: (
        <>
          <TicTacToe />
        </>
      ),
    },
    {
      title: "Day 5: Panel form",
      description: (
        <>
          <p>In this case, it will create a system that allows the user to fill a form that will appears in a panel. It will validate, submit and will show a summary of the form at the end.</p>
          <p>Tools: React, TailwindCSS, Motion, React Hook Form, useState, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <PanelForm />
        </>
      ),
    },
    {
      title: "Day 6: Geometry fun",
      description: (
        <>
          <p>In this case, it will create a place to show basic geometric shapes with different animations. This challenge will be a learning experience to the basics of ThreeJS.</p>
          <p>Tools: React, TailwindCSS, ThreeJS, Motion, useState, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <Geometrics />
        </>
      ),
    },
    {
      title: "Day 7: Cat Gallery",
      description: (
        <>
          <p>Let's create a cat gallery. This challenge will be a learning experience to the basics of Axios and how to use it to fetch data from an API. We will build three colum gallery with lightbox to display larger image.</p>
          <p>Tools: React, TailwindCSS, Axios, Motion</p>
        </>
      ),
      children: (
        <>
          <CatGallery />
        </>
      ),
    },
  ]

  return datas.map((data, index) => (
    <Section key={`day-${index+1}`} title={data.title} description={data.description}>
      {data.children}
    </Section>
  ));
}
