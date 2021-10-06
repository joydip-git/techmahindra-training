import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Name extends Component {
    constructor() {
        super()
        console.log('[Name] created')
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        changeNameHandler: PropTypes.func.isRequired
    }
    render() {
        console.log('[Name] rendered')
        const { name, changeNameHandler } = this.props
        return (
            <div>
                Name:&nbsp;<input
                    type='text'
                    value={name}
                    onChange={
                        (event) => { changeNameHandler(event.target.value) }
                    }

                />
            </div>
        )
    }
}
// Name.propTypes = {
//     name: PropTypes.string.isRequired,
//     changeNameHandler: PropTypes.func.isRequired
// }
export default Name
