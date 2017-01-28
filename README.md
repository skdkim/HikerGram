# HikerGram

---

[HikerGram live] (http://www.hikergram.com)

HikerGram is a fullstack web application clone of Instagram. HikerGram utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend. Enjoy for yourself using the Demo account, a community of outdoor enthusiasts documenting their lives through photography.

##Features & Implementation

---

### Login and Authentication

On the backend, HikerGram uses the BCrypt library to generate password hashes with salts to make user passwords safe from rainbow table attacks. On HikerGram a user can use the Guest Login to experience the full features of this webapp fully stocked with photos, user relationships, and photo likes.

![image of login/signup form](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/auth.png)

### How the Photos are Populated

Every page that displays photos are populated using the same PhotosController. Originally I had the profile page pull their images from the UsersController but decided that it would be more organized if I pull all photos from one place. The only challenge here was to let the controller know which route the current page was on and this was accomplished through sending down the pathname in root.jsx. 

The controller then decided which photos to send back up and then the frontend would display all photos that were sent back up. I could have done this photos screening logic in multiple places. It could have been done in the frontend in the container, or the component. It could have been done in the json view. I chose the controller as the place for this logic because I needed to take away work from the frontend as much as I could. I knew the user's computer would be busy loading photos so when it felt right to me that the server delt with this workload versus anywhere else.

### Feed Page

The feed page loads all the photos users the current user is following plus their own photos depending on the order in which any given user uploaded their photo. Most recent photos will appear at the top. On this page the user can do all interactions with a given photo plus navigate to the photo owner's profile page via their icon.

![image of feed page](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/Screen%20Shot%202016-11-11%20at%2011.05.59%20AM.png)

### Photo Interactions

A user can like/unlike photos via clicking on the heart icon at the bottom of an image. When the heart is red the current user likes the photo and when it's white the current user has not liked the photo yet. When any user likes a photo the number of likes for that photo will increase live.

![like heart animation](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/likeAnimation.png)

To like/unlike a photo simply click on the red/white heart. The fastest way to like a photo while browsing is the double click it.

A user can also comment on any photo and delete their own comments. If the photo belongs to the current user, they have access to delete any comment on the photo.

![image overlay](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/imageOverlay.png)

When photos are in their minimized form, hover over the block to see quick information about how many likes and comments are on the specific photo.

### User Interaction

Users can enter into eachothers profiles via profile photo icons where ever they appear.
When on someone else's profile, the current user can choose to follow or unfollow the specific user. Doing this will stop any unfollowed user's photos from appearing in the current user's feed page. 

### User Profile Page

The user profile page displays all of a user's photos in a grid format. All photos can be click on to display a larger modal view of the picture featuring the ability to like and comment the photo. A user profile page can be accessed via any user profile icon that appears anywhere on the website. A user's profile page features the ability for other users to follow or unfollow them. 

![image of profile page with modal](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/Screen%20Shot%202016-11-11%20at%2012.44.02%20PM.png)

### Discover Page

The discover page displays all photos that the current user in grid format.
All images are clickable and will expand to show you the full image. To get more details head over to the user's profile page to see all of their photos!

![image of discover page](https://github.com/skdkim/HikerGram/blob/master/docs/prm_photos/Screen%20Shot%202016-11-11%20at%2011.07.34%20AM.png)

## Future Features

---
###Infinite Scroll
HikerGram features over 100 photos and therefore strains the browser on initial load. Creating infinite scroll for all of HikerGram's pages will be a great step towards better UX design.

###Functional SearchBar
All of HikerGram's users are featured on the discover page but it is still diffcult for a user to find a friend, especially if they have millions of friends and the particular search target hasn't uploaded a photo in a long time. Being able to search by username will allow user's a portal into all other user's profile pages regardless of how active any individual is.
