'use client';

import Link from "next/link"



export default function FormSamples() {
    return (
        <div>

<p>
  I’m Derek, an astro-engineer based in Tatooine. I like to build X-Wings at
  <a href="#" className="underline decoration-sky-500 decoration-2">My Company, Inc</a>. Outside of work, I
  like to <a href="#" className="underline decoration-pink-500 decoration-dotted decoration-2">watch pod-racing</a>
  and have <a href="#" className="underline decoration-indigo-500 decoration-wavy decoration-2">light-saber</a>
  fights.
</p>

<button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button className="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
<br/>
            <Link className="bg-teal-500 text-black rounded-md" href={"/dashboard"}> Home</Link>


            <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
                Hello World
            </div>
            <div className="bg-blue-500 group ...">
                <p className="text-blue-300 group-hover:text-white">Click for more</p>
            </div>

            <button className="text-white font-semibold bg-blue-500 hover:bg-blue-700
         border-blue-700 border-b hover:border-indigo-900 
         transition-all px-6 py-2 rounded-full">
                Hello World
            </button>

            <div>
                <form className="m-4 flex">
                    <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com" />
                    <button className="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                </form>
            </div>


            <div className="max-w-2xl mx-auto">
                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form>
            </div>
        </div>
    );
}
