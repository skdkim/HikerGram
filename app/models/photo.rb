# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  image_url   :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :image_url, presence: true;

  belongs_to :user

end
