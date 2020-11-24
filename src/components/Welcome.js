import React, { useState } from 'react';
import  '../css/tailwindcss.css';

function Welcome() {
    return(
        <>
        <div className="flex flex warp">
            <div className="w-full m:w-1/6 bg-red-600">
                <p>Welcome</p>
            </div>
            <div className="w-full m:w-5/6 bg-blue-600">
                <h1>welcome aina</h1>

            </div>
        </div>

        </>
    )
}
export default Welcome;