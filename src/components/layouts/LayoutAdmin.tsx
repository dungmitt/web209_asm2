import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import {
    AiFillAppstore,
    AiOutlineUnorderedList,
    AiOutlineUser,
    AiOutlineVideoCamera,
} from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const {  Sider, Content } = Layout;

const LayoutAdmin = () => {


    return (
        <>
            <div className="container bg-slate-600">
                <header className="h-16 container w-5/6  flex items-center justify-between mx-12">
                    <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                </header>
            </div>
            <Layout className="h-full">
                
                <Sider trigger={null} collapsible>
                <Menu
                className="mt-10"
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <AiOutlineUnorderedList />,
                                label: <Link to="/admin/dashboard">Thống kê</Link>,
                            },
                            {
                                key: "2",
                                icon: <AiFillAppstore />,
                                label: <Link to="/admin/product">Quản lý sản phẩm</Link>,
                            },
                        ]}
                    />
                    
                </Sider>
                <Layout>
                    
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
        
    );
};
export default LayoutAdmin;
