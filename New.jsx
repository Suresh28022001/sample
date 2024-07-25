import React, { useState } from 'react'
import { useAdd } from './CustomHook'
import { useSub } from './CustomHook'
import { useMulti } from './CustomHook'
import { useDiv } from './CustomHook'

export default function New() {
   
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [num3, setNum3] = useState()
    const showAdd = useAdd(num1, num2, num3)
    const showSub = useSub(num1, num2, num3)
    const showMulti = useMulti(num1, num2, num3)
    const showDiv = useDiv(num1, num2, num3)

  return (
    <div>
        <input type="number"  onChange={(e) => setNum1(e.target.value)}/><br/>
        <input type="number"  onChange={(e) => setNum2(e.target.value)}/><br/>
        <input type="number"  onChange={(e) => setNum3(e.target.value)}/><br/>
        <h1>Add: {showAdd}</h1>
        <h1>Sub: {showSub}</h1>
        <h1>Multi: {showMulti}</h1>
        <h1>Div: {showDiv}</h1>
    </div>
  )
}
