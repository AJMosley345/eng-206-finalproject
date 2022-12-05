import { Divider, Typography, Container, Box } from "@mui/material";
import Header from "../components/Header";
import React from "react";

export default function Mission() {
    return (
        <div style={{ background: '#f6ebf4', width: "100%", height: "100%"  }}>
            <Header />
            <Divider />
            <Container p style={{ background: '#f6ebf4',width: "100%", height: "100%"  }}>
                <Typography p style={{ color: 'black' }}>
                    The idea behind this project is to show how black representation has evolved in video games over the years.
                    The timeline speaks for itself, but it begins as mostly racist or at least stereotypical representation, and slowly evolves to more nuanced characters that are more than just black.
                    The connection between black aesthetics (Taylor), and video games is strong. I hope the timeline page brings that more to light.
                    I make brief mention of the controversy that surrounds black characters, because it is another interesting avenue of thought.
                    Since it's a break from the norm (white male), it brings people out of the woodwork that describe it as "woke".
                    Hopefully this project is able to show the progress that has been made in black representation in video games, but also show that we have a long way to go in terms of both being good and acceptance.
                </Typography>
            </Container>
        </div>
    );
}


