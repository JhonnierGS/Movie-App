import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './midia.css';


class Media extends PureComponent{
    state = {
        author: 'jonathan gonzalez'
    }


    render(){
        const style ={
            container:{
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red',
            }
        }
        return(
            <div className='Media' onClick={this.props.handleClick}>
                <div className='Media-cover'>
                    <img src={this.props.cover} alt='foto' width={260} height={160} className='Media-image'></img>
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='media-author'>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propType = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;