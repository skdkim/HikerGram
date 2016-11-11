class AddCommentText < ActiveRecord::Migration
  def change
    add_column :comments, :comment_text, :text, null: false
  end
end
