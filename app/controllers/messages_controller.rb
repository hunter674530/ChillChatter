class MessagesController < ApplicationController

  def index
    message = Message.all
    render json: message, status: :ok
end
def show
    message = Message.find(params[:id])
    render json: message,include: :user, status: :ok
end
def create
    message = Message.create!(message_params)
    render json: message, status: :created
end
def update
  message = Message.find(params[:id])
  message.update(message_params)
  render json: message, status: :created
end
def destroy
message = Message.find(params[:id])
message.destroy
render json: message, status: :ok
end

private

def message_params
    params.permit(:content, :chat_id, :user_id)
end
end
