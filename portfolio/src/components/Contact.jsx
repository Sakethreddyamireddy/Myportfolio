import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const Section = styled.section`
  padding: 6rem 2rem 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 1.25rem 0;
  }
`;

const GlowBg = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(79, 142, 247, 0.08) 0%, transparent 70%);
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const SubText = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  margin-bottom: 3rem;
`;

const ContactLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 3rem;
`;

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  backdrop-filter: blur(10px);
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(79, 142, 247, 0.08);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LinkLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const LinkInfo = styled.div`
  text-align: left;
`;

const LinkLabel = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.15rem;
`;

const LinkValue = styled.div`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

const SocialRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const SocialBtn = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.2s, background 0.2s, border-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: rgba(79, 142, 247, 0.1);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Footer = styled.footer`
  padding: 2rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  margin-top: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Contact = () => {
  return (
    <>
      <Section id="contact">
        <GlowBg />
        <Inner>
          <SectionLabel
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Get In Touch
          </SectionLabel>
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Let&apos;s work together
          </SectionTitle>
          <SubText
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project in mind, or just want to say hi — my inbox is
            always open.
          </SubText>

          <ContactLinks
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <ContactLink
              variants={fadeUp}
              href="mailto:sakethreddy2207@gmail.com"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <LinkLeft>
                <IconWrap><Mail size={18} /></IconWrap>
                <LinkInfo>
                  <LinkLabel>Email</LinkLabel>
                  <LinkValue>sakethreddy2207@gmail.com</LinkValue>
                </LinkInfo>
              </LinkLeft>
              <ArrowUpRight size={16} color="#7a8ba8" />
            </ContactLink>

            <ContactLink
              variants={fadeUp}
              href="tel:3168892600"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <LinkLeft>
                <IconWrap><Phone size={18} /></IconWrap>
                <LinkInfo>
                  <LinkLabel>Phone</LinkLabel>
                  <LinkValue>(316) 889-2600</LinkValue>
                </LinkInfo>
              </LinkLeft>
              <ArrowUpRight size={16} color="#7a8ba8" />
            </ContactLink>

            <ContactLink
              variants={fadeUp}
              href="https://linkedin.com/in/sakethreddy2207"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <LinkLeft>
                <IconWrap><LinkedinIcon size={18} /></IconWrap>
                <LinkInfo>
                  <LinkLabel>LinkedIn</LinkLabel>
                  <LinkValue>linkedin.com/in/sakethreddy2806</LinkValue>
                </LinkInfo>
              </LinkLeft>
              <ArrowUpRight size={16} color="#7a8ba8" />
            </ContactLink>

            <ContactLink
              variants={fadeUp}
              href="https://github.com/Sakethreddyamireddy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <LinkLeft>
                <IconWrap><GithubIcon size={18} /></IconWrap>
                <LinkInfo>
                  <LinkLabel>GitHub</LinkLabel>
                  <LinkValue>github.com/Sakethreddyamireddy</LinkValue>
                </LinkInfo>
              </LinkLeft>
              <ArrowUpRight size={16} color="#7a8ba8" />
            </ContactLink>
          </ContactLinks>

          <SocialRow
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SocialBtn
              href="https://linkedin.com/in/sakethreddy2207"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedinIcon size={18} />
            </SocialBtn>
            <SocialBtn
              href="https://github.com/Sakethreddyamireddy"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon size={18} />
            </SocialBtn>
            <SocialBtn
              href="mailto:sakethreddy2207@gmail.com"
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={18} />
            </SocialBtn>
          </SocialRow>
        </Inner>
      </Section>

      <Footer>
        <Copyright>© 2025 Saketh Reddy. All rights reserved.</Copyright>
      </Footer>
    </>
  );
};

export default Contact;
