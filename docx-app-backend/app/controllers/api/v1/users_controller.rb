class Api::V1::UsersController < ApplicationController

  def show
      render json: User.find(params[:id]), status: :accepted
    end

    def create
        byebug
    end

    def profile
        token = request.headers["Authentication"].split(" ")[1]
        payload = decode(token)
        @user = User.find(payload["userId"])
        render json: @user
    end




end
