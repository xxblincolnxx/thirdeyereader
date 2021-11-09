import NewUserForm from './temp_components/NewUserForm'
import NewSeriesHookForm from './temp_components/NewSeriesHookForm'
import LoginPage from './components/LoginPage'
import { useState } from 'react'
import { LoginContext } from './contexts/LoginContext'
import './index.css'

function App() {
  const [form, setForm] = useState('user')
  const [authed, setAuthed] = useState(false)
  const [username, setUsername] = useState('')

  const toggleForm = () => {
    if (form === 'user') {
      setForm('series')
    } else {
      setForm('user')
    }
  }

  return (
    <div className='App'>
      <p>{username}</p>
      <LoginContext.Provider
        value={{ authed, setAuthed, username, setUsername }}
      >
        <LoginPage />
        <div className='center-50'>
          <button className='btn-black' onClick={toggleForm}>
            {form === 'user' ? 'Go to Series' : 'Go to User'}
          </button>
          {form === 'user' && <NewUserForm />}
          {form === 'series' && <NewSeriesHookForm />}
        </div>
      </LoginContext.Provider>
      <button
        className='btn-black'
        onClick={() => {
          setAuthed(false)
          setUsername('')
        }}
      >
        Log Out
      </button>
    </div>
  )
}

export default App
