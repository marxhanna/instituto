"use client";

import React from "react";
import { Popover } from "antd";
import Link from "next/link";
import 'antd/dist/reset.css';
import img from '../../app/img/logos/nobis_roxo.png';
import { ArrowDownOutlined } from '@ant-design/icons';

const HomePage = () => {
  return (
    <>
      <header className="floating-header solidWhite" id="header">
        <div className="container-header">
          <div className="logo-header" id="logoHeader">
            <Link href={"/"}><img src={img.src} style={{ height: "80px" }} /></Link>
          </div>
          <div className='navInfo'>
            <nav>
              <ul>
                <li style={{ marginLeft: '-55%' }}><a href="/#sobre" style={{ color: "black", fontWeight: "400" }}>Sobre</a></li>
                <li style={{ marginLeft: '20%' }}><Link href="/projetos" style={{ color: "black", fontWeight: "400" }}>Projetos</Link></li>
                <li style={{ marginLeft: '20%' }}><Link href="/#nobis" style={{ color: "black", fontWeight: "400" }}>Nobis</Link></li>
              </ul>
            </nav>
            <a  href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="button-header" style={{ border: "2px solid #9d5ee0", background: "none" }}><span className="gradient-text">Contato</span></a>
          </div>
          <div className="menu-toggle" id="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      
      <div className="projects">
        <div className="content">
          <div className='title'>
            <p>Transparência <a style={{ letterSpacing: "-4px", marginLeft: "1%" }}>-----------------------</a></p>
            <h1>Tenha acesso aos documentos e <br/>regulamentações do <span className="gradient-text">Instituto Nobis.</span></h1>
          </div>
        </div>
       </div>

       <div className="transparenciaDocumentos">
            <div className="documentos">
                <Popover content={"Clique para fazer o download!"}>
                    <a href="/documents/Estatuto Social Instituto Nobis.pdf" download>
                        <div className="documentCard">
                            <div className="documentContent">
                                <div className="downloadIcon">
                                    <ArrowDownOutlined style={{ marginTop: "-30%" }} />
                                </div>
                                <div>
                                    <h2>Estatuto Social</h2>
                                    <p>Instituto Nobis</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Popover>

                <Popover content={"Clique para fazer o download!"}>
                    <a href="/documents/Ata AGC Instituto Nobis.pdf" download>
                        <div className="documentCard">
                            <div className="documentContent">
                                <div className="downloadIcon">
                                    <ArrowDownOutlined style={{ marginTop: "-30%" }} />
                                </div>
                                <div>
                                    <h2>ATA AGC</h2>
                                    <p>Instituto Nobis</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Popover>

                <Popover content={"Clique para fazer o download!"}>
                    <a href="/documents/Atas 2024 Instituto Nobis.pdf" download>
                        <div className="documentCard">
                            <div className="documentContent">
                                <div className="downloadIcon">
                                    <ArrowDownOutlined style={{ marginTop: "-30%" }} />
                                </div>
                                <div>
                                    <h2>ATAS 2024</h2>
                                    <p>Instituto Nobis</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </Popover>
            </div>
       </div>

       <div className="footer">
          <div className="content">
            <div className="footerContent">
                <Link href={'/'}><img src={img.src} /></Link>
              <div className="footerInfo">
                <div>
                    <h4>Soluções</h4>
                    <a href="https://esg.nobisapp.com.br/paginas/impacto/" target="_blank">Impacto com Monitoramento</a>
                    <a href="https://esg.nobisapp.com.br/paginas/comunicacao-branding/" target="_blank">Comunicação e Branding em ESG</a>
                    <a href="https://esg.nobisapp.com.br/paginas/selo-materialidade/" target="_blank">Selo de Materialidade</a>
                    <a href="https://esg.nobisapp.com.br/paginas/handson-esg/" target="_blank">ESG Hands On</a>
                    <a href="https://esg.nobisapp.com.br/paginas/rota-esg/" target="_blank">Rota ESG</a>
                    <a href="https://esg.nobisapp.com.br/paginas/quiz-do-consumidor/" target="_blank">Quiz do Consumidor</a>
                </div>
                <div>
                    <h4>Sobre Nós</h4>
                    <a href="https://esg.nobisapp.com.br/paginas/sobre/" target="_blank">A Nobis</a>
                    <a href="https://esg.nobisapp.com.br/paginas/politica-de-privacidade/" target="_blank">Política de Privacidade</a>
                    <a href="https://agentes.nobisapp.com.br/" target="_blank">Seja um Parceiro</a>
                    <a href="https://esg.nobisapp.com.br/paginas/imprensa/" target="_blank">Comunicação & Imprensa</a>
                    <Link href={"/transparencia"}>Transparência</Link>
                </div>
                <div>
                    <p>
                        Rua Presidente Faria, 51 <br/>
                        Sala 502, Edifício Farid Surigi <br/>
                        Centro, Curitiba - PR <br/>
                        <br/>
                        <a 
                            href="https://wa.me/5541992286680?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                            >
                            Fale Conosco
                        </a>

                    </p>
                </div>
               </div>
            </div>
          </div>
       </div>
    </>
  );
};

export default HomePage;
