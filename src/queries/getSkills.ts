// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { Skill } from '../types';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
             {
        name: "Procore",
        category: "Construction Tools & Platforms",
        description: "Construction project management software",
        icon: "FaHammer"
      },

      // Other Skills: "Procore",
        category: "Construction Tools & Platforms",
        description: "Construction project management software",
        icon: "FaHammer"
      },

      // Other Skills  description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  try {
    const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
    return data.allSkills;
  } catch (error) {
    console.warn('Failed to fetch skills from DatoCMS:', error);
    // Return mock data for development - Construction & Project Management Focus
    return [
      // Methodologies & Processes
      {
        name: "Project Lifecycle Management",
        category: "Methodologies & Processes",
        description: "End-to-end project oversight from conception to completion",
        icon: "FaProjectDiagram"
      },
      {
        name: "Waterfall & Agile Delivery",
        category: "Methodologies & Processes", 
        description: "Flexible project delivery methodologies for diverse requirements",
        icon: "FaTasks"
      },
      {
        name: "Lean Construction Practices",
        category: "Methodologies & Processes",
        description: "Waste reduction and efficiency optimization in construction",
        icon: "FaIndustry"
      },
      {
        name: "Risk Management & Mitigation",
        category: "Methodologies & Processes",
        description: "Proactive identification and management of project risks",
        icon: "FaShieldAlt"
      },
      {
        name: "Safety & Quality Assurance",
        category: "Methodologies & Processes",
        description: "OSHA compliance and quality control standards",
        icon: "FaHardHat"
      },

      // Project Management & Execution
      {
        name: "Site Development",
        category: "Project Management & Execution",
        description: "Ground-up site planning and development coordination",
        icon: "FaMapMarkedAlt"
      },
      {
        name: "Residential Construction",
        category: "Project Management & Execution",
        description: "Multi-family and single-family residential project delivery",
        icon: "FaHome"
      },
      {
        name: "Budgeting & Cost Control",
        category: "Project Management & Execution",
        description: "Financial planning and expenditure management",
        icon: "FaDollarSign"
      },
      {
        name: "Scheduling & Resource Planning",
        category: "Project Management & Execution",
        description: "Timeline optimization and resource allocation",
        icon: "FaCalendarAlt"
      },
      {
        name: "Procurement & Supply Chain",
        category: "Project Management & Execution",
        description: "Vendor management and material procurement",
        icon: "FaTruck"
      },
      {
        name: "Client & Stakeholder Management",
        category: "Project Management & Execution",
        description: "Relationship building and communication coordination",
        icon: "FaHandshake"
      },

      // Business & Analysis Skills
      {
        name: "QTO & Estimation",
        category: "Business & Analysis Skills",
        description: "Quantity takeoff and accurate project cost estimation",
        icon: "FaCalculator"
      },
      {
        name: "Contractor Bill Verification",
        category: "Business & Analysis Skills", 
        description: "Invoice validation and payment processing oversight",
        icon: "FaFileInvoiceDollar"
      },
      {
        name: "Cost & ROI Analysis",
        category: "Business & Analysis Skills",
        description: "Financial performance and return on investment analysis",
        icon: "FaChartLine"
      },
      {
        name: "Workflow Optimization",
        category: "Business & Analysis Skills",
        description: "Process improvement and efficiency enhancement",
        icon: "FaCogs"
      },
      {
        name: "SWOT & Risk Assessment",
        category: "Business & Analysis Skills",
        description: "Strategic analysis and risk evaluation frameworks",
        icon: "FaSearchDollar"
      },

      // Data Visualization & Reporting
      {
        name: "Power BI",
        category: "Data Visualization & Reporting",
        description: "Interactive dashboards and business intelligence",
        icon: "SiPowerbi"
      },
      {
        name: "MS Excel",
        category: "Data Visualization & Reporting",
        description: "Advanced spreadsheet analysis and modeling",
        icon: "SiMicrosoftexcel"
      },
      {
        name: "AutoCAD",
        category: "Data Visualization & Reporting",
        description: "Technical drawing and design documentation",
        icon: "SiAutodesk"
      },
      {
        name: "Tableau",
        category: "Data Visualization & Reporting",
        description: "Data visualization and analytics platform",
        icon: "SiTableau"
      },

      // Construction Tools & Platforms
      {
        name: "MS Project",
        category: "Construction Tools & Platforms",
        description: "Project scheduling and resource management",
        icon: "FaBuilding"
      },
      {
        name: "Primavera P6",
        category: "Construction Tools & Platforms",
        description: "Enterprise project portfolio management",
        icon: "FaBuilding"
      },
      {
        name: "Procore",
        category: "Construction Tools & Platforms",
        description: "Construction project management platform",
        icon: "FaTools"
      },
      {
        name: "Bluebeam Revu",
        category: "Construction Tools & Platforms",
        description: "PDF creation, markup and collaboration",
        icon: "FaFilePdf"
      },
      {
        name: "Buildertrend",
        category: "Construction Tools & Platforms",
        description: "Construction project management software",
        icon: "FaHammer"
      },
      {
        name: "AWS Cloud",
        category: "Construction Tools & Platforms",
        description: "Cloud infrastructure and data management",
        icon: "FaAws"
      },

      // Other Skills
      {
        name: "Contract Administration",
        category: "Other Skills",
        description: "Legal document management and vendor relations",
        icon: "FaFileContract"
      },
      {
        name: "Permitting & Zoning Compliance",
        category: "Other Skills",
        description: "Regulatory compliance and permit acquisition",
        icon: "FaCertificate"
      },
      {
        name: "OSHA Safety Standards",
        category: "Other Skills",
        description: "Workplace safety regulations and compliance",
        icon: "FaExclamationTriangle"
      },
      {
        name: "Stakeholder Communication",
        category: "Other Skills",
        description: "Multi-party coordination and reporting",
        icon: "FaComments"
      },

      // Newly added skills
      {
        name: "Mentorship & Leadership",
        category: "Other Skills",
        description: "Team guidance, coaching, and cross-functional leadership",
        icon: "FaUsers"
      },
      {
        name: "Public Speaking & Stakeholder Presentations",
        category: "Other Skills",
        description: "Clear communication of project scope, status, and decisions",
        icon: "FaMicrophone"
      },
      {
        name: "Contract Law & Claims Management",
        category: "Other Skills",
        description: "Change orders, claims, and contractual risk management",
        icon: "FaGavel"
      }
    ];
  }
}
