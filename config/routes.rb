Sift::Application.routes.draw do
  
  root 'home#index'
  post '/request', :to => 'home#get_email'
  get '/test', :to => 'home#page'

end
