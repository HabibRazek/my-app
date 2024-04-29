"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Container = () => {
    const containerDimensions = {
        length: 1219, // in cm
        width: 244, // in cm
        height: 259, // in cm
    };

    const [cartonDimensions, setCartonDimensions] = useState({
        length: 0,
        width: 0,
        height: 0,
    });

    const [totalCartons, setTotalCartons] = useState(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCartonDimensions({
            ...cartonDimensions,
            [e.target.name]: parseFloat(e.target.value) || 0,
        });
    };

    const calculateCartons = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const numLength = Math.floor(containerDimensions.length / cartonDimensions.length);
        const numWidth = Math.floor(containerDimensions.width / cartonDimensions.width);
        const numHeight = Math.floor(containerDimensions.height / cartonDimensions.height);
        setTotalCartons(numLength * numWidth * numHeight);
    };

    return (
        <div className="flex justify-center items-center mt-14">
            <div className="p-8 bg-white shadow-xl w-7/12 rounded-lg">
                <h1 className="text-xl font-bold text-center mb-6">Container Space Calculator</h1>
                <form onSubmit={calculateCartons} className="space-y-4">
                    <div>
                        <input 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number" 
                            name="length" 
                            placeholder="Length (cm)" 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <input 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number" 
                            name="width" 
                            placeholder="Width (cm)" 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <input 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number" 
                            name="height" 
                            placeholder="Height (cm)" 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <button 
                        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Calculate
                    </button>
                </form>
                {totalCartons > 0 && (
                    <p className="mt-6 text-center text-lg">
                        You can fit <span className="font-bold">{totalCartons}</span> cartons in the container.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Container;
