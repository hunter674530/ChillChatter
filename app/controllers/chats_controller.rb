class ChatsController < ApplicationController

def index
    chat = Chat.all
    render json: chat, status: :ok
end
def show
    chat = Chat.find(params[:id])
    render json: chat, status: :ok
end
def create
    chat = Chat.create!(chat_params)
    render json: chat, status: :created
end
def update
  chat = Chat.find(params[:id])
  chat.update(chat_params)
  render json: chat, status: :created
end
def destroy
chat = Chat.find(params[:id])
chat.destroy
render json: chat, status: :ok
end

private

def chat_params
    params.permit(:name)
end

end
