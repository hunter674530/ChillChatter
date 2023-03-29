class User < ApplicationRecord
  has_secure_password
  
  has_many :notes, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :chats, through: :messages

end
