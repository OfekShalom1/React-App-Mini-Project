import React, { Component } from "react";

class OtherData extends Component {
  constructor() {
    super();
    this.state = { address: {} };
  }
  async componentDidMount() {
    this.setState({ address: this.props.address });
  }
  OnChangeAdress = async(e) => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value === ""? "" :value });
    let newAddress = {
      
       street: await this.state.street === "" ?"": this.state.street ?  this.state.street : this.state.address.street,
      city: await this.state.city === "" ?"": this.state.city ? this.state.city : this.state.address.city,
      zipcode:await this.state.zipcode === "" ?"": this.state.zipcode ?  this.state.zipcode : this.state.address.zipcode
    };
    this.props.updateadress(newAddress);
  };
  
  
  
  render() {
    return (
      <div className="divOtherData">
        Street:
        <input
          className="buttonOtherData"
          name="street"
          defaultValue={this.props.address.street}
          onChange={this.OnChangeAdress}
        />
        <br />
        City
        <input
          className="buttonOtherData"
          name="city"
          defaultValue={this.props.address.city}
          onChange={this.OnChangeAdress}
        />
        <br />
        Zipcode:
        <input
          className="buttonOtherData"
          name="zipcode"
          defaultValue={this.props.address.zipcode}
          onChange={this.OnChangeAdress}
        />
        <br />
      </div>
    );
  }
}

export default OtherData;
