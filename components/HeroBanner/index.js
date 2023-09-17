import React, { useEffect, useState } from 'react'
import style from './style.module.css';
import star1 from "../../Assets/HeroBanner/Star1.png";
import main_image from "../../Assets/HeroBanner/main_image.png"
import Image from 'next/image';
import vector from "../../Assets/HeroBanner/Vector.png";
import hamburger from "../../Assets/HeroBanner/hamburger.png";
import cross from "../../Assets/HeroBanner/cross.png";
import NavBar from '../NavBar';
import useWindowSize from '@rooks/use-window-size';
function HeroBanner() {
    const [click, setClick] = useState(true);
    const {innerWidth}=useWindowSize();
    useEffect(()=>{
        if(innerWidth>=781){
            setClick(false);
        }
        else{setClick(true)}
    },[innerWidth])
    return (
        <div className={`${style.mainbanner} `}>
            <NavBar />
            <div className={`text-white flex flex-col ml-[5.625rem] mr-[5.625rem] ${style.main}`}>
                <div className='flex justify-between'>
                    <p className={`${style.navtext}`}>ShopKart</p>
                    <div className={`flex gap-[0.625rem] ${style.bag}`}>
                        <p className={`${style.navwatch}`}>WISHLIST (0)</p>
                        <p className={`${style.navwatch}`}>BAG (0)</p>
                    </div>
                    <div className={style.navButton} style={{
                        border: click ? '1px solid #fff' : '',
                        padding: click ? 4 : ''
                    }}>
                        <Image src={click ? hamburger : cross} alt="hamburger" onClick={
                            () => setClick(!click)
                        } />
                    </div>
                </div>
                <div className={`${style.line} relative`}>
                    <Image src={star1} height={22} width={22} alt="photo"
                        className={`${style.starimage}`} />
                </div>
                <div className={`flex   mt-[1.063rem] ${style.navItems} `}
                    style={{ display: click ? 'none' : '' }}>
                    <span className={`ml-[2.813px] ${style.navitems}`}>HOME</span>
                    <span className={`${style.navitems}`}>ABOUT</span>
                    <ul
                        className={`flex flex-col gap-[2px] p-[4px] ${style.prod}`}>
                        <span>OUR PRODUCTS</span>
                        <div className={`${style.line}`}></div>
                        <li className={style.listitems}>Product 1 </li>
                        <li className={style.listitems}>Product 2 </li>
                        <li className={style.listitems}>Product 3 </li>
                        <li className={style.listitems}>Product 4 </li>
                    </ul>
                    <span className={`${style.navitems}`}>CONTACT US</span>
                </div>
            </div>
            <div className='flex w-full '>
                <div className={`w-[50%] flex flex-col  mt-[50px] ${style.textContainer}`}>
                <span className={`${style.maintext} ml-[7.118rem]  z-10`}>Fresh</span>
                <span className={`${style.orangeText} ml-[7.118rem]  z-10`}>2023</span>
                <span className={`${style.maintext} ml-[187px] relative z-10`}>Look</span>
                    <div className={`${style.line} w-[100%] z-10 relative`}>
                        <Image src={star1} height={22} width={22} alt="photo"
                            className={`${style.starimage2}`} />
                        <div className='flex gap-1 items-baseline ml-[7.1rem] w-[17%] mt-[30px]'
                            style={{ border: '1px solid #fff' }}>
                            <p className='text-white '>Seem more</p>
                            <Image src={vector} width={10} height={10} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className={` ${style.mainphoto} w-[50%]`} >
                    {/* <Image src={star3} style={{ position: 'absolute', right: 0, top: 112, }} /> */}
                    <Image src={main_image}  height={500} width={400} alt="china"/>
                </div>
                <div className={`${style.orangeContainer}`}></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default HeroBanner;
