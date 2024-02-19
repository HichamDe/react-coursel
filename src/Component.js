import { useEffect, useState } from "react";
import { moveToLeft, moveToRight } from "./utils/Coursel";

export default function Component() {

    const [slider, setSlider] = useState("");

    useEffect(() => {
        setSlider(document.getElementById("slider"));

    }, []);

    return (
        <div>

            <div id="viewer" class="w-[400px] h-[200px] border-2 border-white overflow-hidden">
                <div id="slider" class="flex">
                    {/* <!-- Item 1 --> */}
                    <img src="/imgs/m1.jpg" class="w-[400px] h-[200px] flex-shrink-0" alt="..." />
                    {/* <!-- Item 2 --> */}
                    <img src="/imgs/m2.jpg" class="w-[400px] h-[200px] flex-shrink-0" alt="..." />
                    {/* <!-- Item 3 --> */}
                    <img src="/imgs/m3.jpg" class="w-[400px] h-[200px] flex-shrink-0" alt="..." />
                    {/* <!-- Item 4 --> */}
                    <img src="/imgs/m4.jpg" class="w-[400px] h-[200px] flex-shrink-0" alt="..." />
                </div>

                <button onClick={() => { moveToLeft(slider) }} type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={() => { moveToRight(slider) }} type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div >
    )
}