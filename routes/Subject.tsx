/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useNavigate } from "../core";

function Subject(): JSX.Element {
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
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Subject"
                onChange={handleChange}
              >
                <MenuItem value={'Biologi'}>Biologi</MenuItem>
                <MenuItem value={'Sejarah'}>Sejarah</MenuItem>
                <MenuItem value={'Geografi'}>Geografi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tingkat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Subject"
                onChange={handleChange}
              >
                <MenuItem value={'Biologi'}>SD</MenuItem>
                <MenuItem value={'Sejarah'}>SMP</MenuItem>
                <MenuItem value={'Geografi'}>SMA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          </Grid>          
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Learning Outcome"
              multiline
              minRows={4}
              maxRows={4}
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Minimal Pertanyaan</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Minimal Pertanyaan"
                onChange={handleChange}
              >
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
              </Select>
            </FormControl>
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

export default Subject;
export type Subject = typeof Subject;
