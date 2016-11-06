@photos.each do |photo|
  json.set! photo.id do
    next if photo.user_id === current_user.id
    json.extract! photo, :id, :image_url, :user_id
  end
end
