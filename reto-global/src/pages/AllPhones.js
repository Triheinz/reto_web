import React, { Component } from 'react';
import Phones from '../components/Phones';
import PhoneService from '../services/phones.service';


class AllPhones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
    };
    this.phoneService = new PhoneService();
  }

  refreshState() {
    this.phoneService
      .getPhones()
      .then((response) => {
        console.log(response.data);
        this.setState({ phones: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayphones() {
    const { phones } = this.state;
    if (phones) {
      console.log(phones);
      return phones
    .map((phones) => {
        return (
          <Phones
            refreshState={() => this.refreshState()}
            key={phones.id}
            {...phones}
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="phones-page">

        {this.displayphones()}
      </div>
    );
  }
}

export default AllPhones;
