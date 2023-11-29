import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'sportsCatImage/');
  },
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}${path.extname(file.originalname)}`);
  },
});


// const storage = multer.diskStorage({
//     destination:'./image/',
//     filename: (req, file, cb) => {
//       return cb(null, ${file.fieldname}_${Date.now()}${path.extname(file.originalname)});
//     },
//   });



export const upload = multer({ storage });