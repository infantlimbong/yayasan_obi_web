import React from 'react';

const Home = () => {
  return (
    <div className='md:pt-14'>
      <div className='md:w-1/2'>
        <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex gap-x-2">
          <button className='w-24 py-2 text-white font-semibold bg-red-600 rounded-sm hover:bg-opacity-70 transition-all duration-300'>Button</button>
          <button className='w-24 py-2 text-red-600 font-semibold bg-white border border-red-600 rounded-sm hover:bg-red-600 hover:text-white transition-all duration-300'>Button</button>
        </div>
      </div>

      <div className='mt-12'>
        <div>
          <h2 className='text-3xl font-semibold'>Lorem ipsum dolor sit.</h2>
          <p className='text-xl my-1'>Lorem, ipsum dolor.</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa!</p>
        </div>

        <div className="flex flex-wrap mt-6">
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
          <div className="basis-full sm:basis-1/3 text-center aspect-square grid place-items-center odd:bg-red-600/80 odd:text-white">
            <div>
              <h3 className='font-semibold text-xl'>Image/icon</h3>
              <p className='text-sm'>Title</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className='text-center'>
          <h2 className='text-3xl font-semibold'>Lorem ipsum dolor sit.</h2>
          <p className='text-xl my-1'>Lorem, ipsum dolor.</p>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam maiores odio sunt ullam amet consequatur.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <div className="basis-full h-60 sm:h-72 md:h-96 bg-red-200 flex items-center justify-center">
            <h3 className="text-2xl font-semibold">Image</h3>
          </div>
          <div className="basis-full flex-grow sm:basis-1/3 md:basis-1/4 h-60 bg-red-200 flex items-center justify-center">
            <h3 className="text-2xl font-semibold">Image</h3>
          </div>
          <div className="basis-full flex-grow sm:basis-1/3 md:basis-1/4 h-60 bg-red-200 flex items-center justify-center">
            <h3 className="text-2xl font-semibold">Image</h3>
          </div>
          <div className="basis-full flex-grow sm:basis-1/3 md:basis-1/4 h-60 bg-red-200 flex items-center justify-center">
            <h3 className="text-2xl font-semibold">Image</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
