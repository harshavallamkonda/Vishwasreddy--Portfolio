import React, { useEffect } from 'react';
import './Projects.css';
import SitrusCityImg from '../images/sitrus city.jpg';
import NandiViewImg from '../images/Nandi View.jpg';
import SitrusMeadowsImg from '../images/Sitrus Meadows Entrance.jpg';
import BescomPhase1Img from '../images/BESCOM City Phase 1.jpg';
import BescomPhase2Img from '../images/BESCOM Phase 2.jpg';

// Static project data
const projectsData = [
  {
    title: "Sitrus City",
    description: "Sitrus City is a 25-acre premium residential community offering 275 well-planned plots in a fast-growing suburban corridor. The project has been designed with a perfect balance of modern infrastructure and sustainable living, featuring paved roads, underground electrical cabling, reliable water connections, and a landscaped central park. With eco-friendly practices, advanced scheduling, and streamlined vendor coordination, the development achieved a 20% reduction in construction delays while maintaining full compliance with urban development standards. Positioned in a rapidly appreciating location with excellent connectivity to highways, schools, and healthcare, Sitrus City promises not just a home but a secure, future-ready investment in a vibrant community.",
    image: SitrusCityImg
  },
  {
    title: "Sitrus Nandi View",
    description: "Sitrus Nandi View is a 7-acre premium plotted residential enclave overlooking the scenic Nandi Hills, thoughtfully crafted to integrate modern infrastructure with the beauty of natural surroundings and the convenience of urban connectivity. The community features wide internal roads, landscaped open areas, and reliable water and electricity systems designed to ensure long-term livability and infrastructure durability. Delivered with stringent quality assurance practices and 100% compliance with municipal and regulatory norms, the project upholds the highest development standards. Positioned as a preferred residential destination, Sitrus Nandi View has attracted discerning buyers seeking an ideal blend of lifestyle, nature, and accessibility.",
    image: NandiViewImg
  },
  {
    title: "Sitrus Meadows",
    description: "Sitrus Meadows is a 40-acre premium gated community in Sabbenahalli, Chikkaballapur, offering over 300 well-planned residential plots with modern infrastructure and a secure living environment. Designed for a high-quality lifestyle, the project includes wide asphalted roads, underground utilities, landscaped green spaces, and thoughtfully curated community amenities. Throughout execution, the team prioritized regulatory adherence with full RERA compliance, implemented strategic procurement practices that reduced material costs by 12%, and achieved a 95% on-time delivery rate for key development milestones. With its scale, planning, and efficiency in execution, Sitrus Meadows stands as a benchmark for sustainable and reliable community development in the region.",
    image: SitrusMeadowsImg
  },
  {
    title: "BESCOM City Phase 1",
    description: "BESCOM City Phase 1 is a strategically located plotted development offering well-demarcated residential plots with seamless access to major industrial hubs and essential urban conveniences. Spanning multiple acres, the project is equipped with modern infrastructure including asphalted roads, efficient street lighting, underground electrical cabling, and well-planned stormwater management systems. Executed with meticulous adherence to local authority regulations, the development achieved smooth approvals and rapid infrastructure rollout, establishing Phase 1 as a reliable and well-connected residential destination for buyers seeking both investment value and long-term livability",
    image: BescomPhase1Img
  },
  {
    title: "BESCOM City Phase 2",
    description: "BESCOM Employees Housing Cooperative Society Phase-2, in association with Sitrus Projects, is a thoughtfully planned small-scale plotted development designed to provide residents with both functionality and quality. The project features clearly demarcated layouts, asphalt internal roads, underground utilities, and palm-lined avenues that enhance both infrastructure and aesthetics. As part of execution, vendor coordination, material management, and on-site supervision were closely overseen to ensure timely readiness of essential services including water supply systems, drainage, and electrical connections. By implementing proactive risk mitigation strategies and strict quality control processes, the project was completed ahead of schedule while upholding high construction and development standards.",
    image: BescomPhase2Img
  }
];


const Projects: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
