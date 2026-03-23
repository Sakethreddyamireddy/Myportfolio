import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Bio = styled(motion.div)``;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  background: rgba(79, 142, 247, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent2};
  margin-bottom: 1.5rem;
`;

const BioText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

const ContactCards = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(79, 142, 247, 0.08);
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
  }
`;

const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(79, 142, 247, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0.15rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const CardValue = styled.span`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <Section id="about">
      <SectionLabel
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        About Me
      </SectionLabel>
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Passionate about building
        <br />
        great software
      </SectionTitle>

      <Grid>
        <Bio
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Badge variants={fadeUp}>
            <Briefcase size={13} />
            Currently at Mastercard
          </Badge>

          <motion.div variants={fadeUp}>
            <BioText>
              I&apos;m a <strong>Full Stack Developer</strong> based in{' '}
              <strong>New York</strong>, currently working as a{' '}
              <strong>Frontend Engineer at Mastercard</strong>. I hold a{' '}
              <strong>Master&apos;s in Computer Science</strong> from Wichita
              State University.
            </BioText>
            <BioText>
              I specialize in building <strong>scalable, accessible, and
              performant</strong> web applications using modern frameworks like{' '}
              <strong>React.js</strong>, <strong>Vue.js</strong>, and{' '}
              <strong>Node.js</strong>. I care deeply about code quality,
              developer experience, and shipping things users love.
            </BioText>
            <BioText>
              Outside of coding, I enjoy staying current with frontend trends,
              contributing to team culture, and collaborating across UX and
              backend engineering teams to deliver polished end-to-end solutions.
            </BioText>
          </motion.div>
        </Bio>

        <ContactCards
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <ContactCard
            variants={fadeUp}
            href="mailto:sakethreddy2207@gmail.com"
          >
            <IconWrap><Mail size={18} /></IconWrap>
            <CardInfo>
              <CardLabel>Email</CardLabel>
              <CardValue>sakethreddy2207@gmail.com</CardValue>
            </CardInfo>
          </ContactCard>

          <ContactCard variants={fadeUp} href="tel:3168892600">
            <IconWrap><Phone size={18} /></IconWrap>
            <CardInfo>
              <CardLabel>Phone</CardLabel>
              <CardValue>(316) 889-2600</CardValue>
            </CardInfo>
          </ContactCard>

          <ContactCard
            variants={fadeUp}
            href="https://linkedin.com/in/sakethreddy2207"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrap><LinkedinIcon /></IconWrap>
            <CardInfo>
              <CardLabel>LinkedIn</CardLabel>
              <CardValue>linkedin.com/in/sakethreddy2207</CardValue>
            </CardInfo>
          </ContactCard>

          <ContactCard variants={fadeUp} href="#">
            <IconWrap><MapPin size={18} /></IconWrap>
            <CardInfo>
              <CardLabel>Location</CardLabel>
              <CardValue>New York, USA</CardValue>
            </CardInfo>
          </ContactCard>
        </ContactCards>
      </Grid>
    </Section>
  );
};

export default About;
