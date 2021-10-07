import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

import './HeroSection.css'

function HeroSection() {
const [title, setTitle] = useState('React Hooks at a Glance');
  const [year, setYear] = useState(24);
// eslint-disable-next-line 
  useEffect(() => {
    setTitle(`Universitas ${year}`);
  });

    return (
        <div className='hero'>
          
            <video className="hero__video" src="https://hesguru.com/video-1.mp4" autoPlay loop muted />
        <h1 className="hero__title">{title}</h1>
            <p className="hero__paragraph">Universitas 24 adalah sebuah perguruan tinggi negeri di Indonesia yang berlokasi di Semarang, Jawa Tengah, Indonesia.</p>
            <p className="hero__paragraph">Saat ini telah memiliki 5 Fakultas yang tersedia</p>
            <div className="hero__btns">
                <Link to="/Details">
                     <button className="hero__btn-start">Detail Jurusan</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
