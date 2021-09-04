export default function Cabecalho(props) {
  // console.log(props.titulo, props.nome, props.idade, props.ehLegal)
  // props.titulo += '!!!!!' PROPS É SOMENTE LEITURA
  return (
    <header>
      <h1>Fundamentos  de Next.JS & React (: :)</h1>
      <h2>{props.titulo}</h2>
      <h2>{props.idade}</h2>
      <h2>{props.nome}</h2>
      <h2>{props.ehLegal}</h2>
    </header>
  )
}