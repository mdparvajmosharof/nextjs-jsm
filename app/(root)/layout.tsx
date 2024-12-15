import React from 'react'

const layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
      <div>Navbar</div>
      {children}
    </div>
  )
}

export default layout
