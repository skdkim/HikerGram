Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :update, :edit] do
      resources :follows, only: [:index]
      resources :photos, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:show, :create, :destroy, :index]
    resources :follows, only: [:index, :show, :create, :destroy]
    resources :likes, only: [:show, :create, :destroy]
    resources :comments, only: [:show, :create, :destroy]
  end

  root "static_pages#root"
end
