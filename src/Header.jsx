import React from 'react';
import './Header.css'; // Estilos podem ser adaptados no CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PIXEL GRID</div>
      <nav className="navbar">
        <a href="#live">Ao Vivo</a>
        <a href="#races">+Corridas</a>
        <a href="#community">Comunidade</a>
        <a href="#statistics">Estatísticas</a>
        <a href="#more">Mais</a>
      </nav>
      <button className="subscribe-button">+ Inscrever-se</button>
    </header>
  );
};

export default Header;
