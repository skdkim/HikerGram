@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :image_url, :user, :description, :likers
    json.currentUserLikes photo.likers.include?(current_user) ? true : false
    json.photoLikes photo.likers.length
    # json.comments photo.comments
    json.set! :comments do
      json.array! photo.comments do |comment|
        json.commentor comment.user.username
        json.commentor_id comment.user.id
        json.comment_text comment.comment_text
      end
    end
  end
  json.likes_count current_user.likes.length
end
