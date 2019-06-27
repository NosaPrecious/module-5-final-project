class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :password, :email
end
