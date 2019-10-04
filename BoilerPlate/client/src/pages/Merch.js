import React, {Component} from "react";
// import Nav from "../components/Nav"
import Section from "../components/Section"
import { Row, Container, Col } from "../components/Grid";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Spacer from "../components/Spacer"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import JumbotronFooter from "../components/JumbotronFooter"

import API from "../utils/API";
import SaveButton from "../components/SaveButton";
import items from "../components/ProductsToBuy";
import donation from "../components/Donation";

class Merch extends Component {

    constructor(props) {
        super(props)
        this.state = {
          items,
          usershoppingcart: [],
          sizeValue: "",
          // size: props.size,
          donation,
          donationAmount: "",
          quantityValue: "",
        }
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleDonationAmount = this.handleDonationAmount.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
      };
    
      componentDidMount() {
        //  console.log(this.state.size)
      }
    
      handleSizeChange = (e) => {
        console.log("EEEEEE")
        console.log(e.target.value)
        this.setState({
          sizeValue: e.target.value,
        });
      }
    
      handleDonationAmount = (e) => {
        console.log("AAAAAAAA")
        console.log(e.target.value)
        this.setState({
          donationAmount: e.target.value,
        })
      }
    
      handleQuantityChange = (e) => {
        console.log("IIIIIIIII")
        console.log(e.target.value)
        this.setState({
          quantityValue: e.target.value,
        });
      }
    
      handleAddItemToCart = item => {
        console.log(item, 'this is an item===== ')
        console.log(this.state.usershoppingcart, "current state of shopping cart")
    
        const newUserShoppingCart = this.state.usershoppingcart
        newUserShoppingCart.push(item)
        console.log(newUserShoppingCart, 'this is the shop cart')
    
        this.setState({
          usershoppingcart: newUserShoppingCart
        })
    
        let size = this.state.sizeValue;
        newUserShoppingCart.push(size);
        console.log(size, "this is the size going through*******")
    
        let userDonation = this.state.donationAmount
        newUserShoppingCart.push(userDonation);
        
        console.log(userDonation, "this is user donation $$$$$$$$")
        console.log(newUserShoppingCart.price, "$$$$$$$$$$$ donation $$$$$$$$")
    
        let newquantity = this.state.quantityValue
        newUserShoppingCart.push(newquantity);
        console.log(newquantity, "how many ---------------")
    
        console.log("STATE")
        console.log(this.state.usershoppingcart)
    
        API.saveItemToCart({
          item: this.state.usershoppingcart[0].item,
          img: this.state.usershoppingcart[0].img,
          description: this.state.usershoppingcart[0].description,
          price: this.state.usershoppingcart[0].price,
          size: this.state.usershoppingcart[1],
          quantity: this.state.usershoppingcart[3],
          userDonation: this.state.usershoppingcart[2]
        })
        .then(result => {
           console.log(result.data, "--in save item to cart")
           this.setState = {
            // usershoppingcart: [],
            sizeValue: "",
            donationAmount: "",
            quantityValue: "",
          }
    
          // }).then(console.log(this.saveItemToCart, "IN SAVE ITEM TO CART ----------"))
          // .then(() => API.getUserShoppingCart())
    
         });
        }

render(){

return(
    <>
    <Spacer/>
    <Container>
    {/* <Nav/> */}
        <Fade>
            <Section background = "initial">
                    <Row>
                        <Bounce delay={500}>
                            <Col size="md-12">
                                <h1 style={{fontSize:"10vh"}}>Merch Store</h1>
                            </Col>
                        </Bounce>
                    </Row>
            </Section>
        </Fade>



    <Row>
        <Zoom duration={1000} delay={500}>
            <Col size="md-6 banana">
                <Carousel showThumbs={false} width="100vh" showStatus={false} >        
                            <div >
                                <img alt="" src="/images/fruit1.jpg" />
                                <p className="legend">Banana 1</p>
                            </div>
                            <div >
                                <img alt="" src="/images/banana2.jpg" />
                                <p className="legend">Banana 2</p>
                            </div>
                            <div >
                                <img alt="" src="/images/banana3.jpg" />
                                <p className="legend">Banana 3</p>
                            </div>
                </Carousel>
            </Col>
        </Zoom>

        <Col size="md-2"></Col>

        <Col size="md-4 avocado" >

            <Zoom right duration={1500} delay={1000}> 
                <Carousel showThumbs={false} width="50vh" showStatus={false} id="avocado">        
                            <div >
                                <img alt="" src="/images/fruit2.jpg" />
                                <p className="legend">Avocado 1</p>
                            </div>
                            <div >
                                <img alt="" src="/images/avocado2.jpg" />
                                <p className="legend">Avocado 2</p>
                            </div>
                            <div >
                                <img alt="" src="/images/avocado3.jpg" />
                                <p className="legend">Avocado 3</p>
                            </div>
                </Carousel>
            </Zoom>
        </Col>
    </Row>



    <Row>
        <Col size="md-4 lime">
            <Fade right duration={1500} delay={1000}>
                <Carousel showThumbs={false} width="50vh" showStatus={false}>        
                    <div>
                        <img alt="" src="/images/fruit3.jpg" />
                        <p className="legend">Lime 1</p>
                    </div>
                    <div>
                        <img alt="" src="/images/lime2.jpg" />
                        <p className="legend">Lime 2</p>
                    </div>
                    <div>
                        <img alt="" src="/images/lime3.jpg" />
                        <p className="legend">Lime 3</p>
                    </div>
                </Carousel>
            </Fade>
        </Col>


        <Col size="md-8 mango" >
            <Fade bottom duration={1500}>
                <Carousel showThumbs={false} width="100vh" showStatus={false} >        
                <div >
                    <img alt="" src="/images/fruit4.jpg" />
                    <p className="legend">Mango 1</p>
                </div>
                <div >
                    <img alt="" src="/images/mango2.jpg" />
                    <p className="legend">Mango 2</p>
                </div>
                <div >
                    <img alt="" src="/images/mango3.jpg" />
                    <p className="legend">Mango 3</p>
                </div>
                </Carousel>
            </Fade>
        </Col>
    </Row>



 <JumbotronFooter></JumbotronFooter>


 </Container>
</>
)

}

}


export default Merch;