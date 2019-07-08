class Api::V1::UsersController < ApplicationController

  def show
      render json: User.find(params[:id]), status: :accepted
    end

    def create
        username= User.find_by(username: params[:username])
        if username === nil
            User.create!([{first_name: params[:firstname], last_name: params[:lastname], email: params[:email], username: params[:username], password: params[:password]}])

          render json: {message: "Successful"}
        else
          render json: {message: "Unsuccessful"}
        end
    end

    def profile
        token = request.headers["Authentication"].split(" ")[1]
        payload = decode(token)
        @user = User.find(payload["userId"])
        render json: @user
    end




end
