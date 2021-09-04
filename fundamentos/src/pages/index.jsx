// import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Hello() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',
    }}>
      <Navegador texto='ESTILOSO' destino='/estiloso'/>
      <Navegador texto='EXEMPLO' destino='/exemplo' cor="#9400d3"/>
      <Navegador texto='JSX' destino='/jsx' cor="crimson"/>
      {/* <h1>Fundamentos Next.js & React!</h1>
      <h2>Vamos estudar esse framework!</h2> */}
    </div>
  )
}