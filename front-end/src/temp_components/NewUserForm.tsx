import { useState } from 'react'

const NewUserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {}

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
      <button type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}

export default NewUserForm
