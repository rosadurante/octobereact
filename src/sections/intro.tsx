import { Section } from '../components/section'

export const Intro = () => {

  const title = '31-Day React + TailwindCSS Challenge'
  const description = (
    <>
      <p>Welcome! 🚀 Over the next <b>31 days</b>, you will tackle daily <b>coding challenges</b> designed to sharpen your <b>ReactJS and TailwindCSS</b> skills.
        Each challenge is mid-level, interactive, and can be completed in few hours, covering everything from state management (useState, Context API, Redux, Zustand)
        to responsive layouts, animations, and SVG interactions.</p>
      <p>By the end of the month, you will see a portfolio-ready collection of mini-projects demonstrating the ability to build polished, modern, and interactive web interfaces.
        Dive in, code daily, and watch these skills grow!</p>
    </>
  );

  return (
    <Section 
      title={title}
      description={description}>
      <p>Let's dive in!</p>
    </Section>
  )
}