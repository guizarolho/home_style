import React from 'react';
import './Navbar.scss';
import ToggleButton from './ToggleButton';

export default function Navbar() {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleClick = (() => {
    const element = document.querySelector('.text-container');
    element.scrollIntoView({behavior: 'smooth'});
  })

  return (
    <div className="container">
      <nav className={scroll ? 'solid' : 'transparent'}>
        <ul>
          <li onClick={(() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          }))}>Personal Portfolio</li>
          <li><ToggleButton /></li>
        </ul>
      </nav>
      <span className="arrow" onClick={handleClick}/>
    </div>
  )
}