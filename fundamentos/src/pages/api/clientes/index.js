export default function clientes(req, res) {
  if (req.method === 'GET') {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(req, res) {
  res.status(200).json({
    id: 3,
    name: 'John Doeu',
    age: 6762541,
    metodo: req.method,
    email: 'joaojoaojoao@jmail.com'
  })
}