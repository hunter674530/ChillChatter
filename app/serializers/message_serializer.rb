class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id
  has_one :user
  has_one :chat
end
