import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 1.25rem;
  }
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
  margin-bottom: 3rem;
`;

const CategoriesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(79, 142, 247, 0.3);
    background: rgba(79, 142, 247, 0.05);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.1rem;
`;

const CategoryIcon = styled.div`
  font-size: 1.2rem;
`;

const CategoryName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.02em;
`;

const PillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Pill = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.8rem;
  background: rgba(79, 142, 247, 0.1);
  border: 1px solid rgba(79, 142, 247, 0.2);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent2};
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  cursor: default;

  &:hover {
    background: rgba(79, 142, 247, 0.2);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const skillCategories = [
  {
    icon: '⚡',
    name: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React.js', 'HTML5', 'CSS3', 'PWA'],
  },
  {
    icon: '🔧',
    name: 'Backend',
    skills: ['Node.js', 'Java', 'Spring Boot'],
  },
  {
    icon: '🗄️',
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: '🚀',
    name: 'Tools & DevOps',
    skills: ['Docker', 'CI/CD Pipelines', 'Git'],
  },
  {
    icon: '🧪',
    name: 'Testing',
    skills: ['Unit Testing', 'Integration Testing', 'Visual Regression Testing'],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <SectionLabel
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Technical Skills
      </SectionLabel>
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        What I work with
      </SectionTitle>

      <CategoriesGrid
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skillCategories.map((cat, i) => (
          <CategoryCard
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <CategoryHeader>
              <CategoryIcon>{cat.icon}</CategoryIcon>
              <CategoryName>{cat.name}</CategoryName>
            </CategoryHeader>
            <PillsWrap>
              {cat.skills.map((skill, j) => (
                <Pill
                  key={j}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </Pill>
              ))}
            </PillsWrap>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </Section>
  );
};

export default Skills;
