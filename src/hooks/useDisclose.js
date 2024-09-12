import { useState } from "react";


function useDisclose() {
    const [isOpen,setisOpen] = useState(false);

const onOpen = () =>{
  setisOpen(true)
}
const  onClose = () =>{
  setisOpen(false)
}
  return (
   {isOpen, onClose, onOpen}
  )
}

export default useDisclose