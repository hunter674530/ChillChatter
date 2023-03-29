class NotesController < ApplicationController
  
def index
    notes = Note.all
    render json: notes, status: :ok
end

def show
    note = Note.find(params[:id])
    render json: note, status: :ok
end

def create
    note = Note.create!(note_params)
    render json: note, status: :created
end

def update
    note = Note.find(params[:id])
    note.update(note_params)
    render json: note, status: :created
end

def destroy
    note = Note.find(params[:id])
    note.delete
    render json: note, status: :ok
end

private

def note_params
    params.permit(:content, :user_id)
end
end
