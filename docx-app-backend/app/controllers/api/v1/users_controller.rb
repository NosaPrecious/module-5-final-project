class Api::V1::UsersController < ApplicationController

  def show
      render json: User.find(params[:id]), status: :accepted
    end

    def create
        byebug
    end

    def profile
        token = request.headers["Authenticated"].split(" ")[1]
        byebug
        payload = decode(token)
        @user = User.find(payload["user_id"])
        render json: @user
    end


end
