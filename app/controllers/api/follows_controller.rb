class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.All
  end

  

  private
  def follows_params
    params.require(:follows).permit(:follower_id, :followee_id)
  end
end
