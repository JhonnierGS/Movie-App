import React, {Component} from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pausa';
import Timer from '../component/timer';
import Controls from '../component/video-player-controls';
import ProgreesBar from '../component/progress-bar';
import Spinner from '../component/spiner';
import Volume from '../component/Volume';
import FullScreen from '../component/full-screen';
class VideoPlayer extends Component{
    state ={
        pause:true,
        duration: 0,
        currentTime: 0,
        loading: false,
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
    handleLoadedMetaData = event =>{
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }
    handleTimeUpdate = event =>{
        this.setState({
            currentTime: this.video.currentTime,
        })
    }
    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }
    handleSeeking = event =>{
        this.setState({
            loading: true
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event =>{
        this.video.volume = event.target.value;
    }

    hanldeFullScreenClick = event =>{
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullscreen()
        }else{
            document.webkitExitFullscreen();
        }
    }

    setRef = element => {
        this.player = element
    }

    render(){
        return(
            <VideoPlayerLayout
            setRef={this.setRef}
            >
                <Title 
                    title={this.props.title}
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                        <ProgreesBar 
                            duration={this.state.duration}
                            value={this.state.currentTime}
                            handleProgressChange={this.handleProgressChange}
                        />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                    />
                    <FullScreen 
                    hanldeFullScreenClick={this.hanldeFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetaData ={this.handleLoadedMetaData}
                    handleTimeUpdate ={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;