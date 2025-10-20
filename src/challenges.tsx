import { Section } from "./components/section"
import { TablePagination } from "./sections/tablePagination"
import { TodoList } from "./sections/todoList"
import { NotifyMe } from "./sections/notifyme/main"
import { TicTacToe } from "./sections/ticTacToe"
import { PanelForm } from "./sections/panelForm/main"
import { Geometrics } from "./sections/geometrics"
import { CatGallery } from "./sections/catGallery"
import { TabsManager } from "./sections/tabsManager/main"
import { WeatherCard } from "./sections/weatherCard/main"
import { ProgressBar } from "./sections/progressBar"
import { Charts } from "./sections/charts/main"

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
    {
      title: "Day 8: Tabs Manager",
      description: (
        <>
          <p>In this case, let's create a tabs manager. This challenge will be a learning experience to the basics of Tabs and how to use them to display different content.</p>
          <p>Tools: React, TailwindCSS, Motion, useState, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <TabsManager />
        </>
      ),
    },
    {
      title: "Day 9: Weather Card",
      description: (
        <>
          <p>A weather card will end up being a component to display the weather of a current city and a specific day. It'll display all basic information and animated graphics to a easy display of the current weather. </p>
          <p>Tools: React, TailwindCSS, Axios, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <WeatherCard />
        </>
      ),
    },
    {
      title: "Day 10: Progress bar",
      description: (
        <>
          <p>Let's create few samples of a dynamic progress bar component. Let's take a chance to create an example with svg tag and animate it. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <ProgressBar />
        </>
      ),
    },
    {
      title: "Day 11: Charts",
      description: (
        <>
          <p>Let's create few samples of a dynamic charts using ChartJS and D3.js. We'll pull data from an public API and display it in different types of charts. </p>
          <p>Tools: React, TailwindCSS, ChartJS, D3.js, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <Charts />
        </>
      ),
    },
    {
      title: "Day 12: Dependent form fields",
      description: (
        <>
          <p>This time we'll create a meta field for a form field where depend of the value input it will display or not a dependant extra field to fill more information related to it.  </p>
          <p>Tools: React, TailwindCSS, React Hook Form, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>Dependent form fields will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 13: Responsive Navbar",
      description: (
        <>
          <p>Let's create a responsive navbar. We'll find an atractive and mobile first design and  we'll use the TailwindCSS and Motion to create it. </p>
          <p>Tools: React, TailwindCSS, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>Responsive Navbar will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 14: Login / register site",
      description: (
        <>
          <p>In this challenge we'll create a login and register section that can be used in any site. We'll use the TailwindCSS and Motion to make a smooth animation and will simulate to log/sign it. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>Login / register site will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 15: Quiz Game",
      description: (
        <>
          <p>Using open trivial API we'll create a quiz game. We'll use the TailwindCSS and Motion to make a smooth animation and will simulate to log/sign it. I'll let up to 4 players to play and will be update the counter on each turn.</p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>Quiz Game will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 16: Drag and drop",
      description: (
        <>
          <p>In this challenge we'll create a drag and drop component. We'll use the TailwindCSS and Motion to make a smooth animation and will simulate to drag and drop it. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons, React Beautiful DnD</p>
        </>
      ),
      children: (
        <>
          <p>Drag and drop will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 17: Weekly weather cards",
      description: (
        <>
          <p>Using open weather API we'll create a meta card where will display the weather in the current day and the next 7 days. We'll use the TailwindCSS and Motion to make a smooth animation and will animate the weather icons and the temperature. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons, Axios</p>
        </>
      ),
      children: (
        <>
          <p>Weekly weather cards will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 18: Buttons Variants",
      description: (
        <>
          <p>In this challenge we'll create a huge set of different buttons using variants. We'll use the TailwindCSS and Motion to make a smooth animation on hover and active states.</p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>Buttons Variants will be here ...</p>
        </>
      ),
    },
    {
      title: "Day 19: Wizard form",
      description: (
        <>
          <p>In this challenge we'll create a wizard form. We'll use the TailwindCSS and Motion to make a smooth animation and will simulate to fill a form step by step. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons, React Hook Form</p>
        </>
      ),
      children: (
        <>
          <p>Wizard form will be here ...</p>
        </>
      ),
    },

    {
      title: "Day 23: BomBerm Game",
      description: (
        <>
          <p>In this challenge we'll create a BomBerm Game. We'll use the TailwindCSS and Motion to make a smooth animation and will simulate to play the game. </p>
          <p>Tools: React, TailwindCSS, SVG, Motion, Lucide Icons</p>
        </>
      ),
      children: (
        <>
          <p>BomBerm Game will be here ...</p>
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
