import React from 'react'
import { createPortal } from 'react-dom';
import { MdOutlineClose } from "react-icons/md";

export default function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <> {isOpen && (

      <div className='grid items-center absolute backdrop-blur h-screen w-screen top-0 z-40 '>
        <div className='border rounded-2xl m-auto z-50 relative min-h-[200px] min-w-[26%] bg-white p-4'>
          <div className='flex justify-end'>
            <MdOutlineClose onClick={onClose} className='text-2xl cursor-pointer' />
          </div>
          {children}
        </div>

      </div>

    )}</>, document.getElementById("modal-root")
  )
}
