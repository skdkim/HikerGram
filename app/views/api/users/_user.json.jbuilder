json.extract! user, :id, :username, :image_url, :description, :firstname, :photos, :followees, :followers
json.follower_count user.followers.length
json.followee_count user.followees.length
json.currentUserFollows user.followers.include?(current_user) ? true : false
