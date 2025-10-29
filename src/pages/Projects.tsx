import React, { useEffect } from 'react';
import './Projects.css';
import SitrusCityImg from '../images/sitrus city.jpg';
import NandiViewImg from '../images/Nandi View.jpg';
import SitrusMeadowsImg from '../images/Sitrus Meadows Entrance.jpg';
import BescomPhase1Img from '../images/BESCOM City Phase 1.jpg';
import BescomPhase2Img from '../images/BESCOM Phase 2.jpg';
import TrexDeckInstallationImg from '../images/Trex Deck Installation.jpeg';
import TrexDeckInstallationImg2 from '../images/trex Deck_2.jpeg';
import ResidentialImg from '../images/resdential.jpeg';
import ResidentialImg2 from '../images/Residential_2.jpeg';
import ResidentialImg3 from '../images/Residential_3.jpeg';

// Static project data
const projectsData = [
  {
    title: "Trex Deck Installation - Malibu, CA",
    description: "Associated with SDMJ CONSTRUCTION LLC Proud to complete a $600K luxury residential deck installation for a private villa in Malibu, CA — designed to elevate outdoor living with modern aesthetics, structural precision, and sustainable materials. The project included removal of the existing deck, followed by installation of a 1,500 sq.ft. Trex composite deck with custom railings, steps, and integrated lighting systems. Leveraged Primavera P6, Procore, and MS Project for full-cycle project management — ensuring on-time delivery, QA/QC compliance (ISO 9001:2015), and adherence to Lean Construction and OSHA-10 safety standards. This project exemplifies SDMJ Construction’s commitment to innovation, craftsmanship, and data-driven execution — delivering durability, comfort, and elegance in every detail.",
    images: [TrexDeckInstallationImg, TrexDeckInstallationImg2]
  },
  {
    title: "Residential Interior Renovation – Los Angeles, CA",
    description: "Successfully managed and executed a $450K residential interior renovation project in Los Angeles, CA — covering painting, hardwood flooring, and sanitary fixture upgrades. Leveraged Primavera P6 and MS Project for planning and scheduling, while ensuring Lean Construction principles and OSHA-10-aligned safety protocols throughout the project lifecycle. Applied cost estimation and budgeting through Excel (VBA / Power Query) and maintained QA/QC compliance under ISO 9001:2015 standards. Coordinated multi-trade teams, material procurement, and client reporting using Procore, Asana, and SharePoint, achieving zero rework and 100 % on-time delivery. This renovation enhanced both the aesthetic appeal and operational comfort of the home, reinforcing SDMJ Construction’s commitment to quality, safety, and client satisfaction.",
    images: [ResidentialImg, ResidentialImg2, ResidentialImg3]
  },
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

  // Carousel state for Trex Deck card
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  // Carousel state for cards with images array
  const [carouselIndices, setCarouselIndices] = React.useState<{ [key: number]: number }>({});
  // For smooth fade animation
  const [fade, setFade] = React.useState<{ [key: number]: boolean }>({});
  // Touch tracking per card
  const touchStartX = React.useRef<{ [key: number]: number | null }>({});

  // Butter smooth auto-slide effect for all carousel cards
  React.useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    projectsData.forEach((project, idx) => {
      if (project.images && project.images.length > 1) {
        intervals[idx] = setInterval(() => {
          // Start fade out
          setFade((prev) => ({ ...prev, [idx]: false }));
          // Wait for fade out, then change image and fade in
          setTimeout(() => {
            setCarouselIndices((prev) => {
              const images = project.images || [];
              const nextIdx = images.length > 0 ? ((prev[idx] || 0) + 1) % images.length : 0;
              return { ...prev, [idx]: nextIdx };
            });
            // Wait for image to change, then fade in
            setTimeout(() => {
              setFade((prev) => ({ ...prev, [idx]: true }));
            }, 10); // minimal delay for fade in
          }, 400); // fade out duration matches CSS
        }, 3500); // 3.5s per image for more relaxed pace
      }
    });
    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [projectsData]);

  // Manual swipe navigation
  const handleSwipe = (idx: number, direction: 'prev' | 'next') => {
    setFade((prev) => ({ ...prev, [idx]: false }));
    setTimeout(() => {
      setCarouselIndices((prev) => {
        const images = projectsData[idx].images || [];
        let nextIdx = prev[idx] || 0;
        if (images.length > 0) {
          if (direction === 'prev') {
            nextIdx = nextIdx === 0 ? images.length - 1 : nextIdx - 1;
          } else {
            nextIdx = (nextIdx + 1) % images.length;
          }
        }
        return { ...prev, [idx]: nextIdx };
      });
      setFade((prev) => ({ ...prev, [idx]: true }));
    }, 50);
  };

  // Touch swipe support per card
  const handleTouchStart = (idx: number, e: React.TouchEvent) => {
    touchStartX.current[idx] = e.touches[0].clientX;
  };
  const handleTouchEnd = (idx: number, e: React.TouchEvent) => {
    const startX = touchStartX.current[idx];
    if (startX !== null && startX !== undefined) {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 50) handleSwipe(idx, 'prev'); // swipe right
      else if (deltaX < -50) handleSwipe(idx, 'next'); // swipe left
    }
    touchStartX.current[idx] = null;
  };

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
              {project.images ? (
                <div
                  className="carousel-wrapper"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                  onTouchStart={(e) => handleTouchStart(index, e)}
                  onTouchEnd={(e) => handleTouchEnd(index, e)}
                >
                  <img
                    src={project.images[carouselIndices[index] || 0]}
                    alt={project.title}
                    className="project-image"
                    style={{
                      transition: 'opacity 0.4s cubic-bezier(.77,0,.18,1)',
                      opacity: fade[index] === false ? 0 : 1
                    }}
                  />
                </div>
              ) : (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
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
