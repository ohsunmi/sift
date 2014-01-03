class HomeController < ApplicationController

	def index
		@user = User.new
	end

	def get_email
		@user = User.create(user_params)
		if @user.save
			email = @user.email
			RequestInvite.send_email(email).deliver

			# url ="https://us3.api.mailchimp.com/1.3/?method=listSubscribe&apikey=a138e6caaa8ecd7cecaa7af04d176617-us3&id=a9dffbb9f8&email_address=" +email
			# response = HTTParty.post(url)

			# render :json => response

			redirect_to root_url
		end
	end

	private

	def user_params
		params.require(:new_user).permit(:email)
	end

end
