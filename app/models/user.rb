class User < ApplicationRecord
  has_many :notes, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :chats, through: :messages

  has_secure_password
end
