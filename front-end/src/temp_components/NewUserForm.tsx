import { useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

const NewUserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const now = Date.now
    const data = {
      username: username,
      password: password,
      createdAt: now,
      watching: []
    }
    try {
      const response = await axios.post('/users', data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='btn-green' type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}

export default NewUserForm
