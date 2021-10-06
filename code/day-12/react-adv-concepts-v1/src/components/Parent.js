import React, { Component } from 'react'
import Name from './Name'
import Value from './Value'

export default class Parent extends Component {
    constructor() {
        super()
        console.log('[Parent] created')
        // this.increaseValueHandler = this.increaseValueHandler.bind(this)
    }
    state = {
        name: '',
        value: 0
    }

    //<button onClick={this.increaseValueHandler}>Call</button>
    // increaseValueHandler = (arg<--event) => {

    increaseValueHandler = (newValue) => {
        // console.log(this.state)
        //console.log(arg.target.value)
        //console.log(newValue, typeof newValue)

        this.setState({
            value: newValue
        })

    }

    updateNameHandler = (arg) => {
        // console.log(this)
        //console.log(arg.target.value)
        //console.log(arg, typeof arg)
        this.setState({
            name: arg
        })
    }

    render() {
        console.log(this)
        console.log('[Parent] rendered')
        const { value, name } = this.state
        return (
            <div>
                {/* <button onClick={this.increaseValueHandler.bind
                    (this)}>Call</button> */}
                {/* <button onClick={this.increaseValueHandler}>Call</button> */}
                <br />
                <Name name={name} changeNameHandler={this.updateNameHandler} />
                < br />
                <br />
                <Value value={value} increaseHandler={this.increaseValueHandler} />
                {/* <Value value={value} increaseHandler={this.increaseValueHandler.bind(this)} /> */}
            </div>
        )
    }
}
