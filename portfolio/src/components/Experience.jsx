import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 1.25rem;
  }
`;

const GlowBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(79, 142, 247, 0.06) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 3.5rem;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accent2},
      transparent
    );
    border-radius: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      left: 16px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 48px;
  }
`;

const Dot = styled(motion.div)`
  position: absolute;
  left: 12px;
  top: 22px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.navy};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 12px rgba(79, 142, 247, 0.5);

  &::after {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 8px;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.75rem;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(79, 142, 247, 0.35);
    background: rgba(79, 142, 247, 0.06);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.25rem;
`;

const RoleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.accent2};
  font-weight: 500;
  white-space: nowrap;
  background: rgba(79, 142, 247, 0.1);
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const Bullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;

  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    margin-top: 0.55rem;
    flex-shrink: 0;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'Mastercard',
    period: 'June 2024 – Present',
    bullets: [
      'Built scalable web applications using JavaScript, TypeScript, Vue.js, and React.js',
      'Implemented ARIA accessibility features and voice announcements ensuring WCAG compliance',
      'Wrote unit, integration, and visual regression tests to maintain high code coverage',
      'Created reusable Vue.js component libraries accelerating feature delivery across teams',
      'Improved page load performance via lazy loading and component rendering optimization',
      'Managed CI/CD pipelines, Docker workflows, PR reviews, and Agile/Scrum ceremonies',
      'Ensured cross-browser compatibility and full mobile responsiveness across all features',
      'Collaborated closely with UX designers and backend teams on end-to-end solutions',
      'Proactively resolved performance bottlenecks reducing rendering time significantly',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Unique Logic Solution',
    period: 'Aug 2023 – May 2024',
    bullets: [
      'Developed full-stack applications using React.js, Node.js, and MongoDB',
      'Designed and implemented RESTful APIs with JWT authentication and RBAC',
      'Integrated third-party APIs and payment gateways into production systems',
      'Built dynamic data-driven dashboards providing real-time business insights',
      'Wrote Jest unit and integration tests achieving high code coverage targets',
      'Optimized application performance via refactoring and database query tuning',
      'Participated in team code reviews, continuously improving overall code quality',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Cognizant',
    period: 'Dec 2021 – July 2022',
    bullets: [
      'Developed React.js UI components within an enterprise agile development environment',
      'Provided backend support using Java and managed MySQL/PostgreSQL databases',
      'Built reusable UI component libraries and maintained comprehensive code documentation',
      'Integrated RESTful APIs connecting frontend interfaces with backend services',
      'Performed bug fixing, performance testing, and team knowledge sharing sessions',
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <GlowBg />
      <Inner>
        <SectionLabel
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Work Experience
        </SectionLabel>
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Where I&apos;ve worked
        </SectionTitle>

        <Timeline>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
            >
              <Dot
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
              />
              <Card
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <CardHeader>
                  <RoleRow>
                    <Role>{exp.role}</Role>
                    <Period>
                      <Calendar size={12} />
                      {exp.period}
                    </Period>
                  </RoleRow>
                  <CompanyRow>
                    <Company>
                      <Briefcase size={14} />
                      {exp.company}
                    </Company>
                  </CompanyRow>
                </CardHeader>

                <BulletList>
                  {exp.bullets.map((b, j) => (
                    <Bullet key={j}>{b}</Bullet>
                  ))}
                </BulletList>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
};

export default Experience;
