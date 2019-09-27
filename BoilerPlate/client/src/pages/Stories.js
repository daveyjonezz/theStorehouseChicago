import React, { Component } from "react";
import Nav from "../components/Nav";
import Spacer from "../components/Spacer"
import { Container, StoryRow, StoryCol} from "../components/Grid";
import {StoryImage} from "../components/ImageCard";
import Modal from "../components/Modal"

class Stories extends Component {

    state = {
        visible:false
     }

    handleFade = () => {
        console.log("HEY CLICKED")
        console.log(this.state.visible)
        // if (this.state.visible = true){
            this.setState({visible: true})
        // } else if (this.state.visible = false) {
        //     this.setState({visible: true})
        // }
     }
     
    
    render() {         
       
        return (
            <>
                <Nav/>
                <Spacer/>
                <Container>
                <StoryRow rowClass = {`d-flex flex-row align-items-center`}>
                <StoryCol visible={this.state.visible} colClass={`col-6 col-lg-4 my-auto first ${this.state.visible ? 'fadeIn': 'fadeOut'}`}>
                        <StoryImage StoryImage="bioImage-1 img-fluid" Storyimgsrc="/images/profile1.jpg"></StoryImage>
                    </StoryCol>    
                <StoryCol colClass="col-lg-8 text-back my-auto story1">
                        <h2>Meet Jenni and Davis Birsan</h2>
                        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                        <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                    </StoryCol> 
                <StoryCol colClass="col-lg-4 text-back my-auto story2">
                        <h2>Meet Adi Cepela</h2>
                    </StoryCol> 
                <StoryCol colClass="col-6 col-lg-4 my-auto second">
                        <StoryImage StoryImage="bioImage-2 img-fluid" Storyimgsrc="/images/profile1.jpg" handleFade={this.handleFade}></StoryImage>
                    </StoryCol>  
                <StoryCol colClass="col-lg-4 text-back my-auto story2">
                        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                        <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                    </StoryCol> 
                <StoryCol colClass="col-lg-8 text-back my-auto story1">
                        <h2>Meet Jimi Loc</h2>
                        <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                        <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                    </StoryCol>
                <StoryCol colClass="col-6 col-lg-4 my-auto third">
                        <StoryImage StoryImage="bioImage-3 img-fluid" Storyimgsrc="/images/profile1.jpg"></StoryImage>
                    </StoryCol> 
                    </StoryRow>
                </Container>
                {/* <Modal/> */}
            </>
        )
    }

}

export default Stories