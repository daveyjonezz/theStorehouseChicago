import React, {Component} from "react";
import Section from "../components/Section"
import {ImageCard} from "../components/ImageCard"
import Carousel from "../components/Carousel"
import { Row, Container, Col } from "../components/Grid";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import FactCarousel from "../components/FactsCarousel"
import Spacer from "../components/Spacer"
import JumbotronFooter from "../components/JumbotronFooter";
import API from "../utils/API";



class Homepage extends Component {

  state = {
    email: ""
};

handleInputChange = event => {
  const { name, value } = event.target;
  console.log(name, " : ", value)
  this.setState({
      [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  API.newsletter({
      email: this.state.email
  }).then(
        this.setState({
        email: ""
      })
      )
      .catch(err => console.log(err));
};

render(){

return(
<>

<Spacer/>


    <Container>
      <Fade duration={1000}>
      <Section background = "initial">
      <Fade right duration={1500} delay={1000}>
         <Row>
 
            <Col size="md-12">
              <ImageCard imgsrc="/images/homeless1.jpg">

              </ImageCard>
            </Col>

          </Row>
      </Fade>
      </Section>
      </Fade>

    <Section background="static">
      <Row>
            <Col size="md-6">
                <Fade left>
                      <FactCarousel>

                      </FactCarousel>
                </Fade>
            </Col>
            <Col size="md-6"> 
            <Fade bottom>
                <p><h2 style={{paddingTop:"25vh", paddingLeft:"5vw", fontSize:"4vw", }}>Did you know that...</h2></p>
                </Fade>
            </Col>
      </Row>
    </Section>


        <Section background="bg1" >
        <Row>
        <Col size="md-1"></Col>
         <Col size="md-5">
           <Zoom top cascade duration={2000}>
        <p style={{background:"rgba(255, 255, 255, 0.589)", padding:"10px", borderRadius:"10%"}}><h1>Our mission as The Storehouse Chicago 
          is to come alongside and aid the people 
          in our city to achieve their goals, empower them as 
          individuals, and equip them for their future.</h1></p>
        </Zoom>
      </Col>
      <Col size="md-6"></Col>
      </Row>

      </Section>
<Section background="merch2">
        <Row>
          <div className="text-center">
          <Zoom top duration={1000}>
          <Col size="md-12"> <p><h1>Meet this week's donation recipients</h1></p></Col>
          </Zoom>
          </div>
     
        </Row>
 
        </Section>   
      
      <Section background="static">

  
<a href="/stories">
     <Row>

        <Col size="md-4">
        <Fade left duration={1000}>
        
          <ImageCard className="homepageimg" imgsrc="/images/adi3.jpg" alt="adi"></ImageCard>
          </Fade>
        </Col>
      
        
        <Col size="md-4">
        <Fade bottom duration={2000} delay={500}>
         
        <ImageCard className="homepageimg" imgsrc="/images/jennidavis2.jpg" alt="jennidavid"></ImageCard>
        </Fade>
        </Col>
       

        
        <Col size="md-4">
        <Fade right duration={1000} delay={1000}>
     
        <ImageCard className="homepageimg" imgsrc="/images/jimi3.jpg" alt="jimi"></ImageCard>
        </Fade>
        </Col>
        
     </Row>
     </a>
      </Section>

    
        <a href="/merch" style={{textDecoration: "none"}}>
        <Zoom duration={1000}>
              <Section background="tshirt">
                  <Row>

                    <Col size="md-12">
                      <Bounce right cascade duration={1500}>
                      <h1 style={{fontSize:"200px", paddingBottom:"20%"}}>Merch Shop</h1>
                      </Bounce>
                    </Col>

                  </Row>
              </Section>
              </Zoom>
        </a>
    
      <Section background="static">
        <Row>

          <Fade duration={2000}>

          <Col size="md-12">
            <div className="text-center">
            <h2>E-Board</h2>
            </div>
          <Carousel></Carousel>
          </Col>
          </Fade>


        </Row>

      </Section>

      <JumbotronFooter onChange={this.handleInputChange} stateEmail={this.state.email} onClick={this.handleFormSubmit}></JumbotronFooter>




      </Container>
</>
)} }

export default Homepage;