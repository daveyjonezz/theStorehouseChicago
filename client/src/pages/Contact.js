import React, {Component} from "react";
import Nav from "../components/Nav"
import Section from "../components/Section"
import { Row, Container, Col } from "../components/Grid";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Spacer from "../components/Spacer"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JumbotronFooter from "../components/JumbotronFooter"


class Merch extends Component {

render(){

return(
<>
    <Spacer/>
    <Container>
    <Nav/>
        <Fade>
            <Section background = "initial">
                    <Row>
                        <Bounce delay={500}>
                            <Col size="md-12">
                                <h1 style={{fontSize:"10vh"}}>Contact Us</h1>
                            </Col>
                        </Bounce>
                    </Row>
            </Section>
        </Fade>
        <Fade duration={1000}>
            <Section background="contact">
                <Row>
                    <Fade>
                        <Col size="md-12 contact">
                            <h1>Questions? Suggestions? Comments?</h1>
                            <h3>Feel free to contact us at</h3>
                            <h2>info@thestorehousechicago.com</h2>
                        </Col>
                      
                    </Fade>
                </Row>
            </Section>
        </Fade>

 <JumbotronFooter></JumbotronFooter>


 </Container>
</>
)

}

}


export default Merch;