import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 70px;
  background: rgba(10, 15, 30, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1.25rem;
  }
`;

const Logo = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.05em;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.muted)};
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background: rgba(79, 142, 247, 0.08);
  }

  ${({ $active, theme }) =>
    $active &&
    `
    background: rgba(79,142,247,0.1);
  `}
`;

const HamburgerBtn = styled(motion.button)`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(79, 142, 247, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 15, 30, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 0;
  z-index: 999;
`;

const MobileLink = styled(motion.a)`
  display: block;
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.muted)};
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent2};
    background: rgba(79, 142, 247, 0.06);
  }
`;

const navItems = ['About', 'Experience', 'Skills', 'Education', 'Certifications', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Logo href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          SR
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              $active={activeSection === item.toLowerCase()}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <HamburgerBtn
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </HamburgerBtn>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, i) => (
              <MobileLink
                key={item}
                href={`#${item.toLowerCase()}`}
                $active={activeSection === item.toLowerCase()}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item}
              </MobileLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
