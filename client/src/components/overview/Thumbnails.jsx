import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.selectedPhotoIndex,
    }
  }

  next() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }))
  }

  previous() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }))
  }

  thumbnailClick(event) {
    this.props.thumbnailClick(Number(event.target.getAttribute('data-key')))
  }

  //Set currentIndex back to 0 whenever choosing a new style
  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedPhotoIndex !== prevProps.selectedPhotoIndex) {
      if (this.props.selectedPhotoIndex + 7 < this.props.thumbnails.length) {
        this.setState({
          currentIndex: this.props.selectedPhotoIndex
        })
      } else {
        this.setState({
          currentIndex: this.props.thumbnails.length - 7
        })
      }

    }
    if (prevProps.selectedStyle.style_id !== this.props.selectedStyle.style_id) {
      this.setState({
        currentIndex: 0
      });
    }
  }


  render() {
    var visibleThumbnails = [];
    if (this.props.thumbnails.length < 7) {
      visibleThumbnails = this.props.thumbnails.slice('');
    } else if (this.state.currentIndex + 7 < this.props.thumbnails.length) {
      visibleThumbnails = this.props.thumbnails.slice(this.state.currentIndex, this.state.currentIndex + 7);
    } else if (this.state.currentIndex + 7 >= this.props.thumbnails.length) {
        visibleThumbnails = this.props.thumbnails.slice(this.props.thumbnails.length - 7, this.props.thumbnails.length);
    }
    return (
      <div className='thumbnails-flex'>
        <FaChevronUp className={(this.state.currentIndex !== 0 && this.props.thumbnails.length > 7) ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.previous.bind(this)} />
        {/* <FontAwesomeIcon icon={faChevronUp} className={(this.state.currentIndex !== 0 && this.props.thumbnails.length > 7) ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.previous.bind(this)} /> */}
        {visibleThumbnails.map((thumbnail, index) => (
          (thumbnail[1] !== null
            ? <div key={index} data-key={thumbnail[0]} className={this.props.selectedPhotoIndex !== thumbnail[0] ? 'thumbnail' : 'thumbnail selected-thumbnail'} style={{backgroundImage:`url(${thumbnail[1]})`}} onClick={this.thumbnailClick.bind(this)} ></div>
            : <div key={index} data-key={thumbnail[0]} className={this.props.selectedPhotoIndex !== thumbnail[0] ? 'thumbnail no-thumbnail' : 'thumbnail no-thumbnail selected-thumbnail'} onClick={this.thumbnailClick.bind(this)} ></div>
            )
        ))}
        <FaChevronDown className={(this.state.currentIndex + 7 < this.props.thumbnails.length) ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.next.bind(this)} />
        {/* <FontAwesomeIcon icon={faChevronDown} className={(this.state.currentIndex + 7 < this.props.thumbnails.length) ? 'chevron-icon' : 'chevron-icon hidden'} onClick={this.next.bind(this)} /> */}
      </div>
    )
  }
}

export default Thumbnails;