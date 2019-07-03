class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}

  has_many :user_docs
  has_many :docs, through: :user_docs
end
