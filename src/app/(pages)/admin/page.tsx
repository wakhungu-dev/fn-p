"use client"
// export const revalidate = 60
import Popup from '@/components/admin-panel/Popup'
import ProductRow from '@/components/admin-panel/ProductRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import { Iproduct } from '@/types/core'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [openPopup, setOpenPopup] = useState(false)
  const [updateTable, setUpdateTable] = useState(0)
  const { data: session } = useSession()
  console.log({ session })
  

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    // Fetch products from the API
    axios.get("/api/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        dispatch(setLoading(false))
      })

  }, [dispatch, updateTable])

  return (
    <div>
      <div className='bg-gradient-to-br from-white to-gray-100 h-[calc(100vh-96px)] rounded-lg p-4 shadow-lg'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>All products</h2>
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto overflow-x-auto'>
          {/* Table container with horizontal scrolling */}
          <table className='w-full border-collapse min-w-[800px]'>
        <thead className='sticky top-0 bg-gradient-to-r from-white to-gray-50 shadow-sm'>
          {/* Table headers with sticky positioning */}
          <tr className='text-gray-600 border-b border-gray-200'>
        <th className='px-6 py-3 text-left'>SR No.</th>
        <th className='px-6 py-3 text-left'>Name</th>
        <th className='px-6 py-3 text-left'>Price</th>
        <th className='px-6 py-3 text-left'>Picture</th>
        <th className='px-6 py-3 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each product row */}
          {
        products.map((product, index) => (
          <ProductRow
        key={product._id}
        SrNo={index + 1}
        setOpenPopup={setOpenPopup}
        setUpdateTable={setUpdateTable}
        product={product}
          />
        ))
          }
        </tbody>
          </table>
        </div>
      </div>
      {/* Conditional rendering of the Popup component */}
      {openPopup && (
        <Popup
          setOpenPopup={setOpenPopup}
          setUpdateTable={setUpdateTable}
        />
      )}
    </div>
  )
}

export default Dashboard
