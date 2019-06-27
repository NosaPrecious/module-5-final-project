class UsersController < ApplicationController

def show
  render json: User.all
end


end
