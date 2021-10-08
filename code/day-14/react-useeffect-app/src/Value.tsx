import React, { memo, useEffect, useState } from 'react'

//type calculationFnType = (a: number, b: number) => number

type ValuePropsType = {
    data: number,
    dataHandler: () => void
}
const Value = (props: ValuePropsType) => {
    // useState()
    console.log('[Value] rendered');
    const { data, dataHandler } = props
    useEffect(
        () => {
            console.log('only the fisrt time');
            return () => {
                console.log('[desctructor] only when dismounted');
            }
        },
        []
    )
    useEffect(
        () => {
            console.log('only when the value changes');
            return () => {
                console.log('[destructor] only when the value changes ');
            }
        },
        [props.data]
    )
    useEffect(
        () => {
            console.log('every time');
            return () => {
                console.log('[desctructor] everytime');
            }
        }
    )
    return (
        <div>
            Value:&nbsp;{data}
            <br />
            <button onClick={dataHandler}>Increase</button>
        </div>
    )
}

//export default memo(Value)
export default Value
