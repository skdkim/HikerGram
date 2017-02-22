class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
  end

  def show
    @follow = Follow.find(current_user.id)
    # render 'api/users/show'
  end

  def create
    @follow = Follow.new(follows_params)
    if @follow.save
      render :show
    end
  end

  def destroy
    @follow = Follow.find_by(followee_id: params[:id], follower_id: current_user.id)
    @follow.delete
    render :show
  end

  private
  def follows_params
    params.require(:follows).permit(:follower_id, :followee_id)
  end
end
