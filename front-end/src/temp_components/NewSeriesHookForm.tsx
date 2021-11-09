import { ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

enum ReleaseDayEnum {
  unknown = 'unknown',
  sunday = 'sunday',
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
}

interface FormInput {
  title: string
  seriesWiki: string
  seriesImg: string
  frequency: string
  dayOfWeek: ReleaseDayEnum
  hiatusTill: string
  author: string
  ongoing: boolean
  publishedDate: string
}

export default function NewSeriesHookForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  if (Object.keys(errors).length !== 0) {
    console.log(errors)
  }
  const onSubmit: SubmitHandler<FormInput> = async (data: {}) => {
    try {
      const response = await axios.post('/series', {
        ...data,
        characters: [],
        chapters: [],
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Title
        <input
          {...register('title', {
            required: true,
          })}
          type='text'
          placeholder='Title'
        />
      </label>
      <label>
        Series Wiki
        <input
          {...register('seriesWiki')}
          type='text'
          placeholder='Series Wiki Page'
        />
      </label>
      <label>
        Series Image
        <input
          {...register('seriesImg')}
          type='text'
          placeholder='Link to series image'
        />
      </label>
      <div className='border'>
        <p>Release Schedule</p>
        <label>
          Frequency
          <input
            {...register('frequency')}
            type='text'
            placeholder='Frequency'
          />
        </label>
        <label>
          Release Day
          <select {...register('dayOfWeek')}>
            <option value='unknown'>Unknown</option>
            <option value='sunday'>Sunday</option>
            <option value='monday'>Monday</option>
            <option value='tuesday'>Tuesday</option>
            <option value='wednesday'>Wednesday</option>
            <option value='thursday'>Thursday</option>
            <option value='friday'>Friday</option>
            <option value='saturday'>Saturday</option>
          </select>
        </label>
        <label>
          Hiatus Till
          <input {...register('hiatusTill')} type='text' placeholder='Hiatus' />
        </label>
      </div>
      <label>
        Author
        <input
          {...register('author', { required: true })}
          type='text'
          placeholder='Author'
        />
      </label>
      <label>
        Ongoing?
        <input {...register('ongoing')} type='checkbox' />
      </label>
      <label>
        Initial Publication
        <input
          {...register('publishedDate')}
          type='date'
          placeholder='Initial Publication'
        />
      </label>
      <input className='btn-green' type='submit' />
    </form>
  )
}
