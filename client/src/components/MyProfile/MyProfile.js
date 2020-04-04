import React, { Component } from "react";
import styles from "./MyProfileStyles";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import axios from "axios";
import $ from "jquery";

const dotenv = require('dotenv');
//initialize:
dotenv.config();

class MyProfile extends Component {
  constructor( props ){
    super( props );
    this.state = {
      selectedFile: null
      //for multiple uploads:
      // selectedFiles: null
    }
  }

  handleSingleFileChange = ( event ) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleSingleFileUpload = ( event ) => {
    const data = new FormData();

    //if file selected
    if( this.state.selectedFile ){
      //appends name, value, filename
      //NOT WORKING???
      data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
      // UNDEFINED???
      //console.log('data employee img: ', data.employeeImage);
      console.log('THIS: ', this.state.selectedFile);
      //ERROR 404 NOT FOUND
      axios.post( '/api/profile/profile-img-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US, en; q=0.8'
          // 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      }).then( (response) => {
        if( 200 === response.status ){
            //if file size is larger than expected
            if( response.data.error ){
              if( 'LIMIT_FILE_SIZE' === response.data.error.code ){
                console.log( 'Max size: 2MB', 'red' );
              } else {
                console.log( response.data );
                //if not given file type
                console.log( response.data.error, 'red' );
              }
            } else {
              //success
              console.log("fileName: ", response.data);
              let fileName = response.data;
              console.log( 'filedata: ', fileName );
              console.log( 'File Uploaded!', '#3089cf' );
            }
        }
      }).catch( (error) => {
        //if another error
        //THROWING 404
        console.log( error, 'red' );
      });
    } else {
      //if file not selected
      console.log( 'Please upload a file', 'red' );
    }
  }
  

  render() {
    console.log( this.state );
    return (
      <>
        <Row>
          <Sidebar page="myprofile"/>
          <Col xs={3}>
            <input type="file" onChange={this.handleSingleFileChange} />
            <button onClick={this.handleSingleFileUpload}>Upload</button>
            {/* get employee image */}
          </Col>
        </Row>
      </>
    )
  }
};

export default MyProfile;