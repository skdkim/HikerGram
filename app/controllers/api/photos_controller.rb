class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photos_params)
    if @photo.save
  end

  private
  def photos_params
    params.require(photos:).permit(:image_url, :title, :description)
  end
end
