# Main focus:
+ get followees to appear on state when in feed page
+ create follow button with functionality

---
**Challenge:** I wanted to access followees and followers from the state but had trouble getting those views from json along with all the nested attributes.

**Solution:** Used the photos state that was already present. I had this call already done because I used it for the discover page. To use this I had this onEnter "fetch all photos" to be called on the feed page also and also sent in the route as params. Down in the controller I used logic to see which route I was in and then to send the right photos to the jbuilder.

---
**Challenge:** When I combine onEnter routes all the code is run and I can't seem to stop running it with a if statement.

**Solution:** I tried a lot of different types of logical statements but they don't seem to work. Unresolved, I have moved onto other MVP's.
