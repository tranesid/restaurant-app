class Api::ItemsController < ApplicationController
  before_action :set_menu, except: [:all_items, :find_item]
  before_action :set_item, only: [:show, :update, :destroy]

  def all_items
      render json: item.all
  end

  def find_item
      render json: item.find(params[:id])
  end

  def index
   # this is different use  @menu.items, not item.all
    render json: @menu.items
  end

  def show
      render json: @item
  end

  def create
      # this is different @auth.items.new not item.new
      @item = @menu.items.new(item_params)
      if(@item.save)
          render json: @item
      else
          render json: @item.errors.full_message, status: 422
      end
  end

  def update
      if(@item.update(item_params))
          render json: @item
      else
          render json: @item.errors.full_message, status: 422
      end
  end

  def destroy
      render json: @item.destroy
  end

  
  private 

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_item
     @item =  @menu.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price, :description)
  end
end