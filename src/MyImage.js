import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default class MyImage extends Component {
  render() {
    return (
      <div className="lazy-image">
        <LazyLoadImage
          alt={this.props.alt}
          height={this.props.height}
          effect="opacity"
          src={this.props.src} // use normal <img> attributes as props
          width={this.props.width}
        />
        <div> {this.props.caption} </div>
      </div>
    );
  }
}
