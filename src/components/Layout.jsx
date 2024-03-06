import React from 'react'

const Layout = ({children, className, id}) => {
  return (
    <section id={id} className={`mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-poppins pt-24 ${className} h-screen`}>
      {children}
    </section>
  )
}

export default Layout