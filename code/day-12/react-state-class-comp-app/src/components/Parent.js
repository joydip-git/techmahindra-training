import { Component } from "react";
import Value from "./Value"

export default class Parent extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log('parent created')
    //     this.state = {
    //         value: 10,
    //         x: 100
    //     }
    // }

    state = {
        value: 10,
        y: 100
    }

    increaseValue = () => {
        //dont't mutate the state directly...do it immutab;y by calling setState() method
        //this.state.value = this.state.value + 1

        //v1: setState({<new-state>})
        // let temp = this.state.value;
        // temp = temp + 1
        // let newState = { ...this.state,value:temp };
        //this.setState(newState)
        // this.setState({
        //     value: temp
        // })
        // console.log('state', this.state)
        // setTimeout(() => {
        //     console.log(this.state)
        // }, 0)

        //v2:
        this.setState(
            (oldState) => {
                console.log('old state', oldState)
                return {
                    value: oldState.value + 1
                }
            },
            () => {
                console.log('current state', this.state)
            }
        )

        //v3:
        // this.setState(
        //     (oldState, props) => {
        //         console.log('old state and props', oldState, props)
        //         return {
        //             value: oldState.value + props.x
        //         }
        //     }
        // )
    }

    render() {
        console.log('[parent] render called')
        console.log('class props', this.props)
        const design = (
            <div id='parentDiv'>
                Parent component
                <br />
                <Value data={this.state.value} increaseHandler={this.increaseValue} />
            </div>
        )
        //console.log('parent re props', design.props)
        return design;
    }
}

/*
export default function Parent() {
    console.warn('Parent')
    let value = 10
    const increaseValue = () => {
        console.log('increase called')
        value = value + 1
        console.log(value)
        return value
    }
    // const design = (
    //     <Value data={value} increaseHandler={increaseValue} />
    // )
    const design = Value({ data: value, increaseHandler: increaseValue })
    return design;
}
*/

/**
 * {
 *      data:10,
 *      increaseHandler:Function[[increaseValue]]
 * }
 */