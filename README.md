User Dashboard with React and Ruby on Rails

Project Setup

Prerequisites


    - Ruby 3.3.1
    - Rails 7.0.6
    - Node.js (v16 or higher)
    - Yarn (for managing JavaScript dependencies)
    

Installation


    1. Clone the repository:
       git clone https://github.com/aman-bacancy/user_filter_react_rails

    2. Install Ruby dependencies:
       bundle install

    3. Install JavaScript dependencies:
       yarn install

    4. Set up the database:
       rails db:create db:migrate db:seed

    5. Start the Rails server:
       rails server

    6. Start the JavaScript build process:
       yarn build

    7. Access the application:
       http://localhost:3000
    

Features


    - User Dashboard: Displays a list of users with details such as name, continent, country, state, and city.
    - Filtering: Filters the users by continent, country, state, and city.
    - Responsive UI: Built with React and styled using Bootstrap.
    - Toggleable Filter Panel: The filter panel can be toggled on or off using a button.
    

Technologies Used


    - Ruby on Rails 7.0.6: Backend API for serving user data and filters.
    - React: Frontend for building interactive components and dynamic updates.
    - esbuild: JavaScript bundler for efficient React component handling.
    - Bootstrap: For responsive design and styling of components.
    - Axios: For making HTTP requests to fetch users and filter data.
    

Project Structure


    - app/: Contains the main Rails application code.
      - controllers/: Contains the controllers for serving user data.
      - views/: Contains the React components for the frontend.
    - app/javascript/: Contains JavaScript and React files.
      - components/: React components for the user dashboard and filters.
      - styles/: Contains CSS files for styling.
    - config/: Configuration files for Rails and esbuild.
    - public/: Public assets for the application.
    

Development

    To run the application in development mode, make sure the Rails server is running and the JavaScript build process is active. (yarn dev)
    Any changes to React components will be reflected automatically in the frontend.
