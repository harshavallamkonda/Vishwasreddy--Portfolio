// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  try {
    const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
    console.log("🚀 ~ getProfileBanner ~ data:", data)
    return data.profilebanner;
  } catch (error) {
    console.warn('Failed to fetch profile banner from DatoCMS:', error);
    // Return mock data for development
    return {
      backgroundImage: { url: "/logo192.png" },
      headline: "Welcome to Vishwas Reddy's Portfolio",
      resumeLink: { url: "https://drive.google.com/file/d/1zeZUITAbWiCitt8FkS568HQcXg5NOWgI/view?usp=sharing" },
      linkedinLink: "https://www.linkedin.com/in/sai-vishwas-reddy-badinehal-375611376/",
      profileSummary: "Construction Project Manager | Lean Six Sigma Green Belt | Digital, AI & Smart Manufacturing | CAPM® | Process Improvement, Scheduling, Risk Control | MS Project, Power BI, Excel"
    };
  }
}
