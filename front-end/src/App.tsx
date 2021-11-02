import './App.css'
import NewUserForm from './temp_components/NewUserForm'
import NewSeriesForm from './temp_components/NewSeriesForm'
import { useState } from 'react'
import './index.css'

function App () {
  const [form, setForm] = useState('user')

  const toggleForm = () => {
    if (form === 'user') {
      setForm('series')
    } else {
      setForm('user')
    }
  }
  return (
    <div className='App'>
      <div className='center-50'>
        <button className='btn-black' onClick={toggleForm}>
          {form === 'user' ? 'Go to Series' : 'Go to User'}
        </button>
        {form === 'user' && <NewUserForm />}
        {form === 'series' && <NewSeriesForm />}
      </div>
    </div>
  )
}

export default App
