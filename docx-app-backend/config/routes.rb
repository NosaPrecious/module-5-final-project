Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resource :users, only: [:create]
        resource :docs
        post '/login', to: 'auths#create'
        get '/profile', to: 'users#profile'
        # get '/users/:id', to: 'users#show'
      end
    end
end
