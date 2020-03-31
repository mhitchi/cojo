const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const aws = require("aws-sdk");
const path = require("path");

// https://www.youtube.com/watch?v=srPXMt1Q0nY file uploading tutorial

// //storage strategy
// const storage = multer.diskStorage({
//   //access to request, file, and callback
//   destination: function(req, file, cb) {
//     //callback args= errors and path
//     cb(null, "./uploads/");
//   },
//   filename: function(req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });

// //create file filters
// const fileFilter = (req, file, cb) => {
//   //conditional file saving
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     //accept file
//   cb(null, true);
//   } else {
//     cb(new Error("please select a jpg or png file"), false);
//   }
// };

// //initialize multer, declare destination for uploaded files, limit file size to 5MB, filter file types
// const upload = multer({storage: storage, limits: {
//  fileSize: 1024 * 1024 * 5 
// }, fileFilter: fileFilter
// });

// const Employees = require("../models/employees");

// router.post("/", upload.single('employeeImg'), (req, res) => {
//   console.log(req.file);
//   const employee = new Employees({
//     _id: new mongoose.Types.ObjectId(),
//     // TODO remove hard coding
//     companyID: 1,
//     name: "Voltron",
//     email: "voltron@voltron.com",
//     department: "mysteries",
//     employeeImg: req.file.path
//   })
// })

// ROUND 2
// // configuring Multer to use files directory for storing files
// // this is important because later we'll need to access file path
// //We have to hold the file temporarily before we send it to the REST API so that we can provide a full path to the files.
// //also generate unique file names
// const storage = multer.diskStorage({
//   destination: './files',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // express route where we receive files from the client
// // passing multer middleware
// //When the route receives a file, it goes through the middleware first and is stored in our /files directory with a newly generated file name. When we get to the callback, the file is available as part of the req object.
// router.post('/files', upload.single('file'), (req, res) => {
//  const file = req.file; // file passed from client
//  const meta = req.body; // all other values passed from the client, like name, etc..
 
//  // send the data to our REST API
//  axios({
//     url: `/api/uploads`,
//     method: 'post',
//     data: {
//       file,
//       name: meta.name,      
//     },
//   })
//    .then(response => res.status(200).json(response.data.data))
//    .catch((error) => res.status(500).json(error.response.data));
// });

//ROUND 3


//create new s3 object
const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  Bucket: 'work-hq'
});

//single upload
const imgUpload = multer({
  storage: sulterS3({
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
}).single('employeeImage');

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

router.post( '/img-upload', ( req, res ) => {
  imgUpload( req, res, ( error ) => {
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