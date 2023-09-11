import React from 'react'

function ShowingArticles(props) {
  return (
    <div className=''>
      <div className='top-box'>
        <span className='title'>{props.title}</span>
      </div>

      <div className='second-box'>
        <span className='second-box-elements'><i class="bi bi-eye-fill" />{props.views}</span>
        <span className='second-box-elements'><i class="bi bi-heart-fill" />{props.likes}</span>
        <span className='second-box-elements'><i class="bi bi-chat-left" />{props.noOfComments}</span>
      </div>
    </div>
  )
}

export default ShowingArticles