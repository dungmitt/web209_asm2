import React from 'react'
import { Button, Form, Input, Divider, Typography, message } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ILogin } from '@/interfaces/user';
import { loginUser } from '@/api/user';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
type Props = {}

const Signin = (props: Props) => {
  const navigate = useNavigate()

  const onFinish = async (values: ILogin) => {
    try {
      let checkLogin = await loginUser(values);
      if (checkLogin) {
        message.success('Đăng nhập thành công!');
        setTimeout(() => {
          navigate('/')
        }, 1000);
      } else {
        throw new Error('Đăng nhập thất bại!');
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <>
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
        <Form name="normal_login" className="login-form w-[500px] p-5 bg-[#ffffff] rounded-lg shadow-2xl" onFinish={onFinish} autoComplete="off">
          <Typography.Title className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center items-center">
            Đăng nhập
          </Typography.Title>

          <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }, { type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ!' }]} >
            <Input prefix={<AiOutlineUser className="site-form-item-icon p-2" />} placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]} >
            <Input.Password prefix={<AiOutlineUser className="site-form-item-icon p-2" />} type="password" placeholder="Mật khẩu" iconRender={(visible) => (visible ? <AiOutlineUser /> : <AiOutlineUser />)} />
          </Form.Item>

          <Form.Item className='flex justify-end'>
            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                    </Form.Item> */}

            <NavLink className="login-form-forgot font-normal text-blue-400 hover:text-red-500" to="/sendforgot">
              Quên mật khẩu
            </NavLink>
          </Form.Item>

          <Form.Item className='flex justify-center'>
            <Button type="primary" ghost htmlType="submit" className="login-form-button" block> Đăng nhập </Button>
          </Form.Item>
          <span className='flex justify-center mt-5'>
            Bạn chưa có tài khoản?<NavLink className='ml-1 font-normal text-blue-400 hover:text-red-500' to="/signup">Đăng ký ngay!</NavLink>
          </span>
        </Form>
      </main>
    </>

  )
}

export default Signin