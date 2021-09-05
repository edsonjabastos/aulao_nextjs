import Layout from "../components/Layout"
import { useState } from 'react'

export default function Estado() {
  // let numero = 3
  // const state = useState(0)
  // let numb = state[0]
  // let changeNumb = state[1]

  const [numb, changeNumb] = useState(0) // REACT HOOKS!

  // console.log(state)

  function plusPlus() {
    // numero += 1
    changeNumb(numb + 1)
    // console.log('Plus + Plus = !+++++!')
    // console.log(numero)
  }

  return (
    <Layout>
      <div>{numb}</div>
      <button onClick={plusPlus}>!++!+!++!</button>
    </Layout>
  )
}