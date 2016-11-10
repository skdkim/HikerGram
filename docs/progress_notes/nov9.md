# Main focus:
+ create the follow button and make it functional
+ CRUD for follow
+ Likes if I get there

---
**Challenge:** When opening up a modal I was unable to pass the information from the image click to the modal through my state.

**Solution:** I first tried to put individual things on my image as tags but that wouldn't work because I didn't have enough tags and they weren't all being read correctly. I created a function that returns a function and passed in the whole photo object as an argument. Within there I was able to start setting states of what I wanted.

---
**Challenge:** Followers are not updating state correctly even though the backend info is being sent correctly.

**Solution:** When I took the referenced data out from a deeply nested part of state and instead put it on top of the state the page would rerender when I wanted it to.

---
**Challenge:** Getting a 400 error when unliking a photo. The backend portion still works and will correctly update the representation of user liking a photo.

**Solution:** I combed through the redux cycle again found out that on when sending my api call, I was not sending in a destroySuccess callback.
