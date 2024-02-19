import { useEffect, useState } from "react";
import { moveToLeft, moveToRight } from "./utils/Coursel";

export default function Component() {

    const [slider, setSlider] = useState("");

    useEffect(() => {
        setSlider(document.getElementById("slider"));

    }, []);

    return (
        <div>
            <button onClick={() => { moveToLeft(slider) }} id="left-btn">Left</button>
            <div id="viewer" className="w-[400px] h-[200px] border-2 border-white overflow-hidden">
                <div id="slider" className="flex">
                    <div className="w-[400px] h-[200px] flex-shrink-0 bg-red-500"></div>
                    <div className="w-[400px] h-[200px] flex-shrink-0 bg-green-500"></div>
                    <div className="w-[400px] h-[200px] flex-shrink-0 bg-blue-500"></div>
                    <div className="w-[400px] h-[200px] flex-shrink-0 bg-purple-500"></div>
                </div>
            </div>
            <button onClick={() => { moveToRight(slider) }}>Right</button>
        </div>
    )
}