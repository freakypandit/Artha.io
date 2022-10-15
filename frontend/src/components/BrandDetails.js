import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AddApps from "./AddApps";


const BrandDetails = () => {
  // Add components in the component folder
   const LOCAL_STORAGE_KEY = "allBrands";
   const allBrands = (localStorage.getItem(LOCAL_STORAGE_KEY) !== '') ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [];

   let params = useParams();

   const retriveBrands = allBrands;
   console.log(retriveBrands);

   const brandDetail = retriveBrands[Number(params.tokenID)];

   const [ currentAccount, setCurrentAccount ] = useState("");
   
   const checkIfWalletIsConnect = async () => {
      // we have to check if we have access to window.ethereum

      try {
      const { ethereum } = window;
      if(!ethereum) {
         console.log("Make sure you have MetaMask!");
      } else {
         console.log("We have an ethereum Object", ethereum);
      }

      const accounts = await ethereum.request({method : "eth_accounts"});

      if(accounts.length !== 0) {
         const account = accounts[0];
         console.log("Found an authorized Account:", account);
         setCurrentAccount(account)
      } else {
         console.log("No authorized account found");
      }
      } catch (error) {
      console.log(error);
      }
   }

  useEffect(() => {
   checkIfWalletIsConnect();
 },[]);

  return (

   
   <div className="bg-gray-800">
      
      <header className="p-4 bg-gray-800 text-gray-100 lg:mb-10">
         <div className="container flex justify-between h-16 mx-auto">
            <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-green-400">
                     <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                  </svg>
                  <h2 className="px-15 py-6 lg:p-10 text-3xl font-semibold rounded bg-grey-800 text-green-400">Artha.io</h2>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex">
                  {currentAccount && (
                     <div className="px-8 py-3 font-semibold rounded bg-green-400 text-gray-900" >{currentAccount}</div>
                  )}
               
            </div>
            <button className="p-4 lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
            </button>
         </div>
      </header>

      <div className="bg-gray-800 text-gray-50 lg:pb-10 rounded-3xl">
         <div className="container grid grid-cols-12 mx-auto bg-gray-900 rounded-lg">
            <img src={brandDetail.tokenLogo} alt="" className="object-cover lg:p-10 lg:col-span-4 w-50 rounded-lg" />
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 ">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-400">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
               </svg>
               <h1 className="text-5xl font-semibold lg:mb-10">{brandDetail.tokenName}</h1>            
               <div className="flex justify-start">
                  <p className="flex-1 pt-2">{brandDetail.tokenDescription}</p>          
               </div>
            </div>
         </div>

         {currentAccount.toLowerCase() === brandDetail.owner.toLowerCase() && (
            <AddApps owner={brandDetail.owner} tokenID={brandDetail.tokenID}/>)}   

      </div>

      <footer className="py-6 bg-gray-900 text-gray-50 lg:mt-20">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
               <div className="grid grid-cols-12">
                  <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                           </svg>
                        </div>
                        <span className="flex items-center justify-center self-center text-2xl justify-center font-semibold">Artha.io</span>
   
                  </div>
               </div>
               <div className="grid justify-center pt-6 lg:justify-between">
                  <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                     <span>Built for Hackisitica'22</span>
                     <a rel="noopener noreferrer" href="#">
                        <span>Deepak Pandey</span>
                     </a>
                     <a rel="noopener noreferrer" href="#">
                        <span>Saurabh Kumar Pal</span>
                     </a>
                  </div>
                  <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                     <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                     </a>
                     <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                           <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                        </svg>
                     </a>
                     <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                           <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </footer>

         
   </div>

   );
};

export default BrandDetails;
