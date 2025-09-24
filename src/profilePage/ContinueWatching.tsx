import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'About Vishwas';

interface ContentItem {
  title: string;
  imgSrc: string;
  link: string;
}

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<ProfileType, ContentItem[]> = {
  recruiter: [
    { title: "Work Experience", imgSrc: "https://picsum.photos/id/1011/300/200", link: "/work-experience" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1012/300/200", link: "/projects" },
    { title: "Skills", imgSrc: "https://picsum.photos/id/1013/300/200", link: "/skills" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  "About Vishwas": [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
