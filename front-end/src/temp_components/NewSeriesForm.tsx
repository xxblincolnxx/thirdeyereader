import { useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

const NewSeriesForm = () => {
  const [title, setTitle] = useState('none')
  const [seriesWiki, setSeriesWiki] = useState('none')
  const [seriesImg, setSeriesImg] = useState('none')
  const [frequency, setFrequency] = useState('weekly')
  const [dayOfWeek, setDayOfWeek] = useState('Sundays')
  const [hiatusTill, setHiatusTill] = useState('NA')
  const [author, setAuthor] = useState('none')
  const [ongoing, setOngoing] = useState(true)
  const [publishedDate, setPublishedDate] = useState('Unknown')
  const handleSubmit = async () => {
    const data = {
      title,
      seriesWiki,
      seriesImg,
      releaseSchedule: {
        frequency,
        dayOfWeek,
        hiatusTill
      },
      author,
      ongoing,
      publishedDate,
      characters: [],
      chapters: []
    }
    try {
      const response = await axios.post('/series', data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Series Wiki
        <input
          type='text'
          value={seriesWiki}
          onChange={(e) => setSeriesWiki(e.target.value)}
        />
      </label>
      <label>
        Series Image
        <input
          type='text'
          value={seriesImg}
          onChange={(e) => setSeriesImg(e.target.value)}
        />
      </label>
      <div className='border'>
        <p>Release Schedule</p>
        <label>
          Frequency
          <input
            type='text'
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
        </label>
        <label>
          Release Day
          <input
            type='text'
            value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value)}
          />
        </label>
        <label>
          Hiatus Till...
          <input
            type='text'
            value={hiatusTill}
            onChange={(e) => setHiatusTill(e.target.value)}
          />
        </label>
      </div>
      <label>
        Author
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Ongoing?
        <input
          type='checkbox'
          checked={ongoing}
          onChange={() => setOngoing(!ongoing)}
        />
      </label>
      <label>
        Initial Publication
        <input
          type='text'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
      </label>
      <button className='btn-green' type='submit' value='Submit'>
        Submit
      </button>
    </form>
  )
}

export default NewSeriesForm
