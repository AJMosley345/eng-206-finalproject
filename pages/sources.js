import { List, ListItem, Typography, Divider, Box, Grid, ListItemText, Stack } from "@mui/material";
import Header from "../components/Header";

const entries = [
    {
        citation: '“Barret and Black Representation.” Sprites and Dice, https://spritesanddice.com/features/barret-and-black-representation/. Accessed 2 Dec. 2022.',
        summary: 'This is a test',
    },
    {
        citation: 'DuBois, W. E. B. “Criteria of Negro Art: (1926).” Within the Circle, Duke University Press, 1994, pp. 60–68.',
        summary: 'This is a test',
    },
    {
        citation: 'Entman, R. M., and A. Rojecki. The Black Image in the White Mind: Media and Race in America. University of Chicago Press, 2010.',
        summary: 'This is a test',
    },
    {
        citation: 'Henry, Jasmine. “Why Are Black Video Game Characters so Controversial?” New Normative, 12 Dec. 2016, https://newnormative.com/2016/12/12/black-video-game-characters-controversial/.',
        summary: 'This is a test',
    },
    {
        citation: 'Independent Lens. “Leveling up Representation: Depictions of People of Color in Video Games.” Independent Lens, 22 Dec. 2020, https://www.pbs.org/independentlens/blog/leveling-up-representation-depictions-of-people-of-color-in-video-games/.',
        summary: 'This is a test',
    },
    {
        citation: 'Nailah Avery, J. “Behind the Movement to Create More Black Video Game Characters.” The New York Times, The New York Times, 17 Jan. 2022, https://www.nytimes.com/2022/01/17/crosswords/video-games-black-characters.html.',
        summary: 'This is a test',
    },
    {
        citation: 'Norwood, Rico. “Coding Blackness: A History of Black Video Game Characters.” Wired, Feb. 2021, https://www.wired.com/story/black-character-history-video-games/.',
        summary: 'This is a test',
    },
    {
        citation: "Ong, Sandy. “The Video Game Industry's Problem with Racial Diversity.” Newsweek, 13 Oct. 2016, https://www.newsweek.com/2016/10/21/video-games-race-black-protagonists-509328.html.",
        summary: 'This is a test',
    },
    {
        citation: 'Peckham, Eric. “Confronting Racial Bias in Video Games.” TechCrunch, June 2020, https://techcrunch.com/2020/06/21/confronting-racial-bias-in-video-games/.',
        summary: 'This is a test',
    },
    {
        citation: 'Taylor, Paul. “Black Aesthetics.” Philosophy Compass, vol. 5, no. 1, 2010, pp. 1–15, https://doi.org10.1111/j.1747-9991.2009.00263.x.',
        summary: 'This is a test',
    },
]

export default function Sources() {
    return(
        <>
            <Header />
            <Divider />
            <Stack spacing={2} sx={{ marginLeft: 3, marginTop: 3 }} >
                    {entries.map((entry, index) =>
                            <Box sx={{ boxShadow:2, width: "50%", bgcolor:"#4cbfa6", padding:"1rem" }}>
                                <Typography color='black'>
                                    {index+1}.
                                </Typography>
                                <Typography sx={{ color: 'black' }}>
                                    {entry.citation}
                                </Typography>
                                <Typography sx={{ color: 'black' }}>
                                    {entry.summary}
                                </Typography>
                                <Typography sx={{ color: 'black' }}>
                                    {entry.synthesis}
                                </Typography>
                                <Typography sx={{ color: 'black' }}>
                                    {entry.response}
                                </Typography>
                            </Box>
                    )}
            </Stack>
        </>
    );
}