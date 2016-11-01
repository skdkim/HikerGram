# API Endpoints

## HTML API
### Root
* GET / - loads React web app


## JSON API
###Users
* GET /api/users
* POST /api/users
* PATCH /api/users

###Session
* POST /api/session
* DELETE /api/session

###Photos
* GET /api/photos
  * Gets all the photos
* POST /api/photos
* GET /api/photos/:id
* PATCH /api/photos/:id
* DELETE /api/photos/:id

###Comments
* GET /api/photos/:id/comments
  * Gets all the comments
* POST /api/photos/:id/comments
* PATCH /api/comments/:id
* DELETE /api/comments/:id

###Likes
* POST /api/photos/:id/likes
* DELETE /api/photos/:id/likes/:id

###Follows
* GET /api/users/:id/followers
* POST /api/users/:id/follow
* DELETE /api/follows/:id
