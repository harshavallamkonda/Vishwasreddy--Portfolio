import React, { useEffect, useState } from 'react';
// Remove react-vertical-timeline-component for custom card layout
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);


  if (!timeLineData) return <div>Loading...</div>;

  return (
    <div className="timeline-container" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
      <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {timeLineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-card ${item.timelineType} ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ 
              '--card-index': index,
              transform: `translateY(${scrollY * (index % 2 === 0 ? -0.05 : 0.05)}px)`
            } as React.CSSProperties}
          >
            <div className="rotating-line" />
            <div className="timeline-card-content">
              <div className="timeline-card-header">
                <span className="timeline-date">{item.dateRange}</span>
                <span className="timeline-icon">{item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}</span>
              </div>
              <h3 className="timeline-title-main">{item.timelineType === 'work' ? item.title : item.name}</h3>
              <h4 className="timeline-title-sub">{item.timelineType === 'work' ? item.name : item.title}</h4>
              <p className="timeline-tech">{item.techStack}</p>
              <ul className="timeline-bullets">
                {item.summaryPoints.map((point, i) => (
                  <li key={i} className={expandedItems[index] || i < 2 ? 'visible' : 'hidden'}>{point}</li>
                ))}
              </ul>
              {item.summaryPoints.length > 2 && (
                <button
                  className="toggle-btn"
                  onClick={() => setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }))}
                >
                  {expandedItems[index] ? 'Show less' : `Show ${item.summaryPoints.length - 2} more`}
                </button>
              )}
            </div>
            <div className="timeline-connector"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
