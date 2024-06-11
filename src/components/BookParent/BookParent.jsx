import React, { useState } from 'react'
import BookTitle from '../BookTitle/BookTitle'

function BookParent() {
   const [title, setTitle] = useState('Harry Potter')

   function handleTitleChange(e) {
     setTitle(e.target.value)
   }

   return (
     <form>
       <BookTitle onTitleChange={handleTitleChange} title={title} />
       <p>{title}</p>
     </form>
   )
}

export default BookParent
