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
  * <h3>ProfileContainer</h3>
    * <h4>UserInfoContainer</h4>
      * User Profile Picture
      * User Info
    * Users's Photos
    * <h4>PhotoViewContainer</h4>
      * Photo
      * <h4>PhotoInfoContainer</h4>
        * User Photo / Username
        * Photo description
        * Comments
  * <h3>DiscoverContainer</h3>
    * Discover header
    * <h4>SimpleUserInfoContainer</h4>
      * User Profile Picture
      * Simplified User Info
    * User Images
    
    
    
# Routes

| Path        | Component       |
| ------------- |:-------------:| 
| "/"     | "HomeContainer" | 
| "/sign-up"      | "AuthFormContainer"      |  
| "/sign-in"  | "AuthFormContainer"       |  
| "/user/:userId" | "ProfileContainer" |
| "/user/:userId/photo" | "PhotoViewContainer" |
| "/discover" | "DiscoverContainer" |
