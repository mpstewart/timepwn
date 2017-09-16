class User < ApplicationRecord

  def local_time
    local_time = Time.current.in_time_zone(timezone)
    local_time.strftime("%I:%M %p")
  end

end
