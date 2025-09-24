import React, { useEffect } from 'react';
import './Recommendations.css';
import DadImg from '../images/Dad.jpg';
import UncleImg from '../images/uncle.jpg';

interface Testimonial {
  name: string;
  role: string;
  contact: string;
  text: string;
  img?: string;
}

const DATA: Testimonial[] = [
  {
    name: 'Badinehal Nakesh Reddy',
    role: 'Managing Director, Sitrus Projects',
    contact: 'Ph No: +919241115463',
    img: DadImg,
    text: "Vishwas Reddy has been an exceptional asset to Sitrus Projects, consistently exceeding expectations at every stage of our journey together. His attention to detail, unwavering commitment to project goals, and remarkable ability to anticipate and overcome challenges set him apart from his peers. Vishwas approaches each project with a unique blend of creativity and discipline, expertly balancing timelines, budgets, and team dynamics to deliver seamless results. His natural leadership inspires confidence in every team member and stakeholder. Vishwas’s positive attitude, reliability, and strategic mindset have been instrumental in driving Sitrus Projects towards unprecedented success. It is rare to encounter such a dedicated and inspiring professional—Vishwas truly raises the bar for excellence in project management."
  },
  {
    name: 'Yendal Paras Raj',
    role: 'Managing Director, Sitrus Projects',
    contact: 'Ph No: +919686102055',
    img: UncleImg,
    text: "Collaborating with Vishwas Reddy has been a remarkable experience. He has left a lasting impact on Sitrus Projects through his outstanding dedication, integrity, and problem-solving abilities. Vishwas leads by example, fostering a culture of collaboration, transparency, and consistent achievement throughout the organization. His resourcefulness and adaptability have turned potential setbacks into opportunities, ensuring each project progresses smoothly and our standards are always met. Vishwas is not just a trusted project manager—he is a role model whose commitment and work ethic elevate everyone around him. I strongly recommend him for any challenging and rewarding opportunity."
  }
];

const Recommendations: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <section className="recs-section">
      <header className="recs-hero">
        <h2 className="recs-title">Recommendations</h2>
        <div className="recs-underline" />
      </header>
      <div className="recs-list">
        {DATA.map((t, idx) => (
          <article key={t.name} className="rec-card" style={{ '--delay': `${idx * 120}ms` } as React.CSSProperties}>
            <div className="rec-avatar-wrapper">
              {t.img ? <img src={t.img} alt={t.name} className="rec-avatar-img" /> : <div className="rec-avatar" />}
              <div className="rec-avatar-ring" />
            </div>
            <div className="rec-content">
              <h3 className="rec-name">{t.name}</h3>
              <p className="rec-role">{t.role}</p>
              <p className="rec-contact">{t.contact}</p>
              <p className="rec-text">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
