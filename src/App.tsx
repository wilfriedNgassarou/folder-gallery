import { motion } from "motion/react"
import { useState } from "react"
import { Credits } from "./components/credits"

function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <Credits />
      <section
        onClick={() => setIsOpened(!isOpened)} 
        className="w-80 h-52 relative wrapper"
      >
        <div className="folder relative w-full h-full flex justify-center bg-red-500">
          <motion.img
            initial={{ rotate: 2, x: -35, y: 0 }}
            animate={{
              rotate: isOpened ? -6 : 2,
              x: isOpened ? -60 : -35,
              y: isOpened ? -80 : 0
            }} 
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
            className="absolute top-2 w-32 h-40 object-cover rounded-xl z-20 shadow-md" 
            src="/cards/1.webp" 
          />
          <motion.img
            initial={{ rotate: 2, x: 35, y: 0 }}
            animate={{
              rotate: isOpened ? 6 : 2,
              x: isOpened ? 60 : 35,
              y: isOpened ? -80 : 0
            }}
            transition={{ type: 'spring', duration: .5, bounce: .2 }}
            className="absolute top-2 w-32 h-40 object-cover rounded-xl z-10 shadow-md" 
            src="/cards/2.webp" 
          />
        </div>
        <motion.div
          initial={{ rotateX: -50, opacity: 0 }}
          animate={{ opacity: isOpened ? 1 : 0 }}
          transition={{ duration: .2, delay: isOpened ? .1 : 0 }}
          className=" absolute left-0 right-0 bottom-0 h-64 origin-bottom rounded-bl-3xl rounded-br-3xl"
          style={{
            background: 'linear-gradient(to top, rgba(239,68,68,0.6) 0%, rgba(255,255,255,0) 100%)'
          }}
        />

        <motion.div
          animate={{ rotateX: isOpened ? -60 : 0 }} 
          transition={{ type: 'spring', duration: .5, bounce: .2 }}
          className="absolute left-0 right-0 bottom-0 z-20 h-48 rounded-3xl bg-red-500 origin-bottom flex justify-center items-center"
          style={{ boxShadow: '0px -2px 10px rgba(0, 0, 0, .3)' }}
        >
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            className="w-40 h-40 fill-white/50"
            viewBox="0 0 24 24"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </motion.div>
      </section>
    </section>
  )
}

export default App