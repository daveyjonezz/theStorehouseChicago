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
                <p><h1 style={{paddingTop:"25vh", paddingLeft:"2vh", fontSize:"8vh", }}>Did you know that...</h1></p>
            </Col>
      </Row>
    </Section>


        <Section background="bg1" >
        <Row>
        <Col size="md-1"></Col>
         <Col size="md-5">
           <Zoom top cascade duration={2000}>
        <p><h1>Our mission as The StoreHouse Chicago 
          is to come alongside and aid the people 
          in our city to achieve their goals, empower them as 
          individuals, and equip them for their future.</h1></p>
        </Zoom>
      </Col>
      <Col size="md-6"></Col>
      </Row>

      </Section>
<Section background="static small-section">
        <Row>
          <Col size="md-1"></Col>
          <Zoom top duration={1000}>
          <Col size="md-11"> <p><h1 style={{paddingTop:"15%"}}>Meet this week's donoration recipients</h1></p></Col>
          </Zoom>
     
        </Row>
 
        </Section>   
      
      <Section background="static">

  
<a href="/stories">
     <Row>

        <Col size="md-4">
        <Fade left duration={1000}>
        
          <ImageCard imgsrc="/images/profile1.jpg"></ImageCard>
          </Fade>
        </Col>
      
        
        <Col size="md-4">
        <Fade bottom duration={2000} delay={500}>
         
        <ImageCard imgsrc="/images/profile2.jpg"></ImageCard>
        </Fade>
        </Col>
       

        
        <Col size="md-4">
        <Fade right duration={1000} delay={1000}>
     
        <ImageCard imgsrc="/images/profile3.jpg"></ImageCard>
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

          <Col size="md-6">
            <h1>E-Board</h1>
          <Carousel></Carousel>
          </Col>
          </Fade>
<Col size="md-6"></Col>

        </Row>

      </Section>

      <JumbotronFooter onChange={this.handleInputChange} stateEmail={this.state.email} onClick={this.handleFormSubmit}></JumbotronFooter>




      </Container>
</>
)} }

export default Homepage;