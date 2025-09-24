import React, { useEffect, useState, useCallback } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = React.memo(() => {
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  const handlePlayClick = useCallback(() => {
    if (bannerData?.resumeLink?.url) {
      window.open(bannerData.resumeLink.url, '_blank');
    }
  }, [bannerData?.resumeLink?.url]);

  const handleLinkedinClick = useCallback(() => {
    if (bannerData?.linkedinLink) {
      window.open(bannerData.linkedinLink, '_blank');
    }
  }, [bannerData?.linkedinLink]);

  if (!bannerData) return <div>Loading...</div>;

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
});

export default ProfileBanner;
