import { Typography, Container, Link } from '@mui/material';
import React from "react";

export default function Header() {
  return(
    <Container style={{ alignContent: 'center'}}>         
    <Typography variant='h3' align='center' color="black">Black Representation Throughout the History of Video Games</Typography>
    <div style={{ color: "black" }}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/mission">Mission Statement</Link>
      </div>
      <div>
        <Link href="/sources">Sources</Link>
      </div>
    </div>
  </Container>
  );
}