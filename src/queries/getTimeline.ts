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
          'Coordinated daily field operations and design reviews, ensuring alignment between architects, vendors, and site teams for smooth project execution',
          'Streamlined RFIs, submittals, and coordination through Procore, Asana, and SharePoint, reducing delays by 25%.',
          'Tracked budgets, change orders, and costs via Power BI, Excel, and ERP systems, improving accuracy by 20%.',
          'Reviewed drawings and QA/QC documentation using AutoCAD, Revit, and BIM 360, maintaining 100% compliance.',
          'Delivered reports and closeout packages with DocuSign and Adobe Acrobat Pro, enhancing client efficiency by 30%.'
        ],
        dateRange: 'Jan 2025 – Present'
      },

      // Work: Sitrus Projects India – Project Manager
      {
        timelineType: 'work',
        name: 'Sitrus Projects Bengaluru, India',
        title: 'Construction Project Manager',
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
        title: 'Project Coordinator',
        techStack: 'Site Supervision, Quantity Takeoff, Documentation',
        summaryPoints: [
          'Orchestrated communication between consultants, site engineers, and vendors, eliminating information gaps and standardizing technical alignment, reducing miscommunication by 90%.',
          'Administered drawing and document control systems in Procore, managing approval logs, transmittals, and version compliance to ensure teams operated on current, validated construction documents.',
          'Sustained schedule reliability by maintaining rolling look-ahead plans and dependency trackers, reinforcing execution readiness across active work fronts.',
          'Consolidated multidisciplinary inputs to identify interface gaps, constructability conflicts, and coordination risks prior to site implementation.',
          'Prepared structured progress summaries and exception reports for leadership, enabling timely decision-making and preventive issue resolution.'
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
