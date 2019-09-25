import React, {Component} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper"
import Section from "../components/Section"
import ImageCard from "../components/ImageCard"
import Carousel from "../components/Carousel"
import { Row, Col } from "../components/Grid";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
class Homepage extends Component {

  handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  }


render(){

return(
<div >

<Nav />


    <Wrapper>
      <Section background="bg3">

      </Section>
      <Section background="static">
      <img class="logo" src="/images/logo2.png"/>
        <Zoom left>
      <h1 >The Storehouse Chicago</h1>
      </Zoom>
      </Section>
        <Section background="bg1" >
        <Row>
        <Col size="md-3"></Col>
         <Col size="md-6">
           <Fade top>
        <h2>Our mission as The StoreHouse Chicago is to come alongside and aid the people in our city to achieve their goals, empower them as individuals, and equip them for their future.</h2>
        </Fade>
      </Col>
      <Col size="md-3"></Col>
      </Row>

      </Section>
      <Section background="static">
     <Row>
       
        <Col size="md-4">
        <Fade left>
          <ImageCard imgsrc="/images/profile1.jpg"></ImageCard>
          </Fade>
        </Col>
        <Col size="md-4">
          <Fade top>
        <ImageCard imgsrc="/images/profile2.jpg"></ImageCard>
        </Fade>
        </Col>
        <Col size="md-4">
        <Fade right>
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

          <Col size="md-12">
            <h1>E-Board</h1>
          <Carousel></Carousel>
          </Col>

        </Row>

      </Section>


    </Wrapper>
</div>
)} }

export default Homepage;