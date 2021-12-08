import styles from '../../home.module.scss'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



export function Wrapper(){
  const {ref, inView} = useInView()

  return(
    <motion.div animate={{opacity: inView ? 1 : 0 }} ref={ref} className={styles.hello}>
      <h1>
        Hello world
      </h1>
      <h2>
        Hello word
      </h2>
      <h2>
        Hello word
      </h2>
    </motion.div>
  )
}