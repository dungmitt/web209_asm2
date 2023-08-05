import React from "react";

type Props = {};

const About = (props: Props) => {
    return <div>
        <section className="container mt-6">
            <div className="  items-center mb-5 gap-x-0 mt-20">
                <div className="flex justify-between items-center mb-20 ">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/FN/ZR/KH/12125897/bbbbbb-500x500.jpg" className=" h-48 mx-auto rounded-2xl" alt="" />
                    <div className="w-1/2 text-left ">
                        <p className="text-3xl font-mono mb-5">The Modern Web Admin UI Kit & Dashboard Template Built with Tailwind</p>
                        <p className="font-mono text-sm py-1">Attex is a fully featured dashboard and admin template comes</p>
                        <p className="font-mono text-sm py-1">with tones of well designed UI elements, components</p>
                        <p className="font-mono text-sm py-1">widgets and applications and secondary pages.</p>
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mb-20">
                    <div className="w-1/2 text-right ">
                        <p className="text-3xl font-mono mb-5">widgets and applications secondary pages </p>
                        <p className="font-mono text-sm py-1">The Modern Web Admin UI Kit & Dashboard Template Built with Tailwind</p>
                        <p className="font-mono text-sm py-1">Attex is a fully featured dashboard and admin template comes.</p>
                        <p className="font-mono text-sm py-1">with tones of well designed UI elements, components</p>
                        
                        
                    </div>
                <img src="https://innocom.vn/wp-content/uploads/2017/11/banner-web-design.png" className="h-48 mx-auto rounded-2xl"  alt="" />
                </div>
            </div>
            <img src="https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Photography-Web-Banner.jpg" className=" rounded-2xl mx-auto" alt="" />

        </section>
    </div>;
};

export default About;
