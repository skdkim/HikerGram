json.extract! photo, :id, :image_url, :description, :user, :likes
json.currentUserLikes photo.likers.include?(current_user) ? true : false
# json.likes_count current_user.likes.length
