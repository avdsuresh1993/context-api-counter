import { countFunStore } from "./provider"
import { useContext } from "react"

export const Increment=_=>{
    const {incr} = useContext(countFunStore)
    return(
        <>
        <button onClick={incr}>+</button>        
        </>
    )
}