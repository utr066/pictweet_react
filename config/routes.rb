Rails.application.routes.draw do
  resources :messages
  devise_for :users
  root to: "tweets#index"
  resources :tweets, only: [:index, :show, :new, :create, :destroy, :edit, :update] do
  resources :comments, only: [:create]
  end
  resources :users, only: [:show]
  resources :messages, only: [:index, :create], format: 'json'
end
