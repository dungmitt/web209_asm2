import { createUser } from '@/api/user';
import { IRegister } from '@/interfaces/user';
import { Button, Form, Input, Typography, message } from 'antd';

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()

    const onFinish = async (values: IRegister) => {
        const role = "User"
        const {confirmPassword, ...newValues} = values
        const newData = {...newValues, role}

        try {
            let checkRegister = await createUser(newData);
            if (checkRegister) {
                message.success('Đăng ký thành công!');
                setTimeout(() => {
                    navigate("/signin");
                }, 1000);
            } else {
                throw new Error('Đăng ký thất bại!');
            }
        } catch (error: any) {
            message.error(error.message);
        }
    };
    return <>
        <div className="container">
        <div className="container bg-slate-400 ">
                <header className="h-16 container w-5/6  flex items-center justify-between px-20 mx-auto">
                <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                    <div className="flex items-center ">
                        <input type="text" className="w-96  hover:bg-slate-100 rounded-l-lg pl-2" placeholder="seach"/>
                        <button className="text-black bg-white text-2xl hover:bg-slate-500 rounded-r-lg"><AiOutlineSearch/></button>
                    </div>
                    <div className="text-white flex items-center text-xl"><Link to="/signup"> <AiTwotoneHome /></Link>
                    <p className="px-2"><Link to="/cart"> <AiOutlineShoppingCart/></Link></p>
                    <Link to="/signin"><AiOutlineUser/></Link></div>
                    
                </header>
            </div>
        <main className='flex justify-center items-center h-screen bg-[#f9fafb]'>
            <Form name="register" onFinish={onFinish} className="login-form w-[500px] p-5 bg-[#ffffff] rounded-lg shadow-2xl" autoComplete='off'>
                <Typography.Title className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center items-center">
                    Đăng ký
                </Typography.Title>

                <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!', whitespace: true }]}>
                    <Input placeholder="Tên" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }, { type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ!' }]} >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' },]}>
                    <Input.Password placeholder='Mật khẩu' />
                </Form.Item>

                <Form.Item name="confirmPassword" dependencies={['password']} rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('Hai mật khẩu không khớp!')); }, }),]}>
                    <Input.Password placeholder='Nhập lại mật khẩu' />
                </Form.Item>

                {/* <Form.Item name="agreement" valuePropName="checked">
                    <Checkbox>
                        Tôi đã đọc <NavLink to="#" className='font-normal text-blue-400 hover:text-red-500'>Thỏa thuận</NavLink>
                    </Checkbox>
                </Form.Item> */}

                <Form.Item className='flex justify-center items-center'>
                    <Button type="primary" ghost htmlType="submit"> Đăng ký </Button>
                </Form.Item>

                <span className='flex justify-center'>
                    Bạn đã có tài khoản?<NavLink className='font-normal text-blue-400 hover:text-red-500 ml-1' to="/signin">Đăng nhập!</NavLink>
                </span>
            </Form>
        </main>
           
            <hr className="w-5/6 mx-auto" />
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
}

export default Signup