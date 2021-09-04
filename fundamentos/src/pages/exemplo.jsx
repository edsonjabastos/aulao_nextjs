import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
  return (
    <Layout titulo='Usando Componentes'>
      <Cabecalho nome="xyz" idade={123} ehLegal={true} />
      <Cabecalho titulo="Next.JS & React." />
      <Cabecalho titulo="Aprenda Next na prática!" />
      <h1>Exemplo!!!</h1>
    </Layout>
  )
}