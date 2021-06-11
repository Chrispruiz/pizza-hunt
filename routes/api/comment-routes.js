const router = require('express').Router();
//pulls in from comment-controller.js file
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

// delete replies
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;