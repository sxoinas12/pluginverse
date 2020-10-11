import React from 'react';

import Navbar from '../../components/NavBar';

export default ({ megaStructure, theme }) => {
  return (
    <div>
      <Navbar theme={theme} megaStructure={megaStructure} />
    </div>

  );
};
