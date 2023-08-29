import React from 'react';

const Hero = () => {
 

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };
  return (
    <div className="relative overflow-hidden bg-hero-image bg-cover bg-no-repeat p-12 text-center" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={overlayStyle}>
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-3xl font-semibold lg:text-6xl">GPA and CGPA CALCULATER</h2>
            <h4 className="mb-6 text-xl font-semibold lg:text-3xl">By. Comsats.code</h4>
            <button
              type="button"
              className="rounded border-2 bg-[#000] border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition  ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 duration-150"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
