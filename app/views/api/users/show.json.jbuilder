# debugger
json.partial! "api/users/user", user: @user

# json.set! :followees do
#   @followees.each do |followee|
#     json.set! followee.id do
#     json.user followee.username
#     json.image_url followee.image_url
#     json.photos followee.photos
#     end
#   end
# end

json.set! :photos do
  json.array! @user.photos, partial: 'api/users/photos', as: :photo
end
