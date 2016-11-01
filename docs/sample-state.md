```js

{
  currentUser: {
    id: 1,
    username: "Guest",
    icon_url: "sample.png",
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    uploadPhoto: {errors: []}
  },
  photos: {
    1: {
      user_id: 1,
      image_url: "hello.png", 
      liked: false,
      likes: 52,
      description: ["Check out this cool picture!"],
      comments: {
        1: { id: 1, body: "wow nice picture!" },
        2: { id: 2, body: "keep it up!" }
      }
    }
  }
  user: {
    userId: 2,
    username: "Guest2",
    icon_url: "sample.png"
  }
}

```
