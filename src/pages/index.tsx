import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { gql } from '@apollo/client';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
      </Box>
    </Container>
  );
}
