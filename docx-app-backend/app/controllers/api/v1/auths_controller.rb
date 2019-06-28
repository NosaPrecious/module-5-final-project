class Api::V1::AuthsController < ApplicationController

  def create
      @user= User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
          # user was found
          payload = {userId: @user.id}
          token = encode(payload)
          render json: {
            user: @user,
            token: token,
            authenticated: true
          }, status: :ok
        else
          # user was not found
          render json: {
            message: "Incorrect username or password",
            authenticated: false,
          }, status: :unauthorized
      end
  end

end
