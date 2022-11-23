import React from "react";
import {Link} from "react-router-dom";
export default function Directory () {
 return (
    <>
   
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">

            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">S</span>
  </div>
</div>
             <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Sahithya
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Software Developer</p>
                <p class="text-base text-gray-400 font-normal">Sahithya@gmail.com</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">

            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">S</span>
  </div>
  </div>
  <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Sukanya
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Software Develper</p>
                <p class="text-base text-gray-400 font-normal">sukanya@gmail.com</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">
            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">J</span>
  </div>
  </div>
  <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Jade Bardley
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                <p class="text-base text-gray-400 font-normal">Jade@gmail.com</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">

            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">D</span>
  </div>
  </div>
  <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Dany Bailey
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                <p class="text-base text-gray-400 font-normal">Dany@gmail.com</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">


            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">L</span>
  </div>
  </div>
  <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Lucy Carter
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                <p class="text-base text-gray-400 font-normal">licky@gmail.com</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
            </div>
            <div class="text-center">

            <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">J</span>
  </div>
  </div>
  <div>
                <Link to="/employee" class="text-xl text-gray-700 font-bold mb-2">
                      Jade Bradley
                    </Link>
                  </div>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                <p class="text-base text-gray-400 font-normal">Bradley@gmail.com</p>
            </div>
        </div>
    </div>
</section>










    </>
 )
}
