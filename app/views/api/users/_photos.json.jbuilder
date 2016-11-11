json.extract! photo, :id, :image_url, :description, :user
json.currentUserLikes photo.likers.include?(current_user) ? true : false
json.likesCount photo.likes.length
# json.likes_count current_user.likes.length
json.comments do
  photo.comments.each do |comment|
    # debugger

    json.set! comment.id do
      json.commentor comment.user.username
      json.commentor_id comment.user.id
      json.comment_text comment.comment_text
      json.comment_id comment.id
      json.photoOwner comment.photo.user.id
    end
  end
end
