import React from 'react'
import style from "./style.module.css";
function Footer() {
    return (
        <div className={`${style.main} flex h-[66px] justify-center items-center`}>
            <p className={style.text}>Copyright 2022 All Right Reserved By SG</p>
        </div>
    )
}

export default Footer
