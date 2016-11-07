# Main focus:
+ feed page & style
+ modals for profile page

---
**Challenge:** Discover page needs access to all photos minus those of the current user's

**Solution:** Put the logic in json file in the index view of photo's index. Create a separate index route for all photos

---
**Challenge:** Feed container not receiving proper state. Current User was not having access to their own photos.

**Solution:** Give current user access to their photos in user view

---
**Challenge:** Website is running really slowly due to all the high resolution photos being loaded directly to webpage despite needing only a small version of it.

**Temp_Solution:** Add a deflater but this doesn't solve the problem entirely. I will most likely need to add a smaller version of the photo and parse it on click or something.

**Addition:** Changed all photo quality to 50%.

---
**Challenge:** Modal's do not dynamically change sizes, therefore thinner photos cannot take up less space. Also Modal is not properly vertically aligning...
**Solution:** Unsolved.
