import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';

const gridFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  padding-top: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 70px 1.25rem 2rem;
    text-align: center;
  }
`;

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(79, 142, 247, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 142, 247, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: ${gridFade} 1.5s ease-out forwards;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
`;

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;

  &.orb1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(79, 142, 247, 0.15) 0%, transparent 70%);
    top: -100px;
    right: -150px;
  }

  &.orb2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(126, 179, 255, 0.1) 0%, transparent 70%);
    bottom: 50px;
    left: -100px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
`;

const PreTitle = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;

  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent} 0%, ${({ theme }) => theme.colors.accent2} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.accent2};
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
`;

const HeroTagline = styled(motion.p)`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: ${({ theme }) => theme.colors.muted};
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTARow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(79, 142, 247, 0.35);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 32px rgba(79, 142, 247, 0.5);
  }
`;

const SecondaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.accent2};
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  background: rgba(79, 142, 247, 0.06);
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(79, 142, 247, 0.12);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    gap: 1.5rem;
  }
`;

const Stat = styled(motion.div)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

const StatNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.25rem;
  letter-spacing: 0.04em;
`;

const Divider = styled.div`
  width: 1px;
  height: 3rem;
  background: ${({ theme }) => theme.colors.border};
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection>
      <GridBackground />
      <GlowOrb className="orb1" />
      <GlowOrb className="orb2" />

      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <PreTitle variants={itemVariants}>
            Available for opportunities
          </PreTitle>

          <HeroName variants={itemVariants}>
            <span>Saketh</span> Reddy
          </HeroName>

          <HeroSubtitle variants={itemVariants}>
            Full Stack Developer &nbsp;|&nbsp; Frontend Engineer
          </HeroSubtitle>

          <HeroTagline variants={itemVariants}>
            Crafting performant, accessible, and visually polished web experiences.
            Passionate about clean architecture, great UX, and shipping things that matter.
          </HeroTagline>

          <CTARow variants={itemVariants}>
            <PrimaryBtn
              href="#experience"
              onClick={scrollToWork}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={16} />
              View My Work
            </PrimaryBtn>
            <SecondaryBtn
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Contact Me
            </SecondaryBtn>
          </CTARow>

          <StatsRow variants={itemVariants}>
            <Stat>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </Stat>
            <Divider />
            <Stat>
              <StatNumber>3</StatNumber>
              <StatLabel>Companies</StatLabel>
            </Stat>
            <Divider />
            <Stat>
              <StatNumber>MS</StatNumber>
              <StatLabel>Computer Science</StatLabel>
            </Stat>
          </StatsRow>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
