<h1>Instagram</h1>

[Heroku Link](https://hikergram.com/)
<br>
[Trello Link](https://trello.com/b/9Rn9u5mH/instagramclone)

<h2>Minimum Viable Product</h2>
<p>Instagram is a web application inspired by Instagram. I will think of a new name later. This application will be built with Ruby on Rails in the backend and React/Redux in the frontend. In 2 weeks time, this app will, at minimum, satisfy the following criteria with smooth, bug-free UI experience, interesting seed data, and excellent CSS styling:</p>

- [ ] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Hosting on Heroku
- [ ] Images
- [ ] Likes
- [ ] Commenting on images
- [ ] Following & Photo feed


<h2>Design Docs</h2>
* [View Wireframes] (../docs/wireframes)
* [React Components] (../docs/component-hierarchy.md)
* [API endpoints] (../docs/api-endpoints.md)
* [DB schema] (../docs/schema.md)
* [Sample State] (../docs/sample-state.md)

# Implementation Timeline

## Phase 1: Backend Setup/Authentication (2 days)
#### Objective: Create a working rails project with front-end Authentication
- [X] new project
- [X] User model
- [X] Users/Session Controllers
- [X] Backend Authentication
- [X] API requests
- [X] Connect Middlewares
- [X] React/Redux Containers and Components
- [X] "Welcome" landing page
- [X] Logout landing page
- [X] User session persists upon refresh
- [ ] Seed Users
- [ ] Style Sign In/ Sign Up page

## Phase 2: Photos Model, API, and Components (2 days)
#### Objective: Photos can be created, read, edited, and destroyed through the API
- [ ] Photo model
- [ ] Seed database
- [ ] CRUD API for PhotosConroller
- [ ] JBuilder view for photos
- [ ] APIUtil for User and Database interaction
- [ ] Make everything a component
- [ ] Style photos

## Phase 3: User Profile Page (1.5 days)
#### Objective: Page displays all of User's photos
- [ ] Profile component
- [ ] Create many components for piecing together User information bar
- [ ] Render all user's photos on page with Masonry
- [ ] More seeding if needed
- [ ] Style Page

## Phase 4: Likes (0.4 days)
#### Objective: Users can like any photo
- [ ] Likes model
- [ ] Seed Database with Likes
- [ ] CRUD API for liking photos
- [ ] Update Photo components to display numbers of likes
- [ ] Style Likes

## Phase 5: Comments (0.6 days)
#### Objective: Users can comment on any photo
- [ ] Comments model
- [ ] Seed Database with Comments
- [ ] CRUD API for commenting on photos
- [ ] Update Photo component to take comments
- [ ] Style comments

## Phase 6: Follows (1.5 day)
#### Objective: Users can follow other users
- [ ] Follows model
- [ ] CRUD API for following other users
- [ ] Update any components that need to display follows
  - [ ] Profile Component
  - [ ] Photo Component
- [ ] Seed follows
- [ ] Style follows

## Phase 7: Photo Feed, home page (1 day)
- [ ] Display random photos of followees
- [ ] Style Photos

## Phase 8: Clean-up(1 day)
- [ ] Confirm all items are checked on this list
- [ ] Touch-up styling
- [ ] Bonus Features!

#### Bonus Features
- [ ] Discover Page
- [ ] Expanding image on hover
- [ ] Mouse directed vertical scroll
- [ ] Infinite scroll
