# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  photo_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  comment_text :text             not null
#

class Comment < ActiveRecord::Base
  validates :user_id, :photo_id, :comment_text, presence: true

  belongs_to :user
  belongs_to :photo
end
