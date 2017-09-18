class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def index
    @users = User.all
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def update
  end

  def destroy
    User.destroy(params[:id])
    redirect_to root_path
  end
  

  private

  def user_params
    params.require(:user).permit(:gamertag, :timezone)
  end
end
