import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Stack, Typography } from '@mui/material';
import { EmojiEmotions } from '@mui/icons-material';

const ScrollHandler: React.FC = () => {
  const [placeholders, setPlaceholders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Add initial set of 10 div elements
    const initialPlaceholders = Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#DDDDDD',
          height: '800px',
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '25px',
          marginBottom: '5px',
        }}
      />
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
          <div key={placeholders.length} 
            style={{
              backgroundColor: '#DDDDDD',
              height: '800px',
              marginLeft: '5px',
              marginRight: '5px',
              marginTop: '25px',
              marginBottom: '5px',
              borderRadius: '10px'
            }}>

            <Stack direction= 'column' >
              <Stack direction= 'column' sx={{ height: '10%' }} >
                <Stack direction='row' >
                  <Box >
                    <img src=''></img>
                  </Box >
                  <Typography variant='h6'>Name</Typography>
                </Stack >
                <p >Description</p >
              </Stack >

              <Box sx={{width: '35', height: '60%' }} >
                <img src='https://source.unsplash.com/825x600/?beach' ></img >
              </Box >

              <Stack direction= 'column' sx={{height: '10%'}} >
                <Stack direction='row' >
                  <EmojiEmotions></EmojiEmotions>
                  <h5>1500 Likes</h5>
                </Stack >
                <Stack direction='row' >
                  <Button sx={{}} >
                    Like
                  </Button >
                  <Button >
                    Comment
                  </Button >
                  <Button >
                    Share
                  </Button >
                </Stack >
              </Stack >
            </Stack >
    
          </div >
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
        <Container sx={{width: '18%', height: '94%', top: '5.5%', left: '5%', borderRadius: '10px', backgroundColor: '#CCCCCC', position: 'fixed'}} >
          <p > Menu </p >
          <Button >
            Menu Element
          </Button>
        </Container >
      </Container >

      <Container sx={{width: '35%', height: '94%', top: '5.5%', left: '21%', right: '21%', borderRadius: '10px',  backgroundColor: '#CCCCCC'}} >
        {placeholders}
      </Container >
      
      <Container sx={{width: '18%', height: '94%', right: '5%' }} >
        <Container  sx={{width: '18%', height: '94%', top: '5.5%', right: '5%', borderRadius: '10px', backgroundColor: '#CCCCCC',  position: 'fixed'}} >
          <p > Chat </p >
          <Button >
            Send Message
          </Button >
        </Container >
      </Container>
    </Stack >
};

export default ScrollHandler;