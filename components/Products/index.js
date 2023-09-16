import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import right from "../../Assets/Products/Arrow1.png"
import left from "../../Assets/Products/Arrow2.png"
import star1 from "../../Assets/Products/Star2.png";
import style from "./style.module.css"
import upperArrow from "../../Assets/Products/upperArrow.png"
import girl from "../../Assets/Products/girl.png"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import axios from 'axios';
import useWindowSize from '@rooks/use-window-size';

function Products() {
    const [show,setShow]=useState(3);
    const {innerWidth}=useWindowSize();
    useEffect(()=>{
        if(innerWidth<=781){
           setShow(1);
        }
        else{setShow(3);}
    },[innerWidth])
    const sliderSettings = {
        arrows: false,
        slidesToShow: show,
        slidesToScroll: 1,
        infinite: true,
    }
    const [sliderRef, setSliderRef] = useState(null)
    const [data, setDate] = useState([]);
    const fetchData = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((data) => data.data);
        setDate(res);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='mt-[70px] flex flex-col mb-[70px]'>
            {/* Title */}
            <div className={`flex `}>
                <div className={style.upperContainer}>
                    <div>
                        <h2 className={style.mainline}>New Products</h2>
                        <div className={`${style.line} w-[100%] z-10 relative`}>
                            <Image src={star1} height={22} width={22} alt="photo"
                                className={`${style.starimage}`} />
                        </div>
                    </div>
                    {/* Arrows */}
                    <div className='flex items-baseline gap-12'>
                        <Image src={left} alt="left arrow" className='cursor-pointer' onClick={sliderRef?.slickPrev} />
                        <Image src={right} alt="right arrow" className='cursor-pointer' onClick={sliderRef?.slickNext} />
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div className={`flex mt-[34px] ${style.mainCategories}`}>
                <div className={`${style.categories}`}>
                    <p className={style.nonHighlighted}>Apparel</p>
                    <p className={style.Highlighted}>Accessories</p>
                    <p className={style.nonHighlighted}>Best sellers</p>
                    <p className={style.nonHighlighted}>50% off</p>
                </div>
                <div className='w-[65%]'>
                    <Slider ref={setSliderRef} {...sliderSettings}>
                        {   
                            data.map(function (card, index) {
                                return (
                                    <div className='p-2' key={index} >
                                        <div className='h-[322] relative'>
                                            <Image src={card.image} width={310} height={322} alt="girl" style={{
                                                objectFit: 'cover',
                                                maxHeight: 322
                                            }} />
                                            <Image 
                                            className={style.arrow}
                                            src={upperArrow} alt="arrow" />
                                        </div>
                                        <div className='mt-4 p-2'>
                                            <p className={style.title}>{card.title}</p>
                                            <p className={style.desc}>{card.description?.slice(0, 30)}</p>
                                            <p className={style.title}>{'$' + card.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Products
