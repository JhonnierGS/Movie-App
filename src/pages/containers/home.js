import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/categories';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errores/containers/handleError';
import VideoPlayer from '../../player/container/video-player';

class Home extends Component {
    state ={
        modalVisible: false,
    }

    handleOpenModal = () =>{
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModalClick = (event) =>{
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        return (
            <HandleError>
        <HomeLayout>
            <Related />
            <VideoPlayer 
            autoplay
            />
            <Categories 
                categories={this.props.data.categories}
                handleOpenModal={this.handleOpenModal}
            />
            {
            this.state.modalVisible &&
            <ModalContainer>
                <Modal handleClick={this.handleCloseModalClick}>
                <h1>esto es un portal</h1>
                </Modal>
            </ModalContainer>
            }
        </HomeLayout>
            </HandleError>
        )
    }
}

export default Home