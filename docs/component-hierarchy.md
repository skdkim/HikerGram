# Component Hierarchy

## HomeContainer (logged out)
  * Footer
  * <h3>AuthFormContainer</h3>
    * AuthForm
    
## HomeContainer (logged in)
  * Header
  * Footer
  * <h3>PhotoContainer</h3>
    * User head
    * Photo
    * Description
    * Comments
  * <h3>UserInfoContainer</h3>
    * User Profile Picture
    * User Info
  * Users's Photos
  * <h3>PhotoViewContainer</h3>
    * Photo
    * <h3>PhotoInfoContainer</h3>
      * User Photo / Username
      * Photo description
      * Comments
  * <h3>DiscoverContainer</h3>
    * Discover header
    * User Images
    
    
    
# Routes

| Path        | Component       |
| ------------- |:-------------:| 
| "/"     | "HomeContainer" | 
| "/sign-up"      | "AuthFormContainer"      |  
| "/sign-in"  | "AuthFormContainer"       |  
| "/photo/:photoId" | "PhotoViewContainer |
| "/photo/:photoId/info" | "PhotoInfoContainer |
| "/user/:userId/photo/:photoId" | "PhotoViewContainer" |
| "/discover" | "DiscoverContainer" |
