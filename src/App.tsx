import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { motion } from 'framer-motion'
import { useInView, InView } from 'react-intersection-observer'
import styles from './home.module.scss'
import { Wrapper } from './components/Wrapper'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView, entry } =useInView()

  return(
    <>
    <div className={styles.mostrar} >
      ola
    </div>
     <Wrapper />
    </>
  )
}

export default App

 {/* 
    <motion.div animate={{transform: isVisible ? "scale(1)" : "scale(0)"}}>
      <h1>Hello world</h1>
    </motion.div>
    <button onClick={()=> setIsVisible(!isVisible)}>Open</button>
    <motion.button whileHover={{scale: 1.1}}>
      Hello Button
    </motion.button> 
  */}