class HomeController < ApplicationController

	def index
		@user = User.new
	end

	def get_email
		@user = User.create(user_params)
		if @user.save
			email = @user.email
			RequestInvite.send_email(email).deliver

			redirect_to root_url
		end
	end


	private

	def user_params
		params.require(:new_user).permit(:email)
	end

end
