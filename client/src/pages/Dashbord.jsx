import React from 'react'
import Sidebar from '../component/dashbord/Sidebar'

const Dashbord = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <div className="flex justify-between">
        <div className="w-1/4">
          <Sidebar/>
        </div>
        <div className="3/4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dicta quod soluta facere, nam, eveniet earum maiores corrupti provident, doloribus natus? Dicta quidem molestias magnam distinctio explicabo eligendi, delectus esse.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
