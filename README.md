# HikerGram

---

[HikerGram live] (hikergram.com)

HikerGram is a fullstack web application clone of Instagram. HikerGram utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend. Enjoy for yourself using the Demo account, a community of outdoor enthusiasts documenting their lives through photography.

##Features & Implementation

---

### Login and Authentication

On the backend, HikerGram uses the BCrypt library to generate password hashes with salts to make user passwords safe from rainbow table attacks. On HikerGram a user can use the Guest Login to experience the full features of this webapp fully stocked with photos, user relationships, and photo likes.

### Feed Page

The feed page loads all the photos users the current user is following plus their own photos depending on the order in which any given user uploaded their photo. Most recent photos will appear at the top. On this page the user can do all interactions with a given photo plus navigate to the photo owner's profile page via their icon.

### Photo Interactions

A user can like/unlike photos via clicking on the heart icon at the bottom of an image. When the heart is red the current user likes the photo and when it's white the current user has not liked the photo yet. When any user likes a photo the number of likes for that photo will increase live.

A user can also comment on any photo and delete their own comments. If the photo belongs to the current user, they have access to delete any comment on the photo.

### User Interaction

Users can enter into eachothers profiles via profile photo icons where ever they appear.
When on someone else's profile, the current user can choose to follow or unfollow the specific user. Doing this will stop any unfollowed user's photos from appearing in the current user's feed page. 

### User Profile Page

The user profile page displays all of a user's photos in a grid format. All photos can be click on to display a larger modal view of the picture featuring the ability to like and comment the photo. A user profile page can be accessed via any user profile icon that appears anywhere on the website. A user's profile page features the ability for other users to follow or unfollow them. 

### Discover Page

The discover page displays all photos that the current user in grid format.
In future renders of HikerGram the discover page will display the owners of all photos and will be able to expand on click.

## Future Features

---
###Infinite Scroll
HikerGram features over 100 photos and therefore strains the browser on initial load. Creating infinite scroll for all of HikerGram's pages will be a great step towards better UX design.

###Functional SearchBar
All of HikerGram's users are featured on the discover page but it is still diffcult for a user to find a friend, especially if they have millions of friends and the particular search target hasn't uploaded a photo in a long time. Being able to search by username will allow user's a portal into all other user's profile pages regardless of how active any individual is.
