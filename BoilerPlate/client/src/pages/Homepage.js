import React, {Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper"
import Section from "../components/Section"
import {ImageCard} from "../components/ImageCard"
import Carousel from "../components/Carousel"
import { Row, Col } from "../components/Grid";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import FactCarousel from "../components/FactsCarousel"



class Homepage extends Component {




render(){

return(
<div >

<Nav></Nav>



    <Wrapper>
      <Fade duration={1000}>
      <Section background = "initial">
      <Slide right duration={1000} delay={2500}>
         <Row>

            <Col size="md-12">
              <ImageCard imgsrc="/images/homeless1.jpg">

              </ImageCard>
            </Col>

          </Row>
      </Slide>
      </Section>
      </Fade>

    <Section background="static">
      <Row>
            <Col size="md-4">
                <Fade left>
                      <FactCarousel>

                      </FactCarousel>
                </Fade>
            </Col>
            <Col size="md-8"> <h1></h1> </Col>
      </Row>
    </Section>


        <Section background="bg1" >
        <Row>
        <Col size="md-3"></Col>
         <Col size="md-6">
           <Fade top duration={2000}>
        <h2>Our mission as The StoreHouse Chicago is to come alongside and aid the people in our city to achieve their goals, empower them as individuals, and equip them for their future.</h2>
        </Fade>
      </Col>
      <Col size="md-3"></Col>
      </Row>

      </Section>
      <Section background="static">
     <Row>
       
        <Col size="md-4">
        <Fade left duration={2000}>
          <ImageCard imgsrc="/images/profile1.jpg"></ImageCard>
          </Fade>
        </Col>
        <Col size="md-4">
          <Fade top duration={2000}>
        <ImageCard imgsrc="/images/profile2.jpg"></ImageCard>
        </Fade>
        </Col>
        <Col size="md-4">
        <Fade right duration={2000}>
        <ImageCard imgsrc="/images/profile3.jpg"></ImageCard>
        </Fade>
        </Col>
     </Row>
  
      </Section>

      <Section background="tshirt">
          <Row>

            <Col size="md-12">
              <Bounce right>
              <h1>Merch Shop</h1>
              </Bounce>
            </Col>

          </Row>
      </Section>

      <Section background="static">
        <Row>

          <Col size="md-6">
            <h1>E-Board</h1>
          <Carousel></Carousel>
          </Col>


        </Row>

      </Section>




    </Wrapper>
</div>
)} }

export default Homepage;