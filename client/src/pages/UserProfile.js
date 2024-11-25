import React from "react";

function profile()
{
    return(

        <>
        {/* div as a body */}
    <div className="fixed inset-0 ">  

        <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-30 blur-3xl w-[400px] h-[400px] rounded-full top-10 left-10"></div>
        <div className="absolute bg-gradient-to-r from-darkNavyBlue to-neonMintGreen opacity-40 blur-3xl w-[500px] h-[500px] rounded-full top-1/2 right-10"></div>
        <div className="absolute bg-gradient-to-r from-neonMintGreen to-darkNavyBlue opacity-20 blur-3xl w-[450px] h-[450px] rounded-full bottom-10 left-1/3"></div>



        <h1 className=" ml-10px lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen to-PureWhite font-sans tracking-tight z-10">
        Mailer Account 
        </h1>


    </div>


        
        </>




    );




}

export default profile;