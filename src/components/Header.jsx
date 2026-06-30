import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../data/siteData';
import { Menu, X } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <Link className="site-header__brand" to="/" onClick={closeMenu}>
        <LogoMark />
        ICEFORM
      </Link>
      <nav className={`site-header__nav${open ? ' open' : ''}`} aria-label="主导航">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="site-header__actions">
        <Link className="btn btn--primary btn--sm" to="/contact" onClick={closeMenu}>
          获取报价
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
