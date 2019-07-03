class Doc < ApplicationRecord
  has_many :user_docs
  has_many :users, through: :user_docs
end
