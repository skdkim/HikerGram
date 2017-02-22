json.extract! photo, :id, :image_url, :description, :user
json.currentUserLikes photo.likers.include?(current_user) ? true : false
json.likesCount photo.likes.length
