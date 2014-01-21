# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Sift::Application.initialize!

ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.sendgrid.net',
  :port           => '587',
  :authentication => :plain,
  :user_name      => ENV["SENDGRID_USERNAME_SIFT"],
  :password       => ENV["SENDGRID_PASSWORD_SIFT"],
  :domain         => 'heroku.com',
  :enable_starttls_auto => true
}
