import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, rgba(222,46,15,1) 0%, rgba(217,116,28,1) 35%, rgba(213,70,9,1) 100%);
`;

const Header = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Box display="flex" justifyContent="center" flexGrow={1}>
        <Typography variant="h5">
          Wyszukiwarka przepisów --- Adam Maksymiuk
        </Typography>
      </Box>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
