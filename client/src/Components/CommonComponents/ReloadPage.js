import React from 'react'
import reload from '../../media/images/reload.gif';
import '../../Views/ReloadPage.css';

function ReloadPage() {
  return (
    <div className='main-container'>
      <span>
        <img className='reload-gif' src={reload} />
      </span>
    </div>
  )
}

export default ReloadPage