import React from 'react';
// import './lazyload.css'
// threshold
const threshold = [0.01];
class LazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      io: null,
      refs: null,
      images: null,
    };
    this.handleonload = this.handleonload.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { ImgClassName, src, alt, ImgStyle } = this.props.state;
    const images = [];
    const refs = [];
    const ref = React.createRef();
    refs.push(ref);
    images.push(
      <img
        className={ImgClassName || 'lazyload-img'}
        ref={ref}
        data-src={src}
        alt={alt || 'antd-lazyload'}
        style={{ ...ImgStyle }}
      />,
    );
    this.setState({
      refs,
      images,
    });
  }

  componentDidMount() {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(item => {
          if (item.intersectionRatio <= 0) return;
          const { src } = this.props.state;
          const { target } = item;
          const image = new Image();
          image.src = src;
          image.onload = () => {
            target.src = target.dataset.src;
          };
        });
      },
      {
        threshold,
      },
    );
    this.setState({ io });
  }

  handleonload() {
    const { io, refs } = this.state;
    refs.forEach(item => {
      io.observe(item.current);
    });
  }

  render() {
    const { BoxClassName, width, height, BoxStyle } = this.props.state;
    const { images } = this.state;
    return (
      <div
        className={BoxClassName || 'lazyload-img-box'}
        style={{ width, height, ...BoxStyle }}
      >
        {images}
        <img
          onError={this.handleonload}
          src=""
          alt="antd-lazyload"
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
export default LazyLoad;
