import React, { Component, createRef, useRef } from 'react'
import Name from './Name'
import Value from './Value'
import ValueRef from './ValueRef';

export default class Parent extends Component<{}, { name: string, value: number, show: boolean }> {
    private elementCallbackRef: any;
    private parentInputCreateRef: any;
    private nameChildObjRef: any;
    private valueRefElemntRef: any;

    constructor(props: {}) {
        super(props)
        this.state = {
            name: '',
            value: 0,
            show: true
            // obj: { x: 0, y: 20 }
        }
        this.parentInputCreateRef = createRef<HTMLInputElement>()
        this.nameChildObjRef = createRef<Name>()
        this.valueRefElemntRef = createRef<HTMLInputElement>()
        //this.parentInputRef = useRef<HTMLInputElement>(null)
    }
    referElement = (element: HTMLInputElement) => {
        this.elementCallbackRef = element
        console.log(this.elementCallbackRef);
    }
    increaseValueHandler = () => {
        // const newObj = { ...this.state.obj, x: 23 }
        // this.setState({
        //     obj:newObj
        // })

        this.setState(
            (oldState) => {
                return {
                    value: oldState.value + 1
                }
            })
    }
    updateNameHandler = (newName: string) => {
        this.setState({
            name: newName
        })
    }
    render() {
        const { name, value, show } = this.state
        return (
            <div>
                {/* Parent Input:&nbsp;<input type='text' ref={this.referElement} /> */}
                Parent Input:&nbsp;<input type='text' ref={this.parentInputCreateRef} />
                <br />
                <br />
                <button onClick={
                    () => {
                        this.setState(oldState => {
                            return {
                                show: !oldState.show
                            }
                        })
                    }
                }>{show ? 'Hide' : 'Show'}</button>
                <Name nameValue={name} nameHandler={this.updateNameHandler} ref={this.nameChildObjRef} />
                <br />
                <br />
                <ValueRef data={value} dataHandler={this.increaseValueHandler}
                    ref={this.valueRefElemntRef} />
                <br />
                <br />
                {
                    show && (<Value data={value} dataHandler={this.increaseValueHandler} />)
                }
            </div>
        )
    }
    componentDidMount() {
        //this.elementCallbackRef.focus()
        // this.parentInputCreateRef.current.focus()
        //this.nameChildObjRef.current.focusInput()
        this.valueRefElemntRef.current.focus()
    }
}
