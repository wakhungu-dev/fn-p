"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const PromoteToAdmin = ({ id: strId }: any) => {
    const router = useRouter()
    const { id } = JSON.parse(strId)
    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: 'admin' })
            })
            if (!res.ok) {
                throw new Error('Failed to promote user to admin')
            }
            toast.success('Update successful')
            const data = await res.json()
            console.log(data)
        } catch (error: any) {
            console.error('Error promoting user to admin:', error)
            toast.error('Error promoting user to admin')
        }
    }

    return (
        <button
            onClick={handleSubmit}
            className="py-3 px-6 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 rounded-lg text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            Promote to Admin
        </button>
    )
}

export default PromoteToAdmin
