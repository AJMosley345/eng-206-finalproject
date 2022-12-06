import { List, ListItem, Typography, Divider, Box, Grid, ListItemText, Stack, Button } from "@mui/material";
import Header from "../components/Header";
import Link from "@mui/material";

const entries = [
    {
        citation: '“Barret and Black Representation.” Sprites and Dice, https://spritesanddice.com/features/barret-and-black-representation/. Accessed 2 Dec. 2022.',
        summary: 'Summary:',
        link: 'https://spritesanddice.com/features/barret-and-black-representation/'
    },
    {
        citation: 'DuBois, W. E. B. “Criteria of Negro Art: (1926).” Within the Circle, Duke University Press, 1994, pp. 60–68.',
        summary: 'Summary:',
        link: 'https://allisonbolah.com/site_resources/reading_list/DuBois.pdf'
    },
    {
        citation: 'Entman, R. M., and A. Rojecki. The Black Image in the White Mind: Media and Race in America. University of Chicago Press, 2010.',
        summary: 'Summary:',
        link: 'https://books.google.com/books?id=RWhEm5Q7jdAC&lpg=PR7&ots=oLvYqyydpw&dq=black%20image%20in%20the%20white%20mind&lr&pg=PR7#v=onepage&q=black%20image%20in%20the%20white%20mind&f=false'
    },
    {
        citation: 'Henry, Jasmine. “Why Are Black Video Game Characters so Controversial?” New Normative, 12 Dec. 2016, https://newnormative.com/2016/12/12/black-video-game-characters-controversial/.',
        summary: 'Summary:',
        link: 'https://newnormative.com/2016/12/12/black-video-game-characters-controversial/'
    },
    {
        citation: 'Independent Lens. “Leveling up Representation: Depictions of People of Color in Video Games.” Independent Lens, 22 Dec. 2020, https://www.pbs.org/independentlens/blog/leveling-up-representation-depictions-of-people-of-color-in-video-games/.',
        summary: 'Summary:',
        link: 'https://www.pbs.org/independentlens/blog/leveling-up-representation-depictions-of-people-of-color-in-video-games/'
    },
    {
        citation: 'Nailah Avery, J. “Behind the Movement to Create More Black Video Game Characters.” The New York Times, The New York Times, 17 Jan. 2022, https://www.nytimes.com/2022/01/17/crosswords/video-games-black-characters.html.',
        summary: 'Summary:',
        link: 'https://www.nytimes.com/2022/01/17/crosswords/video-games-black-characters.html'
    },
    {
        citation: 'Norwood, Rico. “Coding Blackness: A History of Black Video Game Characters.” Wired, Feb. 2021, https://www.wired.com/story/black-character-history-video-games/.',
        summary: 'Summary:',
        link: 'https://www.wired.com/story/black-character-history-video-games/'
    },
    {
        citation: "Ong, Sandy. “The Video Game Industry's Problem with Racial Diversity.” Newsweek, 13 Oct. 2016, https://www.newsweek.com/2016/10/21/video-games-race-black-protagonists-509328.html.",
        summary: 'Summary:',
        link: 'https://www.newsweek.com/2016/10/21/video-games-race-black-protagonists-509328.html'
    },
    {
        citation: 'Peckham, Eric. “Confronting Racial Bias in Video Games.” TechCrunch, June 2020, https://techcrunch.com/2020/06/21/confronting-racial-bias-in-video-games/.',
        summary: 'Summary:',
        link: 'https://techcrunch.com/2020/06/21/confronting-racial-bias-in-video-games/'
    },
    {
        citation: 'Taylor, Paul. “Black Aesthetics.” Philosophy Compass, vol. 5, no. 1, 2010, pp. 1–15, https://doi.org10.1111/j.1747-9991.2009.00263.x.',
        summary: 'Summary:',
        link: 'https://sites.hampshire.edu/blackaesthetics/files/2017/03/taylorpaul-blackaesthetics.pdf'
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
                                <Button 
                                    target="_blank" 
                                    href={entry.link} 
                                    variant='outlined'
                                    sx={{ color: 'black', borderColor: 'black' }}
                                >
                                    Go to Source
                                </Button>
                            </Box>
                    )}
            </Stack>
        </>
    );
}