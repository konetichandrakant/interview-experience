import React from 'react'

function SearchedResultsTemplate(props) {
  return (
    // Title username user_image likes location womens-only
    <div className=''>
      <div className='top-box'>
        <span className='title'>{props.title}</span>
      </div>
      
      <div className='second-box'>
        <span className='second-box-elements'><i class="bi bi-eye-fill" />{props.views}</span>
        <span className='second-box-elements'><i class="bi bi-heart-fill" />{props.likes}</span>
        <span className='second-box-elements'><i class="bi bi-chat-left" />{props.noOfComments}</span>
        <span className='second-box-elements'><Link to={`/user/${props.username}`}>{props.username}</Link></span>
      </div>
    </div>
  )
}

export default SearchedResultsTemplate