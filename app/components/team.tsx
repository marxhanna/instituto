import React, { useState } from 'react';
import { Carousel } from 'antd';
import Image, { StaticImageData } from 'next/image';

import claudia from '../img/time/Claudia.png';
import marina from '../img/time/Marina.png';
import brenno from '../img/time/Brenno.png';
import nikkie from '../img/time/Nicole.png';
import silvano from '../img/time/Silvano.png';

interface TeamMember {
  name: string;
  job: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  { name: 'Claudia Coser', job: 'CEO Plataforma Nobis', image: claudia },
  { name: 'Marina Braga', job: 'Desenvolvedora', image: marina },
  { name: 'Brenno Araujo', job: 'Desenvolvedor', image: brenno },
  { name: 'Nicole West', job: 'Comunicação', image: nikkie },
  { name: 'Silvano Testa', job: 'Financeiro', image: silvano },
];

const TeamCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const handleChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '500px',
        margin: 'auto',
        padding: '0 15px',
      }}
    >
      <Carousel
        afterChange={handleChange}
        dots
        centerMode
        infinite
        autoplay
        centerPadding="0"
        dotPosition="bottom"
        easing="ease-in-out"
        autoplaySpeed={7000}
        swipeToSlide
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              textAlign: 'center',
              padding: '10px',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <Image
              src={member.image}
              alt={member.name}
              layout="intrinsic"
              width={500}
              height={600}
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
        ))}
      </Carousel>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          style={{
            display: index === current ? 'block' : 'none',
            textAlign: 'center',
            marginTop: '5%',
          }}
        >
          <h4
            style={{
              color: '#8c52ff',
              fontWeight: '600',
              fontSize: '18px',
              letterSpacing: '-0.5px',
            }}
          >
            {member.name}
          </h4>
          <p
            style={{
              color: '#8c52ff',
              fontWeight: '300',
              fontSize: '16px',
              marginTop: '-8px',
              letterSpacing: '-1px',
            }}
          >
            {member.job}
          </p>
        </div>
      ))}
      <style jsx>{`
        @media (max-width: 768px) {
        div {
          margin-top: 50%;
          max-width: 100%;
        }
        h4 {
          font-size: 15px !important;
        }
        p {
          font-size: 12px !important;
        }
      }
      `}</style>
    </div>
  );
};

export default TeamCarousel;
