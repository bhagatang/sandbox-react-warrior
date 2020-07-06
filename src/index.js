import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Avangers: Infinity War!",
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  vote_average: 8.4,
  overview: "text"
};

function Image(props) {
  return <img style={{ width: "100%" }} src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, image, vote_average, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : null}
            // style={{ background: this.state.like ? "blue" : "white" }}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return <MovieItem data={movie} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
