class Api::PhotosController < ApplicationController

  def create
  end

  def index
    if params[:pageType] === "feed"
      @photos = Photo.all.where(user_id: current_user.id)
    elsif
      @photos = Photo.all
    end
  end

  private
  def photos_params
    params.require(:photos).permit(:image_url, :title, :description)
  end
end
