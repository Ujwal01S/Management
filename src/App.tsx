import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import { loginPath } from "./components/helpers/routePaths";
import { TextWithMerge } from "./components/tailwindMerge/textWithMerge";
import { Tag } from "./components/cva/tag";
import { Button } from "./components/cva/button";
import { demo_typeFor as demoData } from "./json_data/demo_card.json";
import { DemoCard } from "./card/demoCard";
import { BeforeAfter } from "./components/beforeAfter/beforeAfter";
import { DonwloadDemo } from "./components/download/donwload";
import { TanstackTableDemo } from "./components/tanstackTable/tanstackTable";



function App() {
  return (
    <> 
      <TanstackTableDemo />
    </>
  
    // {/* <div className="flex flex-col justify-center items-center py-4 gap-8">
    //   <TextWithMerge className="text-red-700 text-2xl">water</TextWithMerge>

    //   <Tag tagType="setup" className="w-fit px-10">
    //     Fire
    //   </Tag>

    //   <Button size="small" color="primary">
    //     CVA BUTTON
    //   </Button>
    //   <DemoCard demoData={demoData} />

    //   <Button size={"large"} color={"danger"} className="text-center">
    //     New button
    //   </Button>

    //   <button className="hover:text-green-700 ring-2 ring-blue-700 focus:text-red-700 border-2 px-10 py-6">
    //     <svg
    //       width="10"
    //       height="6"
    //       viewBox="0 0 8 4"
    //       className="fill-current inline"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M6.79289 2.96927e-07L1.20711 5.27643e-08C0.761654 3.3293e-08 0.53857 0.53857 0.853552 0.853552L3.64645 3.64645C3.84171 3.84171 4.15829 3.84171 4.35355 3.64645L7.14645 0.853554C7.46143 0.538571 7.23835 3.16398e-07 6.79289 2.96927e-07Z"
    //         className=""
    //       />
    //     </svg>
    //   </button>

    //   <span className="hover:text-red-800 flex items-center justify-center group  w-96 h-10 border-2">
    //     asdf
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="#FFFFFF"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="inline text-white fill-current stroke-current group-hover:text-blue-900"
    //     >
    //       <path
    //         d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    //         stroke="#030013"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         fill="#FFFFFF"
    //         className="fill-current"
    //       />
    //     </svg>
    //   </span>

    //   <div>
    //     <ul className="flex flex-row items-center justify-center gap-5 flex-wrap text-subheadline text-brand-text-secondary">
    //       <li className="relative list-none before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:h-2 before:w-2 before:bg-[#FF73BA] border-r border-brand-neutrals-stroke mr-2 px-2">
    //         Male
    //       </li>

    //       <li className="px-2 relative list-none before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:h-2 before:w-2 before:bg-[#FFCB33]">
    //         Female
    //       </li>
    //     </ul>
    //     <p className="px-2 relative list-none before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full  before:bg-[#FFCB33] before:h-2 before:w-2">New Color</p>
    //   </div>

    //   {/* <BeforeAfter /> */}
    //   <DonwloadDemo />
    // </div> */}

    
  );
}

export default App;
