import {countStore} from "./provider"
import { useContext } from "react"

export const Count=_=>{
const count=useContext(countStore)
    return(
        <>
        <div>
            <h1>Count: {count}</h1>
        </div>
        </>
    )
}