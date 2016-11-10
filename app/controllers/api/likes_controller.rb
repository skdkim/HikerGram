class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, photo_id: params[:id])
    @like.delete
    render :show
  end

  private
  def like_params
    params.require(:likes).permit(:user_id, :photo_id)
  end
end
