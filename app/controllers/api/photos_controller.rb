class Api::PhotosController < ApplicationController

  def create
  end

  private
  def photos_params
    params.require(:photos).permit(:image_url, :title, :description)
  end
end
