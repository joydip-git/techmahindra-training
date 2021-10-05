import React, { Fragment } from "react";
export function Welcome() {
    const data = 'welcome to React'

    //this will be creating a ReactDetailedHtmlElement object
    // const design = React.createElement('div', { id: 'welcomeDiv' }, data)

    //JSX --> only one root element
    //here the type of design is JSX.Element
    //this will be translated to ReactDetailedHtmlElement object
    // const design = (
    //     <MyFragment>
    //         <div id='helloDiv1'>
    //             <p id='p1'>{data}</p>
    //         </div>
    //         <div id='helloDiv2'>
    //             <p id='p2'>{'joydip'}</p>
    //         </div>
    //     </MyFragment>
    // )

    const welcomeDesign = <div id='welcomeDiv'>{data}</div>
    return design;
}

// function MyFragment(props) {
//     const fragments = props.children
//     return fragments
// }