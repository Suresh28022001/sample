// import React, { useEffect, useRef, useState } from "react"

// export const useAdd = (a,b) => {
//     const result = Number(a) + Number(b)
//     return result
// }


// export default function Ref() {
//     const [numOne, setnumOne] = useState("")
//     const Vals = useRef(null)
//     useEffect(() => {
//         Vals.current = numOne
//     },[numOne])
    
//     const [numTwo, setnumTwo] = useState("")
//     const Vals2 = useRef(null)
//     useEffect(() => {
//         Vals2.current = numTwo
//     },[numTwo])
//     const total=Vals.current + Vals2.current
    
//     return(
//         <div> 
//             <input type="number" placeholder="enter num" onChange={(e) => setnumOne(e.target.value)}/> <br />
//             <input type="text" placeholder="enter num" onChange={(e) => setnumTwo(e.target.value)}/>
//             <h2>Number 1:{Vals.current} </h2>
//             <h2>Number 2:{Vals2.current} </h2>
         
//             <p>result :{total}</p>

//         </div>
//     )
// }
import React, { useState } from "react";

// export default function Sum(){
//     const [value1, setValue1]=useState("")
//     const [value2, setValue2]=useState("")
//     const [sum, setSum]=useState(0)


//     var aa=Number(value1) + Number(value2)

//     return(

//         <form action="">
//         <input onChange={(e) => setValue1(e.target.value)}
//         type="number"
//         placeholder="Number 1"
//         required 
        
//         /> <br />
//         <input onChange={(e) => setValue2(e.target.value)} 
//         type="number"
//         placeholder="Number 2" 
//         required
//         /> <br />
//         <button>Submit</button>
//         <p>Number 1:{value1}</p>
//         <p>Number 1:{value2}</p>
//         <p>Result:{aa}</p>
//         </form>
//     )
// }

export function useAdd(a, b, c){
    const handleAdd = Number(a) + Number(b) + Number(c)
    return handleAdd

} 
export function useSub(a, b, c){
    const handleSub = Number(a) - Number(b) - Number(c)
    return handleSub

} 
export function useMulti(a, b, c){
    const handleMulti = Number(a) * Number(b) * Number(c)
    return handleMulti

} 
export function useDiv(a, b, c){
    const handleDiv = Number(a) / Number(b) / Number(c)
    return handleDiv

} 












