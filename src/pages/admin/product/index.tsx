import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Button, Skeleton, Popconfirm, message, Table } from "antd";
import { Link } from "react-router-dom";
type Props = {};

const AdminProduct = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();

    const { data: productsData, isLoading: isProductLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    const dataSource = productsData?.map((item: IProduct) => ({
        key: item.id,
        name: item.name,
        price: item.price,
        img: <img src={item.img} className="w-1/6" />,
        desc : item.desc
    }));

    const confirm = (id: number | string) => {
        removeProduct(id)
            .unwrap()
            .then(() => {
                messageApi.open({
                    type: "success",
                    content: "Xóa thành công!",
                });
            });
    };
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá sản phẩm",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Ảnh sản phẩm",
            dataIndex: "img",
            key: "img",
        },
        {
            title: "mô tả",
            dataIndex: "desc",
            key: "desc",
        },
        {
            title: " Action",
            render: ({ key: id }: { key: number | string }) => (
                <div className="flex space-x-2">
                    <Popconfirm
                        placement="top"
                        title={"Xóa sản phẩm"}
                        description={"Bạn Chắc Chứ"}
                        onConfirm={() => confirm(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger shape="circle">
                            Xóa
                        </Button>
                    </Popconfirm>
                    <Button type="primary" danger shape="circle">
                        <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <header className="flex items-center justify-between mb-4">
                <h2 className="text-2xl">Quản lý sản phẩm</h2>
                <Button className="bg-slate-200">
                    <Link  to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            {contextHolder}
            {isProductLoading ? <Skeleton /> : <Table className="mx-auto" dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminProduct;
