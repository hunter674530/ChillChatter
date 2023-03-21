class User < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :chats, through: :messages
end
