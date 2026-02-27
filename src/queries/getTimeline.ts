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
        name: ' Swinerton, Los Angeles, CA',
        title: 'Assistant Project Co-ordinator',
        techStack: 'Commercial & Residential Construction, Scheduling, Cost Control',
        summaryPoints: [
          'Coordinated cross-functional on-site resources across active residential construction projects, reducing schedule disruptions by 25%',
          'Managed RFIs, submittals, and drawing coordination in Procore, maintaining 95% on-time field execution',
          'Spearheaded the development of master schedules and look-ahead plans using Primavera P6 and MS Project, mitigating critical path delays by 20% and contributing to on-time project delivery.%',
          'Administered costs, commitments, and change orders across 8+ work packages, leveraging Procore to maintain budget variance within 2.8% and reporting directly to the Senior PM.',
          'Performed drawing reviews and BIM coordination to resolve constructability conflicts, reducing rework by 30%.'
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
          'Led end-to-end construction execution across residential developments, coordinating site teams, subcontractors, and consultants to improve workflow efficiency by 25%.',
          'Developed and managed construction schedules using Primavera P6 and MS Project, reducing schedule slippage and milestone delays by 20%.',
          'Coordinated multi-trade work sequencing and material deliveries, increasing site productivity and reducing downtime by 30%.',
          'Tracked quantities, costs, and change orders while reviewing drawings using AutoCAD, Revit, and Navisworks, reducing rework and maintaining cost variance within ±3%.'
        ],
        dateRange: 'Jun 2021 – Jul 2023'
      },

      // Work: Sitrus Projects India – Intern
      {
        timelineType: 'work',
        name: 'Sitrus Projects India Pvt. Ltd., Hyderabad, India',
        title: 'Construction Project Coordinator',
        techStack: 'Site Supervision, Quantity Takeoff, Documentation',
        summaryPoints: [
          'Facilitated day-to-day on-site construction coordination among engineers, subcontractors, and vendors, increasing workflow continuity and site efficiency by 20%.',
          'Enforced strict document control procedures with zero tolerance to non-compliance, ensuring that all construction activities adhered to regulatory standards, and passed two regulatory audits with zero findings.',
          'Championed the adoption of digital project management tools for schedule tracking, leading to a fully measurable 10% increase in adherence to project timelines across three projects.',
          'Performed quantity tracking, progress measurement, and billing support activities, improving reporting accuracy and field visibility by 20%.',
          'Delivered clear and structured progress updates and coordination summaries, enabling faster issue resolution and effective project decisions by 25%.'
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
