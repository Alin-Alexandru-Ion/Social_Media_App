import React from 'react';
import './Footer.css'

import { Stack } from '@mui/material'

function Footer() {
    return (
      <Stack justify-content="center" alignItems="center" spacing={2} sx={{ mt: 1 }} >
        <footer className='footer'>
          <p className="copyright">© 2023 Alin-Alexandru Ion Development. All rights reserved.</p>
        </footer>
      </Stack >
    );
  }

  export default Footer;