import { Container } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useRef } from 'react';

const timelineData = [
  {
   
    
  id: 1,
  title: 'MERN Stack Developer Intern',
  company: 'Council for Skills and Competencies (CSC India) | APSCHE',
  date: 'May 2026 - Jun 2026 | Remote',
  description: [
    'Developed a scalable full-stack MERN food delivery platform with customer and admin dashboards for managing orders, products, and users.',
    'Designed and implemented secure RESTful APIs using JWT Authentication and Role-Based Access Control (RBAC).',
    
  ],
    icon: <FaBriefcase />,
    type: 'experience'
  },
  {
    id: 2,
    title: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    date: 'Jun 2025 - Aug 2025 | Remote',
    description: [
      'Developed responsive websites with semantic HTML, modern CSS layouts, and JavaScript-based interactivity.',
      'Implemented DOM manipulation, form validation, animations, and responsive design principles.',
      
    ],
    icon: <FaBriefcase />,
    type: 'experience'
  },
  {
    id: 3,
    title: 'Bachelor of Technology in CSE',
    company: "Vignan's Institute of Information Technology",
    date: '2023 - 2027',
    description: [
      'Pursuing B.Tech in Computer Science Engineering.',
      'Current CGPA: 8.94.',
      'Active in competitive programming and hackathons.'
    ],
    icon: <FaGraduationCap />,
    type: 'education'
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="position-relative">
      <Container>
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience & <span className="text-accent">Education</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--accent-color)', margin: '10px auto', borderRadius: '2px' }}
          />
        </div>

        <div className="timeline-container mt-5" ref={containerRef}>
          {/* Animated Center Line */}
          <motion.div 
            className="timeline-progress-line"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />
          <div className="timeline-bg-line" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              >
                <motion.div 
                  className="timeline-icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                >
                  {item.icon}
                </motion.div>

                <div className="timeline-content glass-panel p-4">
                  <h4 style={{ color: '#fff', marginBottom: '5px' }}>{item.title}</h4>
                  <h6 className="text-accent mb-3">{item.company} | {item.date}</h6>
                  <ul style={{ color: '#ccc', margin: 0, paddingLeft: '20px', fontSize: '0.95rem' }}>
                    {item.description.map((point, i) => (
                      <li key={i} style={{ marginBottom: '5px' }}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding-bottom: 50px;
        }

        /* The faint background line */
        .timeline-bg-line {
          position: absolute;
          width: 4px;
          background-color: var(--glass-border);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          border-radius: 4px;
          z-index: 0;
        }

        /* The glowing animated progress line */
        .timeline-progress-line {
          position: absolute;
          width: 4px;
          background-color: var(--accent-color);
          box-shadow: 0 0 15px var(--accent-color);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          border-radius: 4px;
          z-index: 1;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
          z-index: 2;
        }

        .timeline-item.left {
          left: 0;
        }

        .timeline-item.right {
          left: 50%;
        }

        .timeline-icon {
          position: absolute;
          width: 50px;
          height: 50px;
          right: -25px;
          background: var(--bg-color);
          border: 4px solid var(--accent-color);
          top: 15px;
          border-radius: 50%;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--accent-light);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
        }

        .timeline-item.right .timeline-icon {
          left: -25px;
        }

        .timeline-content {
          position: relative;
          border-radius: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          border-color: var(--accent-light);
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
          .timeline-bg-line, .timeline-progress-line {
            left: 31px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          
          .timeline-item.right {
            left: 0;
          }
          
          .timeline-item.left .timeline-icon,
          .timeline-item.right .timeline-icon {
            left: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
