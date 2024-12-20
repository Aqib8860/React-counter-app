import { MouseEventHandler } from "react"

const Button = ({label, fn}:{label:string, fn:MouseEventHandler}) => {
    return (
        <button onClick={fn}>{label}</button>
        
    )
}


export default Button