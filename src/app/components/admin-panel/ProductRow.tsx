import { Iproduct } from '@/app/admin/dashboard/page';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import React, { Dispatch, SetStateAction } from 'react'
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line, RiDeleteBin6Line } from 'react-icons/ri';
interface propsType {
    SrNo: number
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: Iproduct;
    }

const ProductRow = ({SrNo,setOpenPopup,setUpdateTable,product}: propsType) => {
const dispatch = useAppDispatch()

const onEdit = () => {
    dispatch (setProduct(product))
    setOpenPopup(true)
}
const onDelete = () => {
    // later
}

  return (<tr>
    <td>
        <div>{SrNo}</div>
    </td>
    <td>
        <div>{product.name}</div>
    </td>
    <td>
        <div>{product.price}</div>
    </td>
    <td className='py-2'>
        <img src={product.imgSrc} width={40} height={40} alt='product_img' />
    </td>
    <td>
        <div className='text-2xl flex items-center gap-2 text-gray-600'>
            <CiEdit
                onClick={onEdit}
                className='cursor-pointer hover:text-blue-950'
                />
                <RiDeleteBin5Line
                onClick={onDelete}
                className='cursor-pointer hover:text-red-600'/>

        </div>
    </td>

  </tr>
   
  )
}

export default ProductRow