//import React from 'react'
interface Props{
    children:ReactNode,
    onClose:()=>void
}
const Alart = ({children,onClose}:Props) => {
  return (
    <div className="alert alert-danger alert-dismissible">{children}
     <button type="button" className="btn-close" onClick={onClose} data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    </div>
   
  )
}

export default Alart