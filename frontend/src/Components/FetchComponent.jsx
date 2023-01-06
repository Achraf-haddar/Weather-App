import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function FetchComponent({ onChangeName }) {
    const [value, setValue] = useState("")
    const submit = () => {
        onChangeName(value)
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return(
        <>
        <Grid 
            justifyContent="center"
            container
            alignItems="center"
            direction="column"
            style={{ minHeight: "10vh" }}
            spacing={0.5}
        >
            <Grid item>
                <Typography variant="h5" color="primary">
                    Get the weather data
                </Typography>
            </Grid>
        </Grid>
        <Grid 
            justifyContent="center"
            container
            alignItems="center"
            direction="row"
            style={{ minHeight: "5vh" }}
            spacing={2.5}
        >
            <Grid spacing={0.5} container direction="row" alignItems="center" justifyContent="center">
                <TextField
                    variant="outlined"
                    label="URL"
                    sx={{ width: '60ch' }}
                    style={{ marginBottom: "1em", marginTop: "2em", marginRight: "1em" }}
                    onChange={handleChange}
                />
                <Button size="large" variant="contained" color="primary" onClick={submit} style={{ height: 40, marginTop: "1em"  }}>
                    Fetch
                </Button>
            </Grid>
            
        </Grid>
        </>
    )
}