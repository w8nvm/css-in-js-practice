import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles'
import { HeroVideo, HeroSection, HeroText, HeroButton, ButtonWrapper } from './HeroStyle'

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/video1.mp4" autoPlay loop muted/>
        <Container>
            <MainHeading>
                Big Heading
            </MainHeading>
            <HeroText>
                Lesser Heading with bigger amount of text
            </HeroText>
            <ButtonWrapper>
            <Link to="signup">
                <Button> Sign up </Button>
            </Link>
            <Link to="pricing">
                <HeroButton> Plans </HeroButton>
            </Link>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero