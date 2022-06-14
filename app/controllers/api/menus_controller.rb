class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy] 

  def index
    render json: Menu.all 
  end

  def show 
    render json: @menu
  end 

  def create
      @menu = Menu.create(menu_params)
    if(@menu.save)
        render json: @menu
    else
        render json:  @menu.errors.full_message, status: 422
    end
end


def update
    # get the menu from db, in our before action we set it
    if(@menu.update(menu_params))
        render json: @menu
    else
        render json:  @menu.errors.full_message, status: 422
    end
end

def destroy
    # destory removes from db and returns the ting that was destroyed
    render json: @menu.destroy
end

private

def set_menu
  @menu = Menu.find(params[:id])
end

def menu_params
  params.require(:menu).permit(:name)
end
end