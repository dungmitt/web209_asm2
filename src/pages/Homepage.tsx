import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Button, Table, Skeleton, Popconfirm, message, Radio, RadioChangeEvent, Space, Input } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAppDispatch } from "@/store/hook";
import { add } from "@/slice/Cart";

type Props = {};

const Homepage = (props: Props) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

    const { data: productsData, isLoading: isProductLoading } = useGetProductsQuery();
    return (
        <div className="w-4/6 mx-auto">
            <h2 className="uppercase font-mono text-2xl text-center mt-10">product</h2>
            <section className='container grid grid-flow-rows grid-rows-3 grid-cols-4 mx-auto'>
              <div className="">
              <div className=" my-10">
                <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={0}>Điện thoại</Radio>
                  <Radio value={2}>Máy tính</Radio>
                  <Radio value={3}>Ba Lô</Radio>
                  <Radio value={4}>
                    More...
                  </Radio>
                </Space>
              </Radio.Group>
              </div>
              <div>
                <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={5}>Chính hãng</Radio>
                  <Radio value={6}>Sách tay </Radio>
                  <Radio value={7}>Hàng sale</Radio>
                  <Radio value={12}>
                    More...
                    {value === 12 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                  </Radio>
                </Space>
              </Radio.Group>
              </div>
              </div>
                {(
                   isProductLoading ? <Skeleton /> : productsData?.map((item:IProduct) => (
                    <div key={item.id} className=' container  text-center my-10 '>
                      
                            <ul className='bg-slate-100 rounded-2xl mx-2 p-2 text-left'>
                            
                            <li><a href={`/detail/${item.id}`}><img className='w-32 mx-auto py-8 hover:scale-125 ease-in duration-300' src={item.img}/></a></li>
                            <li className="text-sm pl-6 pt-1"><a >{item.name}</a></li>
                            <li className="text-xs pl-6 pt-1"><a >{item.options}</a></li>
                            <li className="text-red-500 pl-6 pt-4 pb-6 flex gap-4">
                              <a >{item.price}$</a>
                              <div className="w-20">
                              <Link to="/cart"><Button
                                type="primary" danger className=""
                                onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                            >
                                Add to cart
                            </Button></Link>
                              </div>
                              </li>
                          </ul>
                     
                      
                  </div>
                  ))
                )}
        
      </section>
        </div>
    );
};


export default Homepage;
