import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

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
  right: -200px;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(79, 142, 247, 0.07) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
`;

const Inner = styled.div`
  max-width: 1100px;
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
  margin-bottom: 3rem;
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    border-color: rgba(79, 142, 247, 0.35);

    &::before {
      opacity: 1;
    }
  }
`;

const IconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(79, 142, 247, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.25rem;
`;

const Degree = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.3rem;
`;

const Field = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent2};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.83rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const educations = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    institution: 'Wichita State University',
    location: 'Wichita, KS',
    period: '2022 – 2024',
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Anurag Group of Institutions',
    location: 'Hyderabad, India',
    period: '2018 – 2022',
  },
];

const Education = () => {
  return (
    <Section id="education">
      <GlowBg />
      <Inner>
        <SectionLabel
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Education
        </SectionLabel>
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Academic background
        </SectionTitle>

        <CardsGrid
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {educations.map((edu, i) => (
            <Card
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <IconCircle>
                <GraduationCap size={24} />
              </IconCircle>
              <Degree>{edu.degree}</Degree>
              <Field>{edu.field}</Field>
              <Meta>
                <MetaRow>
                  <GraduationCap size={13} />
                  {edu.institution}
                </MetaRow>
                <MetaRow>
                  <MapPin size={13} />
                  {edu.location}
                </MetaRow>
                <MetaRow>
                  <Calendar size={13} />
                  {edu.period}
                </MetaRow>
              </Meta>
            </Card>
          ))}
        </CardsGrid>
      </Inner>
    </Section>
  );
};

export default Education;
