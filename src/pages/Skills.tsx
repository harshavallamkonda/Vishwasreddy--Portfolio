import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { 
  FaReact, FaNodeJs, FaDocker, FaJava, FaProjectDiagram, FaTasks, FaIndustry, 
  FaShieldAlt, FaHardHat, FaMapMarkedAlt, FaHome, FaDollarSign, FaCalendarAlt, 
  FaTruck, FaHandshake, FaCalculator, FaFileInvoiceDollar, FaChartLine, FaCogs, 
  FaSearchDollar, FaBuilding, FaTools, FaFilePdf, FaHammer, FaFileContract, 
  FaCertificate, FaExclamationTriangle, FaComments, FaUsers, FaMicrophone, FaGavel
} from 'react-icons/fa';
import { 
  SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, 
  SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiRabbitmq, SiImessage, SiPowerbi, 
  SiMicrosoftexcel, SiAutodesk, SiTableau
} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Original icons
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  
  // New construction & project management icons
  FaProjectDiagram: <FaProjectDiagram />,
  FaTasks: <FaTasks />,
  FaIndustry: <FaIndustry />,
  FaShieldAlt: <FaShieldAlt />,
  FaHardHat: <FaHardHat />,
  FaMapMarkedAlt: <FaMapMarkedAlt />,
  FaHome: <FaHome />,
  FaDollarSign: <FaDollarSign />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaTruck: <FaTruck />,
  FaHandshake: <FaHandshake />,
  FaCalculator: <FaCalculator />,
  FaFileInvoiceDollar: <FaFileInvoiceDollar />,
  FaChartLine: <FaChartLine />,
  FaCogs: <FaCogs />,
  FaSearchDollar: <FaSearchDollar />,
  SiPowerbi: <SiPowerbi />,
  SiMicrosoftexcel: <SiMicrosoftexcel />,
  SiAutodesk: <SiAutodesk />,
  SiTableau: <SiTableau />,
  FaBuilding: <FaBuilding />,
  FaTools: <FaTools />,
  FaFilePdf: <FaFilePdf />,
  FaHammer: <FaHammer />,
  FaFileContract: <FaFileContract />,
  FaCertificate: <FaCertificate />,
  FaExclamationTriangle: <FaExclamationTriangle />,
  FaComments: <FaComments />,
  FaUsers: <FaUsers />,
  FaMicrophone: <FaMicrophone />,
  FaGavel: <FaGavel />,
};


const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryGlowColors = {
    "Methodologies & Processes": "rgba(255, 107, 107, 0.6)",
    "Project Management & Execution": "rgba(78, 205, 196, 0.6)", 
    "Business & Analysis Skills": "rgba(69, 183, 209, 0.6)",
    "Data Visualization & Reporting": "rgba(150, 206, 180, 0.6)",
    "Construction Tools & Platforms": "rgba(254, 202, 87, 0.6)",
    "Other Skills": "rgba(255, 159, 243, 0.6)"
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="skills-title">Professional Skills</h1>
        <p className="skills-subtitle">Construction & Project Management Expertise</p>
      </div>
      
      {Object.keys(skillsByCategory).map((category, categoryIndex) => (
        <div key={categoryIndex} className="skills-category">
          <h2 className="category-title">{category}</h2>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, skillIndex: number) => (
              <div 
                key={skillIndex} 
                className="skill-card"
                style={{
                  '--category-glow': categoryGlowColors[category as keyof typeof categoryGlowColors],
                  '--card-index': skillIndex
                } as React.CSSProperties}
              >
                <div className="rotating-line"></div>
                <div className="skill-icon">
                  {iconMap[skill.icon] || <FaTools />}
                </div>
                <div className="skill-content">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
