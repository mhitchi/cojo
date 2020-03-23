import React, { Component } from "react";
import axios, { post } from "axios";
// https://www.youtube.com/watch?v=sp9r6hSWH_o file upload tutorial

class ImgUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    }
  }

  onChange(e) {
    let files = e.target.files;
    console.log(files)

    //set up file reader
    let reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      //access api
      // console.log('img data', e.target.result)
      const url="/employees";
      const formData = {file: e.target.result};
      return post(url, formData)
        .then(response => console.log("response: ", response))
        .catch(err => console.log("error: ", err))
    }
  }

  render() {
    return (
      <>
        <div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
        </div>
      </>
    )
  }
}

export default ImgUpload;