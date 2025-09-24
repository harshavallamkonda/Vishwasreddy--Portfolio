import React, { useRef } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
  name: string;
  position: string;
  contact: string;
  text: string;
  imgSrc?: string; // optional future image
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ name, position, contact, text, imgSrc }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div
      className="spotlight-card"
      ref={cardRef}
      onPointerMove={handlePointerMove}
    >
      <div className="spotlight-border"></div>
      <div className="spotlight-inner">
        <div className="spotlight-header">
          <div className="profile-ring">
            {imgSrc ? (
              <img src={imgSrc} alt={name} />
            ) : (
              <div className="profile-placeholder" />
            )}
          </div>
          <div className="person-meta">
            <h3>{name}</h3>
            <p className="role">{position}</p>
            <p className="contact">{contact}</p>
          </div>
        </div>
        <div className="spotlight-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
