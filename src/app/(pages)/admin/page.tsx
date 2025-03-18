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
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All products</h2>
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto overflow-x-auto'>
          {/* Table container with horizontal scrolling */}
          <table className='w-full border-collapse'>
            <thead className='sticky top-0 bg-white'>
              {/* Table headers with sticky positioning */}
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th className='px-4 py-2'>SR No.</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Price</th>
                <th className='px-4 py-2'>Picture</th>
                <th className='px-4 py-2'>Actions</th>
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
