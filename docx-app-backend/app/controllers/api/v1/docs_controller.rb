class Api::V1::DocsController < ApplicationController

  def update
    @id = params[:id]
    @data = params[:data]
    Doc.update(@id, data: @data)

    render json: {message: "updated Successfully"}

  end

  def destroy
    id = params[:id]
    Doc.destroy(id)
    render json: {message: "Document #{id} Deleted Successfully"}
  end

end
