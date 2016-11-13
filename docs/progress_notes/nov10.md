# Main focus:
+ create Comments CRUD and styling

---
**Challenge:** When the double click "like" action was implemented it would allow the current user to limitlessly like a photo because a double click action only adds a like.

**Future Solution:** Make the association between user and photo creating a like object be unique. I will not be implementing this feature at this time due to time constraints.

---
**Challenge:** Changing the modal like of a photo will not persist on closing out of the modal. A user could "like" a photo then close the modal and open the picture again and open it only to find the current state doesn't represent their last action.

**Solution:** The correct part of the state was not being altered. I did not know it was possible to reach deep into different parts of the state through the reduce but you can using actions to key into or using filter if the state was an array.

---
**Challenge:** A user cannot enter multiple comments in a row for whatever reason.

**Solution:** Another reducer issue. In my json view I made this part of the state an array rather than an object.

---
**Challenge:** Comments are not rerendering on modal despite doing everything like the "likes." Once again it seems to be a reducer issue but this time I can't use a hacky way to patch and satisfy the immediate user's experience.

**Solution:** I was not able to come to a solution today. Will continue working on this tomorrow.

---
**Challenge:** Comments functionality on feed page is broken. Most likely because I'm using two reducers to catch the same actions.

**Solution:** The problem was because I was using a photo reducer on my feed page and a user reducer on my profile page. Both reducers were catching the actions dispatched by the comment middleware and colliding with each other. I refactored my code so that the photos on my profile page would no longer come from the user details reducer but rather the photos.
