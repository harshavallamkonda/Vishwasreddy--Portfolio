// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  try {
    const data = await datoCMSClient.request<{ workPermit: WorkPermit }>(GET_WORK_PERMIT);
    return data.workPermit;
  } catch (error) {
    console.log('Using mock work permit data');
    
    // Mock data fallback
    return {
      visaStatus: "F-1 OPT",
      expiryDate: new Date("2028-12-31"),
      summary: "Currently authorized to work full-time in the USA under F-1 OPT, valid until 2028. Open to nationwide Project Manager roles in construction and infrastructure.",
      additionalInfo: "For opportunities or questions, contact: +1 747-206-6193"
    };
  }
}
