import Parent from '../../components/Parent';
import './App.css';
//import Value from "../../components/Value"

import React from 'react'
import HookParent from '../../components/HookParent';

function App() {
  console.log('app rendered')
  // const parent = <Parent x={10} />
  // console.log(parent)
  return (
    <div>
      {/* {parent} */}
      {/* <Parent x={100} /> */}
      <HookParent />
    </div>
  )
}

export default App


// function App() {
//   // const valueDesign = Value({ data: 10, increaseHandler: null })

//   // const parentObject = new Parent({ x: 100 })
//   // const parentDesign = parentObject.render()

//   console.warn('App')
//   return (
//     <div className="App">
//       {/* {
//         valueDesign
//       }
//       <br />
//       {
//         parentDesign
//       }
//       */}
//     </div >
//   );
// }


//export default App;
