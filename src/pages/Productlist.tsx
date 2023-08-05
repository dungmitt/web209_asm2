import { useGetProductByIdQuery, useGetProductsQuery } from '@/api/product';
import { IProduct } from '@/interfaces/product';
import { add } from '@/slice/Cart';
import { useAppDispatch } from '@/store/hook';
import { Button, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { pause } from '@/utils/pause';


const Productlist = () => {
  const  { id }  = useParams<{id:string}>();
  const dispatch = useAppDispatch();
    console.log({id});
    const { data, isLoading: isProductLoading } = useGetProductByIdQuery(id);
    console.log(data);
    
  return (
    <div>
        <div className="container bg-slate-400 ">
                <header className="h-16 container w-5/6  flex items-center justify-between px-20 mx-auto">
                <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                    <div className="flex items-center ">
                        <input type="text" className="w-96  hover:bg-slate-100 rounded-l-lg pl-2" placeholder="seach"/>
                        <button className="text-black bg-white text-2xl hover:bg-slate-500 rounded-r-lg"><AiOutlineSearch/></button>
                    </div>
                    <div className="text-white flex items-center text-xl"><Link to="signup"> <AiTwotoneHome /></Link>
                    <p className="px-2"><Link to="/cart"> <AiOutlineShoppingCart/></Link></p>
                    <Link to="/admin"><AiOutlineUser/></Link></div>
                    
                </header>
                
                <hr className="w-5/6 mx-auto"/>
        
            </div>
            {(isProductLoading ? <Skeleton/> : <>
            <div className='container grid grid-cols-3 my-12'>
              <div className='mx-auto '>
                <p className='text-right  pb-5 font-mono text-2xl'>{data?.name}</p>
                <img src={data?.img} className='w-1/2 float-right' alt="" />
              </div>
              <div className='px-20'>
                <p className='text-red-500 text-3xl pb-10'>{data?.price}$</p>
                <p className='font-mono text-xl pb-2'>{data?.name}</p>
                <p className=''>{data?.desc}</p>
                <p className=''>{data?.desc}</p>
                <div className=''>
                <Link to="/cart">
                <Button
                                type="primary" danger className=""
                                onClick={() =>   dispatch(add({ ...data, quantity: 1 }))}
                            >
                                Add to cart
                            </Button>
                </Link>
                </div>
              </div>
              
            </div>
            </>)}

                <footer className='container  bg-slate-100 h-auto pt-10'>
        <div className=' mx-auto grid grid-cols-5'>
          <div className=' mx-auto'>
            <p className='font-bold uppercase text-sm pb-4'>Liên hệ</p>
            <p className='text-sx text-slate-500'>Trung Tâm Trợ Giúp</p>
            <p className='text-sx text-slate-500'>Shopee Blog</p>
            <p className='text-sx text-slate-500'>Shopee Mail</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Mua Hàng</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Bán Hàng</p>
            <p className='text-sx text-slate-500'>Thanh Toán</p>
     
          </div>
          <div className=' mx-auto'>
            <p className='font-bold uppercase text-sm pb-4'>Hỏi Đáp</p>
            <p className='text-sx text-slate-500'>Trung Tâm Trợ Giúp</p>
            <p className='text-sx text-slate-500'>Shopee Blog</p>
            <p className='text-sx text-slate-500'>Shopee Mail</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Mua Hàng</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Bán Hàng</p>
            <p className='text-sx text-slate-500'>Thanh Toán</p>
            
          </div>
          <div className=' mx-auto'>
            <p className='font-bold uppercase text-sm pb-4'>Tung tâm khách hàng</p>
            <p className='text-sx text-slate-500'>Trung Tâm Trợ Giúp</p>
            <p className='text-sx text-slate-500'>Shopee Blog</p>
            <p className='text-sx text-slate-500'>Shopee Mail</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Mua Hàng</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Bán Hàng</p>
            <p className='text-sx text-slate-500'>Thanh Toán</p>
    
          </div>
          <div className=' mx-auto'>
            <p className='font-bold uppercase text-sm pb-4'>Thanh Toán</p>
            <p className='text-sx text-slate-500'>Trung Tâm Trợ Giúp</p>
            <p className='text-sx text-slate-500'>Shopee Blog</p>
            <p className='text-sx text-slate-500'>Shopee Mail</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Mua Hàng</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Bán Hàng</p>
            <p className='text-sx text-slate-500'>Thanh Toán</p>
         
          </div>
          <div className=' mx-auto'>
            <p className='font-bold uppercase text-sm pb-4'>Theo Giõi Chúng Tôi</p>
            <p className='text-sx text-slate-500'>Trung Tâm Trợ Giúp</p>
            <p className='text-sx text-slate-500'>Shopee Blog</p>
            <p className='text-sx text-slate-500'>Shopee Mail</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Mua Hàng</p>
            <p className='text-sx text-slate-500'>Hướng Dẫn Bán Hàng</p>
            <p className='text-sx text-slate-500'>Thanh Toán</p>
        
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Productlist