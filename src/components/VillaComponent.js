import React from 'react';

const VillaComponent =( { villa: {name, logo, isNew, featured, isUrl, postedAt, bedroom, price, location} } ) => (
    <div className="flex flex-col bg-white shadow-md my-16 mx-10 p-5 rounded-md border-l-4 border-green-500 border-solid 
    sm:flex-row sm:my-5">
    <div>
            <img className="-mt-16 mb-4 w-20 h-20 sm:w-24 sm:h-24 sm:my-0" src={logo} />
        </div>
        <div className="flex flex-col justify-between ml-4">
            <h3>
                {isNew && <span className="font-bold bg-green-500 text-green-100 py-1 px-2 rounded-full uppercase text-sm">New</span>}
                {featured && <span className="font-bold text-green-500 bg-green-100 ml-5 py-1 px-2 rounded-full uppercase text-sm">Featured</span>}
            </h3>
            <h2 className="font-bold text-xl font-sans my-2">{name}</h2>
            <p className="text-gray-600 text-sm font-mono">
                {postedAt} · {bedroom} · {location} · <a className="font-bold text-blue-500" target="_blank" href ={isUrl}> learn more </a> 
            </p>
        </div>
        <div className="flex items-center mt-4 mx-4 pt-4 border-t-2 border-gray-200 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
           <span className="text-green-500 bg-green-100 font-bold mr-4 p-2 rounded"> {price} </span>
        </div>
    </div>
);
export default VillaComponent;