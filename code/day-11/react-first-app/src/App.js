import React from 'react'
import Y from './Hello'
export function App() {
    const data = 'Hello React'
    const helloDesign = <Y value={data} num={100} />
    //const helloDesign1 = <Hello x={data} />
    // const helloDesign = Hello({ value: data, num: 100 })
    return helloDesign
}

/**
 * {
 *  value:'Hello React'
 * }
 */
