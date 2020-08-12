import React from 'react'

export default function Loading() {
    return (
        <img 
          src={window.location.origin + '/loading.gif'} 
          style={{width: '800px', margin:'auto'}}
          alt="Loading..." 
        />
    )
}
