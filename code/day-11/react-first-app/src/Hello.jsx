import React from 'react'
import PropTypes from 'prop-types'
function Hello(props) {

    return (
        <div>
            <p>
                {
                    props.value ? props.value : 'no value'
                }
            </p>
            <p>
                {
                    props.num ? props.num * 2 : 'no num'
                }
            </p>
            <p>{props.x}</p>
        </div>
    )
}
Hello.propTypes = {
    value: PropTypes.string.isRequired,
    num: PropTypes.number
}
export default Hello
//module.exports.default=Hello
//export {Hello}
//module.exports = {Hello}

/**
 * {
 *   type:'div',
 *   props:{
 *      value: 'hello react',
 *      num:100,
 *      children:[
 *          {
 *              type:'p',
 *              props:{
 *                  children:['hello react']
 *              }
 *          },
 *           {
 *              type:'p',
 *              props:{
 *                  children:['100']
 *              }
 *          }
 *      ]
 *
 *    }
 * }
 */