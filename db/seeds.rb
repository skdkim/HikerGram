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
User.create(username: "elon.musk", password: "livinglife",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478327887/profile_images/11273054_1444992415800527_1323603731_a.jpg",
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
  user_id: User.find_by(username: "skdkim").id, description:"On the hike to Tokopah falls it was snowing.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303211/userphotos/12797644_1576456229348399_1088834079_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"Sun kissing the General Sherman.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303262/userphotos/12783372_1006052939430702_767488707_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303314/userphotos/12317913_1638157426466196_387457046_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"Definitely coming back here to do a night.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303396/userphotos/11379899_1188115341214546_1604071009_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"Never quite quite know whats around the bend.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303442/userphotos/11324346_833921383364664_1594056613_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"The first hike we went on!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303491/userphotos/10684343_419147361580116_324678669_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"Right behind upper yosemite falls on the bridge.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303531/userphotos/10964022_842573509138045_1898305129_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"We have two backpacks but mine is pretty much empty and his is twice full.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478303616/userphotos/11410380_782190005229311_323648687_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id, description:"About top start the adventure. Goodbye world for 5 days.");

#photos for philh
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324511/philh.lee/photo-1470653503930-01819ee7ec83_uri1jq.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "The view here is amazing...");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324523/philh.lee/photo-1471921152622-ee4bff0a0238_dzelit.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "This is why this is my favorite park.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324540/philh.lee/photo-1472404122088-5682d90f2a7a_pesrd3.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "Will I love this place always?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324523/philh.lee/photo-1472445059364-92ac5245e86d_s4kfgs.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "As I stand in this place I fall in awe.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324521/philh.lee/photo-1472752112832-519166b23dfa_sq1caf.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "I'd take rays of sunlight over an alarm clock any day.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324534/philh.lee/photo-1473694043131-fb0b5da4e14c_nejeqh.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "Forever this place will be.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324534/philh.lee/photo-1473773386757-42bbe7288351_eu9zrb.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "Tiny house!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324568/philh.lee/photo-1473790034954-491b2ee68f30_tt4r01.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "What a crazy hike but totally worth");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324591/philh.lee/photo-1474649111648-d95d30755186_ilccxb.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "Nothing quite like a peaceful lake");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324540/philh.lee/photo-1475592339713-a05582419983_vczjie.jpg",
  user_id: User.find_by(username: "philh.lee").id, description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324563/philh.lee/till-the-cows-come-home_dnygyb.jpg",
  user_id: User.find_by(username: "philh.lee".id, description: "Nothing quite like the golden hour.");

# photos for beargrylls
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324262/beargrylls/03_djdxcw.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Can never go wrong with a straight path.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324264/beargrylls/3361b5e1_r9wyih.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324262/beargrylls/5f468e98_asscba.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Foggy forests are awesome.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324262/beargrylls/5f516109_m0oxxi.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Green pastures ahead?.. Maybe not.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324265/beargrylls/6lOsliXXTFmk4UHwTJZn_Store_Mosse_Nationalpark-4_gmu7h5.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Can you guess what national park this is?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324257/beargrylls/95b6ec26_kdgao3.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Don't let the rocks fool you.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324264/beargrylls/B6PfiQ8QoSzmsZYOCkSB__DSC0530-1_s0rw7a.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Water in the valley!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324269/beargrylls/nQZcA7PRTyuduZPSZQ88_wanderlust_kducry.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324283/beargrylls/photo-1414016642750-7fdd78dc33d9_bgyfzb.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Nothing can replace morning coffee.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324273/beargrylls/photo-1415036927049-3cf4bba59cb7_y6wfqc.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "It gets cold quick so keep moving!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324301/beargrylls/photo-1416512149338-1723408867e9_s4snz1.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324339/beargrylls/photo-1418225043143-90858d2301b4_orbwth.jpg",
  user_id: User.find_by(username: "beargrylls").id, description: "Take a break and enjoy the view!");

# photos for missholldoll
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324263/missholldoll/bb9f9777_qt8axx.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Steady walkings.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324261/missholldoll/caroline_sada_landscape_t6fll8.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "lovely pastures are one of my favorite things");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324265/missholldoll/d39825fa_sj4r5q.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "I wonder who lives there...");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324268/missholldoll/FhzljPB5TfOXYm54uxOh_osca_kytuul.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "After a long week of work only one thing is on my mind, nature.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324280/missholldoll/lynDyjGSR9eR57ouPIEE_IMG_woods_uzxdiy.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "I really like walking photos.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324335/missholldoll/photo-1418946188801-4dbceebd6b84_u4ebuv.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "It's always winter in the north.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324333/missholldoll/photo-1418985227304-f32df7d84e39_iw6acz.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "");

#photos for johnmuir
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324279/johnmuir/photo-1414394825544-67fa8e8e28ea_ld5rot.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Chaos back into order in a blink of an eye.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324311/johnmuir/photo-1414542563971-94513793d046_cnksx8.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "In all it's brilliance how amazing.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324282/johnmuir/photo-1415650328328-1909c4ceabdb_f21col.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "View like these take the weight off my shoulders");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324304/johnmuir/photo-1423057062227-3a08155aedfc_cil8is.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Many people conquered this mountain today!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324299/johnmuir/photo-1436247303198-d12dd4e2bf9c_fi03a9.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Slay this difficult route! How amazing it is.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324337/johnmuir/photo-1443636695178-be226c44e060_gzhvpw.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Took a detour from my regular route to check out this beautiful fall.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324355/johnmuir/photo-1444857957393-c7a377126d9c_a4kewk.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "All that you've done for me.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324380/johnmuir/photo-1445308124430-8357b98a6f71_aj2qes.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Never stop exploring.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324446/johnmuir/photo-1446064851258-7944734cb1bf_ocve70.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Beauty like this makes me adore all things.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324413/johnmuir/photo-1446729444801-31245ddba81a_cldm0s.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "How is this not all together so wonderful?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324482/johnmuir/photo-1447690709975-318628b14c57_u3griu.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Every small thing is just as glorious as the big.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324503/johnmuir/photo-1465756600300-8073ffa4337e_apshxo.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Here I am to bask in the glory of nature.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324508/johnmuir/photo-1470995604269-a974c362dafe_dphja5.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "I'll never know how much this will change over the years.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324507/johnmuir/photo-1472005991841-b135020cad7c_j4hhiw.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "I stand before the landscape bowing in my heart at it's glory.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/v1478324521/johnmuir/photo-1474576142067-3d38a82550b2_wm9zxi.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Snack breaks are just as important as a good pace.");
