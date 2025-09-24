// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  try {
    const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
    return data.allTimelines;
  } catch (error) {
    console.warn('Failed to fetch timeline from DatoCMS:', error);
    // Return mock data for development
    return [
      // Work: SDMJ Construction LLC
      {
        timelineType: 'work',
        name: 'SDMJ Construction LLC, South Plainfield, NJ',
        title: 'Assistant Project Manager',
        techStack: 'Commercial & Residential Construction, Scheduling, Cost Control',
        summaryPoints: [
          'Coordinating site activities, subcontractors, and material procurement to meet project milestones.',
          'Assisting with schedules, RFIs, submittals, and change orders to ensure documentation accuracy.',
          'Tracking budgets and quantities; supporting monthly reporting and stakeholder updates.'
        ],
        dateRange: 'Jan 2025 – Present'
      },

      // Work: Sitrus Projects India – Project Manager
      {
        timelineType: 'work',
        name: 'Sitrus Projects India Pvt. Ltd., Hyderabad, India',
        title: 'Project Manager',
        techStack: 'Residential Construction, Vendor Management, Quality & Safety',
        summaryPoints: [
          'Led planning and execution for residential sites; ensured adherence to schedule and budget.',
          'Managed vendor contracts, BOQs, and billing; verified contractor invoices and work progress.',
          'Maintained QA/QC and safety compliance; coordinated inspections and handovers.'
        ],
        dateRange: 'Jun 2021 – Jul 2023'
      },

      // Work: Sitrus Projects India – Intern
      {
        timelineType: 'work',
        name: 'Sitrus Projects India Pvt. Ltd., Hyderabad, India',
        title: 'Project Manager Intern',
        techStack: 'Site Supervision, Quantity Takeoff, Documentation',
        summaryPoints: [
          'Supported site engineers with supervision, QTOs, and daily progress reporting.',
          'Assisted in vendor coordination, material tracking, and permit documentation.',
          'Observed safety briefings and quality checks across units.'
        ],
        dateRange: 'Jan 2021 – Jun 2021'
      },

      // Education: CSUN
      {
        timelineType: 'education',
        name: 'California State University, Northridge (CSUN)',
        title: 'M.S., Engineering Management',
        techStack: 'Operations, Project Management, Data Analytics',
        summaryPoints: [
          'Coursework in project planning, risk, operations research, and analytics.',
          'Team projects focusing on real-world process and cost optimization.'
        ],
        dateRange: 'Aug 2023 – May 2025'
      },

      // Education: NMIT
      {
        timelineType: 'education',
        name: 'Nitte Meenakshi Institute of Technology (NMIT), Bangalore, India',
        title: 'B.Tech., Computer Science Engineering',
        techStack: 'Computer Science Engineering, Software Management',
        summaryPoints: [
          'Studied Computer Science fundamentals, Software Methodologies.',
          'Capstone and labs emphasizing practical software development practices.'
        ],
        dateRange: 'Aug 2018 – Aug 2022'
      }
    ];
  }
}
