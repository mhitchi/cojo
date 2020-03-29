import React from "react";
import styles from "./MyProfileStyles";
import { Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
import axios from "axios";
// import ImgUpload from "../ImgUpload";

const MyProfile = () => {

  // Redux action
  function uploadSuccess({ data }) {
    return {
      type: 'UPLOAD_DOCUMENT_SUCCESS',
      data,
    };
  }

  function uploadFail(error) {
    return {
      type: 'UPLOAD_DOCUMENT_FAIL',
      error,
    };
  }

  function uploadDocumentRequest({ file, name }) {  
    let data = new FormData();
    data.append('file', document);
    data.append('name', name);

    return (dispatch) => {
      axios.post('/files', data)
        .then(response => dispatch(uploadSuccess(response)))
        .catch(error => dispatch(uploadFail(error)))
    }
  }

  /*
  ... A lot of Redux / React boilerplate happens here 
  like mapDispatchToProps and mapStateToProps and @connect ...
  */

  // Component method
  function handleFileUpload(e) {
    console.log(e.target.value)
    const file = e.target.value;
    uploadDocumentRequest({
      file,
      name: 'Awesome Cat Pic'
    })
  }

  return (
    <>
      <Row>
        <Sidebar page="myprofile"/>
        <Col xs={3}>
          {/* <ImgUpload /> */}
          <input type="file" onChange={handleFileUpload} />
          {/* get employee image */}
        </Col>
      </Row>
    </>
  )
};

export default MyProfile;