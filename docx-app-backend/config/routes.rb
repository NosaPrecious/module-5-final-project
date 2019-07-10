Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
        resource :users, only: [:create]
        resource :docs, only: [:destroy, :put]
        post '/login', to: 'auths#create'
        post '/user_docs', to: 'user_docs#create'
        post '/permissions', to: 'user_docs#add_permit'
        get '/profile', to: 'users#profile'
        get '/users', to: 'users#index'
        get '/users/:id', to: 'users#show'
        delete "/docs/:id", to: 'docs#destroy'
        put "/docs/:id", to: 'docs#update'

      end
    end
end
