import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';
import Threads from '../components/Threads';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'About Vishwas';

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'About Vishwas'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';
  
  return (
    <>
      <div className="profile-page">
        <div className="threads-background">
          <Threads
            color={[0.9, 0.1, 0.2]}
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
