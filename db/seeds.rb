# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "skdkim", password: "123123sdfsdf",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478205508/profile_images/Sung_Kim.jpg",
  description: "Computer programmer who loves to hike.", firstname: "David Kim" );
User.create(username: "philh.lee", password: "ilovehiking",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478300307/profile_images/14156482_623083317861802_1633365826_a.jpg",
  description: "I love hiking, and my friends", firstname: "Phil Lee");
User.create(username: "beargrylls", password: "neverstopbelieving",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478300525/profile_images/13712202_1625669191078198_1755338711_a.jpg",
  description: "Host of NBC Running Wild, ITV Survival School, Ch4 The Island, China Survivor Games & Discovery Man Vs Wild. UK Chief Scout.",
  firstname: "Bear Grylls");
User.create(username: "missholldoll", password: "pnwalways",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478300602/profile_images/14156509_319548278398025_411231014_a.jpg",
  description: "Nature doesn't need us. We need nature. Outdoor | Travel | Photography Missholldoll@gmail.com",
  firstname: "Holly Johnson");
User.create(username: "johnmuir", password: "hiking4life",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478193569/profile_images/johnmuirprofile.jpg",
  description: "The mountains are calling and I must go.", firstname: "John Muir");
User.create(username: "elon.musk", password: "livinglife",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478327887/profile_images/11273054_1444992415800527_1323603731_a.jpg",
  description: "hear my stories humans of earth", firstname: "Elon Musk");
User.create(username: "expedLewis", password: "lewisandclark",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478301729/profile_images/6859745292_d913897de4_b.jpg",
  description: "Watch me on my journey to the west with my buddy Clark", firstname: "Meriwether Lewis");
User.create(username: "withaHachet", password: "justonehatchet",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478301941/profile_images/1355255094.jpg",
  description: "I have one hatchet and one camera, join me on my journey.", firstname: "Brian Robeson");
User.create(username: "StephHikes", password: "greatestgoat",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478302072/profile_images/related-32.jpg",
  description: "Guess what.. I hike! You should too.", firstname: "Steph Curry");
User.create(username: "REI", password: "stopreturningstuff",
  image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478302234/profile_images/13744221_139284843166032_957842464_a.jpg",
  description: "A member-owned co-op since 1938. We believe a life outdoors is a life well lived.",
  firstname: "REI");

# photos for david
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478302843/userphotos/12445913_490524357799429_469348427_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description:"On the hike to Tokopah falls it was snowing.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303211/userphotos/12797644_1576456229348399_1088834079_n.jpg.jpg",
  user_id: User.find_by(username: "REI").id,
  description:"Sun kissing the General Sherman.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303262/userphotos/12783372_1006052939430702_767488707_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description:"");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303314/userphotos/12317913_1638157426466196_387457046_n.jpg.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description:"Definitely coming back here to do a night.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303396/userphotos/11379899_1188115341214546_1604071009_n.jpg.jpg",
  user_id: User.find_by(username: "REI").id,
  description:"Never quite quite know whats around the bend.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303442/userphotos/11324346_833921383364664_1594056613_n.jpg.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description:"The first hike we went on!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303491/userphotos/10684343_419147361580116_324678669_n.jpg.jpg",
  user_id: User.find_by(username: "REI").id,
  description:"Right behind upper yosemite falls on the bridge.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303531/userphotos/10964022_842573509138045_1898305129_n.jpg.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description:"We have two backpacks but mine is pretty much empty and his is twice full.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478303616/userphotos/11410380_782190005229311_323648687_n.jpg.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description:"About top start the adventure. Goodbye world for 5 days.");

#photos for philh
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324511/philh.lee/photo-1470653503930-01819ee7ec83_uri1jq.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "The view here is amazing...");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324523/philh.lee/photo-1471921152622-ee4bff0a0238_dzelit.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "It is easier to feel than to realize, or in any way explain, Yosemite grandeur. The magnitudes of the rocks and trees and streams are so delicately harmonized, they are mostly hidden.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324540/philh.lee/photo-1472404122088-5682d90f2a7a_pesrd3.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Will I love this place always?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324523/philh.lee/photo-1472445059364-92ac5245e86d_s4kfgs.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "As I stand in this place I fall in awe.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324521/philh.lee/photo-1472752112832-519166b23dfa_sq1caf.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "I'd take rays of sunlight over an alarm clock any day.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324534/philh.lee/photo-1473694043131-fb0b5da4e14c_nejeqh.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Forever this place will be.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324534/philh.lee/photo-1473773386757-42bbe7288351_eu9zrb.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Tiny house!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324568/philh.lee/photo-1473790034954-491b2ee68f30_tt4r01.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "What a crazy hike but totally worth");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324591/philh.lee/photo-1474649111648-d95d30755186_ilccxb.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "Nothing quite like a peaceful lake");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324540/philh.lee/photo-1475592339713-a05582419983_vczjie.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Climb the mountains and get their good tidings.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324563/philh.lee/till-the-cows-come-home_dnygyb.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Nothing quite like the golden hour.");

# photos for beargrylls
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324262/beargrylls/03_djdxcw.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "Can never go wrong with a straight path.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324264/beargrylls/3361b5e1_r9wyih.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324262/beargrylls/5f468e98_asscba.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "Foggy forests are awesome.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324262/beargrylls/5f516109_m0oxxi.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "Green pastures ahead?.. Maybe not.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324265/beargrylls/6lOsliXXTFmk4UHwTJZn_Store_Mosse_Nationalpark-4_gmu7h5.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Can you guess what national park this is?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324257/beargrylls/95b6ec26_kdgao3.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Don't let the rocks fool you.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324264/beargrylls/B6PfiQ8QoSzmsZYOCkSB__DSC0530-1_s0rw7a.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Water in the valley!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324269/beargrylls/nQZcA7PRTyuduZPSZQ88_wanderlust_kducry.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324283/beargrylls/photo-1414016642750-7fdd78dc33d9_bgyfzb.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Nothing can replace morning coffee.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324273/beargrylls/photo-1415036927049-3cf4bba59cb7_y6wfqc.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "It gets cold quick so keep moving!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324301/beargrylls/photo-1416512149338-1723408867e9_s4snz1.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324339/beargrylls/photo-1418225043143-90858d2301b4_orbwth.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Take a break and enjoy the view!");

# photos for missholldoll
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324263/missholldoll/bb9f9777_qt8axx.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "The clearest way into the Universe is through a forest wilderness.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324261/missholldoll/caroline_sada_landscape_t6fll8.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "lovely pastures are one of my favorite things");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324265/missholldoll/d39825fa_sj4r5q.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "I wonder who lives there...");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324268/missholldoll/FhzljPB5TfOXYm54uxOh_osca_kytuul.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "After a long week of work only one thing is on my mind, nature.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324280/missholldoll/lynDyjGSR9eR57ouPIEE_IMG_woods_uzxdiy.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "I really like walking photos.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324335/missholldoll/photo-1418946188801-4dbceebd6b84_u4ebuv.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "It's always winter in the north.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324333/missholldoll/photo-1418985227304-f32df7d84e39_iw6acz.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "");

#photos for johnmuir
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324279/johnmuir/photo-1414394825544-67fa8e8e28ea_ld5rot.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Chaos back into order in a blink of an eye.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324311/johnmuir/photo-1414542563971-94513793d046_cnksx8.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "In all it's brilliance how amazing.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324282/johnmuir/photo-1415650328328-1909c4ceabdb_f21col.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Rocks and waters, etc., are words of God, and so are men. We all flow from one fountain Soul. All are expressions of one Love.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324304/johnmuir/photo-1423057062227-3a08155aedfc_cil8is.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "Many people conquered this mountain today!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324299/johnmuir/photo-1436247303198-d12dd4e2bf9c_fi03a9.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Slay this difficult route! How amazing it is.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324337/johnmuir/photo-1443636695178-be226c44e060_gzhvpw.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Take a course in good water and air; and in the eternal youth of Nature you may renew your own. Go quietly, alone; no harm will befall you.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324355/johnmuir/photo-1444857957393-c7a377126d9c_a4kewk.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "All that you've done for me.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324380/johnmuir/photo-1445308124430-8357b98a6f71_aj2qes.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "Never stop exploring.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324446/johnmuir/photo-1446064851258-7944734cb1bf_ocve70.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Beauty like this makes me adore all things.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324413/johnmuir/photo-1446729444801-31245ddba81a_cldm0s.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "The redwood is the glory of the Coast Range. It extends along the western slope, in a nearly continuous belt about ten miles wide, from beyond the Oregon boundary to the south of Santa Cruz, a distance of nearly four hundred miles, and in massive, sustained grandeur and closeness of growth surpasses all the other timber woods of the world.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324482/johnmuir/photo-1447690709975-318628b14c57_u3griu.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Every small thing is just as glorious as the big.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324503/johnmuir/photo-1465756600300-8073ffa4337e_apshxo.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "To the lover of wilderness, Alaska is one of the most wonderful countries in the world.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324508/johnmuir/photo-1470995604269-a974c362dafe_dphja5.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "I'll never know how much this will change over the years.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324507/johnmuir/photo-1472005991841-b135020cad7c_j4hhiw.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "I stand before the landscape bowing in my heart at it's glory.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324521/johnmuir/photo-1474576142067-3d38a82550b2_wm9zxi.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Come to the woods for here is rest.");

# photos for elon.musk
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324285/elon.musk/photo-1419717567666-6e559d5e0339_ndsyhz.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "Should have brought some snow-shoes... darn");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324318/elon.musk/photo-1420582282039-a6d11404cb66_ajoknc.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Beautiful path!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324297/elon.musk/photo-1420802320972-ac173d873ed2_tikkdt.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Foggy day...");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324289/elon.musk/photo-1420802839049-174a867e426c_ehgkou.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "Through the eyes of men it seems like there so much.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324351/elon.musk/photo-1424169292451-7c28a6053189_mfsvwe.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "We know there is victory with every ray of sunlight");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324314/elon.musk/photo-1436918671239-a2b72ace4880_hqw9cw.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Find the trail on the map!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324302/elon.musk/photo-1436919831943-52437d8d9bfd_m99anl.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Come alive!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324314/elon.musk/photo-1440431261965-1df24284dcff_jazcq8.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "The air is really different up here.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324313/elon.musk/photo-1440965514975-4b4c4f29a39e_k7id0o.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Everyone needs to visit this beach.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324315/elon.musk/photo-1441441247730-d09529166668_dh4vte.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Breathe breathe breathe!");

#photos for expedLewis
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324324/expedLewis/photo-1442422502730-a90f72460717_dvrrxd.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "What a reflection this is.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324329/expedLewis/photo-1443888548620-2a0262884145_ptoa5g.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "The sound of the mountains are calling.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324337/expedLewis/photo-1443915816136-7afd8c380512_iv2jfd.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "How great is this view?!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324350/expedLewis/photo-1444360150727-329ab2c260a0_ql2uq3.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "Anything you need a expedition friend let me know, I love this.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324383/expedLewis/photo-1444676143642-ca2104ba97e1_nk1sqf.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "I'm on the move today!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324359/expedLewis/photo-1444998440789-3ab1f73d29c9_jxo9qz.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "Today was a great day. Enjoy this awesome view.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324393/expedLewis/photo-1445096154391-3d01c0dfcfbc_bo0ikv.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Send me here! Here I go!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324415/expedLewis/photo-1446714276218-bd84d334af98_uqkzro.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Best place for a nap. Watch out for the ants!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324420/expedLewis/photo-1446728392359-c05fd6bb10f5_xktuni.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Moments before the storm hit us.");

#photos for withaHachet
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324322/withaHatchet/photo-1443521156453-f82c842b6e7f_vnfeei.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "Nothing quite like what's around a foggy corner.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324358/withaHatchet/photo-1444075107151-b2090be89337_i3ofgn.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "Gotta take one step at a time.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324395/withaHatchet/photo-1444405406630-ac78b6e0b1fb_trsntn.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "No words I say can git the view I saw justice");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324356/withaHatchet/photo-1444492417251-9c84a5fa18e0_gg9thv.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Sit down an enjoy the view here, great scenic spot.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324355/withaHatchet/photo-1444663837429-d2d894a77c77_cpxjiq.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324388/withaHatchet/photo-1445122734110-5ccd170eded6_vlsmey.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Walking walking walking");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324369/withaHatchet/photo-1445207966278-0a0a65a2047b_ach9dw.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "My life song is a journey with no end.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324389/withaHatchet/photo-1445264718234-a623be589d37_llrhha.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "There really is no end to exploration");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324377/withaHatchet/photo-1445283142063-f4802ea5aac3_rkvesl.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "Thought you guys might like my back so I blurred out the landscape so you could focus.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324383/withaHatchet/photo-1445308240527-1ef72b1e2a93_pl4guy.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Blazin red... I want some cheetos");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324429/withaHatchet/photo-1445308394109-4ec2920981b1_mmfuj3.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "Met some cool folks who I shared a campfire with. This was our homebase.");

#photos for StephHikes
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324388/StephHikes/photo-1445968660880-120e2f7b8c33_sgubop.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Just as refreshing as a 3 point swish.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324394/StephHikes/photo-1446210050316-7c556e3aade0_agdkev.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "A hard journey up here but worth every second of sweat.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324419/StephHikes/photo-1446483155710-0e8a261f4213_muzk7t.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Flawless... flawless");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324408/StephHikes/photo-1446539020262-2eb0d2f63dfb_oaobos.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "No matter the bumps or bruises I won't be stopped!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324411/StephHikes/photo-1447615673434-6af7f3fdb78a_u3j2ue.jpg",
  user_id: User.find_by(username: "elon.musk").id,
  description: "Two beauties in one photo, I'm such a lucky guy.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324419/StephHikes/photo-1447637901058-b83bea0e56c5_vavomc.jpg",
  user_id: User.find_by(username: "johnmuir").id,
  description: "Praise the Lord for such amazing landscape!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324445/StephHikes/photo-1447752875215-b2761acb3c5d_n5jeoa.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "Structure as it's own beauty in a place of such natural wonder.");

#photos for REI
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324376/REI/photo-1445307806294-bff7f67ff225_zdct3f.jpg",
  user_id: User.find_by(username: "skdkim").id,
  description: "Loving the new hammock and the view!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324389/REI/photo-1445888834731-95b3d5539bf9_mj1sp0.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "Look a pincone!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324390/REI/photo-1446432161848-4389328a28af_edbsrd.jpg",
  user_id: User.find_by(username: "missholldoll").id,
  description: "Sunrise or sunset? Take a guess!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324410/REI/photo-1446483050676-bd2fdf3ac2d6_kz4htw.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Clouds fade away fast in these high winds.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324445/REI/photo-1447687643809-e05fd462f350_ky5mhg.jpg",
  user_id: User.find_by(username: "beargrylls").id,
  description: "No mountain is too high to climb.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324433/REI/photo-1447767961238-038617b84a2b_u5vtxh.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "I wonder how tall this tree is.. any guesses?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324447/REI/photo-1448320886379-a090c93f3de9_v90ubr.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "Islands on islands! Watchout don't slip!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324450/REI/photo-1448749927985-5565d99c10ae_n8w6t5.jpg",
  user_id: User.find_by(username: "withaHachet").id,
  description: "Not part of the 10 essentials but a trip is so much better with a friend.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324458/REI/photo-1463805371341-15514bfd3b7f_ezdmft.jpg",
  user_id: User.find_by(username: "expedLewis").id,
  description: "Morning hike anyone?");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324457/REI/photo-1464198016405-33fd4527b89d_pboqw0.jpg",
  user_id: User.find_by(username: "StephHikes").id,
  description: "A group of many can conquer anything.");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324487/REI/photo-1464278860589-b2ed64f87e22_hezska.jpg",
  user_id: User.find_by(username: "REI").id,
  description: "Make sure you have good boots!");
Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324484/REI/photo-1467106015942-a0ea2960655a_h5bg4v.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "How many lumens do you need to light up the night sky?");

Photo.create(image_url: "http://res.cloudinary.com/skdkim/image/upload/q_50/v1478324450/allphotos/photo-1461711667855-acb1e726c45d_aj1lut.jpg",
  user_id: User.find_by(username: "philh.lee").id,
  description: "Do you like my orange beanie?");

# follows seeds
Follow.create(follower_id: 1, followee_id: 2);
Follow.create(follower_id: 1, followee_id: 3);
Follow.create(follower_id: 1, followee_id: 4);
Follow.create(follower_id: 1, followee_id: 5);
Follow.create(follower_id: 1, followee_id: 6);
Follow.create(follower_id: 1, followee_id: 7);
Follow.create(follower_id: 1, followee_id: 8);
Follow.create(follower_id: 1, followee_id: 9);
Follow.create(follower_id: 1, followee_id: 10);

# Follow.create(follower_id: 2, followee_id: 1);
# Follow.create(follower_id: 2, followee_id: 3);
# Follow.create(follower_id: 2, followee_id: 4);
Follow.create(follower_id: 2, followee_id: 5);
Follow.create(follower_id: 2, followee_id: 6);
Follow.create(follower_id: 2, followee_id: 7);
Follow.create(follower_id: 2, followee_id: 8);
Follow.create(follower_id: 2, followee_id: 9);
Follow.create(follower_id: 2, followee_id: 10);

Follow.create(follower_id: 3, followee_id: 2);
Follow.create(follower_id: 3, followee_id: 1);
Follow.create(follower_id: 3, followee_id: 4);
Follow.create(follower_id: 3, followee_id: 5);
# Follow.create(follower_id: 3, followee_id: 6);
Follow.create(follower_id: 3, followee_id: 7);
# Follow.create(follower_id: 3, followee_id: 8);
# Follow.create(follower_id: 3, followee_id: 9);
# Follow.create(follower_id: 3, followee_id: 10);

Follow.create(follower_id: 4, followee_id: 2);
Follow.create(follower_id: 4, followee_id: 3);
Follow.create(follower_id: 4, followee_id: 1);
Follow.create(follower_id: 4, followee_id: 5);
Follow.create(follower_id: 4, followee_id: 6);
Follow.create(follower_id: 4, followee_id: 7);
Follow.create(follower_id: 4, followee_id: 8);
Follow.create(follower_id: 4, followee_id: 9);
Follow.create(follower_id: 4, followee_id: 10);

Follow.create(follower_id: 5, followee_id: 2);
# Follow.create(follower_id: 5, followee_id: 3);
# Follow.create(follower_id: 5, followee_id: 4);
Follow.create(follower_id: 5, followee_id: 1);
Follow.create(follower_id: 5, followee_id: 6);
Follow.create(follower_id: 5, followee_id: 7);
# Follow.create(follower_id: 5, followee_id: 8);
Follow.create(follower_id: 5, followee_id: 9);
Follow.create(follower_id: 5, followee_id: 10);
#
# Follow.create(follower_id: 6, followee_id: 2);
# Follow.create(follower_id: 6, followee_id: 3);
# Follow.create(follower_id: 6, followee_id: 4);
Follow.create(follower_id: 6, followee_id: 5);
Follow.create(follower_id: 6, followee_id: 1);
Follow.create(follower_id: 6, followee_id: 7);
Follow.create(follower_id: 6, followee_id: 8);
Follow.create(follower_id: 6, followee_id: 9);
Follow.create(follower_id: 6, followee_id: 10);

Follow.create(follower_id: 7, followee_id: 2);
Follow.create(follower_id: 7, followee_id: 3);
Follow.create(follower_id: 7, followee_id: 4);
Follow.create(follower_id: 7, followee_id: 5);
Follow.create(follower_id: 7, followee_id: 6);
# Follow.create(follower_id: 7, followee_id: 1);
# Follow.create(follower_id: 7, followee_id: 8);
# Follow.create(follower_id: 7, followee_id: 9);
# Follow.create(follower_id: 7, followee_id: 10);

Follow.create(follower_id: 8, followee_id: 2);
Follow.create(follower_id: 8, followee_id: 3);
Follow.create(follower_id: 8, followee_id: 4);
# Follow.create(follower_id: 8, followee_id: 5);
# Follow.create(follower_id: 8, followee_id: 6);
# Follow.create(follower_id: 8, followee_id: 7);
Follow.create(follower_id: 8, followee_id: 1);
Follow.create(follower_id: 8, followee_id: 9);
Follow.create(follower_id: 8, followee_id: 10);

Follow.create(follower_id: 9, followee_id: 2);
Follow.create(follower_id: 9, followee_id: 3);
Follow.create(follower_id: 9, followee_id: 4);
Follow.create(follower_id: 9, followee_id: 5);
Follow.create(follower_id: 9, followee_id: 6);
# Follow.create(follower_id: 9, followee_id: 7);
# Follow.create(follower_id: 9, followee_id: 8);
# Follow.create(follower_id: 9, followee_id: 1);
# Follow.create(follower_id: 9, followee_id: 10);

Follow.create(follower_id: 10, followee_id: 2);
Follow.create(follower_id: 10, followee_id: 3);
Follow.create(follower_id: 10, followee_id: 4);
# Follow.create(follower_id: 10, followee_id: 5);
# Follow.create(follower_id: 10, followee_id: 6);
# Follow.create(follower_id: 10, followee_id: 7);
Follow.create(follower_id: 10, followee_id: 8);
Follow.create(follower_id: 10, followee_id: 9);
Follow.create(follower_id: 10, followee_id: 1);
