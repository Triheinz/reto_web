import React, {Component} from "react";
import PhoneService from "../services/phones.service";
import {withRouter} from "react-router";

class Phones extends Component {
  constructor(props){
    super(props);
    this.state = {
      phones:{},
    }
    this.PhoneService = new PhoneService();
  }

  render(){
    return (
      <div className="allphones">
        <h2>{this.props.name}</h2>
        <img src={this.props.imageFileName} alt="img" />
        <p>{this.props.description}</p>
        <div className="props">
          <p>{this.props.color}</p>
          <p>{this.props.screen}</p>
          <p>{this.props.processor}</p>
          <p>{this.props.ram}</p>
        </div>
        <p className="pr">{this.props.price}</p>
      </div>
    );
  }
}

export default withRouter(Phones);
