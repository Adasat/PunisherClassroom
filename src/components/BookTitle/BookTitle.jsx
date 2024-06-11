import React from 'react'
import PropTypes from 'prop-types'

function BookTitle({title, onTitleChange}) {
   return (
     <>
       <label>Title:</label>
       <input onChange={onTitleChange} value={title} />
     </>
   )
}

BookTitle.propTypes = {
    title : PropTypes.string,
    onTitleChange: PropTypes.func
}

export default BookTitle