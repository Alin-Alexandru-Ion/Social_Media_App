import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Stack, Typography, Avatar, backdropClasses } from '@mui/material';
import { EmojiEmotions, ThumbUp, ThumbUpRounded, Widgets } from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';

const ScrollHandler: React.FC = () => {
  const [placeholders, setPlaceholders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Add initial set of 10 div elements
    const initialPlaceholders = Array.from({ length: 5 }, (_, index) => (
      <Container key={placeholders.length} 
          sx={{ backgroundColor: '#DDDDDD', height: '75%', borderRadius: '10px', marginTop: '2%', marginBottom: '2%' }}>

            <Stack direction= 'column' >
              <Stack direction= 'column' sx={{ height: '12%' }} >
                <Stack direction='row' spacing={1} sx={{ alignItems: 'center', marginTop: '1.5%' }} >
                  <Avatar sx={{ bgcolor: deepOrange[500], left: '0%' }} >U</Avatar >
                  <Typography variant='h6' > Username </Typography>
                </Stack >
                <p >Description</p >
              </Stack >

              <Container >
                <img src='https://source.unsplash.com/1600x900/?beach' alt='Post' style={{ width: '100%', objectFit: 'contain' }} ></img >
              </Container >

              <Stack direction= 'column' sx={{height: '12%', marginBottom: '2%'}} >
                <Stack direction='row' sx={{height: '5%', alignItems: 'center'}} >
                  <Avatar sx={{ color: '#77AAFF', backgroundColor: "inherit", scale: '75%'}} >
                    <ThumbUpRounded />
                  </Avatar >
                  <h5>1500 Likes</h5>
                </Stack >
                <Stack direction='row' spacing={1} sx={{ height: '5%', justifyContent: 'space-evenly', marginBottom: '2%' }} >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Like
                  </Button >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Comments
                  </Button >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Share
                  </Button >
                </Stack >
              </Stack >
            </Stack >
    
          </Container >
    ));
    setPlaceholders(initialPlaceholders);

    // Scroll event handler
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop + windowHeight >= documentHeight - 22) {
        // Perform actions when scrolling near the bottom of the page
        const newPlaceholder = (
          <Container key={placeholders.length} 
          sx={{ backgroundColor: '#DDDDDD', height: '75%', borderRadius: '10px', marginTop: '2%', marginBottom: '2%' }}>

            <Stack direction= 'column' >
              <Stack direction= 'column' sx={{ height: '12%' }} >
                <Stack direction='row' spacing={1} sx={{ alignItems: 'center', marginTop: '1.5%' }} >
                  <Avatar sx={{ bgcolor: deepOrange[500], left: '0%' }} >U</Avatar >
                  <Typography variant='h6' > Username </Typography>
                </Stack >
                <p >Description</p >
              </Stack >

              <Container >
                <img src='https://source.unsplash.com/1600x900/?beach' alt='Post' style={{ width: '100%', objectFit: 'contain' }} ></img >
              </Container >

              <Stack direction= 'column' sx={{height: '12%', marginBottom: '2%'}} >
                <Stack direction='row' sx={{height: '5%', alignItems: 'center'}} >
                  <Avatar sx={{ color: '#77AAFF', backgroundColor: "inherit", scale: '75%'}} >
                    <ThumbUpRounded />
                  </Avatar >
                  <h5>1500 Likes</h5>
                </Stack >
                <Stack direction='row' spacing={1} sx={{ height: '5%', justifyContent: 'space-evenly', marginBottom: '2%' }} >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Like
                  </Button >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Comments
                  </Button >
                  <Button color='primary' variant='outlined' size="large" sx={{ width: '32%' }} >
                    Share
                  </Button >
                </Stack >
              </Stack >
            </Stack >
    
          </Container >
        );
        setPlaceholders((prevPlaceholders) => [...prevPlaceholders, newPlaceholder]);
      }
    };

    // Touch event handlers
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        const touchStartY = event.touches[0].clientY;
        const handleTouchMove = (event: TouchEvent) => {
          const touchCurrentY = event.touches[0].clientY;
          const touchDeltaY = touchCurrentY - touchStartY;
          if (touchDeltaY > 0) {
            // Perform actions when dragging down near the bottom of the screen
            const newPlaceholder = (
              <div
                key={placeholders.length}
                style={{
                  backgroundColor: '#000000',
                  height: '500px',
                  marginLeft: '5px',
                  marginRight: '5px',
                  marginTop: '25px',
                  marginBottom: '5px',
                }}
              />
            );
            setPlaceholders((prevPlaceholders) => [...prevPlaceholders, newPlaceholder]);
          }
        };
        const handleTouchEnd = () => {
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        };
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []); // Empty dependency array to run the effect only once

  return <Stack direction='row' >
      <Container sx={{width: '18%', height: '94%', left: '5%'}} >
        <Container sx={{width: '18%', height: '92%', top: '6.5%', left: '5%', borderRadius: '10px', backgroundColor: '#CCCCCC', position: 'fixed' }} >
          <p > Menu </p >
          <Button >
            Menu Element
          </Button>
        </Container >
      </Container >

      <Container sx={{width: '35%', height: '94.5%', top: '5.5%', left: '21%', right: '21%', borderRadius: '10px' }} >
        {placeholders}
      </Container >
      
      <Container sx={{width: '18%', height: '94%', right: '5%' }} >
        <Container  sx={{width: '18%', height: '92%', top: '6.5%', right: '5%', borderRadius: '10px', backgroundColor: '#CCCCCC',  position: 'fixed' }} >
          <p > Chat </p >
          <Button >
            Send Message
          </Button >
        </Container >
      </Container>
    </Stack >
};

export default ScrollHandler;