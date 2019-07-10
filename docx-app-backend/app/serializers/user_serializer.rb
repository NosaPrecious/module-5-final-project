class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email

  has_many :user_docs
  has_many :docs, through: :user_docs
end
