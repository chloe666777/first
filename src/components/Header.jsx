import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="ICEFORM 首页">
        <span className="brand-mark" />
        ICEFORM
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav ${open ? 'open' : ''}`} aria-label="主导航">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={closeMenu}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/contact" onClick={closeMenu}>
        获取报价
      </Link>
    </header>
  );
}
