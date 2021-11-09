import axios from 'axios'
import { ReactElement, useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { LoginContext } from '../contexts/LoginContext'

interface FormInput {
  username: string
  password: string
}

// THIS FUNC WILL BE REPLACED ON THE BACKEND WITH
// PW HASHING AUTH WILL RETURN JWT ---------------------------------------------
async function fauxUserCheck(
  enteredUsername: string,
  enteredPassword: string
): Promise<any> {
  const dbUser = await axios.get(`/users?username=${enteredUsername}`)

  if (
    enteredUsername === dbUser.data[0].username &&
    enteredPassword === dbUser.data[0].password
  ) {
    return true
  } else {
    console.warn('Incorrect Username or Password')
    return false
  }
}
// -----------------------------------------------------------------------------
export default function LoginPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { setAuthed, setUsername } = useContext(LoginContext)

  const login: SubmitHandler<FormInput> = async (data: FormInput) => {
    try {
      if (await fauxUserCheck(data.username, data.password)) {
        setAuthed(true)
        setUsername(data.username)
        console.log('login successful')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(login)}>
      <label>
        Username:
        <input
          type='text'
          {...register('username', { required: true })}
          placeholder='username'
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          {...register('password', { required: true })}
          placeholder='password'
        />
      </label>
      <input className='btn-green' type='submit' />
    </form>
  )
}
