import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { VideogameAsset, VideogameAssetOff } from '@mui/icons-material';
import { Typography, Divider } from '@mui/material';
import Header from '../components/Header';
import Image from 'next/image';
import streets_of_rage from '../public/images/streets_of_rage.jpg';
import barret_wallace from '../public/images/barret_wallace.webp';
import miles_morales from '../public/images/miles_morales.webp';
import quartet from '../public/images/quartet.jpeg';
import punch_out from '../public/images/punch_out.jpeg';
import tom_sawyer from '../public/images/tom_sawyer.png';
import lee_everett from '../public/images/lee_everett.webp';

let timelineData = [
  {
    text: "Early Days of Gaming",
    date: "1980's - Early 2000's",
    image: '',
    description: "In the early days of video games, the representation of black people was very mixed, from what could be seen as good representation (Barret Wallace), to outright racist depictions (Jim from Square's Tom Sawyer). These games can be seen as major stepping stones, good and bad, for how black people will be represented.",
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
    image: barret_wallace,
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
    description: 'Miles Morales is the main character, and while most of the time his face is covered, you play as him the whole game with only very subtle hints towards the broader social messages the game wants to send.',
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
                  <Typography variant='h5' className="vertical-timeline-element-title">
                    {data.text}
                  </Typography>
                  {(() => {
                    if(data.image === ''){
                      return <></>
                    } else {
                      return <Image alt='' style={{ width: '60%', height: '60%', margin: 3, alignSelf: 'center' }} src={data.image}/>
                    }
                  })()}
                  {(() => {
                    if(data.description === ''){
                      return <></>
                    } else {
                      return <Typography >{data.description}</Typography>
                    }
                  })()}
                </VerticalTimelineElement>
              </>
            ))}
          </VerticalTimeline>
      </div>
    );
}