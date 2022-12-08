import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { VideogameAsset, VideogameAssetOff } from '@mui/icons-material';
import { Typography, Divider } from '@mui/material';
import Header from '../components/Header';
import Image from 'next/image';
import streets_of_rage from '../public/images/streets_of_rage.jpg';
import barrett_old from '../public/images/barrett_old.png';
import miles_morales from '../public/images/miles_morales.webp';
import quartet from '../public/images/quartet.jpeg';
import punch_out from '../public/images/punch_out.jpeg';
import tom_sawyer from '../public/images/tom_sawyer.png';
import lee_everett from '../public/images/lee_everett.webp';
import race_graph from '../public/images/race_graph.png';
import marcus from '../public/images/marcus.webp';
import chris from '../public/images/chris.webp';

let timelineData = [
  {
    text: 'Mission Statement',
    date: '2022',
    image: '',
    description: "The idea behind this project is to show how black representation has evolved in video games over the years. The timeline speaks for itself, but it begins as mostly racist or at least stereotypical representation, and slowly evolves to more nuanced characters that are more than just black. The connection between black aesthetics (Taylor), and video games is strong. I hope the timeline page brings that more to light. I make brief mention of the controversy that surrounds black characters, because it is another interesting avenue of thought. Since it's a break from the norm (white male), it brings people out of the woodwork that describe it as 'woke'. Hopefully this project is able to show the progress that has been made in black representation in video games, while also showing that there is a long way to go in making good black characters and the general acceptance within the community. ",
    alt: "",
    good: true
  },
  {
    text: "1980's - Early 2000's",
    date: "1980's - Early 2000's",
    image: '',
    description: "In the early days of video games, the representation of black people was very mixed, from what could be seen as good representation (Barret Wallace), to outright racist depictions (Jim from Square's Tom Sawyer). These games can be seen as major stepping stones, good and bad, for how black people will be represented in video games during this time.",
  },
  {
    text: 'Quartet',
    date: '1986',
    image: quartet,
    alt:" ",
    description: "One of the first games to have a black character, while it serves zero overall purpose to the game (since it doesn't have a story to begin with), it can still be seen as a major stepping stone in the eventual wave of games with black characters.",
    good: false,
  },
  {
    text: "PUNCH OUT!!",
    date: '1987',
    image: punch_out,
    alt:"",
    description: 'One of the most popular NES games, featuring Mike Tyson. While it does have many characters that are different ethnicities and races, they are all stereotypes of their respective cultures.',
    good: false,
  },
  {
    text: 'Tom Sawyer',
    date: '1989',
    image: tom_sawyer,
    alt:"",
    description: "A game that never came out in the West, it is based on Mark Twain's 'The Adventures of Tom Sawyer'. Unfortunately, it still features the incredibly offensive depictions of black people, including but not limited to Sambo Lips.",
    good: false,
  },
  {
    text: 'Sports, Celebrity and Movie Tie-in Games',
    date: "1990's",
    image: '',
    alt:"",
    description: "During this time there were a wave of sports games, games produced by and featuring celebrities, and movie tie-in games. Many of these games featured black celebrities, and while this was good for representation, it still showed that the only reason these companies made these games was for money.",
    good: false,
  },
  {
    text: 'Streets of Rage',
    date: '1991',
    image: streets_of_rage,
    alt:"",
    description: 'Had a playable black character, but many of the enemies were black as well. Since the game is set in the city, this gives off the idea that being black is associated with the streets and inner-city violence.',
    good: false,
  },
  {
    text: 'Final Fantasy VII',
    date: '1997',
    image: barrett_old,
    alt:"",
    description: 'A japanese made game that features the character "Barret Wallace". He is depicted as a strong, loud and large "black buck" kind of character, but throughout the game he gets much more depth and nuance than just being that.',
    good: false,
  },
  {
    text: 'Modern Era',
    date: "Late 2000's to Now",
    image: '',
    alt:"",
    description: "After the wave of sports and celebrity games in the 90's and early 2000's. The amount of black led games dropped, but with it came black characters that had more depth than just being a celebrity or athlete." ,
    good: true,
  },
  {
    text: 'The Walking Dead',
    date: '2012',
    image: lee_everett,
    alt:"",
    description: "A game that features Lee Everett. It is effectively a redemption story where he cares for a young girl during a zombie apocalypse. There isn't much to say in terms of how his race plays into the story, but he can be seen as a largely positive character.",
    good: true,
  },
  {
    text: 'Spider Man: Miles Morales',
    date: '2020',
    image: miles_morales,
    alt:"",
    description: "Miles Morales, the main character, is an afro-latino living in New York. There are touches of racism within the game, but most of it is a coming of age story with Miles being a hero. This isn't the first game to feature a black superhero, but it definitely stands as one of the best. Unfortunately, he is still somewhat of a sidekick in the grand scheme of the game.",
    good: true,
  },
  {
    text: 'Controversy Surrounding Black Representation in Games',
    date: '2022',
    image: '',
    description: "It's hard to research the backlash to black representation in video games, as it gets combined with the claim of 'forced diversity' that has become increasingly prevalent in most forms of media. So I'm going to focus on a couple examples and hopefully it can still get the point across.",
    alt: "",
    good: true
  },
  {
    text: 'Marcus Holloway (Watch Dogs 2)',
    date: '2016',
    image: marcus,
    description: "During 2016 there were a lot of games that came out that featured black characters. One was Watch Dogs 2. The game touches on racial profiling, since it's set in a semi-future city with a lot of surveillance. The main controversy surrounding this was that some people would say that it was just Ubisoft (the game publisher) wanting to pander to 'Social Justice Warriors'. This was the first time I saw actual backlash against a black character, but it definitely wasn't the last. The constant yelling of 'pandering' or 'virtue signaling' when it comes to a non-white male being the center of a story is a tale as old as time at this point. ",
    alt: "",
    good: true
  },
  {
    text: 'Resident Evil 5',
    date: '2009',
    image: chris,
    description: "There isn't much to say about this game, it's set in Africa where you play as Chris Redfield killing a lot of Africans. Technically there is an in game reason, they're infected with a virus that makes them insane and attack you, but it still wasn't a good look. It actually had backlash against it in the fact that this was the 2nd time Capcom (the developer) had pulled this. This brings up the topic of japanese game developers being one of the worst offenders when it comes to black representation and stereotyping.",
    alt: "",
    good: true
  },
  {
    text: 'Lack of Options in Customization',
    date: 'Forever',
    image: '',
    description: "When it comes to RPGs/JRPGs there is always a severe lack of black hairstyles & facial features in their character creators. Whenever this is brought up, there is usually a small minority that likes to come out of the woodwork to push that criticism down. This obviously leads to poor representation of black people, because you can make the character's skin darker, but you can't actually represent what you want.",
    alt: "",
    good: true
  },
  {
    text: 'Diversity in Game Development',
    date: "",
    image: race_graph,
    alt:"",
    description: "Based on a survey conducted by the International Game Developers Association (IDGA), in 2019 about 2% of game developers were black. This makes sense in correlation to the lack of black protagonists in games as a whole." ,
    good: true,
  },
]


export default function Test() {
    return(
      <div style={{ backgroundColor: '#f6ebf4' }}>
          <Header />
          <Divider />
          <VerticalTimeline lineColor='#482673'>
            {timelineData.map((data) => (
              <>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#4cbfa6', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #4cbfa6' }}
                  date={data.date}
                  dateClassName='date'
                  iconStyle={{ background: '#482673', color: '#fff' }}
                  icon={(() => {
                    if(data.good === false){
                      return <VideogameAssetOff />
                    } else {
                      return <VideogameAsset />
                    }
                  })()}
                >
                  <Typography 
                    variant='h5' 
                    className="vertical-timeline-element-title"
                    color="#f6ebf4"
                  >
                    {data.text}
                  </Typography>
                  {(() => {
                    if(data.image === ''){
                      return <></>
                    } else {
                      return <Image alt='' style={{ width: '75%', height: '60%', margin: 3, alignSelf: 'center' }} src={data.image}/>
                    }
                  })()}
                  {(() => {
                    if(data.description === ''){
                      return <></>
                    } else {
                      return <Typography color='black'>{data.description}</Typography>
                    }
                  })()}
                </VerticalTimelineElement>
              </>
            ))}
          </VerticalTimeline>
      </div>
    );
}