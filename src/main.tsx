import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Intro } from './sections/intro'
import { Challenges } from './components/challenges'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className='flex align-center justify-center items-center flex-col h-screen overflow-hidden mx-auto'>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div> */}
    <Intro />
    <Challenges />
  </StrictMode>,
)
