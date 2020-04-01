const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const multer = require("multer");
const multerS3 = require( 'multer-s3' );
const aws = require("aws-sdk");
const path = require("path");
const dotenv = require('dotenv').config({path: __dirname + '/.env'});

// https://www.youtube.com/watch?v=srPXMt1Q0nY file uploading tutorial

//ROUND 3

//create new s3 object
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: 'work-hq'
});

//single upload
const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'work-hq',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + "-" + Date.now() + path.extname( file.originalname ) )
    }
  }),
  limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2MB
  fileFiler: function( req, file, cb ){
    checkFileType( file, cb );
  }
}).single('profileImage');

//check file type
function checkFileType( file, cb ){
  //allowed extensions:
  const filetypes = /jpeg|jpg|png|gif/;
  //check extensions
  const extname = filetypes.test( path.extname( file.originalnmae ).toLowerCase());
  //check mime
  const mimetype = filetypes.test( file.mimetype );

  if( mimetype && extname ){
    return cb( null, true );
  } else {
    cb( 'Error: images only!' );
  }
}

//route POST /employees/img-upload

router.post( '/profile-img-upload', ( req, res ) => {
  profileImgUpload( req, res, ( error ) => {
    //console.log( 'requestOkokok', req.file );
    //console.log( 'error', error );
    if( error ){
      console.log('errors', error);
      res.json( { error: error } );
    } else {
      if( req.file === undefined ){
        console.log('Error: no file selected!');
        res.json('error: no file selected');
      } else {
        //if successful
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        console.log( imageName );
        console.log( imageLocation );
        //save file name into db into employee model
        res.json( {
            image: imageName,
            location: imageLocation
        } );
      }
    }
  })
});

module.exports = router;