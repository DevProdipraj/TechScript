import React from 'react'
import Sidebar from '../component/dashbord/Sidebar'
import { useAuth } from '../context/AuthContext'

const Dashbord = () => {

  const {profile, isAuthenticated} = useAuth()
console.log(profile)
console.log(isAuthenticated)
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
