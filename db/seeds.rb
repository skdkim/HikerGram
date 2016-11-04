# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "123123");
User.create(username: "skdkim", password: "123123sdfsdf", image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478205508/profile_images/Sung_Kim.jpg");
User.create(username: "steve", password: "curryman24");
User.create(username: "jackie", password: "cakeislife");
User.create(username: "missholldoll", password: "pnwalways");
User.create(username: "johnmuir", password: "hiking4life", image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478193569/profile_images/johnmuirprofile.jpg",
            description: "I love the outdoors!!!");
User.create(username: "mattwheat", password: "livinglife");

# for John Muir
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
