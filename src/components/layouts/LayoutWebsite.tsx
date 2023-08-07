import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
import { Dropdown, MenuProps, message } from "antd";

const LayoutWebsite = () => {
  const navigate = useNavigate()
  const data = localStorage.getItem("user")

  const user = data && JSON.parse(data);

const items: MenuProps['items'] = [
  {
      key: '2',
      label: (
          <NavLink rel="noopener noreferrer" to="/cart">

              Đơn hàng
          </NavLink>
      ),
      icon: <i className="fa-solid fa-cart-shopping"></i>,
      disabled: false,
  },
  {
      key: '3',
      label: (
          <NavLink target="_blank" to="/admin">
              Admin
          </NavLink>
      ),
      icon: <i className="fa-solid fa-user-tie"></i>,
      disabled: user?.role === "Admin" ? false : true,
  },
  {
      key: '4',
      danger: true,
      label: (
          <button onClick={() => {
              localStorage.clear()
              message.success("Đăng xuất thành công!");
              setTimeout(() => {
                  navigate('/')
              }, 1000)
          }}>
              Logout
          </button>
      ),
      icon: <i className="fa-solid fa-right-from-bracket"></i>,
  },

]
  
    return <>
    <div className="container">
            <div className="container bg-slate-400 ">
                <header className="h-16 container w-5/6  flex items-center justify-between px-20 mx-auto">
                <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                    <div className="flex items-center ">
                        <input type="text" className="w-96  hover:bg-slate-100 rounded-l-lg pl-2" placeholder="seach"/>
                        <button className="text-black bg-white text-2xl hover:bg-slate-500 rounded-r-lg"><AiOutlineSearch/></button>
                    </div>
                    <div className="text-white flex items-center text-xl">
                    
                    </div>
                    {user ? (
                    <div className="flex items-center space-x-2 ml-3 md:ml-6">
                        <Dropdown menu={{ items }}>
                            <button onClick={(e) => e.preventDefault()}>
                                <div className="font-medium text-sm flex items-center hover:bg-slate-300 rounded-[10px] p-2">
                                    <div className="w-8 h-8 flex justify-center rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                                        <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="" />
                                    </div>
                                    <span className="hidden md:block ml-2">{user.name}</span>
                                </div>
                            </button>
                        </Dropdown>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 ml-3">
                        <NavLink to="/signin" className=" text-white rounded-lg py-2 px-4 font-semibold hover:text-red-500 flex items-center space-x-2 text-sm md:text-sm"><i className="fa-solid fa-user"></i>
                            <span>Đăng nhập</span>
                        </NavLink>
                        <NavLink to="/signup" className=" text-white rounded-lg py-2 px-4 font-semibold hover:text-red-500 flex items-center space-x-2 text-sm md:text-sm">
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Đăng ký</span>
                        </NavLink>
                    </div>
                )}

                    
                    {/* {user && user?.role === "Admin" ? "trang admin":""}
                    {user ? <button onClick={logout}>exit</button> : ""}
                     */}
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
