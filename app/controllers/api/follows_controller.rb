class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
  end

  def show
    @follow = Follow.find(current_user.id)
  end

  private
  def follows_params
    params.require(:follows).permit(:follower_id, :followee_id)
  end
end
