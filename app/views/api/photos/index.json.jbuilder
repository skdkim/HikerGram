@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :image_url, :user, :description, :likers
    json.currentUserLikes photo.likers.include?(current_user) ? true : false
  end
end
