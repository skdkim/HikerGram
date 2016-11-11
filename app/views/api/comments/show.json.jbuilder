json.extract! @comment, :photo_id
json.commentor @comment.user.username
json.comment_id @comment.id
json.comment_text @comment.comment_text
