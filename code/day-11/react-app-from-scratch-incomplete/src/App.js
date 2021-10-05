import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
    /*
    const helloDesign = Hello()
    const welcomeDesign = Welcome()
    // const appDesign = React.createElement('div', { id: 'mainDiv' }, [helloDesign, welcomeDesign])
    const appDesign = (
        <div id='mainDiv'>
            {
                helloDesign
            }
            <br />
            {
                welcomeDesign
            }
        </div>
    )
    */
    const appDesign = (
        <div id='mainDiv'>
            <Hello />
            <br />
            <Welcome />
        </div>
    )
    return appDesign;
}