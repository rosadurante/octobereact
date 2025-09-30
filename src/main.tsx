import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex align-center justify-center items-center flex-col h-screen mx-auto'>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </div>
  </StrictMode>,
)
