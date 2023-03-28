class ChatSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :messages 
  has_many :users, through: :messages
end
