import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <div id='hero'></div>
      <div id='overview'>
        <div>
          <button onClick={document.getElementById('about')?.scrollIntoView({behavior: "smooth"})}>about</button>
          <button onClick={document.getElementById('projects')?.scrollIntoView({behavior: "smooth"})}>projects</button>
        </div>
      </div>
      <div id='about'></div>
      <div id='projects'></div>
    </div>
  )
}
