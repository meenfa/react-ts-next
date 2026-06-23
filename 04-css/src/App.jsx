import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
    const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    intro: 'Fast support whenever you need assistance.',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    intro: 'Friendly experts ready to solve your issues.',
    tag: 'Not Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    intro: 'Building trust through exceptional customer care.',
    tag: 'Unsatisfied'
  }

];
  return (
  <div>
    <Section1 users={users}/>
    <Section2/>
  </div>
  )
}

export default App
