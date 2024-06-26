// eslint-disable-next-line no-unused-vars
import React from "react";

const Plan = () => {
    return (
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            {/* Left Side */}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg?auto=compress&cs=tinysrgb&w=600" alt="silla en la playa"/>
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/5972953/pexels-photo-5972953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sillas en la playa con palmeras"/>
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/19035549/pexels-photo-19035549/free-photo-of-disfruta-el-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mujer nadando con peces"/>
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/18054756/pexels-photo-18054756/free-photo-of-mar-playa-vacaciones-relajacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="tienda dentro del complejo"/>
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="playa cristalina"/>
            </div>
            {/* Right Side */}
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, saepe?</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod voluptatem natus fugit porro nemo, ipsa libero, officia sunt minima similique consequuntur doloribus accusantium illum incidunt dignissimos rem rerum laborum sint?</p>
                <div>
                    <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
                    <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan