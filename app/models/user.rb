class User < ActiveRecord::Base
	validates :email, presence: true, email: true
	validates_uniqueness_of :email
end
