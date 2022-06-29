/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from "../core";

function Annotator(): JSX.Element {
  const navigate = useNavigate();
  const [subject, setSubject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    // setSubject(event.target.value as string);
    console.log(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  return (
    <Container component="main" maxWidth="xl" minWidth="l">
    <CssBaseline />
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Instruksi"
              multiline
              minRows={4}
              maxRows={4}
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="password"
              label="Learning Outcomes"
              multiline
              minRows={3}
              maxRows={3}              
              id="password"
              autoComplete="new-password"
            />
            <br />
          <TextField
              fullWidth
              name="password"
              label="Materi"
              multiline
              minRows={8}
              maxRows={8}              
              id="password"
              autoComplete="new-password"
            />
            
          </Grid>
          <Grid item xs={6}>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <TextField
              fullWidth
              name="password"
              label="Learning Outcomes"
              multiline
              minRows={3}
              maxRows={3}              
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Submit Materi
            </Button>
          </Grid>          
        </Grid>
      </Box>
  </Container>
  );
}

export default Annotator;
export type Annotator = typeof Annotator;
