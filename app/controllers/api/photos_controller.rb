class Api::PhotosController < ApplicationController

  def create
  end

  def index
    @photos = Photo.all
  end
  
  private
  def photos_params
    params.require(:photos).permit(:image_url, :title, :description)
  end
end
