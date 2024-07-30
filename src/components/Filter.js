import React, { useState } from 'react';

function Filter({ filterData, selectedCategory, setSelectedCategory }) {

    const filterHandler = (title) => {
        setSelectedCategory(title);
    };

    return (
        <div className="text-center w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => (
                <button
                    key={data.id}
                    onClick={() => filterHandler(data.title)}
                    className={`text-lg px-4 py-2 rounded-md font-medium transition-all duration-300 ${selectedCategory === data.title ? "bg-opacity-60 border-white text-white bg-black" : "bg-opacity-40 border-transparent text-black bg-white"} border-2 hover:bg-opacity-50`} >
                    {data.title}
                </button>
            ))}
        </div>
    );
}

export default Filter;
