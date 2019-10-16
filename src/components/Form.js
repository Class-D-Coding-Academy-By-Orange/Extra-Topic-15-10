import React, { Component } from "react";

class Form extends Component {
  state = {
    isEmailValid: false,
    isNameValid: false,
    isPhoneValid: false,
    isUrlValid: false
  };

  isFormValid = async event => {
    event.preventDefault();

    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let phone = event.target["phone"].value;
    let url = event.target["url"].value;

    //Name
    let nameReg = /^[a-zA-Z][^#&<>"~;.-_=+*!@%^&()[\]/,$^%{}?123456789]{2,29}$/;
    if (name) {
      console.log("name :", nameReg.test(name));
      if (nameReg.test(name)) {
        await this.setState({ isNameValid: true });
      } else {
        await this.setState({ isNameValid: false });
      }
    } else {
      await this.setState({ isNameValid: false });
    }

    //Email
    let emailReg = /[^@#&<>"~;/,$^%{}?]+@[^#&<>"~;./,$^%{}?123456789]+\.com+/;
    if (email) {
      console.log("email :", emailReg.test(email));
      if (emailReg.test(email)) {
        await this.setState({ isEmailValid: true });
      } else {
        await this.setState({ isEmailValid: false });
      }
    } else {
      await this.setState({ isEmailValid: false });
    }

    //Phone
    let phoneReg = /^[2-9]{1}[0-9]{9}$/;
    if (phone) {
      console.log("phone :", phoneReg.test(phone));
      if (phoneReg.test(phone)) {
        await this.setState({ isPhoneValid: true });
      } else {
        await this.setState({ isPhoneValid: false });
      }
    } else {
      await this.setState({ isPhoneValid: false });
    }

    //Url
    let urlReg = /(http:\/\/|www.|(?:))+[a-z][^#&<>"~;/,$^%{}?123456789]+\..+/;
    if (url) {
      console.log("url :", urlReg.test(url));
      if (urlReg.test(url)) {
        await this.setState({ isUrlValid: true });
      } else {
        await this.setState({ isUrlValid: false });
      }
    } else {
      await this.setState({ isUrlValid: false });
    }

    this.props.receiving(Object.values(this.state).some(value => value === false) ? false : true)
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form onSubmit={this.isFormValid}>
          <h3>Name:</h3>
          <input type="text" className="name" name="name"></input>
          <h3>Email:</h3>
          <input type="email" className="email" name="email"></input>
          <h3>Phone:</h3>
          <input type="tel" className="phone" name="phone"></input>

          <h3>Blog URL:</h3>
          <input type="text" className="url" name="url"></input>
          <div className="small-6 small-centered text-center columns">
            <button
              type="submit"
              className="button success expand round text-center"
              name="button"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
