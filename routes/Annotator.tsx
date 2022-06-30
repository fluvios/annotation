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
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from "../core";

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function Annotator(): JSX.Element {
  const navigate = useNavigate();
  const [subject, setSubject] = React.useState('');
  const [alignment, setAlignment] = React.useState('web');

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

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
            <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label="Materi"
              multiline
              minRows={8}
              maxRows={8}              
              id="password"
              autoComplete="new-password" />
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pertanyaan 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography>
          <Div>{"Jenis Pertanyaan yang akan dibuat"}</Div>
          </Typography>
          <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleToggle}
    >
      <ToggleButton value="type1">Type 1</ToggleButton>
      <ToggleButton value="type2">Type 2</ToggleButton>
      <ToggleButton value="type3">Type 3</ToggleButton>
      <ToggleButton value="type4">Type 4</ToggleButton>
    </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12}>
    <TextField
              fullWidth
              name="password"
              label="Highlight Text untuk dasar pertanyaan"
              multiline
              minRows={4}
              maxRows={4}              
              id="password"
              autoComplete="new-password"
            />
    </Grid>   
    <Grid item xs={9}></Grid>       
    <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Selesai Highlight
            </Button>
          </Grid>                                        
          <Grid item xs={12}>
          <TextField
              fullWidth
              name="password"
              label="Tulis Pertanyaan"
              multiline
              minRows={4}
              maxRows={4}              
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
              fullWidth
              name="password"
              label="Jawaban yang diharapkan"
              multiline
              minRows={4}
              maxRows={4}              
              id="password"
              autoComplete="new-password"
            />  
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Simpan Pertanyaan
            </Button>
          </Grid>                                        
        </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Tambah Pertanyaan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
              </Grid>
      <Grid item xs={12}>
      <TextField
              fullWidth
              name="password"
              label="Feedback"
              multiline
              minRows={3}
              maxRows={3}              
              id="password"
              autoComplete="new-password"
            />
      </Grid>
      <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Submit Feedback
            </Button>
          </Grid>                

            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}>

              </Grid>
              <Grid item xs={3}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Anotasi Materi Berikutnya
            </Button>
              </Grid>
              <Grid item xs={2}>

              </Grid>
              <Grid item xs={3}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Selesai/Kembali ke Dashboard
            </Button>
              </Grid>
              <Grid item xs={2}>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  </Container>
  );
}

export default Annotator;
export type Annotator = typeof Annotator;
