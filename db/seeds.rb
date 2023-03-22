# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
User.destroy_all
Chat.destroy_all

user1 = User.create!(username: 'user1', password: 'password1')
user2 = User.create!(username: 'user2', password: 'password2')
user3 = User.create!(username: 'user3', password: 'password3')

Chat.create!(name: 'birthday' )


Message.create!(content: 'did you hear?', user_id: user1.id, chat_id: 1)
Message.create!(content: 'yes', user_id: user2.id, chat_id: 1)
Message.create!(content: 'will be there', user_id: user3.id, chat_id: 1)


Note.create!(content: 'this a note', user_id: 1)
Note.create!(content: 'this might be a note', user_id: 1)
Note.create!(content: 'definitely a note', user_id: 3)
Note.create!(content: 'this might be aaa note', user_id: 2)
Note.create!(content: 'note1', user_id: 1)
