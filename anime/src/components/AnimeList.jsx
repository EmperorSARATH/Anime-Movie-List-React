import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import { CardMedia, Container, Typography } from '@mui/material';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AnimeList = ({filteredPersons,items,setItems}) => {


const [loaded,setIsLoaded]=useState(false)
// const[items,setItems]=useState([])
const [error, setError] = useState(null);



    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
   
  return (
        
        <Container sx={{bgcolor:"#2367"}}>
            
          
        {filteredPersons.map((item=>(
             <Row style={{display:"inline-flex",marginRight:"10px",marginBottom:"10px"}}>
             
            <Col  xs={12} md={4} lg={3} >
            <Card key={item.id} >
                <Typography variant={"h6"}  gutterBottom >
                {item.title}
                </Typography>
                <CardMedia  component="img"
                            height="194"
                            image={item.image}/>
            </Card>
            </Col>
            </Row>
        )))}
         
        </Container>
  )
}
}

export default AnimeList