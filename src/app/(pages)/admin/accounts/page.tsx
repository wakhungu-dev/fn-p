import PromoteToAdmin from '@/components/PromoteToAdmin'
import User from '@/libs/models/user'
import { mongoDbConnection } from '@/libs/mongoDb'
import React from 'react'
const getUsers = async () => {
    await mongoDbConnection()
    // const users  = await User.find({ role: 'user' })
    const users  = await User.find({ })
    return users??[]
}
const  accounts = async () => {
    const users = await  getUsers()
    console.log({users})

  return (
    <div className='h-[calc(100vh-96px)] w-ful
    grid place-items-center overflow-y-auto'>
        <div className='bg-white w-[300px] rounded-lg p-4'>
            {
                users?.length? users.map(user => (
                    <div key={user._id} className='flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white bg-gray-200'>
                        <div className='text-[20px]'>{user.name}</div>
                        <p>{user.email}</p>
                        {/* make admin button */}
                        {user.role == 'user'? <PromoteToAdmin  id={ JSON.stringify({id:user._id})} /> : null}
                    </div>
                )): <p>No users found</p>

            }

        </div>
    </div>
  )
}

export default accounts