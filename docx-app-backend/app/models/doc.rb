class Doc < ApplicationRecord
  has_many :user_docs, dependent: :delete_all  
  has_many :users, through: :user_docs
end
