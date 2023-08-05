import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'
import { AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, AiFillMessage, AiFillTwitterCircle, AiOutlineGlobal, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {}

const Signup = (props: Props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };
    return <>
        <div className="container">
            <div className="container bg-slate-400 ">
                <header className="h-16 container w-5/6  flex items-center justify-between px-20 mx-auto">
                    <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                    <div className="flex items-center ">
                        {/* <input type="text" className="w-96  hover:bg-slate-100 rounded-l-lg pl-2" placeholder="seach" />
                        <button className="text-black bg-white text-2xl hover:bg-slate-500 rounded-r-lg"><AiOutlineSearch /></button> */}
                    </div>
                    <div className="text-white flex items-center text-xl"> <AiTwotoneHome />
                        <p className="px-2"><AiOutlineShoppingCart /></p>
                        <Link to="/admin"><AiOutlineUser/></Link></div>

                </header>
            </div>
            <h2 className='text-center font-mono text-2xl mt-5'>Register</h2>
            <div className='container mt-16'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className='mx-auto mb-28'
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Confirmpassword"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" danger htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
           
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