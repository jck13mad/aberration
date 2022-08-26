import React, { Component } from "react";

import aberration_video from '../Videos/aberration_video.mp4'

class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {muted: true}
    }
  
  render() {
    return (
      <div onClick={() => this.setState({muted: !this.state.muted})}>
        {/* data-object-fit="cover" */}
        <video id="aberration-video" className="overflow-x-hidden" muted={this.state.muted} autoPlay loop playsInline='true' >
            <source src={aberration_video} />
        </video>
      </div>
    );
  }
}
export default VideoPlayer;