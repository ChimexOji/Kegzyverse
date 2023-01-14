'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>
          Track friends around you and invite them to play together in the same world
        </>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]"
        >
          <img 
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]"
        >
          <img 
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full
        bg-[#5d6680]"
        >
          <img 
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-8 right-[320px] w-[180px] h-[132px] p-1.5 rounded-2xl
        bg-[#394770]"
        >
          <img 
            src="hawk-lab.png"
            alt="people"
            className="relative w-full h-full rounded-2xl"
          />

          <div className='text-white w-full absolute bottom-0 left-0 p-2.5'>
            <div class="mb-1 text-xs">
              +264 has joined
            </div>

            <div class="font-semibold">
              Hawkins Labs
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 left-[20%] w-[230px] h-[168px] p-[6px] rounded-2xl
        bg-[#7A4988]"
        >
          <img 
            src="upside-down.png"
            alt="people"
            className="relative w-full h-full rounded-2xl"
          />

          <div className='text-white w-full absolute bottom-0 left-0 p-2.5'>
            <div class="mb-1 text-xs">
              +269 has joined
            </div>

            <div class="font-semibold">
              The Upside Down
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;