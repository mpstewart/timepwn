Rails.application.routes.draw do
  get '/about', to: "static#about"

  root "users#index"
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
