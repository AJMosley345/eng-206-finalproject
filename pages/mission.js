import { Divider, Typography, Container, Box } from "@mui/material";
import Header from "../components/Header";
import React from "react";

export default function Mission() {
    return (
        <div style={{ background: '#f6ebf4', width: "100%", height: "100%"  }}>
            <Header />
            <Divider />
            <Container p style={{ background: '#f6ebf4',width: "100%", height: "100%"  }}>
                <Typography style={{ color: 'black' }}>
                    Mission Statement goes here
                </Typography>
            </Container>
        </div>
    );
}


