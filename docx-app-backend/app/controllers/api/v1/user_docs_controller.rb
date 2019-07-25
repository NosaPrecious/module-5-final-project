class Api::V1::UserDocsController < ApplicationController

  def create
    @doc = Doc.create!([{filename: params[:file_name], file_path: "path/doc", content_type: "text/plain", data: params[:input_text]}])
    docId= Doc.find(@doc[0].id)
    # byebug
    if docId.present?
        @newDoc = UserDoc.create!([{user_id: params[:user_id], doc_id: @doc[0].id, has_owner: true, write_access: true, read_access: true, modify_access: true, remove_access: true}])

        @user = User.find(params[:user_id])
        serialized_user= UserSerializer.new(@user).as_json

        render json: {user: serialized_user, message: "Document created sucessfully"}
    end
  end

  def add_permit

      @users = Doc.find(params[:doc_id]).users

      if !@user.present?
        # byebug
        UserDoc.create!([{user_id: params[:permitted_userId], doc_id: params[:doc_id], has_owner: true, read_access: params[:read_access], write_access: params[:write_access], modify_access: false, remove_access: false}])

        render json: {message: "permission created successfully!"}

      else
          # byebug
      end
  end

end
