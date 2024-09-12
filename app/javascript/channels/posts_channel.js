import consumer from "./consumer"

let subscription = consumer.subscriptions.create("PostsChannel", {
  connected() {
    console.log("Connected to PostsChannel")
  },

  disconnected() {
    console.log("Disconnected from PostsChannel")
  },

  received(data) {
    const postsContainer = document.getElementById("posts")
    postsContainer.insertAdjacentHTML("beforeend", data.post)
  },
  sendMessage(message) {
    this.perform(
      "sendMessage",
      {
        message: message,
      }
    );
  }
})

export {subscription}
