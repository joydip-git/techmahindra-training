import React from 'react'
import PropTypes from 'prop-types'

const Value = ({ data, increaseHandler }) => {
    console.warn('Value')
    return (
        <div>
            <button onClick={increaseHandler}>Increase Value</button>
            <br />
            Data:&nbsp;{data}
        </div>
    )
}

Value.propTypes = {
    data: PropTypes.number.isRequired,
    increaseHandler: PropTypes.func.isRequired
}

export default Value
