"use client"
import Popup from '@/components/admin-panel/Popup'
import ProductRow from '@/components/admin-panel/ProductRow'
import { setLoading } from '@/redux/features/loadingSlice'
import { useAppDispatch } from '@/redux/hooks'
import { Iproduct } from '@/types/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {
  const [products, setProducts] = useState<Iproduct[]>([])
  const [openPopup, setOpenPopup] = useState(false)
  const [updateTable, setUpdateTable] = useState(false)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    axios.get("/api/get_products")
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
    <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4 '>
      <h2 className='text-3xl'>All products</h2>
      <div className='mt-4 h-[calc(100vh-180px)]overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className='text-gray-500 border-t border-[#ececec]'>
              <th>SR No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product: Iproduct, index) => <ProductRow
                key={product._id} 
                SrNo={index + 1}
                setOpenPopup={setOpenPopup}
                setUpdateTable={setUpdateTable} 
                product={product}
              
              /> )
            }

          </tbody>
        </table>
      </div>
    </div>
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
