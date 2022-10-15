import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork, useSignMessage } from 'wagmi';
import Header from "./Header";

/*
{!currentAccount && (
   <button className="px-8 py-3 font-semibold rounded bg-green-400 text-gray-900" onClick={connectWallet}>Connect with Wallet</button>
)}

{currentAccount && (
   <div className="px-8 py-3 font-semibold rounded bg-gray-800 text-green-400" >{currentAccount}</div>
)}
*/
const Home = () => {

   const history = useHistory();

   const toMintBrandPage = () => {
      history.push("/mint-brand");
   }

   const toBrandPage = () => {
      history.push("/brands");
   }
   // Render Methods
   const { address, isConnected } = useAccount();

   /*
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

  const connectWallet = async () => {
    try{
      const{ ethereum } = window;

      if(!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  
   */
  useEffect(() => {},[address]);
 

  // Render Methods
   return (
      <div className="bg-gray-800">
         <Header/>
         <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
               <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-5xl font-bold leading-none sm:text-6xl">Bring your Brand to
                     <span className="text-green-400"> Web3</span> with us
                  </h1>
                  <p className="mt-6 mb-8 text-lg sm:mb-12">One click dApp marketplace for digital brands
                     
                  </p>
                  <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                     {isConnected && (
                        <div className="flex flex-row space-x-4">
                           <button type="button" className="px-8 py-3 justify-right font-semibold rounded-full bg-green-400 text-gray-800" onClick={toMintBrandPage}>Mint My Brand</button>
                           <button type="button" className="px-8 py-3 justify-right font-semibold rounded-full bg-gray-400 text-gray-800" onClick={toBrandPage}>All Brands</button>
                        </div>
                     )}   
                  </div>
               </div>
               <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src="assets/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:mr-40 lg:h-96 xl:h-112 2xl:h-128" />
               </div>
            </div>
         </section>

         <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
               <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-green-400 text-gray-900">
                  <div className="flex space-x-2 sm:space-x-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                     </svg>
                     <div className="space-y-2">
                        <p className="text-lg font-medium leading-snug">Create unique NFT for your Brand</p>
                        <p className="leading-snug">Enter the world of decentralized world by minting your unique NFT</p>
                     </div>
                  </div>
                  <div className="flex space-x-2 sm:space-x-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                     </svg>
                     <div className="space-y-2">
                        <p className="text-lg font-medium leading-snug">Add Web3 plugins to your digital brand</p>
                        <p className="leading-snug">Choose from our web3 apps, and add them to your business, you will be the owning these apps, no strings attached.</p>
                     </div>
                  </div>
                  <div className="flex space-x-2 sm:space-x-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                     </svg>
                     <div className="space-y-2">
                        <p className="text-lg font-medium leading-snug">Bring your customers to Web3</p>
                        <p className="leading-snug">Create better customer relations with the power of decentralized network.</p>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 xl:w-3/5 bg-gray-800">
                  <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                     <img src="https://techiia.com/assets/images/6131554beef00/nft_1320x742.jpeg" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
                  </div>
               </div>
            </div>
         </section>


         <footer className="py-6 bg-gray-900 text-gray-50 lg:mt-20">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
               <div className="grid grid-cols-12">
                  <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                     <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
                              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                           </svg>
                        </div>
                        <span className="flex items-center justify-center self-center text-2xl justify-center font-semibold">Artha.io</span>
                     </a>
                  </div>
               </div>
               <div className="grid justify-center pt-6 lg:justify-between">
                  <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                     <span>Built for Hackistica'22</span>
                     <a rel="noopener noreferrer" href="#">
                        <span>Deepak Pandey</span>
                     </a>
                     <a rel="noopener noreferrer" href="#">
                        <span>Saurabh Kumar Pal</span>
                     </a>
                  </div>
                  <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                     <a rel="noopener noreferrer" href="https://github.com/freakypandit/artha" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-gray-900">
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

export default Home;
