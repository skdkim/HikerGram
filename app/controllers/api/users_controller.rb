class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @followees = @user.followees
  end

  def edit
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image_url, :firstname, :lastname, :description)
  end
end
