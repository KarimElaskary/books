import { useState } from 'react'

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Book Title</h3>
        <input
          className='input'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate
