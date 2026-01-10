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
        title: 'Assistant Project Manager',
        techStack: 'Commercial & Residential Construction, Scheduling, Cost Control',
        summaryPoints: [
          'Coordinated cross-functional on-site resources across active residential construction projects, reducing schedule disruptions by 25%',
          'Managed RFIs, submittals, and drawing coordination in Procore, maintaining 95% on-time field execution',
          'Supported master schedules and look-ahead planning using Primavera P6 and MS Project, reducing critical path delays by 20%',
          'Tracked costs, commitments, and change orders across multiple work packages, maintaining budget variance within ±3%.',
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
          'Facilitated day-to-day on-site construction coordination among engineers, subcontractors, and vendors, increasing workflow continuity and site efficiency by 20%.',
          'Contributed to look-ahead planning and short-term schedule tracking, supporting a 15% reduction in near-term execution delays.',
          'Performed quantity tracking, progress measurement, and billing support activities, improving reporting accuracy and field visibility by 20%',
          'Delivered clear and structured progress updates and coordination summaries, enabling faster issue resolution and more effective project decisions by 25%'
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
