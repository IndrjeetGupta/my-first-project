import "cypress-localstorage-commands";
import data from "../../submissionData.json";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

/// <reference types="cypress" />

// let baseServerURL = Cypress.env("serverUrl");

let catsData = [
  {
    id: 1,
    name: "Kristoffer",
    cost: 47.82,
    likes: 633,
    image: "/images/cat/cat-unsplash-1.jpg",
    thumb: "/images/cat/cat-unsplash-1-thumb.jpg",
    description:
      "Eveniet sed accusantium doloribus atque. Perferendis accusamus nemo accusamus debitis deserunt. Consequuntur animi nobis veniam. Nemo enim ratione odio soluta tempora placeat veritatis.",
    breed: "Peterbald",
    createdAt: 1670165980567,
  },
  {
    id: 2,
    name: "Destiny",
    cost: 86.57,
    likes: 368,
    image: "/images/cat/cat-unsplash-2.jpg",
    thumb: "/images/cat/cat-unsplash-2-thumb.jpg",
    description:
      "Earum natus saepe. Deserunt dolorem totam voluptates enim dolorum hic. Sequi atque illo quae distinctio. Repellat et nam sapiente facilis.",
    breed: "Nebelung",
    createdAt: 1670165980567,
  },
  {
    id: 3,
    name: "Emmalee",
    cost: 32.4,
    likes: 713,
    image: "/images/cat/cat-unsplash-3.jpg",
    thumb: "/images/cat/cat-unsplash-3-thumb.jpg",
    description:
      "Veritatis repellendus dolore eius. Quibusdam voluptates vero doloribus repellat nisi sit perferendis. Quod ad itaque. Ducimus aliquam corporis minus nemo est molestias. Nesciunt quis incidunt explicabo animi cupiditate quia rem occaecati eos.",
    breed: "Persian",
    createdAt: 1670165980567,
  },
  {
    id: 4,
    name: "Rahul",
    cost: 57.37,
    likes: 634,
    image: "/images/cat/cat-unsplash-4.jpg",
    thumb: "/images/cat/cat-unsplash-4-thumb.jpg",
    description:
      "Incidunt at natus. Dignissimos a quas similique molestiae eligendi. Quasi placeat aperiam. Illum soluta eos ipsa dolorum natus ex molestias eaque accusantium. Unde nesciunt nihil sint. Expedita quis ut similique natus excepturi.",
    breed: "Birman",
    createdAt: 1670165980567,
  },
  {
    id: 5,
    name: "Mercedes",
    cost: 53.08,
    likes: 37,
    image: "/images/cat/cat-unsplash-5.jpg",
    thumb: "/images/cat/cat-unsplash-5-thumb.jpg",
    description:
      "Accusantium non quidem quisquam vero eveniet. Consequuntur recusandae repudiandae velit accusamus. Voluptatibus alias quia vel inventore eius ducimus atque odit accusamus. Veritatis voluptatibus accusantium voluptatibus cumque tenetur.",
    breed: "Peterbald",
    createdAt: 1670165980568,
  },
  {
    id: 6,
    name: "Eloy",
    cost: 52.47,
    likes: 429,
    image: "/images/cat/cat-unsplash-6.jpg",
    thumb: "/images/cat/cat-unsplash-6-thumb.jpg",
    description:
      "A illum fugiat dolores voluptatum non possimus libero impedit. Deleniti ipsa porro laborum natus error. Non deleniti in inventore maiores fuga repudiandae ea quam nulla.",
    breed: "Kurilian Bobtail",
    createdAt: 1670165980568,
  },
  {
    id: 7,
    name: "Derrick",
    cost: 88.6,
    likes: 535,
    image: "/images/cat/cat-unsplash-7.jpg",
    thumb: "/images/cat/cat-unsplash-7-thumb.jpg",
    description:
      "Cum ducimus quis possimus. Temporibus commodi esse. Accusantium asperiores dolor assumenda.",
    breed: "Oriental",
    createdAt: 1670165980568,
  },
  {
    id: 8,
    name: "Roosevelt",
    cost: 33.85,
    likes: 238,
    image: "/images/cat/cat-unsplash-8.jpg",
    thumb: "/images/cat/cat-unsplash-8-thumb.jpg",
    description:
      "Voluptas quae aspernatur assumenda distinctio harum. Rem id molestiae quas quas rerum animi. Expedita dolor a debitis vitae culpa neque blanditiis inventore assumenda. Quasi magnam necessitatibus debitis aperiam suscipit consequatur deserunt. Quibusdam aliquam blanditiis expedita aliquid suscipit voluptatum doloribus amet. Quam voluptas nulla earum laboriosam.",
    breed: "British Shorthair",
    createdAt: 1670165980568,
  },
  {
    id: 9,
    name: "Roxane",
    cost: 27.67,
    likes: 118,
    image: "/images/cat/cat-unsplash-9.jpg",
    thumb: "/images/cat/cat-unsplash-9-thumb.jpg",
    description:
      "Debitis aliquam recusandae id quos aliquam ad et inventore unde. Ratione corrupti dolore. Deserunt rerum aspernatur dolor quia sit voluptatem. Vero inventore architecto quibusdam doloremque earum. Facilis debitis reprehenderit nesciunt natus hic harum. Officiis vitae libero aspernatur sit porro aliquid recusandae.",
    breed: "Ocicat",
    createdAt: 1670165980568,
  },
  {
    id: 10,
    name: "Judah",
    cost: 61.95,
    likes: 249,
    image: "/images/cat/cat-unsplash-10.jpg",
    thumb: "/images/cat/cat-unsplash-10-thumb.jpg",
    description:
      "Corporis dicta nam fugiat perspiciatis necessitatibus error aut facilis. Maiores laudantium eos at aliquam enim vero quasi accusamus. Ad inventore beatae nobis repudiandae. Unde tempora illum ab laboriosam voluptatem blanditiis alias.",
    breed: "Chausie",
    createdAt: 1670165980568,
  },
  {
    id: 11,
    name: "Braxton",
    cost: 41.65,
    likes: 773,
    image: "/images/cat/cat-unsplash-11.jpg",
    thumb: "/images/cat/cat-unsplash-11-thumb.jpg",
    description:
      "Deleniti rem quisquam praesentium a ipsum dolores recusandae atque. Non molestias tenetur. Consequatur sed deserunt doloribus eligendi animi reprehenderit. Quisquam vero facere vel cum provident sed dolorem aperiam. Unde animi neque recusandae sint quibusdam. Cum quidem repellendus eaque repellendus iure voluptatibus asperiores voluptatum.",
    breed: "Cornish Rex",
    createdAt: 1670165980568,
  },
  {
    id: 12,
    name: "Vincenza",
    cost: 37.29,
    likes: 582,
    image: "/images/cat/cat-unsplash-12.jpg",
    thumb: "/images/cat/cat-unsplash-12-thumb.jpg",
    description:
      "Soluta vitae officiis. Pariatur eius labore blanditiis quasi. Modi sint in voluptate reiciendis ad voluptatum expedita. Vero veniam possimus quidem numquam reiciendis autem assumenda nihil. Voluptatibus quis placeat dolorem vitae pariatur incidunt similique. Minus quaerat sapiente earum cupiditate facilis.",
    breed: "American Bobtail",
    createdAt: 1670165980568,
  },
  {
    id: 13,
    name: "Rhea",
    cost: 39.25,
    likes: 864,
    image: "/images/cat/cat-unsplash-13.jpg",
    thumb: "/images/cat/cat-unsplash-13-thumb.jpg",
    description:
      "Id delectus sapiente facere perferendis maiores blanditiis. Quidem quasi iste adipisci ullam ipsa unde nam sunt porro. Minima tempora minima impedit laboriosam voluptates illo quibusdam nulla.",
    breed: "British Shorthair",
    createdAt: 1670165980568,
  },
  {
    id: 14,
    name: "Axel",
    cost: 29.59,
    likes: 509,
    image: "/images/cat/cat-unsplash-14.jpg",
    thumb: "/images/cat/cat-unsplash-14-thumb.jpg",
    description:
      "Odio quidem veritatis possimus ex. Blanditiis dicta aut dolor consectetur nulla veritatis. Sunt quidem libero ea veniam incidunt placeat.",
    breed: "Somali",
    createdAt: 1670165980568,
  },
  {
    id: 15,
    name: "Linwood",
    cost: 50.14,
    likes: 711,
    image: "/images/cat/cat-unsplash-15.jpg",
    thumb: "/images/cat/cat-unsplash-15-thumb.jpg",
    description:
      "Recusandae voluptatum illo atque temporibus. In alias aut quisquam error aliquam nihil sunt architecto et. Nemo culpa dolorum fugiat sit.",
    breed: "Persian",
    createdAt: 1670165980568,
  },
  {
    id: 16,
    name: "Mathew",
    cost: 8.57,
    likes: 304,
    image: "/images/cat/cat-unsplash-16.jpg",
    thumb: "/images/cat/cat-unsplash-16-thumb.jpg",
    description:
      "Ratione dolore assumenda quaerat natus ex a vero. Eos fugiat harum accusantium maxime facilis quaerat officiis. Ex dolores quasi omnis possimus culpa. Itaque necessitatibus nostrum facilis occaecati sequi accusantium. Exercitationem exercitationem odit maxime quis. A beatae dolore illum distinctio tenetur quidem harum vitae.",
    breed: "Selkirk Rex",
    createdAt: 1670165980568,
  },
  {
    id: 17,
    name: "Damion",
    cost: 97.05,
    likes: 317,
    image: "/images/cat/cat-unsplash-17.jpg",
    thumb: "/images/cat/cat-unsplash-17-thumb.jpg",
    description:
      "Ullam eum fugit. Adipisci quaerat modi nisi nostrum illo. Quam perferendis ab at harum iure alias. Sit nisi aperiam officiis laborum soluta veritatis placeat nesciunt. Vero expedita non impedit nisi in voluptatum. Ducimus beatae qui dignissimos id corporis aspernatur iusto maiores.",
    breed: "Bengal",
    createdAt: 1670165980568,
  },
  {
    id: 18,
    name: "Tomasa",
    cost: 90.6,
    likes: 281,
    image: "/images/cat/cat-unsplash-18.jpg",
    thumb: "/images/cat/cat-unsplash-18-thumb.jpg",
    description:
      "Qui eos earum sit voluptatibus rerum voluptate. Occaecati dolores repellat harum minus libero. Nam similique provident similique non. Officia consectetur quod eius ipsum recusandae vero. Cum recusandae delectus. Saepe aliquid voluptatum est consectetur quo occaecati similique hic.",
    breed: "Savannah",
    createdAt: 1670165980568,
  },
  {
    id: 19,
    name: "Daisha",
    cost: 41.47,
    likes: 578,
    image: "/images/cat/cat-unsplash-19.jpg",
    thumb: "/images/cat/cat-unsplash-19-thumb.jpg",
    description:
      "Inventore dolorem qui atque temporibus. Ea suscipit explicabo. Veritatis quis sed. Unde officiis recusandae veritatis amet perspiciatis repellat reprehenderit. Placeat autem ipsam a maiores vero dolorem non illo. Assumenda iste quos impedit consequuntur eos aut.",
    breed: "Norwegian Forest Cat",
    createdAt: 1670165980568,
  },
  {
    id: 20,
    name: "Flossie",
    cost: 14.47,
    likes: 213,
    image: "/images/cat/cat-unsplash-20.jpg",
    thumb: "/images/cat/cat-unsplash-20-thumb.jpg",
    description:
      "Ratione earum odio illo nulla. Maxime ullam ipsa. Fuga aut consequatur repellendus laudantium nostrum commodi asperiores repellat. Rerum distinctio perferendis laboriosam qui veniam illo fugit. Repudiandae provident blanditiis est.",
    breed: "Maine Coon",
    createdAt: 1670165980568,
  },
  {
    id: 21,
    name: "Giles",
    cost: 58.75,
    likes: 134,
    image: "/images/cat/cat-unsplash-21.jpg",
    thumb: "/images/cat/cat-unsplash-21-thumb.jpg",
    description:
      "Animi error inventore commodi dolor. Incidunt temporibus delectus beatae voluptatum id. Ipsam nisi fugit sunt doloremque ex distinctio ullam. Impedit mollitia labore. Saepe libero aliquid perferendis magni hic incidunt itaque. Exercitationem aperiam eos et neque nisi dolores.",
    breed: "Snowshoe",
    createdAt: 1670165980568,
  },
  {
    id: 22,
    name: "Branson",
    cost: 66.56,
    likes: 154,
    image: "/images/cat/cat-unsplash-22.jpg",
    thumb: "/images/cat/cat-unsplash-22-thumb.jpg",
    description:
      "Magni molestias et fugiat maiores consequuntur. Nobis quod sit itaque praesentium enim tempora quos dolore consequuntur. Alias esse temporibus. Tempore ab esse soluta voluptate excepturi. Vero voluptates consequuntur animi optio facilis ea magnam recusandae.",
    breed: "Himalayan",
    createdAt: 1670165980569,
  },
  {
    id: 23,
    name: "Dejah",
    cost: 77.32,
    likes: 550,
    image: "/images/cat/cat-unsplash-23.jpg",
    thumb: "/images/cat/cat-unsplash-23-thumb.jpg",
    description:
      "Quae rerum officiis doloribus ratione vero nulla dolore optio laboriosam. Culpa exercitationem odit facere laudantium. Quae nemo odit veritatis iste necessitatibus facilis officiis tempore explicabo. Impedit commodi exercitationem blanditiis provident tempora ipsum labore sint consequuntur. Perferendis cupiditate fugiat quaerat quas rerum placeat. Eaque veniam quaerat.",
    breed: "Peterbald",
    createdAt: 1670165980569,
  },
  {
    id: 24,
    name: "Lolita",
    cost: 35.88,
    likes: 471,
    image: "/images/cat/cat-unsplash-24.jpg",
    thumb: "/images/cat/cat-unsplash-24-thumb.jpg",
    description:
      "Cupiditate maxime nihil commodi maxime enim fuga ad. Eum eveniet nemo voluptatum ullam harum sint illo. Excepturi et assumenda accusamus ab. Quo exercitationem dolor quidem expedita quidem similique at.",
    breed: "Serengeti",
    createdAt: 1670165980569,
  },
  {
    id: 25,
    name: "Belle",
    cost: 31.27,
    likes: 147,
    image: "/images/cat/cat-unsplash-25.jpg",
    thumb: "/images/cat/cat-unsplash-25-thumb.jpg",
    description:
      "Inventore et nesciunt est cupiditate totam qui. Deleniti a numquam a quasi veritatis nemo numquam in. Eaque aperiam blanditiis voluptate ipsum sint dolore aspernatur.",
    breed: "Sokoke",
    createdAt: 1670165980569,
  },
];

let recipeData = [
  {
    id: "52768",
    name: "Apple Frangipan Tart",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
    image: "/images/meals/wxywrq1468235067.jpg",
    tags: [1, 2, 3],
    youtube: "https://www.youtube.com/watch?v=rp8Slv4INLk",
    ingredients: [
      {
        ingredientId: "112",
        ingredientMeasure: "175g/6oz",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "33",
        ingredientMeasure: "200g/7oz",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "141",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "169",
        ingredientMeasure: "75g/3oz",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "1 tsp",
      },
      {
        ingredientId: "135",
        ingredientMeasure: "50g/1¾oz",
      },
    ],
    recipeSource: null,
    imageSource: null,
    price: "256.00",
    stock: 1,
    discount: 7,
    createdAt: 1667963546805,
  },
  {
    id: "52893",
    name: "Apple & Blackberry Crumble",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
    image: "/images/meals/xvsurr1511719182.jpg",
    tags: [4],
    youtube: "https://www.youtube.com/watch?v=4vhcOwVBDO4",
    ingredients: [
      {
        ingredientId: "248",
        ingredientMeasure: "120g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "60g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "60g",
      },
      {
        ingredientId: "464",
        ingredientMeasure: "300g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "30g",
      },
      {
        ingredientId: "110",
        ingredientMeasure: "30g",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "181",
        ingredientMeasure: "to serve",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble",
    imageSource: null,
    price: "464.00",
    stock: 2,
    discount: 3,
    createdAt: 1667963546805,
  },
  {
    id: "53049",
    name: "Apam balik",
    recipeCategoryId: "3",
    areaId: 15,
    instructions:
      "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly.\r\n\r\nSpread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear.\r\n\r\nAdd butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned.\r\n\r\nCut into wedges and best eaten when it is warm.",
    image: "/images/meals/adxcbq1619787919.jpg",
    tags: [],
    youtube: "https://www.youtube.com/watch?v=6R8ffRRJcrg",
    ingredients: [
      {
        ingredientId: "211",
        ingredientMeasure: "200ml",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "60ml",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "1600g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "3 tsp",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "1/2 tsp",
      },
      {
        ingredientId: "491",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "45g",
      },
      {
        ingredientId: "238",
        ingredientMeasure: "3 tbs",
      },
    ],
    recipeSource:
      "https://www.nyonyacooking.com/recipes/apam-balik~SJ5WuvsDf9WQ",
    imageSource: null,
    price: "113.00",
    stock: 1,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52767",
    name: "Bakewell tart",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
    image: "/images/meals/wyrqqq1468233628.jpg",
    tags: [1, 2, 5],
    youtube: "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
    ingredients: [
      {
        ingredientId: "248",
        ingredientMeasure: "175g/6oz",
      },
      {
        ingredientId: "73",
        ingredientMeasure: "75g/2½oz",
      },
      {
        ingredientId: "93",
        ingredientMeasure: "2-3 tbsp",
      },
      {
        ingredientId: "256",
        ingredientMeasure: "1 tbsp",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "169",
        ingredientMeasure: "125g/4½oz",
      },
      {
        ingredientId: "140",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "135",
        ingredientMeasure: "50g/1¾oz",
      },
    ],
    recipeSource: null,
    imageSource: null,
    price: "479.00",
    stock: 4,
    discount: 5,
    createdAt: 1667963546805,
  },
  {
    id: "52792",
    name: "Bread and Butter Pudding",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Grease a 1 litre/2 pint pie dish with butter.\r\nCut the crusts off the bread. Spread each slice with on one side with butter, then cut into triangles.\r\nArrange a layer of bread, buttered-side up, in the bottom of the dish, then add a layer of sultanas. Sprinkle with a little cinnamon, then repeat the layers of bread and sultanas, sprinkling with cinnamon, until you have used up all of the bread. Finish with a layer of bread, then set aside.\r\nGently warm the milk and cream in a pan over a low heat to scalding point. Don't let it boil.\r\nCrack the eggs into a bowl, add three quarters of the sugar and lightly whisk until pale.\r\nAdd the warm milk and cream mixture and stir well, then strain the custard into a bowl.\r\nPour the custard over the prepared bread layers and sprinkle with nutmeg and the remaining sugar and leave to stand for 30 minutes.\r\nPreheat the oven to 180C/355F/Gas 4.\r\nPlace the dish into the oven and bake for 30-40 minutes, or until the custard has set and the top is golden-brown.",
    image: "/images/meals/xqwwpy1483908697.jpg",
    tags: [4, 6],
    youtube: "https://www.youtube.com/watch?v=Vz5W1-BmOE4",
    ingredients: [
      {
        ingredientId: "41",
        ingredientMeasure: "25g/1oz",
      },
      {
        ingredientId: "35",
        ingredientMeasure: "8 thin slices",
      },
      {
        ingredientId: "306",
        ingredientMeasure: "50g/2oz",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "350ml/12fl",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "50ml/2fl oz",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2 free-range",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "25g/1oz",
      },
      {
        ingredientId: "222",
        ingredientMeasure: "grated, to taste",
      },
    ],
    recipeSource: "https://cooking.nytimes.com/recipes/1018529-coq-au-vin",
    imageSource: null,
    price: "270.00",
    stock: 7,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52807",
    name: "Baingan Bharta",
    recipeCategoryId: "12",
    areaId: 9,
    instructions:
      "Rinse the baingan (eggplant or aubergine) in water. Pat dry with a kitchen napkin. Apply some oil all over and\r\nkeep it for roasting on an open flame. You can also grill the baingan or roast in the oven. But then you won't get\r\nthe smoky flavor of the baingan. Keep the eggplant turning after a 2 to 3 minutes on the flame, so that its evenly\r\ncooked. You could also embed some garlic cloves in the baingan and then roast it.\r\n2. Roast the aubergine till its completely cooked and tender. With a knife check the doneness. The knife should slid\r\neasily in aubergines without any resistance. Remove the baingan and immerse in a bowl of water till it cools\r\ndown.\r\n3. You can also do the dhungar technique of infusing charcoal smoky flavor in the baingan. This is an optional step.\r\nUse natural charcoal for this method. Heat a small piece of charcoal on flame till it becomes smoking hot and red.\r\n4. Make small cuts on the baingan with a knife. Place the red hot charcoal in the same plate where the roasted\r\naubergine is kept. Add a few drops of oil on the charcoal. The charcoal would begin to smoke.\r\n5. As soon as smoke begins to release from the charcoal, cover the entire plate tightly with a large bowl. Allow the\r\ncharcoal smoke to get infused for 1 to 2 minutes. The more you do, the more smoky the baingan bharta will\r\nbecome. I just keep for a minute. Alternatively, you can also do this dhungar method once the baingan bharta is\r\ncooked, just like the way we do for Dal Tadka.\r\n6. Peel the skin from the roasted and smoked eggplant.\r\n7. Chop the cooked eggplant finely or you can even mash it.\r\n8. In a kadai or pan, heat oil. Then add finely chopped onions and garlic.\r\n9. Saute the onions till translucent. Don't brown them.\r\n10. Add chopped green chilies and saute for a minute.\r\n11. Add the chopped tomatoes and mix it well.\r\n12. Bhuno (saute) the tomatoes till the oil starts separating from the mixture.\r\n13. Now add the red chili powder. Stir and mix well.\r\n14. Add the chopped cooked baingan.\r\n15. Stir and mix the chopped baingan very well with the onion­tomato masala mixture.\r\n16. Season with salt. Stir and saute for some more 4 to 5 minutes more.\r\n17. Finally stir in the coriander leaves with the baingan bharta or garnish it with them. Serve Baingan Bharta with\r\nphulkas, rotis or chapatis. It goes well even with bread, toasted or grilled bread and plain rice or jeera rice.",
    image: "/images/meals/urtpqw1487341253.jpg",
    tags: [9, 10, 11],
    youtube: "https://www.youtube.com/watch?v=-84Zz2EP4h4",
    ingredients: [
      {
        ingredientId: "11",
        ingredientMeasure: "1 large",
      },
      {
        ingredientId: "364",
        ingredientMeasure: "½ cup ",
      },
      {
        ingredientId: "317",
        ingredientMeasure: "1 cup",
      },
      {
        ingredientId: "149",
        ingredientMeasure: "6 cloves",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "1.5 tablespoon",
      },
      {
        ingredientId: "96",
        ingredientMeasure: "1 tablespoon chopped",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "as required",
      },
    ],
    recipeSource:
      "http://www.vegrecipesofindia.com/baingan-bharta-recipe-punjabi-baingan-bharta-recipe/",
    imageSource: null,
    price: "230.00",
    stock: 6,
    discount: 19,
    createdAt: 1667963546805,
  },
  {
    id: "52855",
    name: "Banana Pancakes",
    recipeCategoryId: "3",
    areaId: 1,
    instructions:
      "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.\r\nHeat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.",
    image: "/images/meals/sywswr1511383814.jpg",
    tags: [13, 14, 15],
    youtube: "https://www.youtube.com/watch?v=kSKtb2Sv-_U",
    ingredients: [
      {
        ingredientId: "407",
        ingredientMeasure: "1 large",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2 medium",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "pinch",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "spinkling",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "411",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "408",
        ingredientMeasure: "125g",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/banana-pancakes",
    imageSource: null,
    price: "233.00",
    stock: 19,
    discount: 2,
    createdAt: 1667963546805,
  },
  {
    id: "52891",
    name: "Blackberry Fool",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "For the biscuits, preheat the oven to 200C/180C (fan)/Gas 6 and line two large baking trays with baking parchment. Scatter the nuts over a baking tray and roast in the oven for 6-8 minutes, or until golden-brown. Watch them carefully so that they don’t have a chance to burn. Remove from the oven, tip onto a board and leave to cool.\r\nPut the butter and sugar in a large bowl and beat with a wooden spoon until light and creamy. Roughly chop the cooled nuts and add to the creamed butter and sugar, along with the lemon zest, flour and baking powder. Stir well until the mixture comes together and forms a ball – you may need to use your hands.\r\nDivide the biscuit dough into 24 even pieces and roll into small balls. Place the balls the prepared baking trays, spaced well apart to allow for spreading.\r\nPress the biscuits to flatten to around 1cm/½in thick. Bake the biscuits, one tray at a time, for 12 minutes or until very pale golden-brown. Leave to cool on the trays. They will be very soft when you take them out of the oven, but will crisp as they cool.\r\nStore in an airtight tin and eat within five days.\r\nFor the fool, rinse the blackberries in a colander to wash away any dust or dirt. Put the blackberries in a non-stick saucepan and sprinkle over the caster sugar.\r\nStir in the lemon juice and heat gently for two minutes, or until the blackberries begin to soften and release their juices. Remove and reserve 12 blackberries for decoration and continue cooking the rest.\r\nSimmer the blackberries very gently for 15 minutes, stirring regularly until very soft and squidgy. Remove from the heat and press the berries and juice through a sieve over a bowl, using the bottom of a ladle to help you extract as much of the purée as possible. Leave the purée to cool and discard the seeds. You should end up with around 325ml/11fl oz of purée.\r\nPut the cream and yoghurt in a large bowl and whip with an electric whisk until soft peaks form when the whisk is removed from the bowl – the acidity of the fruit will thicken the cream further, so don’t take it too far.\r\nWhen the purée is completely cold, adjust the sweetness to taste by adding more sugar if needed. Pour it into the bowl with the whipped cream and yoghurt and stir just once or twice until very lightly combined.\r\nSpoon the blackberry fool into individual wide, glass dishes – or one large, single bowl. It should look quite marbled, so don’t over-stir it. Scatter a few tiny mint leaves on top and decorate with the reserved blackberries. Sprinkle with a little sugar if you like and serve with the hazelnut biscuits.",
    image: "/images/meals/rpvptu1511641092.jpg",
    tags: [14, 17, 3, 18],
    youtube: "https://www.youtube.com/watch?v=kniRGjDLFrQ",
    ingredients: [
      {
        ingredientId: "463",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "125g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "197",
        ingredientMeasure: "Grated",
      },
      {
        ingredientId: "248",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "75g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "198",
        ingredientMeasure: "1 tbs",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "300ml ",
      },
      {
        ingredientId: "343",
        ingredientMeasure: "100ml",
      },
      {
        ingredientId: "214",
        ingredientMeasure: "Garnish with",
      },
    ],
    recipeSource:
      "https://www.bbc.co.uk/food/recipes/blackberry_fool_with_11859",
    imageSource: null,
    price: "431.00",
    stock: 12,
    discount: 13,
    createdAt: 1667963546805,
  },
  {
    id: "52894",
    name: "Battenberg Cake",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge.\r\nFor the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool.\r\nTo assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake.\r\nTake 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes.\r\nCarefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork.\r\nAssemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month.",
    image: "/images/meals/ywwrsp1511720277.jpg",
    tags: [19, 15],
    youtube: "https://www.youtube.com/watch?v=aB41Q7kDZQ0",
    ingredients: [
      {
        ingredientId: "41",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "286",
        ingredientMeasure: "140g",
      },
      {
        ingredientId: "471",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "3 Medium",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "286",
        ingredientMeasure: "140g",
      },
      {
        ingredientId: "471",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "15",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "3 Medium",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "550",
        ingredientMeasure: "¼ teaspoon",
      },
      {
        ingredientId: "466",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "382",
        ingredientMeasure: "200g",
      },
      {
        ingredientId: "470",
        ingredientMeasure: "1kg",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "Dusting",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/1120657/battenberg-cake",
    imageSource: null,
    price: "167.00",
    stock: 19,
    discount: 18,
    createdAt: 1667963546805,
  },
  {
    id: "52928",
    name: "BeaverTails",
    recipeCategoryId: "3",
    areaId: 3,
    instructions:
      "In the bowl of a stand mixer, add warm water, a big pinch of sugar and yeast. Allow to sit until frothy.\r\nInto the same bowl, add 1/2 cup sugar, warm milk, melted butter, eggs and salt, and whisk until combined.\r\nPlace a dough hook on the mixer, add the flour with the machine on, until a smooth but slightly sticky dough forms.\r\nPlace dough in a bowl, cover with plastic wrap, and allow to proof for 1 1/2 hours.\r\nCut dough into 12 pieces, and roll out into long oval-like shapes about 1/4 inch thick that resemble a beaver’s tail.\r\nIn a large, deep pot, heat oil to 350 degrees. Gently place beavertail dough into hot oil and cook for 30 to 45 seconds on each side until golden brown.\r\nDrain on paper towels, and garnish as desired. Toss in cinnamon sugar, in white sugar with a squeeze of lemon, or with a generous slathering of Nutella and a handful of toasted almonds. Enjoy!",
    image: "/images/meals/ryppsv1511815505.jpg",
    tags: [21, 4, 22],
    youtube: "https://www.youtube.com/watch?v=2G07UOqU2e8",
    ingredients: [
      {
        ingredientId: "333",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "475",
        ingredientMeasure: "2 parts ",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "1/2 cup ",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "6 tblsp",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "1 ½ tsp",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "2-1/2 cups",
      },
      {
        ingredientId: "223",
        ingredientMeasure: "for frying",
      },
      {
        ingredientId: "197",
        ingredientMeasure: "garnish",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "garnish",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "garnish",
      },
    ],
    recipeSource: "https://www.tastemade.com/videos/beavertails",
    imageSource: null,
    price: "276.00",
    stock: 5,
    discount: 17,
    createdAt: 1667963546805,
  },
  {
    id: "52961",
    name: "Budino Di Ricotta",
    recipeCategoryId: "3",
    areaId: 11,
    instructions:
      "Mash the ricotta and beat well with the egg yolks, stir in the flour, sugar, cinnamon, grated lemon rind and the rum and mix well. You can do this in a food processor. Beat the egg whites until stiff, fold in and pour into a buttered and floured 25cm cake tin. Bake in the oven at 180ºC/160ºC fan/gas 4 for about 40 minutes, or until it is firm.\r\n\r\nServe hot or cold dusted with icing sugar.",
    image: "/images/meals/1549542877.jpg",
    tags: [19, 2, 14, 15, 5, 11],
    youtube: "https://www.youtube.com/watch?v=6dzd6Ra6sb4",
    ingredients: [
      {
        ingredientId: "403",
        ingredientMeasure: "500g",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "4 large",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "3 tbs",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "200",
        ingredientMeasure: "Grated Zest of 2",
      },
      {
        ingredientId: "536",
        ingredientMeasure: "5 tbs",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "sprinking",
      },
    ],
    recipeSource:
      "https://thehappyfoodie.co.uk/recipes/ricotta-cake-budino-di-ricotta",
    imageSource: null,
    price: "107.00",
    stock: 16,
    discount: 7,
    createdAt: 1667963546805,
  },
  {
    id: "52776",
    name: "Chocolate Gateau",
    recipeCategoryId: "3",
    areaId: 7,
    instructions:
      "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
    image: "/images/meals/tqtywx1468317395.jpg",
    tags: [19, 31, 14, 4],
    youtube: "https://www.youtube.com/watch?v=dsJtgmAhFF4",
    ingredients: [
      {
        ingredientId: "247",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "2 tablespoons",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "5",
      },
      {
        ingredientId: "160",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "137",
        ingredientMeasure: "125g",
      },
    ],
    recipeSource: "http://www.goodtoknow.co.uk/recipes/536028/chocolate-gateau",
    imageSource: null,
    price: "394.00",
    stock: 17,
    discount: 12,
    createdAt: 1667963546806,
  },
  {
    id: "52788",
    name: "Christmas Pudding Flapjack",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Preheat the oven to 180°C/fan 160°C/gas mark 4 and grease and line a 25cm x 20cm tin. Melt the butter, sugar, syrup and orange zest in a large saucepan over a medium heat. The aim is to dissolve all the ingredients so that they are smooth, but to not lose any volume through boiling so be careful not to overheat.\r\n\r\nAdd the oats and stir well until evenly coated. Stir through the leftover Christmas pudding and tip into the prepared tin. Use a spoon to flatten the top and bake for 40 minutes until the edges start to brown. Whilst still warm in the tin, score into 12 squares. Allow to cool completely before cutting along the scores.\r\n\r\nKeeps for 5 days in an air tight tin or freeze for up to 1 month.",
    image: "/images/meals/vvusxs1483907034.jpg",
    tags: [35, 19],
    youtube: "https://www.youtube.com/watch?v=OaqvGvEiwzU",
    ingredients: [
      {
        ingredientId: "282",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "108",
        ingredientMeasure: "225g",
      },
      {
        ingredientId: "158",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "228",
        ingredientMeasure: "Zest of 1",
      },
      {
        ingredientId: "274",
        ingredientMeasure: "500g",
      },
      {
        ingredientId: "82",
        ingredientMeasure: "250g",
      },
    ],
    recipeSource: "",
    imageSource: null,
    price: "251.00",
    stock: 18,
    discount: 19,
    createdAt: 1667963546806,
  },
  {
    id: "52853",
    name: "Chocolate Avocado Mousse",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "1. Blend all the mousse ingredients together in your food processor until smooth. Add the cacao powder first and, as you blend, have all the ingredients to hand in order to adjust the ratios slightly as the size of avocados and bananas varies so much. The perfect ratio in order to avoid the dish tasting too much of either is to use equal amounts of both.\r\n\r\n2. Taste and add a few drops of stevia if you feel you need more sweetness.\r\n\r\n3. Fill little cups or shot glasses with the mousse, sprinkle with the cacao powder or nibs and serve.\r\n\r\nTip If you don’t have a frozen banana to hand you can just use a normal one and then chill the mousse before serving for a cooling dessert.",
    image: "/images/meals/uttuxy1511382180.jpg",
    tags: [],
    youtube: "https://www.youtube.com/watch?v=wuZffe60q4M",
    ingredients: [
      {
        ingredientId: "407",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "43",
        ingredientMeasure: "3 tbsp",
      },
      {
        ingredientId: "5",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "177",
        ingredientMeasure: "2 tblsp ",
      },
      {
        ingredientId: "198",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "323",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "333",
        ingredientMeasure: "2 tbsp",
      },
      {
        ingredientId: "284",
        ingredientMeasure: "pinch",
      },
    ],
    recipeSource:
      "http://www.hemsleyandhemsley.com/recipe/chocolate-avocado-mousse/",
    imageSource: null,
    price: "118.00",
    stock: 10,
    discount: 12,
    createdAt: 1667963546806,
  },
  {
    id: "52856",
    name: "Choc Chip Pecan Pie",
    recipeCategoryId: "3",
    areaId: 1,
    instructions:
      "First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6.\r\n\r\nRemove the pastry from the fridge and leave at room temperature for 5 mins to soften. Flour the work surface, then unwrap the pastry and roll to a circle the thickness of a £1 coin. Use the pastry to line a deep, 23cm round fluted tin – mine was about 3cm deep. Press the pastry into the corners and up the sides, making sure there are no gaps. Leave 1cm pastry overhanging (save some of the pastry scraps for later). Line with baking parchment (scrunch it up first to make it more pliable) and fill with baking beans. Blind-bake for 15-20 mins until the sides are set, then remove the parchment and beans and return to the oven for 5 mins until golden brown. Trim the pastry so it’s flush with the top of the tin – a small serrated knife is best for this. If there are any cracks, patch them up with the pastry scraps.\r\n\r\nMeanwhile, weigh the butter, syrup and sugars into a pan, and add 1 /4 tsp salt. Heat until the butter has melted and the sugar dissolved, stirring until smooth. Remove from the heat and cool for 10 mins. Reduce oven to 160C/140C fan/gas 3.\r\n\r\nBeat the eggs in a bowl. Add the syrup mixture, vanilla and pecans, and mix until well combined. Pour half the mixture into the tart case, scatter over half the chocolate chips, then cover with the remaining filling and chocolate chips. Bake on the middle shelf for 50-55 mins until set. Remove from the oven and leave to cool, then chill for at least 2 hrs before serving.",
    image: "/images/meals/rqvwxt1511384809.jpg",
    tags: [16, 14, 15, 38],
    youtube: "https://www.youtube.com/watch?v=fDpoT0jvg4Y",
    ingredients: [
      {
        ingredientId: "248",
        ingredientMeasure: "300g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "75g",
      },
      {
        ingredientId: "346",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "1 tbls",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "412",
        ingredientMeasure: "200ml",
      },
      {
        ingredientId: "413",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "414",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "4",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "411",
        ingredientMeasure: "400g",
      },
      {
        ingredientId: "415",
        ingredientMeasure: "200g",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/choc-chip-pecan-pie",
    imageSource: null,
    price: "377.00",
    stock: 11,
    discount: 10,
    createdAt: 1667963546806,
  },
  {
    id: "52860",
    name: "Chocolate Raspberry Brownies",
    recipeCategoryId: "3",
    areaId: 1,
    instructions:
      "Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat.\r\nStir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days.",
    image: "/images/meals/yypvst1511386427.jpg",
    tags: [31, 14, 35],
    youtube: "https://www.youtube.com/watch?v=Pi89PqsAaAg",
    ingredients: [
      {
        ingredientId: "417",
        ingredientMeasure: "200g",
      },
      {
        ingredientId: "416",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "282",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "413",
        ingredientMeasure: "400g",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "4 large",
      },
      {
        ingredientId: "248",
        ingredientMeasure: "140g",
      },
      {
        ingredientId: "89",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "408",
        ingredientMeasure: "200g",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/2121648/bestever-chocolate-raspberry-brownies",
    imageSource: null,
    price: "392.00",
    stock: 16,
    discount: 16,
    createdAt: 1667963546806,
  },
  {
    id: "52870",
    name: "Chickpea Fajitas",
    recipeCategoryId: "12",
    areaId: 16,
    instructions:
      "Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Drain the chickpeas, pat dry and tip onto the prepared baking tray. Add the oil and paprika, toss to coat, then roast for 20-25 mins until browned and crisp, shaking halfway through cooking.\r\n\r\nMeanwhile, put the tomatoes and onion in a small bowl with the vinegar and set aside to pickle. Put the avocado in another bowl and mash with a fork, leaving some larger chunks. Stir in the lime juice and season well. Mix the soured cream with the harissa and set aside until ready to serve.\r\n\r\nHeat a griddle pan until nearly smoking. Add the tortillas , one at a time, charring each side until hot with griddle lines. \r\n\r\nPut everything on the table and build the fajitas : spread a little of the harissa cream over the tortilla, top with roasted chickpeas, guacamole, pickled salsa and coriander, if you like. Serve with the lime wedges for squeezing over.",
    image: "/images/meals/tvtxpq1511464705.jpg",
    tags: [39],
    youtube: "https://www.youtube.com/watch?v=LGY3V7EGpT0",
    ingredients: [
      {
        ingredientId: "71",
        ingredientMeasure: "400g",
      },
      {
        ingredientId: "224",
        ingredientMeasure: "1 tblsp ",
      },
      {
        ingredientId: "232",
        ingredientMeasure: "pinch",
      },
      {
        ingredientId: "317",
        ingredientMeasure: "2 small cut chunks",
      },
      {
        ingredientId: "263",
        ingredientMeasure: "1 finely sliced",
      },
      {
        ingredientId: "394",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "5",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "202",
        ingredientMeasure: "Juice of 1",
      },
      {
        ingredientId: "202",
        ingredientMeasure: "Chopped",
      },
      {
        ingredientId: "295",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "175",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "98",
        ingredientMeasure: "4",
      },
      {
        ingredientId: "95",
        ingredientMeasure: "to serve",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/chickpea-fajitas",
    imageSource: null,
    price: "290.00",
    stock: 16,
    discount: 12,
    createdAt: 1667963546806,
  },
  {
    id: "52897",
    name: "Carrot Cake",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin.\r\nMix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts.\r\nSpoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack.\r\nMeanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.",
    image: "/images/meals/vrspxv1511722107.jpg",
    tags: [19, 21, 15],
    youtube: "https://www.youtube.com/watch?v=asjZ7iTrGKA",
    ingredients: [
      {
        ingredientId: "327",
        ingredientMeasure: "450ml",
      },
      {
        ingredientId: "248",
        ingredientMeasure: "400g",
      },
      {
        ingredientId: "27",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "305",
        ingredientMeasure: "550ml",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "5",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "½ tsp",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "49",
        ingredientMeasure: "500g grated",
      },
      {
        ingredientId: "410",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "346",
        ingredientMeasure: "200g",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "100g ",
      },
    ],
    recipeSource:
      "https://www.bbc.co.uk/food/recipes/classic_carrot_cake_08513",
    imageSource: null,
    price: "316.00",
    stock: 12,
    discount: 12,
    createdAt: 1667963546806,
  },
  {
    id: "52898",
    name: "Chelsea Buns",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Sift the flour and salt into a large bowl. Make a well in the middle and add the yeast.\r\nMeanwhile, warm the milk and butter in a saucepan until the butter melts and the mixture is lukewarm.\r\nAdd the milk mixture and egg to the flour mixture and stir until the contents of the bowl come together as a soft dough. (You may need to add a little extra flour.)\r\nTip the dough onto a generously floured work surface. Knead for five minutes, adding more flour if necessary, until the dough is smooth and elastic and no longer feels sticky.\r\nLightly oil a bowl with a little of the vegetable oil. Place the dough into the bowl and turn until it is covered in the oil. Cover the bowl with cling film and set aside in a warm place for one hour, or until the dough has doubled in size.\r\nLightly grease a baking tray.\r\nFor the filling, knock the dough back to its original size and turn out onto a lightly floured work surface. Roll the dough out into a rectangle 0.5cm/¼in thick. Brush all over with the melted butter, then sprinkle over the brown sugar, cinnamon and dried fruit.\r\nRoll the dough up into a tight cylinder , cut ten 4cm/1½in slice and place them onto a lightly greased baking sheet, leaving a little space between each slice. Cover with a tea towel and set aside to rise for 30 minutes.\r\nPreheat oven to 190C/375F/Gas 5.\r\nBake the buns in the oven for 20-25 minutes, or until risen and golden-brown.\r\nMeanwhile, for the glaze, heat the milk and sugar in a saucepan until boiling. Reduce the heat and simmer for 2-3 minutes.\r\nRemove the buns from the oven and brush with the glaze, then set aside to cool on a wire rack.",
    image: "/images/meals/vqpwrv1511723001.jpg",
    tags: [10, 2, 21],
    youtube: "https://www.youtube.com/watch?v=i_zemP3yBKw",
    ingredients: [
      {
        ingredientId: "474",
        ingredientMeasure: "500g",
      },
      {
        ingredientId: "281",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "475",
        ingredientMeasure: "7g",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "300ml ",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "40g",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "1",
      },
      {
        ingredientId: "327",
        ingredientMeasure: "Dash",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "40",
        ingredientMeasure: "75g",
      },
      {
        ingredientId: "84",
        ingredientMeasure: "2 tsp",
      },
      {
        ingredientId: "477",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "211",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "2 tbs",
      },
    ],
    recipeSource: "https://www.bbc.co.uk/food/recipes/chelsea_buns_95015",
    imageSource: null,
    price: "462.00",
    stock: 12,
    discount: 17,
    createdAt: 1667963546806,
  },
  {
    id: "52905",
    name: "Chocolate Souffle",
    recipeCategoryId: "3",
    areaId: 7,
    instructions:
      "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf. For the sauce, heat the cream and sugar until boiling. Remove from the heat, stir in the chocolate and butter until melted, then keep warm.\r\nBrush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess. Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks. Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency. Mix a spoonful into the chocolate, then gently fold in the rest.\r\nWorking quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges. Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble. Don’t open the oven door too early as this may make them collapse.\r\nOnce the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce. Replace the lids and serve straight away.",
    image: "/images/meals/twspvx1511784937.jpg",
    tags: [27, 14, 4, 31],
    youtube: "https://www.youtube.com/watch?v=FWqfkUEWOTg",
    ingredients: [
      {
        ingredientId: "486",
        ingredientMeasure: "142ml",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "417",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "25g",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "drizzle",
      },
      {
        ingredientId: "52",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "417",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "122",
        ingredientMeasure: "4",
      },
      {
        ingredientId: "121",
        ingredientMeasure: "5",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "to serve",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/5816/hot-chocolate-souffls-with-chocolate-cream-sauce",
    imageSource: null,
    price: "206.00",
    stock: 9,
    discount: 16,
    createdAt: 1667963546806,
  },
  {
    id: "52910",
    name: "Chinon Apple Tarts",
    recipeCategoryId: "3",
    areaId: 7,
    instructions:
      "To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan. Stir together, then heat gently to dissolve the sugar. Turn up the heat and boil for 20 mins until reduced and syrupy. Strain into a small, sterilised jam jar and leave to cool completely. Will keep in the fridge for up to 1 month.\r\n\r\nTake the pastry out of the fridge and leave at room temperature for 10 mins, then unroll. Heat the grill to high and heat the oven to 180C/160C fan/gas 4. Cut out 2 x 13cm circles of pastry, using a plate as a guide, and place on a non-stick baking sheet. Sprinkle each circle with 1 tbsp sugar and grill for 5 mins to caramelise, watching carefully so that the sugar doesn’t burn. Remove from the grill. Can be done a few hours ahead, and left, covered, out of the fridge.\r\n\r\nPeel, quarter and core the apples, cut into 2mm-thin slices and arrange on top of the pastry. Sprinkle over the remaining sugar and pop in the oven for 20-25 mins until the pastry is cooked through and golden, and the apples are softened. Remove and allow to cool slightly. Warm 3 tbsp of the red wine jelly in a small pan over a low heat with 1 tsp water to make it a little more runny, then brush over the top of the tarts.\r\n\r\nTip the crème fraîche into a bowl, sift over the icing sugar and cardamom, and mix together. Carefully lift the warm tarts onto serving plates and serve with the cardamom crème fraîche.",
    image: "/images/meals/qtqwwu1511792650.jpg",
    tags: [1, 2],
    youtube: "https://www.youtube.com/watch?v=5dAW9HQgtCk",
    ingredients: [
      {
        ingredientId: "255",
        ingredientMeasure: "320g",
      },
      {
        ingredientId: "414",
        ingredientMeasure: "4 tbs",
      },
      {
        ingredientId: "464",
        ingredientMeasure: "3",
      },
      {
        ingredientId: "487",
        ingredientMeasure: "4 tbs",
      },
      {
        ingredientId: "101",
        ingredientMeasure: "100ml",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "1 tbs",
      },
      {
        ingredientId: "47",
        ingredientMeasure: "3",
      },
    ],
    recipeSource: "https://www.bbcgoodfood.com/recipes/chinon-apple-tarts",
    imageSource: null,
    price: "459.00",
    stock: 4,
    discount: 9,
    createdAt: 1667963546806,
  },
  {
    id: "52923",
    name: "Canadian Butter Tarts",
    recipeCategoryId: "3",
    areaId: 3,
    instructions:
      "Preheat the oven to fan 170C/ conventional 190C/gas 5. Roll out the pastry on a lightly floured surface so it’s slightly thinner than straight from the pack. Then cut out 18-20 rounds with a 7.5cm fluted cutter, re-rolling the trimmings. Use the rounds to line two deep 12-hole tart tins (not muffin tins). If you only have a regular-sized, 12-hole tart tin you will be able to make a few more slightly shallower tarts.\r\nBeat the eggs in a large bowl and combine with the rest of the ingredients except the walnuts. Tip this mixture into a pan and stir continuously for 3-4 minutes until the butter melts, and the mixture bubbles and starts to thicken. It should be thick enough to coat the back of a wooden spoon. Don’t overcook, and be sure to stir all the time as the mixture can easily burn. Remove from the heat and stir in the nuts.\r\nSpoon the filling into the unbaked tart shells so it’s level with the pastry. Bake for 15-18 minutes until set and pale golden. Leave in the tin to cool for a few minutes before lifting out on to a wire rack. Serve warm or cold.",
    image: "/images/meals/wpputp1511812960.jpg",
    tags: [22, 35, 14, 4],
    youtube: "https://www.youtube.com/watch?v=WUpaOGghOdo",
    ingredients: [
      {
        ingredientId: "419",
        ingredientMeasure: "375g",
      },
      {
        ingredientId: "123",
        ingredientMeasure: "2 large",
      },
      {
        ingredientId: "217",
        ingredientMeasure: "175g",
      },
      {
        ingredientId: "457",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "324",
        ingredientMeasure: "1 tsp ",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "50g",
      },
      {
        ingredientId: "486",
        ingredientMeasure: "4 tsp",
      },
      {
        ingredientId: "410",
        ingredientMeasure: "50g",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/1837/canadian-butter-tarts",
    imageSource: null,
    price: "459.00",
    stock: 15,
    discount: 9,
    createdAt: 1667963546806,
  },
  {
    id: "52966",
    name: "Chocolate Caramel Crispy",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      'Grease and line a 20 x 20cm/8" x 8" baking tin with parchment paper.\r\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\r\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\r\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\r\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!',
    image: "/images/meals/1550442508.jpg",
    tags: [15, 35, 21, 1, 5, 40],
    youtube: "https://www.youtube.com/watch?v=qsk_At_gjv0",
    ingredients: [
      {
        ingredientId: "543",
        ingredientMeasure: "6 chopped",
      },
      {
        ingredientId: "41",
        ingredientMeasure: "150g",
      },
      {
        ingredientId: "544",
        ingredientMeasure: "120g",
      },
      {
        ingredientId: "416",
        ingredientMeasure: "150g",
      },
    ],
    recipeSource:
      "http://www.donalskehan.com/recipes/chocolate-caramel-rice-crispy-treats/",
    imageSource: null,
    price: "408.00",
    stock: 5,
    discount: 17,
    createdAt: 1667963546806,
  },
  {
    id: "52976",
    name: "Cashew Ghoriba Biscuits",
    recipeCategoryId: "3",
    areaId: 22,
    instructions:
      "Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.\r\nIn a bowl, mix the cashews and icing sugar. Add the egg yolks and orange blossom water and mix to a smooth homogeneous paste.\r\nTake lumps of the cashew paste and shape into small balls. Roll the balls in icing sugar and transfer to the baking tray. Push an almond in the centre of each ghribia.\r\nBake until the biscuits are lightly golden, about 20 minutes. Keep an eye on them, they burn quickly.",
    image: "/images/meals/t3r3ka1560461972.jpg",
    tags: [],
    youtube: "https://www.youtube.com/watch?v=IqXEZUk4hWI",
    ingredients: [
      {
        ingredientId: "50",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "100g ",
      },
      {
        ingredientId: "122",
        ingredientMeasure: "2",
      },
      {
        ingredientId: "558",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "347",
        ingredientMeasure: "To Glaze",
      },
      {
        ingredientId: "471",
        ingredientMeasure: "100g ",
      },
    ],
    recipeSource:
      "http://allrecipes.co.uk/recipe/40152/cashew-ghoriba-biscuits.aspx",
    imageSource: null,
    price: "254.00",
    stock: 1,
    discount: 16,
    createdAt: 1667963546806,
  },
  {
    id: "52989",
    name: "Christmas Pudding Trifle",
    recipeCategoryId: "3",
    areaId: 2,
    instructions:
      "Peel the oranges using a sharp knife, ensuring all the pith is removed. Slice as thinly as possible and arrange over a dinner plate. Sprinkle with the demerara sugar followed by the Grand Marnier and set aside.\r\n\r\nCrumble the Christmas pudding into large pieces and scatter over the bottom of a trifle bowl. Lift the oranges onto the pudding in a layer and pour over any juices.\r\n\r\nBeat the mascarpone until smooth, then stir in the custard. Spoon the mixture over the top of the oranges.\r\n\r\nLightly whip the cream and spoon over the custard. Sprinkle with the flaked almonds and grated chocolate. You can make this a day in advance if you like, chill until ready to serve.",
    image: "/images/meals/r33cud1576791081.jpg",
    tags: [42],
    youtube: "https://www.youtube.com/watch?v=jRfyNQs5qhU",
    ingredients: [
      {
        ingredientId: "228",
        ingredientMeasure: "3",
      },
      {
        ingredientId: "110",
        ingredientMeasure: "1 tbs",
      },
      {
        ingredientId: "560",
        ingredientMeasure: "2 tbs",
      },
      {
        ingredientId: "82",
        ingredientMeasure: "300g",
      },
      {
        ingredientId: "459",
        ingredientMeasure: "500g",
      },
      {
        ingredientId: "401",
        ingredientMeasure: "250g",
      },
      {
        ingredientId: "115",
        ingredientMeasure: "284ml",
      },
      {
        ingredientId: "135",
        ingredientMeasure: "Handful",
      },
      {
        ingredientId: "417",
        ingredientMeasure: "Grated",
      },
    ],
    recipeSource:
      "https://www.bbcgoodfood.com/recipes/1826685/christmas-pudding-trifle",
    imageSource: null,
    price: "78.00",
    stock: 10,
    discount: 15,
    createdAt: 1667963546806,
  },
];

let employeesData = [
  {
    id: 1,
    name: "Abram Langtry",
    image: "/images/avatar/avatar1.jpeg",
    department: 1,
    salary: "500",
  },
  {
    id: 2,
    name: "Flossy Arrell",
    image: "/images/avatar/avatar1.jpeg",
    department: 2,
    salary: 20000,
  },
  {
    id: 3,
    name: "Giorgio Antonioni",
    image: "/images/avatar/avatar1.jpeg",
    department: 3,
    salary: 95000,
  },
  {
    name: "Himanshu",
    image: "/images/avatar/avatar2.jpeg",
    department: 4,
    salary: 100000,
    createdAt: 1670325954162,
    id: "tEYFrHNsdO",
  },
  {
    name: "Prashant",
    image: "/images/avatar/avatar2.jpeg",
    department: 3,
    salary: 5000000,
    createdAt: 1670325954162,
    id: "yjkyh1htCb",
  },
  {
    name: "Rushikesh",
    image: "/images/avatar/avatar1.jpeg",
    department: 3,
    salary: 3000000,
    createdAt: 1672901861637,
    id: "fh2BHnLqlU",
  },
  {
    id: "4FjVtmfUYz",
    name: "Anand Kumar",
    image: "/images/avatar/avatar2.jpeg",
    salary: "1000000",
  },
  {
    name: "Ajay Singh",
    image: "/images/avatar/avatar1.jpeg",
    department: "2",
    salary: "8",
    createdAt: 1672913508984,
    id: "y1i4lO11Wk",
  },
  {
    id: "g5qs2OrO86",
    name: "Kumar Vishwas",
    department: "4",
    salary: "55555",
    createdAt: 1672919913274,
    image: "/images/avatar/avatar1.jpeg",
  },
];

data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    before(() => {
      // cy.setLocalStorage("userId", null);
      // cy.setLocalStorage("localAccessToken", null);
    });

    beforeEach(() => {
      // cy.restoreLocalStorage();
    });

    afterEach(() => {
      // cy.saveLocalStorage();
    });

    it("Shows the correct initial data", () => {
      cy.visit(url);

      let numOfCats = catsData.length;
      cy.log(numOfCats + " cats found in the server");
      console.log(numOfCats);

      const catCards = ".data-list-wrapper .card-list .card";

      cy.get(catCards)
        .should("have.length", numOfCats)
        .first()
        .should("contain", catsData[0].name);

      cy.get(catCards)
        .eq(Math.ceil(numOfCats / 2))
        .should("contain", catsData[Math.ceil(numOfCats / 2)].name);

      cy.get(catCards)
        .last()
        .should("contain", catsData[numOfCats - 1].name);

      cy.then(() => {
        acc_score += 2;
      });
    }); // 2

    it("Sorts as expected", () => {


      let numOfCats = catsData.length;
      const catCards = ".data-list-wrapper .card-list .card";

      cy.get("#sort-low-to-high").click();
      cy.wait(500);

      let arr = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          arr.push(+$el.find(".card-additional-info").text());
        })
        .then(() => {
          console.log(arr, arr.length);
          const isSorted = arr.reduce(
            (n, item) => n !== false && item >= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#sort-high-to-low").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          arr2.push(+$el.find(".card-additional-info").text());
        })
        .then(() => {
          console.log(arr2, arr2.length);
          const isSorted = arr2.reduce(
            (n, item) => n !== false && item <= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Filters as expected", () => {


      let numOfCats = catsData.length;
      const catCards = ".data-list-wrapper .card-list .card";

      cy.get("#filter-less-than-50").click();
      cy.wait(500);

      let arr = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          arr.push(+$el.find(".card-additional-info").text());
        })
        .then(() => {
          const isFiltered = arr.reduce(
            (n, item) => n !== false && item < 50 && item
          );
          expect(!!isFiltered).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#filter-more-than-equal-50").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          arr2.push(+$el.find(".card-additional-info").text());
        })
        .then(() => {
          const isFiltered = arr2.reduce(
            (n, item) => n !== false && item >= 50 && item
          );
          expect(!!isFiltered).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("fetches and displays recipes", () => {


      let numOfRecipes = recipeData.length;
      cy.log(numOfRecipes + " recipes found in the server");

      cy.get("#fetch-recipes").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfRecipes)
        .first()
        .should("contain", recipeData[0].name)
        .find(".card-description")
        .should("contain", recipeData[0].price);

      cy.get(cards)
        .eq(Math.ceil(numOfRecipes / 2))
        .should("contain", recipeData[Math.ceil(numOfRecipes / 2)].name)
        .find(".card-description")
        .should("contain", recipeData[Math.ceil(numOfRecipes / 2)].price);

      cy.get(cards)
        .last()
        .should("contain", recipeData[numOfRecipes - 1].name)
        .find(".card-description")
        .should("contain", recipeData[numOfRecipes - 1].price);

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("fetches and displays employees", () => {


      let numOfEmployees = employeesData.length;
      cy.log(numOfEmployees + " employees found in the server");

      cy.get("#fetch-employees").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfEmployees)
        .first()
        .should("contain", employeesData[0].name)
        .find(".card-description")
        .should("contain", employeesData[0].salary);

      cy.get(cards)
        .eq(Math.ceil(numOfEmployees / 2))
        .should("contain", employeesData[Math.ceil(numOfEmployees / 2)].name)
        .find("a.card-link")
        .should(
          "have.attr",
          "data-name",
          employeesData[Math.ceil(numOfEmployees / 2)].name
        );

      cy.get(cards)
        .last()
        .should("contain", employeesData[numOfEmployees - 1].name)
        .find(".card-description")
        .should("contain", employeesData[numOfEmployees - 1].salary);

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Alerts on click of greet link", () => {


      let numOfEmployees = employeesData.length;
      cy.log(numOfEmployees + " employees found in the server");

      cy.get("#fetch-employees").click();
      cy.wait(500);

      const cards = ".data-list-wrapper .card-list .card";

      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));

      cy.get(cards)
        .eq(Math.ceil(numOfEmployees / 2))
        .find("a.card-link")
        .click()
        .then(() => {
          expect(
            `Greetings from ${
              employeesData[Math.ceil(numOfEmployees / 2)].name
            }!`
          ).to.contain(alerted);
        });

      cy.then(() => {
        acc_score += 3;
      });
    }); // 3

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
