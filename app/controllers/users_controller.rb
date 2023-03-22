class UsersController < ApplicationController
skip_before_action :authorize, only: :create

def create
    # byebug
    user = User.create!(user_params)
    session[:user_id] = user.id

    render json: user, status: :created
end

def show
    render json: @current_user 
    #show me who the current user is 
end

private

def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio)
end
end
