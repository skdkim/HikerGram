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

# Routes

| Path        | Component       |
| ------------- |:-------------:| 
| "/"     | "HomeContainer" | 
| "/sign-up"      | "AuthFormContainer"      |  
| "/sign-in"  | "AuthFormContainer"       |  
| "/user/:userId" | "Profile Container" |
