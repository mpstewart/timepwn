class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :global_new_user
  
  def global_new_user
    @user = User.new
  end
end
