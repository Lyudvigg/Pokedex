import React, { Component } from "react";
import "./Pokemon.css";

class Pokemon extends Component {
  state = {
    isHovered: false
  };

  onMouseEnterHandler = () => {
    this.setState({
      isHovered: true
    });
  };

  onMouseLeaveHandler = () => {
    this.setState({
      isHovered: false
    });
  };
  render() {
    const { isHovered } = this.state;
    const { name, img, frontImg, height, weight, exp, type } = this.props;
    return (
      <div
        className={isHovered ? "hovered_item" : "pokemon_item"}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <img src={isHovered ? frontImg : img} alt="pokemon" />
        <span className="pokemon_name">
          name: <span className="text_color">{name}</span>
        </span>
        <span className="pokemon_type">
          type:<span className="text_color">{type}</span>
        </span>
        {isHovered ? (
          <span className="pokemon_type">
            height: <span className="text_color">{height}</span>
          </span>
        ) : null}
        {isHovered ? (
          <span className="pokemon_type">
            weight:<span className="text_color">{weight}</span>
          </span>
        ) : null}
        {isHovered ? (
          <div className="experience__wrraper">
            <div
              style={{
                width: exp / 5 + "%",
                backgroundColor:
                  exp >= 300 ? "red" : exp >= 200 ? "green" : "yellow"
              }}
              className="experience"
            >
              <span className="pokemon_type">
                experience:<span className="text_color">{exp}</span>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Pokemon;
