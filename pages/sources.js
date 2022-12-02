import { List, ListItem, Typography, Divider, Box, Grid, ListItemText } from "@mui/material";
import Header from "../components/Header";

const entries = [
    {
        citation: '“Barret and Black Representation.” Sprites and Dice, https://spritesanddice.com/features/barret-and-black-representation/. Accessed 2 Dec. 2022.',
        summary: 'This is a test',
        synthesis: 'This is a test',
        response: 'This is a test',
    },
]

export default function Sources() {
    return(
        <>
            <Header />
            <Divider />
            <Box marginLeft={3} marginTop={3} >
                    {entries.map((entry) =>
                        <List>
                            <Grid container spacing={3}>
                                <ListItem>
                                    <Typography sx={{ color: 'black' }}>
                                        {entry.citation}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{ color: 'black' }}>
                                        {entry.summary}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{ color: 'black' }}>
                                        {entry.synthesis}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography sx={{ color: 'black' }}>
                                        {entry.response}
                                    </Typography>
                                </ListItem>
                            </Grid>
                        </List>
                    )}
            </Box>
        </>
    );
}