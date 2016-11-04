class Editindexvalidations < ActiveRecord::Migration
  def change
    remove_index :photos, :column => [:user_id]
  end
end
