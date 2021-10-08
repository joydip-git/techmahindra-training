import React, { forwardRef, RefObject } from 'react'

type ValuePropsType = {
    data: number,
    dataHandler: () => void
}
/*
const ValueRef = (props: ValuePropsType) => {
    console.log('[Value] rendered');
    const { data, dataHandler } = props

    return (
        <div>
            Value Ref:&nbsp;
            <input type='text' value={data} />
            <br />
            <button onClick={dataHandler}>Increase[ValueRef]</button>
        </div>
    )
}

//export default memo(Value)
export default ValueRef
*/
const ValueRef = forwardRef(
    (props: ValuePropsType, refObjReference: any) => {
        console.log('[Value] rendered');
        const { data, dataHandler } = props

        return (
            <div>
                Value Ref:&nbsp;
                <input type='text' value={data} ref={refObjReference} />
                <br />
                <button onClick={dataHandler}>Increase[ValueRef]</button>
            </div>
        )
    }
)
export default ValueRef
