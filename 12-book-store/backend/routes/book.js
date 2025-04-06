
const express = require('express');

const router = express.Router();

const {
   getSingleBook,
   getAllBooks,
   deleteSingleBook,
   updateBook,
   createBook

} = require('../controllers/articles');



router.post("/create-book", verifyAdminToken, postABook)

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;





/*
TO REMEMBER :
*/

//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something