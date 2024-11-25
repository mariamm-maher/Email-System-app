import React from "react";



 function HomePage(){

    return(
        <>

        {/* =======================NAVBAR===========================  */}
        <nav class="fixed top-0 z-50 w-full bg-white bg-opacity-80 dark:bg-darkNavyBlue dark:border-gray-700">
    <div class="absolute inset-x-0 top-[-80px] h-full bg-gradient-to-r from-darkNavyBlue to-neonMintGreen blur-2xl -z-10"></div>

    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <a href="#" class="flex ms-2 md:me-24">
                    <span class="self-center text-xl font-semibold sm:text-3xl whitespace-nowrap text-neonMintGreen">
                        Mailer
                    </span>
                </a>
            </div>

            <form class="relative max-w-md w-full mx-4 lg:mx-auto">
                <div class="absolute left-[-350px] top-[-16px] w-full max-w-md">
                    <div class="relative max-w-md w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" 
                               class="block w-full py-2 px-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-neonMintGreen focus:border-neonMintGreen dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-neonMintGreen" 
                               placeholder="Search for emails" required />
                        <button class="text-white absolute end-2.5 bottom-2  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </form>

            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <div>
                        <a href="#" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                            <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

{/* ========================================================================================================================================================== */}

{/* ================================================SIDEBAR======================================================= */}

<div className="flex">

    
 <aside id="logo-sidebar" class=" w-1/6 fixed top-0 left-0  h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 dark:bg-darkNavyBlue " aria-label="Sidebar">

   <div class="relative">
   <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-20 blur-2xl -z-10"></div>

<ul class="space-y-2 font-medium">
  
  <li>
  
  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-br from-neonMintGreen to-darkNavyBlue group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">

  <span class="relative px-5 py-2.5 flex items-center gap-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
  <svg class="flex-shrink-0 w-5 h-5 -ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
  <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
  </svg>
  Compose
  </span>
  </button>
  </li> 

   <li>
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 512 512">
          <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32L121 32zm0 64l270 0 48 192-51.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L73 288 121 96z"/>
      </svg>
         <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
         {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>  */}
       </a>
   </li> 
  <li>
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
          <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
      </svg>
         
         <span class="flex-1 ms-3 whitespace-nowrap">Starred</span>
      </a>
   </li>

   <li>
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"> 
      <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
      </svg>
         <span class="flex-1 ms-3 whitespace-nowrap">sent</span>
      </a>
   </li>
   <li>

      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
          <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/>
      </svg>
         <span class="flex-1 ms-3 whitespace-nowrap">Drafts</span>
      </a>
   </li>
   <li>
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </svg>
         
         <span class="flex-1 ms-3 whitespace-nowrap">Spam</span>
      </a>
   </li>
   <li>
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"> 
      <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
      </svg>
         
         <span class="flex-1 ms-3 whitespace-nowrap">Trash</span>
        
      </a>
   </li>

    </ul>
   <ul class="fixed bottom-0 left-0  space-y-2 font-medium">
    <li>
    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
      </svg>
           
           <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
          
        </a>
    </li>

    <li>
    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </svg>
         
         <span class="flex-1 ms-3 whitespace-nowrap">Help</span>
        
    </a>
    </li>
    
    
    </ul> 

    </div>  

</aside> 
{/* ========================================================================================================================================================== */}


{/* ========================================================Emails=========================================================================*/}

 <div class=" w-5/6 sm:ml-64 ">
    <div class="p-4  mt-14 ">
      
      
    <ul class="w-full  divide-y divide-gray-200 dark:divide-gray-700">
   
    <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div >
            <ul class="grid grid-cols-2 gap-1">
                <li class="flex items-center p-3">

                    <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                </li>

                <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                </svg>
                </a>
                </li>
            </ul>
        </div>

         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Neil Sims
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Neil@mailer.com
            </p>
         </div>
         <div class=" text-base font-semibold text-gray-900 dark:text-white">
            <ul class="inline-flex gap-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                    </a>
                
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </a>
                
                </li>
                
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
         </div>

      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div >
        <ul class="grid grid-cols-2 gap-1">
            <li class="flex items-center p-3">
              <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

            </li>

            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                    </svg>
                </a>
            </li>
        </ul>
        </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Bonnie Green
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Bonnie@mailer.com
            </p>
         </div>
         <div class=" text-base font-semibold text-gray-900 dark:text-white">
            <ul class="inline-flex gap-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                    </a>
                
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </a>
                
                </li>
                
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div >
            <ul class="grid grid-cols-2 gap-1">
            <li class="flex items-center p-3">

<input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

</li>

                <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                </svg>
                </a>
                </li>
            </ul>
        </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Michael Gough
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Michael@mailer.com
            </p>
         </div>
         <div class=" text-base font-semibold text-gray-900 dark:text-white">
            <ul class="inline-flex gap-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                    </a>
                
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </a>
                
                </li>
                
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div >
        <ul class="grid grid-cols-2 gap-1">
            <li class="flex items-center p-3">
                <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

            </li>

            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                    </svg>
                </a>
            </li>
        </ul>
        </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Thomas Lean
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               Thomas@mailer.com
            </p>
         </div>
         <div class=" text-base font-semibold text-gray-900 dark:text-white">
            <ul class="inline-flex gap-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                    </a>
                
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </a>
                
                </li>
                
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
         </div>
      </div>
   </li>
   <li class="pt-3 pb-0 sm:pt-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div >
        <ul class="grid grid-cols-2 gap-1">
            <li class="flex items-center p-3">
                <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </li>

            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                    <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                </svg>
                </a>
            </li>
        </ul>
        </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
               Lana Byrd
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
               Lana@mailer.com
            </p>
         </div>
         <div class=" text-base font-semibold text-gray-900 dark:text-white">
            <ul class="inline-flex gap-2">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                        </svg>
                    </a>
                
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"> 
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>
                    </a>
                
                </li>
                
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
         </div>
      </div>
   </li>
    </ul>


      </div>
   </div>
</div>  
        
        </>)
    
    
    }
export default HomePage;








