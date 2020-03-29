import React, { Component } from "react";
import styles from "./MyProfileStyles";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import axios from "axios";
import $ from "jquery";
// import ImgUpload from "../ImgUpload";

//ROUND 1 OR 2
// const MyProfile = () => {

//   // Redux action
//   function uploadSuccess({ data }) {
//     return {
//       type: 'UPLOAD_DOCUMENT_SUCCESS',
//       data,
//     };
//   }

//   function uploadFail(error) {
//     return {
//       type: 'UPLOAD_DOCUMENT_FAIL',
//       error,
//     };
//   }

//   function uploadDocumentRequest({ file, name }) {  
//     let data = new FormData();
//     data.append('file', document);
//     data.append('name', name);

//     return (dispatch) => {
//       axios.post('/files', data)
//         .then(response => dispatch(uploadSuccess(response)))
//         .catch(error => dispatch(uploadFail(error)))
//     }
//   }

//   /*
//   ... A lot of Redux / React boilerplate happens here 
//   like mapDispatchToProps and mapStateToProps and @connect ...
//   */

//   // Component method
//   function handleFileUpload(e) {
//     console.log(e.target.value)
//     const file = e.target.value;
//     uploadDocumentRequest({
//       file,
//       name: 'Awesome Cat Pic'
//     })
//   }

class MyProfile extends Component {
  constructor( props ){
    super( props );
    this.state = {
      selectedFile: null,
      //for multiple uploads:
      selectedFiles: null
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
      data.append( 'employeeImage', this.state.selectedFile, this.state.selectedFile.name );
      axios.post( '/employees/img-upload', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US, en; q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
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
              let fileName = response.data;
              console.log( 'fileName: ', fileName );
              console.log( 'File Uploaded!', '#3089cf' );
            }
        }
      }).catch( (error) => {
        //if another error
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
            {/* <ImgUpload /> */}
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