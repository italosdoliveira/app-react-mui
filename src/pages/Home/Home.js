import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/Navbar/Navbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Home()
{
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:3001/person/';
            const response = await fetch(url);
            const json = await response.json();
            setPeople(json);
        }
        fetchData();
    }, [people])

    return(
        <div>
            <Navbar></Navbar>
            <h1>Title</h1>
            <Grid container spacing={2}>
                {/* <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid> */}
                {people && people.map(person => 
                    <Grid item xs={4}><Item>{person.name}</Item></Grid>)}
            </Grid>
            <h2>Subtitle</h2>
        </div>
    )
}