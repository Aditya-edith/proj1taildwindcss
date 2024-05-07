// import React from "react";

// const Body = () => {
//   return (
//     <div className="lg:space-y-20 lg:flex  " >
//       <div><img src="./assets/image2.png" alt="" className=" lg:h-[400px] h-78 md:h-86 lg:flex-1 asolution-center justify-center"  /></div>
//       {/* <div className="flex items-center justify-center ">
//         <img
//           src="./assets/Blue-Shape.svg"
//           alt="1st"
//           className="-rotate-45 h-64 md:h-72"
//         />
//         <img
//           src="./assets/Pink-Shape.svg"
//           alt="2nd"
//           className="absolute -rotate-[30deg] h-64 md:h-72"
//         />
//         <img
//           src="./assets/Purple-Shape.svg"
//           alt="3rd"
//           className="absolute -rotate-[15deg] h-64 md:h-72"
//         />
//         <img
//           src="./assets/Hero-Model.png md:h-72"
//           alt="hero" 
//           className="absolute h-64 md:h-72"
//         />
//       </div> */}
//       <div className="lg:flex-1 justify-center items-center">
//         <h1 className="text-5xl font-bold font-playfair leading-tight ">
//           Host your website in less than 5 minutes
//         </h1>
//         <p className="font-lato text-gray-400">
//           With, Hoster get your website up and running in no time and with the
//           most affordable prices
//         </p>
//         <form action="" className="flex flex-col gap-4 md:flex-row">
//           <input
//             type="email "
//             placeholder="Enter your email"
//             className="h-14 rounded-md px-4 py-3 placeholder:text-gray-400"
//           />
//           <button className="h-14 bg-blue-400 hover:bg-blue-600 text-white  rounded-md px-4 py-3">
//             Join Waitlist
//           </button>
//         </form>
//         <div className="flex gap-2">
//           <img src="./assets/Checkmark.svg" alt="check" className="py-2" />
//           <p className="font-lato text-gray-400">
//             No spam ever, Unsubscribe anyime
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;


import React from "react";

const Body = () => {
  return (
    <div className="lg:space-y-20 lg:flex  items-center justify-center">
      <div>
        <img
          src="./assets/image2.png"
          alt=""
          className="lg:h-96 h-78 md:h-86 lg:flex-1 object-cover"
        />
      </div>
      <div className="lg:flex-1 justify-center items-center text-center lg:text-left lg:pl-10">
        <h1 className="text-5xl font-bold font-playfair leading-tight mb-4">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400 mb-4">
          With Hoster, get your website up and running in no time and with the
          most affordable prices
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 rounded-md px-4 py-3 placeholder:text-gray-400"
          />
          <button className="h-14 bg-blue-400 hover:bg-blue-600 text-white rounded-md px-4 py-3">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 mt-4">
          <img src="./assets/Checkmark.svg" alt="check" className="py-2" />
          <p className="font-lato text-gray-400">
            No spam ever, Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;

