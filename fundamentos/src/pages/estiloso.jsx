import styles from '../styles/Estiloso.module.css';
// import Link from 'next/link';
import Layout from '../components/Layout'

export default function Extiloso() {
  return (
    <Layout titulo='CSS Modularizado!'>
      <div className={styles.roxo}>
        {/* <Link href="/">Voltar!</Link> */}
        <h1>Estilo usando CSS Módulos!</h1>
        <h1>H!</h1>
        <h2>H @</h2>
        <h3>H#</h3>
        <h4>H$</h4>
        <h5>H%</h5>
      </div >
    </Layout>
  )
}