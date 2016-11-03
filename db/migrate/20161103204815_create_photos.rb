class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.string :description
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :photos, :user_id, unique: true
  end
end
