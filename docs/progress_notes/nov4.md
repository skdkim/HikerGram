# Main focus:
+ seeding quality data
+ creating layout on profile page for user photos

---
**Challenge:** creating a layout for photos to grid beautifully

**Solution:** used masonry to layout photos

---
**Challenge:** Masonry secretly has photo width's larger than what's visible to user throwing margins and width of containers off.

**Temp_Solution:** extend the width of the container to alot of added extra width of photo unseen.
**Possible_Future_Solution:** don't use masonry and float left all photos in container.

---
**Challenge:** Get rid of landing page and let logout button redirect to login page
**Problem:** Because of asynchronous actions pages are being reloaded before user is logged out therefore landing on same page.
**Solution:** Push the route on the dispatch of logout action in middleware upon success callback
