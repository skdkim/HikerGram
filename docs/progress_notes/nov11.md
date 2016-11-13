# Main focus:
+ complete Comments functionality on profile modal

---
**Challenge:** Comments will not render automatically with a delete button when it is supposed to. Delete button will only appear on refresh.

**Solution:** I'm starting to get really good at debugging reducer problems because every time I have a refresh issue it's a new type of reducer problem that I've never seen before. Once again, a reducer issue. I added an attribute that the state could read and depend on to display the delete button or not and the button started to show upon immediate comment creation.

---
**Challenge:** Comments will not appear immediately when created on the modal.

**Solution:** This seemingly refresh issue was not a problem with the reducer this time. Everything was correctly done on the backend and redux cycle. The problem was that after the reducer gave us back a new photo, that photo was never being sent to the modal. The modal was always reading the same photo to display therefore new state changes didn't matter. The modal was reading the photo that was set to the state. I fixed this issue by using a lifecycle method, componentWillReceiveProps to set the state to the new photo.
