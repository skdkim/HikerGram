# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true

  belongs_to :followers,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followees,
    foreign_key: :followee_id,
    class_name: :User
end
