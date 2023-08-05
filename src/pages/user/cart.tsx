import { IProduct } from '@/interfaces/product';
import { decrease, increase } from '@/slice/Cart';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { Button, Space, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {}




const Listcart = (props: Props) => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: any) => state.cart);
    const dataSource = items?.map((item: IProduct) => ({
        key: item.id,
        name: item.name,
        price: item.price,
        img: <img src={item.img} className="w-1/6" />,
        desc: item.desc,
        quantity: item.quantity,
        total: item.price * item.quantity

    }));
    
    console.log(dataSource);
    
    const columns: ColumnsType<IProduct> = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'key',

        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'img',
            dataIndex: 'img',
            key: 'img',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'desc',
            key: 'desc',
            dataIndex: 'desc',
        },
        {
            title: 'quantity',
            key: 'quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'total',
            key: 'total',
            dataIndex: 'total',
        },
        {
            
            title: 'Action',
            key: 'key',
            render: ({key:id}) => (
                <Space size="middle" key={dataSource.key}>
                    <Button type="primary" danger onClick={() => dispatch(increase(id))}>
                        Increase
                    </Button>
                    <Button type="primary" danger onClick={() => dispatch(decrease(id))}>
                        Decrease
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className='container mx-auto '>
            <div className="container bg-slate-400 w-screen">
                <header className="h-16 container w-5/6  flex items-center justify-between px-20 mx-auto">
                    <Link to="/"><img src="https://coderthemes.com/attex/tailwind/layouts/assets/images/logo.png" className="w-1/3" alt="" /></Link>
                    <div className="flex items-center ">
                        <input type="text" className="w-96  hover:bg-slate-100 rounded-l-lg pl-2" placeholder="seach" />
                        <button className="text-black bg-white text-2xl hover:bg-slate-500 rounded-r-lg"><AiOutlineSearch /></button>
                    </div>
                    <div className="text-white flex items-center text-xl"><Link to="signup"> <AiTwotoneHome /></Link>
                        <p className="px-2"><Link to="/cart"> <AiOutlineShoppingCart /></Link></p>
                        <Link to="/admin"><AiOutlineUser /></Link></div>

                </header>
            </div>
            {
            dataSource.length == 0 ?  <div className='text-center font-mono text-2xl'>Giỏ Hàng Trống</div> : <Table className='mx-auto w-5/6' columns={columns} dataSource={dataSource} /> }
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
    );
}

export default Listcart