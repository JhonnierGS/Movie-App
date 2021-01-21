import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './midia.css';


class Media extends PureComponent{
    state = {
        author: 'jonathan gonzalez'
    }

    handleClick = event => {
        this.props.openModal(this.props);
    }


    render(){
        return(
            <div className='Media' onClick={this.handleClick}>
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