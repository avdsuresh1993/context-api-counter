import {useState,createContext} from 'react';
import { Count } from './counter';
import { Increment } from './increment';
import { Decrement } from './decrement';

export const countStore = createContext();
export const countFunStore = createContext();

export const  CounterProvider =()=>{
    const [count,setCount] = useState(0)

    const incr=_=>{
        setCount(prev=>prev+1)
    }

    const decr=_=>{
       setCount(prev=>prev>0?prev-1:0)
    }

    return (
        <>
        <countFunStore.Provider value={{incr,decr}}>
        <countStore.Provider value={count}>
         <Count/>
         <Increment/>
         <Decrement/>
        </countStore.Provider>
        </countFunStore.Provider>
        </>
    )
}