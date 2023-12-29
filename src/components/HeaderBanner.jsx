import React from 'react';
import ButtonPlaystore from '../assets/ButtonPlaystore.png';
import ButtonAppsStore from '../assets/ButtonAppsStore.png';
import MockupImage from '../assets/SpaceGray.png';

const HeaderBanner = () => {

    const handleButtonClick = (store) => {
        
      };

    return (
        <div className="bg-[#FAFAFA] p-4 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left side */}
          <div className="lg:w-1/2 lg:pr-8 lg:ml-[165px]">
            <p className="text-zinc-800 text-sm font-bold font-inter mb-4 opacity-80">
              Kamu laper atau haus?
            </p>
            <h1 className="text-zinc-800 text-2xl lg:text-5xl font-bold font-inter leading-16 mb-10">
              Tenang... ada Hangry! yang siap mengatasi
            </h1>
            <div className="flex gap-6"> {/* Added gap-6 class */}
            <a
              href="#"
              onClick={() => handleButtonClick('Google Play')}
              className="hidden lg:flex mr-6 lg:w-auto"
            >
              <img src={ButtonPlaystore} alt="Google Play" />
            </a>
            <a
              href="#"
              onClick={() => handleButtonClick('App Store')}
              className="lg:w-auto"
            >
              <img src={ButtonAppsStore} alt="App Store" />
            </a>
          </div>
          </div>
  
          {/* Right side */}
          <div className="hidden lg:flex lg:w-1/2 mt-8 lg:mt-[72px] lg:ml-auto justify-center">
            <img
              src={MockupImage}
              alt="Mockup"
              className="w-1/2 lg:w-auto lg:h-auto"
            /> {/* Added width and height classes */}
          </div>
        </div>
      </div>
  );
};

export default HeaderBanner;
