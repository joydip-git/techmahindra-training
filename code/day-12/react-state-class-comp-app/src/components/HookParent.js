import React, { useState } from 'react'
import Data from './Data'

const HookParent = () => {
    console.log('hook parent rendered')
    const [numValue, setNumValue] = useState(0)
    const increaseNum = () => {
        console.log('increase called')
        //update
        setNumValue((oldNum) => {
            return oldNum + 1
        })
    }
    const [objValue, setObjValue] = useState({ a: 0, b: 0 })
    const increaseObjValue = () => {
        console.log('increase obj value called')
        //update
        setObjValue((oldObject) => {
            return {
                ...oldObject,
                a: oldObject.a + 1
            }
        })
    }
    return (
        <div>
            {/* Num Value:&nbsp;{numValue}
            <br />
            <button onClick={increaseNum}>Increase Num Value</button> */}
            <Data value={numValue} increaseHandler={increaseNum} />
            <br />
            <br />
            Object A Value:&nbsp;{objValue.a} &nbsp;B Value:&nbsp;{objValue.b === undefined ? 'NA' : objValue.b}
            <br />
            <button onClick={increaseObjValue}>Increase Object Value</button>
        </div>
    )
}

export default HookParent
