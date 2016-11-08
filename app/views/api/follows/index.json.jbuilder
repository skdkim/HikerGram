@follows.each do |follow|
  json.set! follow.id do
    next if follow.followee_id === current_user.id
      json.extract! follow, :followee_id, :follower_id, :followees
  end
end
