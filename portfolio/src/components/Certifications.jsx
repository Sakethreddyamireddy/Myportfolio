import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

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

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 1.75rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.3s, background 0.3s;

  &:hover {
    border-color: rgba(79, 142, 247, 0.35);
    background: rgba(79, 142, 247, 0.05);
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(79, 142, 247, 0.15) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(79, 142, 247, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
  flex: 1;
`;

const Platform = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  background: rgba(79, 142, 247, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 0.25rem 0.7rem;
  align-self: flex-start;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const certs = [
  {
    title: 'The Ultimate React Course',
    platform: 'Udemy',
  },
  {
    title: 'Vue.js for Modern Web Development',
    platform: 'Udemy',
  },
  {
    title: 'Python for Everybody',
    platform: 'Coursera',
  },
];

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionLabel
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Certifications
      </SectionLabel>
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Courses &amp; credentials
      </SectionTitle>

      <CardsGrid
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {certs.map((cert, i) => (
          <Card
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <CardGlow />
            <IconWrap>
              <Award size={22} />
            </IconWrap>
            <CardTitle>{cert.title}</CardTitle>
            <Platform>
              <ExternalLink size={11} />
              {cert.platform}
            </Platform>
          </Card>
        ))}
      </CardsGrid>
    </Section>
  );
};

export default Certifications;
