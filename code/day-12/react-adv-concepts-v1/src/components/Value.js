import React from 'react'
import PropTypes from 'prop-types'

function Value({ value, increaseHandler }) {
    console.log('[Value] rendered')
    return (
        <div>
            Value:&nbsp;
            <input
                type='text'
                value={value}
                onChange={
                    (event) => {
                        increaseHandler(parseInt(event.target.value))
                    }
                } />
        </div>
    )
}
Value.propTypes = {
    value: PropTypes.number.isRequired,
    increaseHandler: PropTypes.func.isRequired
}


export default Value
