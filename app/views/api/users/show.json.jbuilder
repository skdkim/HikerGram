# debugger
json.partial! "api/users/user", user: @user

@followees.each do |followee|
  json.set! followee.id do
  json.user followee.username
  json.image_url followee.image_url
  json.photos followee.photos
  end
end

# json.array!(@followees) do |followee|
#   json.set! followee.id
#
#   end
# end

# not sure what these lines of code are doing...
json.set! :photos do
  json.array! @user.photos, partial: 'api/users/photos', as: :photo
end
