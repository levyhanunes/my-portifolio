import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import AboutImage from '../public/about-img.jpeg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.div
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <Image className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h95 xl:w-[500px] xl:h-[600px]' src={AboutImage} alt={'About section image'} />
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odit reiciendis labore sit nam magnam exercitationem, laudantium sapiente blanditiis accusantium ut laboriosam numquam deserunt delectus vel, modi ex reprehenderit voluptatibus!</p>
        </div>
    </motion.div>
  )
}