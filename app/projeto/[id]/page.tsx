"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Link from "next/link";
import 'antd/dist/reset.css';
import carrossel1 from '../../img/carrossel1.png';
import carrossel2 from '../../img/carrossel2.png';
import carrossel3 from '../../img/carrossel3.png';
import carrossel4 from '../../img/carrossel4.png';
import img from '../../img/logos/nobis_principal_branca.png';
import { useParams } from "next/navigation";

const ProjetoPage = () => {
  const { id } = useParams(); // Pegando o ID da URL corretamente
  const [project, setProject] = useState<any>(null);

  const contentStyle = {
    height: '100vh',
    width: '100vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const response = await fetch(`https://dev.nobisapp.com.br/institute/${id}/id`, {
          method: "GET",
          headers: { "User-Agent": "insomnia/10.3.0" },
        });
        if (!response.ok) throw new Error("Erro ao buscar projeto");

        const data = await response.json();
        setProject(data.project);
      } catch (error) {
        console.error("Erro ao buscar projeto:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Carregando...</p>;

  return (
    <>
      <header className="floating-header transparent" id="header">
        <div className="container-header">
          <div className="logo-header">
            <a href="#section1"><img src={img.src} style={{ height: "80px" }} /></a>
          </div>
          <nav>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><Link href="/projetos">Projetos</Link></li>
              <li><Link href="#nobis">Nobis</Link></li>
            </ul>
          </nav>
          <a href="conectividade-em-servicos/index.html" className="button-header">
            <span className="gradient-text">Contato</span>
          </a>
        </div>
      </header>

      <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }} id="section1">
        <Carousel autoplay effect="fade" autoplaySpeed={5000} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel1.src})` }} />
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel2.src})` }} />
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel3.src})` }} />
          <div style={{ ...contentStyle, backgroundImage: `url(${carrossel4.src})` }} />
        </Carousel>

        {/* Conteúdo sobreposto */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%', color: '#fff', width: "80%", margin: "0 auto", padding: "0 20px" }}>
          <p className="frontPageTitle">
            INSTITUTO NOBIS <br />
            <a style={{ fontWeight: '300', fontSize: "50px" }}>& CROWDFUNDING</a> <br />
            IMPACTO DE A-Z <br />
          </p>
          <div>
            {project?.tags?.map((tag: any) => (
              <button key={tag.id} className="initBtn">{tag.content}</button>
            ))}
          </div>
        </div>
      </div>

      {project && (
        <>
          <div className="projectInfo">
            <div className="content">
              <div className="sectionContent">
                <div className="text">
                  <div className='title'>
                    <p>Projeto <a style={{ letterSpacing: "-4px", marginLeft: "1%" }}>----------------</a></p>
                    <h1>{project.title}</h1>
                  </div>
                  <div className="description">
                    <span>{project.description}</span>
                    <div className="ods">
                      {project.ods.map((odsItem: any) => (
                        <span key={odsItem.id}>ODS {odsItem.content}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <img src={`https://dev.nobisapp.com.br/uploads/${project.bannerImage}`} alt={project.title} />
              </div>
            </div>
          </div>

          <div className="sobreProjeto">
            <div className="content">
              <div className="projetoInfo">
                <div>
                  <span><strong>Duração do projeto:</strong> {project.duration}</span>
                  <span><strong>Investimento Mínimo:</strong> R$ {project.minInvestment}</span>
                </div>
                <div>
                  <span><strong>Público-Alvo:</strong> {project.target}</span>
                  <span><strong>Objetivos:</strong> {project.focus}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="meta">
            <div className="content">
              <div className="metaInfo">
                <h1>Meta</h1>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${(project.donatesSum / project.meta) * 100}%` }} />
                </div>
                <span>R$ {project.donatesSum} de R$ {project.meta}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjetoPage;
