json.set! :photos do
  json.array! @photos do |photo|
    next if photo.user_id === current_user.id
    photo, :id, :image_url, :user_id
  end
end
