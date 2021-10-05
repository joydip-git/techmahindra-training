import { render } from "react-dom";
import { App } from "./app";

const completeAppDesign = App()
const placeHolder = document.getElementById('root')

render(completeAppDesign, placeHolder, () => console.log('done'))