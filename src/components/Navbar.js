import React, {useState} from 'react';
import '../css/tailwindcss.css';
import { Button } from 'react-bootstrap';


function Navbar(){
    const[toggle,setToggle] =useState(false);
    const[drop,setDrop] =useState(false);
    const[clicks,setClicks]=useState(0)
    const[small,setSmall]=useState(true)
     const handeToggle=()=>{
       if(clicks===0){
         setToggle(true);
         setDrop(false);
         setClicks(1);
       }
       else{
         setToggle(false);
         setClicks(0);
       }
       setToggle(true);
       setDrop(false);
     }
     const solutionHandle=()=>{
       setDrop(true);
       setToggle(false);
     }
     const handleClick=()=>{
       if(clicks===0){
         setToggle(false);
         setDrop(false);
         setSmall(true);
         setClicks(1);
       }else{
         setToggle(false);
         setSmall(false);
         setDrop(false);
         setClicks(0);
       }
     }
      return(
          <>
    
  <div className="relative bg-white shadow-sm">
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <a href="#" className="flex">
            <img className="w-auto h-8 sm:h-10"/>
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
            
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden space-x-5 md:flex">
          <div className="relative">
          </div>
  
          <a href="/About" className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
            About-Us
          </a>
          <a href="/Help" className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
            Help-us
          </a>
  
          <div className="relative">
            
          </div>
        </nav>
        <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
          <span className="inline-flex rounded-full shadow-sm">
            <a href="/Sign-up" className="rounded-full inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 hover:no-underline focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
              Start Transfer
            </a>
          </span>
        </div>
      </div>
    </div>
  
    {small?
    <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
      <div className="rounded-lg shadow-lg">
        <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
          <div className="px-5 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img className="w-auto h-8"/>
              </div>
              <div className="-mr-2">
                <button type="button"onClick={()=>setSmall(false)} className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                  
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid gap-y-8">
                <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    About-us
                  </div>
                </a>
                
                <a href="#" className="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Help-Us
                  </div>
                </a>
                
              </nav>
            </div>
          </div>
          <div className="px-5 py-6 space-y-6">
            <div className="space-y-6">
              <span className="flex w-full rounded-md shadow-sm">
                <a href="/Sign-up" className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                  Sign up
                </a>
              </span>
              <p className="text-base font-medium leading-6 text-center text-gray-500">
                Existing customer?
                <a href="/Sign-in" className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    :<span></span>}
  </div>
        
          </>
      )
  }
  export default Navbar;
