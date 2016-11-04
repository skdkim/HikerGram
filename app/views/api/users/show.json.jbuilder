# debugger
json.partial! "api/users/user", user: @user

json.set! :photos do
  json.array! @user.photos, partial: 'api/users/photos', as: :photo
end
