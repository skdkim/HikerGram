# Main focus:
+ create the follow button and make it functional
+ CRUD for follow
+ Likes if I get there

---
**Challenge:** When opening up a modal I was unable to pass the information from the image click to the modal through my state.

**Solution:** I first tried to put individual things on my image as tags but that wouldn't work because I didn't have enough tags and they weren't all being read correctly. I created a function that returns a function and passed in the whole photo object as an argument. Within there I was able to start setting states of what I wanted.
