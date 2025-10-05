// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  try {
    const data = await datoCMSClient.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
    return data.allCertifications;
  } catch (error) {
    console.warn('Failed to fetch certifications from DatoCMS:', error);
    // Mock fallback based on user-provided certifications
    return [
      {
        title: 'Certified Associate in Project Management (CAPM)',
        issuer: 'PMI',
        issuedDate: '',
        link: 'https://www.credly.com/badges/17fe15ab-7039-4830-80b6-9d4e3b21dbf5/linked_in_profile',
        iconName: 'capm'
      },
      {
        title: 'Primavera P6 Fundamentals',
        issuer: 'Alison',
        issuedDate: '',
        link: 'https://alison.com/certification/check/72c6123c14',
        iconName: 'primavera'
      },
      {
        title: 'OSHA - 10 Construction',
        issuer: '360training',
        issuedDate: '',
        link: 'https://lms.360training.com/lms/rest/certificate/39266284',
        iconName: 'osha'
      },
      {
        title: 'Complete course in AutoCAD: 2D and 3D',
        issuer: 'Udemy',
        issuedDate: '',
        link: 'https://www.udemy.com/certificate/UC-a11e0b8a-1a3f-4741-9ee0-24e52a11a894/',
        iconName: 'autocad'
      },
      {
        title: 'Commercial Construction Estimating by Construction Employers',
        issuer: 'Cursa',
        issuedDate: '',
        link: 'https://cursa.app/en/my-certificate/cert755bf99325d016d27b3a1f1eb749aa1f',
        iconName: 'estimating'
      },
      {
        title: 'Six Sigma Green Belt: Digital, AI & Smart Manufacturing 2025',
        issuer: 'Udemy',
        issuedDate: '',
        link: 'https://www.udemy.com/certificate/UC-4dd35b5c-ebc9-46dd-b8e6-97e98b97dcfe/',
        iconName: 'six-sigma'
      },
      {
        title: 'Real Estate Finance',
        issuer: 'CSU',
        issuedDate: '',
        link: 'https://drive.google.com/file/d/1Xi2IRVqIA7QYjwosyL-yZTdR40DE1H_B/view?usp=drive_link',
        iconName: 'finance'
      },
      {
        title: 'Real Estate Practices',
        issuer: 'CSU',
        issuedDate: '',
        link: 'https://drive.google.com/file/d/1bHhgTg6pjA-Z-6VcWLpcWBbOh7LCEsMQ/view?usp=drive_link',
        iconName: 'Real Estate'
      },
      {
        title: 'Real Estate Principles',
        issuer: 'CSU',
        issuedDate: '',
        link: 'https://drive.google.com/file/d/18cUhJ7wveq53v6R0AAIWX6b7D01CtmnP/view?usp=drive_link',
        iconName: 'Real Estate'
      }
    ];
  }
}
