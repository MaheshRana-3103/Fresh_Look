import React from 'react'
import style from './style.module.css';
import Image from 'next/image';
import truck from "../../Assets/HeroBanner/Delivery-truck.png"
import facebook from "../../Assets/NavBar/facebook.png";
import insta from "../../Assets/NavBar/insta.png";
import linkedin from "../../Assets/NavBar/linkedin.png";
import twitter from "../../Assets/NavBar/twitter.png";
function NavBar() {
    return (
        <div className={`${style.main}`}>
            <div className='flex gap-2'>
                <div className={`flex gap-2 items-baseline `}>
                    <Image src={truck} alt="truck"/>
                    <p className={style.navtext }>Free Delivery</p>
                </div>
                <p className={style.navtext }>|</p>
                <p className={style.navtext }>Return Policy</p>
            </div>
            <div className=' flex text-white gap-7'>
                <p className={style.navtext } >Login</p>
                <div className='flex gap-3 items-baseline'>
                    <p className={style.navtext }>Follow US</p>
                    <Image src={facebook}></Image>
                    <Image src={insta}></Image>
                    <Image src={twitter}></Image>
                    <Image src={linkedin}></Image>
                </div>
            </div>
        </div>
    )
}

export default NavBar
