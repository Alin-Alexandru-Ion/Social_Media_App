import React from 'react';
import './Footer.css'

import { Stack, Typography } from '@mui/material'

function Footer() {
    return (
      <Stack justify-content="center" alignItems="center" spacing={2} sx={{ mt: 1 }} >
        <footer >
          <Typography sx={{ fontSize: 12 }} >© 2023 Alin-Alexandru Ion Development. All rights reserved.
          </Typography >
        </footer >
      </Stack >
    );
  }

  export default Footer;