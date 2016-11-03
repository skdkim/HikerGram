Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update, :edit]
    resource :session, only: [:create, :destroy]
    resource :photo, only: [:create, :destroy]
  end

  root "static_pages#root"
end
