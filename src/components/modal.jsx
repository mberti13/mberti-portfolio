import React, {useState } from 'react'
import {SliderData} from './SliderData';

function modal() {
    // const [openModal, setOpenModal ] = useState(false);

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <button> X </button>
        <div className="modal-title">
            <h1>{SliderData.name}</h1>
        </div>
        <div className="modal-body">
            <p>{SliderData.description}</p>
        </div>
        <div className="modal-footer">
            <button>Github</button>
            <button>Live Site</button>
        </div>
      </div>
    </div>
  )
}

export default modal
