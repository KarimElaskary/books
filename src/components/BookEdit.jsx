import { useState } from 'react'

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(book.id, title)
  }

  return (
    <div className='book-edit'>
      <form onSubmit={handleSubmit}>
        <h3>Title</h3>
        <input
          className='input'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <button className='button is-primary'>save</button>
      </form>
    </div>
  )
}

export default BookEdit
