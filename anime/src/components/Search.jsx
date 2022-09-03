import { Box } from '@mui/system'
import React from 'react'
import { TextField } from '@mui/material';

const Search = ({setQ,q,filteredPerson}) => {
    // const filtered = filteredPerson.map(person =>  <Card key={person.id} person={person} />); 
 
  return (
    <Box sx={{marginTop:"20px"}}>
        <TextField fullWidth label="search.." id="fullWidth" placeholder='search..' value={q} onChange={(e)=>setQ(e.target.value) }/>

    </Box>
  )
}

export default Search