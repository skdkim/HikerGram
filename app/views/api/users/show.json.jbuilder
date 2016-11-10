# debugger
json.partial! "api/users/user", user: @user

# json.set! :followees do |followee|
#     json.set! followee.id do
#     # json.user followee.username
#     # json.image_url followee.image_url
#     # followee.photos
#     end
# end
#
# json.set! :followers do |follower|
#   json.set! follower.id do
#   end
# end

json.set! :photos do
  json.array! @user.photos, partial: 'api/users/photos', as: :photo
end
# json.likes_count current_user.likes.length
