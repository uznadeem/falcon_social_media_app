class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "posts_channel"
  end

  def unsubscribed
  end

  def sendMessage(params)
    puts "START"
    sleep 10
    puts "DONE"
  end
end
