import PromoteToAdmin from '@/components/PromoteToAdmin'
import User from '@/libs/models/user'
import { mongoDbConnection } from '@/libs/mongoDb'
import React from 'react'

const getUsers = async () => {
    await mongoDbConnection()
    // const users = await User.find({ role: 'user' })
    const users = await User.find({})
    return users ?? []
}

const accounts = async () => {
    const users = await getUsers()
    console.log({ users })

    return (
        <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">User Accounts</h2>
                {
                    users?.length ? users.map(user => (
                        <div key={user._id} className="flex justify-between items-center p-4 mb-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <div className="text-lg font-medium">{user.name}</div>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            {user.role === 'user' ? (
                                <PromoteToAdmin id={JSON.stringify({ id: user._id })} />
                            ) : (
                                <div className="text-sm text-green-500">Admin</div>
                            )}
                        </div>
                    )) : (
                        <p className="text-center text-gray-500">No users found</p>
                    )
                }
            </div>
        </div>
    )
}

export default accounts
