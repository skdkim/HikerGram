# API Endpoints

## HTML API
### Root
* GET / - loads React web app


## JSON API
###Users
* POST /api/users
* PATCH /api/users

###Session
* POST /api/session
* DELETE /api/session
* GET /api/session

###Photos
* GET /api/photos
  * Gets all the photos
* POST /api/photos
* PATCH /api/photos/:id
* DELTE /api/photos/:id

###Comments
* GET /api/photos/:id/comments
  * Gets all the comments
* POST /api/photos/:id/comments
* PATCH /api/photos/:id/comments/:id
* DELTE /api/photos/:id/comments/:id

###Likes
* POST /api/photos/:id/likes
* DELTE /api/photos/:id/likes/:id

###Follows
* POST /api/photos/:id/follows
* DELTE /api/photos/:id/follows/:id
