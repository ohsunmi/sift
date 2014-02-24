class RequestInvite < ActionMailer::Base
  default :css => 'email', :from => "Sift"

  def send_email(email)
  	mail(:to => email, :subject => "Sift has received your request!", :css => ['email'])
  end
end
