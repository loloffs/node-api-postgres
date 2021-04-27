const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})


const getUsers = (req, res) => {
  const queryString = "SELECT * FROM users ORDER BY id ASC";
  pool.query(queryString, (err, res) => {
    if (error) {
      throw error
    }
    response.status(200).json(res.rows)
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id)
  const queryString = "SELECT * FROM users WHERE id = $1";
  pool.query(queryString, [id], (err, res) => {
    if (error) {
      throw error
    }
    response.status(200).json(res.rows)
  })
}

const createUser = (req, res) => {
  const { name, email } = req.body
  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, res) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${res.insertId}`)
  })
}