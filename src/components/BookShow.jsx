import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
  }

  return (
    <div className='book-show'>
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
