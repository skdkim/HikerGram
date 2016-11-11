class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    end
  end

  def destroy
    @comment = Comment.find_by({id: params[:id]})
    @comment.delete
    render :show
  end

  def show
    @comment = Comment.find_by(params[:id])
  end

  private
  def comment_params
    params.require(:comments).permit(:user_id, :photo_id, :comment_text)
  end
end
