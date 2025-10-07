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
        title: 'Business Operations Analyst',
        techStack: 'Commercial & Residential Construction, Scheduling, Cost Control',
        summaryPoints: [
          'Orchestrated KPI dashboards in Excel/Power BI, improving reporting accuracy by 20% and enabling Lean Six Sigma–driven decision-making.',
          'Applied Lean Six Sigma to procurement and logistics data, reducing cycle delays by 15% and cutting excess carrying costs',
          'Coordinated municipal inspections and permitting schedules, expediting approvals and minimizing downtime.',
          'Achieved cost-control measures and streamlined invoice reconciliation for $150K+ projects, reducing budget variances by 12%',
          'Optimized compliance workflows with cross-functional teams, achieving 100% OSHA adherence and a 15% reduction in rework.'
        ],
        dateRange: 'Jan 2025 – Present'
      },

      // Work: Sitrus Projects India – Project Manager
      {
        timelineType: 'work',
        name: 'Sitrus Projects India Pvt. Ltd., Hyderabad, India',
        title: 'Project Operations Manager',
        techStack: 'Residential Construction, Vendor Management, Quality & Safety',
        summaryPoints: [
          'Spearheaded end-to-end execution of residential developments, achieving 95% milestone adherence while ensuring compliance with zoning,permitting, and safety standards',
          'Implemented vendor scorecards and procurement strategies, cutting costs by 12% and reducing rework by 15%.',
          'Standardized workflows and SOPs across multiple sites, boosting efficiency and ensuring consistent quality.',
          'Delivered weekly KPI dashboards and financial reports in Excel/Power BI, enhancing leadership visibility.'
        ],
        dateRange: 'Jun 2021 – Jul 2023'
      },

      // Work: Sitrus Projects India – Intern
      {
        timelineType: 'work',
        name: 'Sitrus Projects India Pvt. Ltd., Hyderabad, India',
        title: 'Sales Operations Analyst Intern',
        techStack: 'Site Supervision, Quantity Takeoff, Documentation',
        summaryPoints: [
          'Developed cost-tracking and vendor analysis reports in Excel, improving budget forecasting accuracy by 10%.',
          'Built operational dashboards to monitor site progress, resources, and KPIs, enabling faster data-driven reviews.',
          'Applied Lean Six Sigma to streamline approval workflows, reducing municipal clearance delays by 20%',
          'Performed quantity take-offs, cost variance checks, and ROI analysis on multi-acre projects.',
          'Standardized reporting templates, improving communication and ensuring 95%+ milestone tracking accuracy'
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
