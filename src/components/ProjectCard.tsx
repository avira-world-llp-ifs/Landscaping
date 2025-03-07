// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';

// interface HoverEffectCardProps {
//     title: string;
//     description: string;
//     imageUrl: string;
// }

// const ProjectCard: React.FC<HoverEffectCardProps> = ({ title, description, imageUrl }) => {
//     const [hovered, setHovered] = useState(false);

//     return (
//         <div
//             className="relative w-80 h-96 overflow-hidden shadow-lg cursor-pointer"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {/* Background Image with Infinite Effect */}
//             <motion.div
//                 animate={{ scale: hovered ? 1.1 : 1 }}
//                 transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
//                 className="absolute inset-0"
//             >
//                 <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"  />
//             </motion.div>

//             {/* Overlay Effect on Hover */}
//             <motion.div
//                 initial={{ backgroundColor: 'rgba(255, 255, 0, 0)' }}
//                 animate={{ backgroundColor: hovered ? 'rgba(255, 255, 0, 0.8)' : 'rgba(255, 255, 0, 0)' }}
//                 transition={{ duration: 0.4 }}
//                 className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
//             >
//                 {/* Title - Fades in First */}
//                 <motion.h3
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
//                     transition={{ duration: 0.4, delay: 0.1 }}
//                     className="text-black text-xl font-bold"
//                 >
//                     {title}
//                 </motion.h3>

//                 {/* Description - Fades in Second */}
//                 <motion.p
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
//                     transition={{ duration: 0.4, delay: 0.3 }}
//                     className="text-black mt-2"
//                 >
//                     {description}
//                 </motion.p>

//                 {/* Learn More Button */}
//                 <motion.button
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
//                     transition={{ duration: 0.4, delay: 0.5 }}
//                     className="mt-4 px-4 py-2 bg-black text-yellow-300 rounded-full hover:bg-gray-800"
//                 >
//                     Learn More
//                 </motion.button>
//             </motion.div>
//         </div>
//     );
// };

// export default ProjectCard;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css'; // Import the CSS module

interface HoverEffectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<HoverEffectCardProps> = ({ title, description, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image with Infinite Effect */}
      <motion.div
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute inset-0"
      >
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        <motion.h3
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: hovered ? -20 : 0, opacity: hovered ? 0 : 1 }}
          className={`${styles.fronttitle}`}
          dangerouslySetInnerHTML={{ __html: title }}
        >

        </motion.h3>
      </motion.div>

      {/* Overlay Effect on Hover */}
      <motion.div
        initial={{ backgroundColor: 'rgba(255, 255, 0, 0)' }}
        animate={{ backgroundColor: hovered ? 'rgba(251, 199, 16, 0.8)' : 'rgba(255, 255, 0, 0)' }}
        transition={{ duration: 0.3 }}
        className={`${styles.overlay} absolute inset-0 flex flex-col items-center justify-center text-center px-4`}
      >
        {/* Title - Fades in First */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`${styles.title} text-black text-xl font-bold`}
          dangerouslySetInnerHTML={{ __html: title }}
        >

        </motion.h3>

        {/* Description - Fades in Second */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-black mt-2"
        >
          {description}
        </motion.p>

        {/* Learn More Button */}
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
          //   transition={{ duration: 0.4, delay: 0.5 }}
          className={`${styles.learnMoreButton} mt-4 px-4 py-2 bg-black text-yellow-300  hover:bg-gray-800`}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
