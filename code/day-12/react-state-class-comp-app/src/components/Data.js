import React from 'react'
import PropTypes from 'prop-types'

const Data = (props) => {
    console.log('Data rendered')
    return (
        <div>
            Num Value:&nbsp;{props.value}
            <br />
            <button onClick={props.increaseHandler}>Increase Value</button>
        </div>
    )
}


Data.propTypes = {
    value: PropTypes.number.isRequired,
    increaseHandler: PropTypes.func.isRequired
}


export default Data
