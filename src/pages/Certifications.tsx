import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaHardHat, FaProjectDiagram, FaClipboardList } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiAutodesk, SiOracle } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';
const iconData: { [key: string]: JSX.Element } = {
  // generic
  'university': <FaUniversity />,
  // given sources
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  // new icons for user certifications
  'capm': <FaProjectDiagram />, // PMI CAPM
  'primavera': <SiOracle />,    // Oracle Primavera
  'osha': <FaHardHat />,        // OSHA Construction
  'autocad': <SiAutodesk />,    // AutoCAD
  'estimating': <FaClipboardList /> // Estimating
}

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <div className="rotating-line" />
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
