import React from 'react'
import Header from '../header'
import Sidebar from '../sidebar'

export default function Defaultwrapper({ children }: any) {
  return (
    <div>
      <div className='default-wrapper-design'>
        <Header />
        <div className='layout'>
          <div className='layout-sidebar'>
            <Sidebar />
          </div>
          <div className='children-layout'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
