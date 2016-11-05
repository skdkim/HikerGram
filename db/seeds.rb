# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "skdkim", password: "123123sdfsdf",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478205508/profile_images/Sung_Kim.jpg",
  description: "Computer programmer who loves to hike.", firstname: "David Kim" );
User.create(username: "philh.lee", password: "ilovehiking",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478300307/profile_images/14156482_623083317861802_1633365826_a.jpg",
  description: "I love hiking, and my friends", firstname: "Phil Lee");
User.create(username: "beargrylls", password: "neverstopbelieving",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478300525/profile_images/13712202_1625669191078198_1755338711_a.jpg",
  description: "Host of NBC Running Wild, ITV Survival School, Ch4 The Island, China Survivor Games & Discovery Man Vs Wild. UK Chief Scout.",
  firstname: "Bear Grylls");
User.create(username: "missholldoll", password: "pnwalways",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478300602/profile_images/14156509_319548278398025_411231014_a.jpg",
  description: "Nature doesn't need us. We need nature. Outdoor | Travel | Photography Missholldoll@gmail.com",
  firstname: "Holly Johnson");
User.create(username: "johnmuir", password: "hiking4life",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478193569/profile_images/johnmuirprofile.jpg",
  description: "I love the outdoors!!!", firstname: "John Muir");
User.create(username: "uncle.bubbles", password: "livinglife",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478300668/profile_images/13686960_170665093340085_2106042369_a.jpg",
  description: "hear my stories humans of earth", firstname: "Matthew Wheat");
User.create(username: "expedLewis", password: "lewisandclark",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478301729/profile_images/6859745292_d913897de4_b.jpg",
  description: "Watch me on my journey to the west with my buddy Clark", firstname: "Meriwether Lewis");
User.create(username: "withaHachet", password: "justonehatchet",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478301941/profile_images/1355255094.jpg",
  description: "I have one hatchet and one camera, join me on my journey.", firstname: "Brian Robeson");
User.create(username: "StephHikes", password: "greatestgoat",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478302072/profile_images/related-32.jpg",
  description: "Guess what.. I hike! You should too.", firstname: "Steph Curry");
User.create(username: "REI", password: "stopreturningstuff",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478302234/profile_images/13744221_139284843166032_957842464_a.jpg",
  description: "A member-owned co-op since 1938. We believe a life outdoors is a life well lived.",
  firstname: "REI");

# photos for david
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478302843/userphotos/12445913_490524357799429_469348427_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"On the hike to Tokopah falls it was snowing.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303211/userphotos/12797644_1576456229348399_1088834079_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"Sun kissing the General Sherman.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303262/userphotos/12783372_1006052939430702_767488707_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303314/userphotos/12317913_1638157426466196_387457046_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"Definitely coming back here to do a night.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303396/userphotos/11379899_1188115341214546_1604071009_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"Never quite quite know whats around the bend.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303442/userphotos/11324346_833921383364664_1594056613_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"The first hike we went on!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303491/userphotos/10684343_419147361580116_324678669_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"Right behind upper yosemite falls on the bridge.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303531/userphotos/10964022_842573509138045_1898305129_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"We have two backpacks but mine is pretty much empty and his is twice full.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303616/userphotos/11410380_782190005229311_323648687_n.jpg.jpg",
  user_id: User.find_by(username: "johnmuir").id, description:"About top start the adventure. Goodbye world for 5 days.");



Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478208904/profile_images/all-photos/jmt1.jpg", user_id: 6);
