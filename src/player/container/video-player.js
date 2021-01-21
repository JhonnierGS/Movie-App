import React, {Component} from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pausa';


class VideoPlayer extends Component{
    state ={
        pause:true,
    }
    
    togglePlay =(event) =>{
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                title="esto es un video chido!"
                />
                <PlayPause 
                pause={this.state.pause}
                handleClick={this.togglePlay}
                />
                <Video 
                autoplay={this.props.autoplay}
                pause={this.state.pause}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;