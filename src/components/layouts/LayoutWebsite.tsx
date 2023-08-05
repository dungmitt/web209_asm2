import React from "react";
import { Outlet } from "react-router-dom";
import { 
    AiTwotoneHome,
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineGlobal,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillMessage,
    AiFillInstagram,
    AiFillGoogleCircle,
    AiOutlineUser
    
 } from "react-icons/ai";
import { Link } from "react-router-dom";
import Productlist from "@/pages/Productlist";
type Props = {};

const LayoutWebsite = (props: Props) => {
    return <>
    <div className="container">
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
            </div>
            <section className="mt-12">
                <ul className="flex justify-between items-center w-4/6 mx-auto px-32 font-bold">
                    <li><Link to="homepage">HomePage</Link></li>
                    <li><Link to="product">Product</Link></li>
                    <li><Link to="product">About</Link></li>
                    <li><Link to="product">Contact</Link></li>
                </ul>
            </section>
            
        <section className="container mt-10">
            <img src="https://carusodigital.com/wp-content/uploads/2016/11/banner-web-design.jpg" className="w-4/6 mx-auto rounded-2xl" alt="" />
        </section>
        <div className="container">
          
            <div className="mx-auto">
              <Outlet/>
            </div>
        </div>
        <section className="container my-10">
            <h2 className="text-center text-3xl font-mono uppercase">Contact us</h2>
            <div className="flex mt-10 justify-center text-5xl items-center gap-8">
                <Link to="#"><AiFillFacebook/></Link>
                <Link to="#"><AiFillTwitterCircle/></Link>
                <Link to="#"> <AiFillMessage/></Link>
                <Link to="#"><AiFillInstagram/></Link>
                <Link to="#"><AiFillGoogleCircle/></Link>
            </div>
        </section>
        <hr className="w-5/6 mx-auto"/>
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
    </>;
};

export default LayoutWebsite;
