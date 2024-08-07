import { Player } from 'video-react';

function VideoSection() {
    return (
      <iframe className='video'
        src="https://www.youtube.com/embed/hlBUA7KseG0"
        title="COMPA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
  }
  
export default VideoSection;
  