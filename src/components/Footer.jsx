// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="  w-full text-gray-500 p-4 lg:position-relative lg:bottom-0 lg:left=0">
//       <div className="container mx-auto flex justify-between">
//         <li className="flex gap-4 bottom-0">
//         <a
//           href="https://www.instagram.com/aditya_sanwal1/"
//           className="hover:text-teal-600 font-bold font-playfair"
//         >
//           Instagram
//         </a>
//         <a
//           href="https://github.com/Aditya-edith"
//           className="hover:text-teal-600 font-bold font-playfair"
//         >
//           Github
//         </a>
//         </li>
      
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full text-gray-500 p-4 lg:position-fixed lg:bottom-0 lg:left=0 bg-white">
//       <div className="container mx-auto flex justify-between">
//         <ul className="flex gap-4 items-center">
//           <li>
//             <a
//               href="https://www.instagram.com/aditya_sanwal1/"
//               className="hover:text-teal-600 font-bold font-playfair"
//             >
//               Instagram
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://github.com/Aditya-edith"
//               className="hover:text-teal-600 font-bold font-playfair"
//             >
//               Github
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react'

const Footer = () => {
  return (
    
      <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>

        <li>
          <a  href="#">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/aditya_sanwal1/">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/Aditya-edith">Github</a>
        </li>
      </ul>
        <div className='flex gap-2'>
          <img src="./assets/Help-Avatar.svg" alt="lg" />
           <div >
            <p className='font-playfair font-thin'>Have any Questions?</p>
            <a href="#" className='font-lato font-medium'>Talk to a specialist!</a>
           </div>
        </div>
      </div>
    
  )
}

export default Footer