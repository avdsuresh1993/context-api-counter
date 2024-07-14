import { countFunStore } from "./provider"
import { useContext } from "react"

export const Decrement=_=>{
    const {decr} = useContext(countFunStore)
    return(
        <>
        <button onClick={decr}>-</button>        
        </>
    )
}