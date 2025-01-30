"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import 'antd/dist/reset.css';
import carrossel1 from '../app/img/carrossel1.png';
import carrossel2 from '../app/img/carrossel2.png';
import carrossel3 from '../app/img/carrossel3.png';
import carrossel4 from '../app/img/carrossel4.png';
import img from '../app/img/logos/nobis_principal_branca.png';
import afroempreendedorismo from '../app/img/3.png'
import etnodesenvolvimento from '../app/img/etnodesenvolvimento.jpg'
import empreendedorismo from '../app/img/empreendedorismo.jpg'
import techgirls from '../app/img/techgirls.jpg'

const contentStyle = {
  height: '100vh',
  width: '100vw',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const HomePage = () => {
  const [cardData, setCardData] = useState([]);
  const projectImages = [empreendedorismo, etnodesenvolvimento, afroempreendedorismo, techgirls];
  
  useEffect(() => {
    const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/10.3.0' } };
    fetch('http://dev.nobisapp.com.br/institute/', options)
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((item, index) => ({
          title: item.projectData.title,
          description: item.projectData.description,
          img: projectImages[index % projectImages.length]
        }));
        setCardData(formattedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
    <header className="floating-header transparent" id="header">
      <div className="container-header">
        <div className="logo-header" id="logoHeader">
          <a href="#section1"><img src={img.src} style={{ height: "80px" }} /></a>
        </div>
        <div className='navInfo'>
        <nav>
          <ul>
            <li style={{ marginLeft: '-55%' }}><a href="#section1">Sobre</a></li>
            <li style={{ marginLeft: '20%' }}><a href="#section2">Projetos</a></li>
            <li style={{ marginLeft: '20%' }}><a href="#section3">Nobis</a></li>
          </ul>
        </nav>
        <a href="conectividade-em-servicos/index.html" className="button-header"><span className="gradient-text">Contato</span></a>
        </div>
        <div className="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Carousel
        autoplay
        effect="fade"
        autoplaySpeed={5000} // Tempo de transição mais lento (5 segundos)
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      >
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel1.src})` }} />
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel2.src})` }} />
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel3.src})` }} />
        </div>
        <div>
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel4.src})` }} />
        </div>
      </Carousel>

      {/* Conteúdo sobreposto */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', color: '#fff', width: "80%", margin: "0 auto", padding: "0 20px" }}>
        <p className="frontPageTitle">
          INSTITUTO NOBIS <br />
          <a style={{ fontWeight: '300', fontSize: "50px" }}>& CROWDFUNDING</a> <br />
          IMPACTO DE A-Z <br />
        </p>
        <button className="initBtn">O que fazemos?</button>
      </div>
    </div>
    <div className='nossosProjetos'>
      <div className='npContent'>
        <div className='npTitle'>
          <p>Nossos Projetos <a style={{ letterSpacing: "-4px", marginLeft: "1%" }}>-----------------------</a></p>
          <h1>Apoie projetos de impacto que <br/> 
          transformam vidas de <a style={{
            backgroundImage: "linear-gradient(90deg, #8c52ff, #d7877b)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>verdade.</a></h1>
        </div>
        <div className="slider-container">

          <div className="slider-container">
          <Carousel dots={false} arrows slidesToShow={3}>
              {cardData.map((card, index) => (
                <div key={index} className="card">
                  <img src={card.img.src} alt={card.title} className="card-img" />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <button className="card-btn">saiba mais</button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;