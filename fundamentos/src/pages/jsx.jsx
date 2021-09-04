import Layout from "../components/Layout"

export default function Jsx() {
  const titulo = <h1>JSX é um conceito Central!</h1>

  function subtitulo() {
    return <h2>{'muito legal'.toLocaleUpperCase()}</h2>
  }

  return (
    <Layout titulo='Entendendo JSX'>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({nome:'João', idade: 30})}
      </p>
    </Layout>
  )
}