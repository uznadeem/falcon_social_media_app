# Falcon Social Media App

A simple social media application built with Ruby on Rails 7.2, utilizing Falcon as the web server, PostgreSQL for the database, and Action Cable for real-time features. Users can create, view, and interact with posts in real-time.

## Features

- User authentication using Devise
- Create, read, update, and delete posts
- Real-time updates with Action Cable
- Responsive and user-friendly interface

## Technologies Used

- Ruby 3.3.4
- Rails 7.2
- PostgreSQL
- Devise for user authentication
- Action Cable for real-time features
- Falcon as the web server

## Getting Started

### Prerequisites

- Ruby 3.3.4
- Rails 7.2
- PostgreSQL
- Bundler

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/falcon_social_media_app.git
   cd falcon_social_media_app
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Set up the database:
   ```bash
   rails db:create
   rails db:migrate
   ```

4. Start the server:
   ```bash
   rails s
   ```
   or 
   ```bash
   bundle exec falcon serve --bind http://localhost:3000
   ```


5. Open your web browser and navigate to `http://localhost:3000` in one tab (Browser 1). In a separate tab (Browser 2), access `http://localhost:3000/posts/new`.

6. Create a new post in Browser 2. The post will be automatically reflected in Browser 1 in real-time via Action Cable, showcasing the application’s live update capabilities.

<img width="912" alt="image" src="https://github.com/user-attachments/assets/705ba312-f052-46df-8b41-b5805fde2c5a">

## Conclusion

## Conclusion

The Falcon Social Media App successfully demonstrates the integration of Falcon with Action Cable, providing robust support for WebSockets. This enables real-time updates and seamless interactions within the application. As a result, developers can leverage Falcon's performance advantages while implementing live features typical of modern web applications. 

Feel free to explore and expand upon this project, and enjoy the benefits of real-time communication with Falcon!
