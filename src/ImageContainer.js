import React, { Component } from "react";
import { trackWindowScroll }
  from 'react-lazy-load-image-component';


import MyImage from "./MyImage";

class ImageContainer extends Component {
  render() {
    return (
      <div>
        {this.props.imageArray.map(item => (
          <MyImage 
            src={item.src}
            alt={item.alt} 
            width={item.width} 
            caption={item.caption} />
        ))}
      </div>
    );
  }
}

ImageContainer.defaultProps = {
  imageArray: [
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    },
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    },
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    },
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    },
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    },
    {
      src:
        "https://img1.looper.com/img/gallery/what-the-cast-of-forrest-gump-looks-like-today/intro.jpg",
      alt: "Forrest Gump",
      caption: "Forrest Gump"
    }
  ]
};

export default trackWindowScroll (ImageContainer);
