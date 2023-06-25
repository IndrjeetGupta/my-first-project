# JS-VITE-WITH-MOCK-SERVER (Eval-3)

Please do not use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm i
```

## Start only Backend server
```
npm run server
```

## Start only Frontend server
```
npm run start
```

## Start both BE & FE in a single command
```
npm run watch
```

# Important files
```
.
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Rubrics

```
✅ able to submit the app - 1 mark ( minimum score )
✅ Shows the correct initial data - 2 mark
✅ Sorts as expected - 1 mark
✅ Filters as expected - 1 mark
✅ fetches and displays recipes - 1 mark
✅ fetches and displays employees  - 1 mark
✅ Alerts on click of greet link - 3 marks
```
### You haven't been taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

# Problem statements

### 1. List of cats on page load [2]
On page `load`, a list all `cats` should be shown in the  `div#data-list-wrapper`. 

Expected markup (example card): 
![picture 2](https://res.cloudinary.com/drxuo575c/image/upload/v1673081616/coding-problems/4e85a7495cca08b31df22be6fd51f63f6fec8fb5235f4c5e329ca38c814b6bc5.png)  

Expected UI (example card):
![picture 3](https://res.cloudinary.com/drxuo575c/image/upload/v1673081661/coding-problems/00c89cfb3b3ca6fb730ecf6d3de1f0d4a0311c2f3b763770ebdadd573ac07eef.jpg)  

Expected markup (list):
![picture 4](https://res.cloudinary.com/drxuo575c/image/upload/v1673081777/coding-problems/8fbcb16d0afd90a9ac6e9275b57799bc77d6edb6b8d7799e2e068717107c9930.jpg)  

Data mapping:
![picture 6](https://res.cloudinary.com/drxuo575c/image/upload/v1673082113/coding-problems/b6e3f319a20e63e83dafee7a0666f38a48a27638ecd7952c8f47dc3fba25047a.png)  

- Description should not be of more than 75 characters
- Markup - elements, classes & ID's should be identical to the above screenshot.
- The data should be fetched from `${baseServerURL}/cats`
- The cats should be shown on page `load`

### 2. Sorting Cats based on cost [1]

![picture 7](https://res.cloudinary.com/drxuo575c/image/upload/v1673082337/coding-problems/b5949413d4f5efb35ced62ada9f60f838d04964ab20c136396a3365de3511ca9.png)  

On click of the button `#sort-low-to-high`, the cat list should be sorted in ascending order based on their cost.

On click of the button `#sort-high-to-low`, the cat list should be sorted in descending order based on their cost.

You may use any approach of your choice for sorting. You may sort the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

### 3. Filtering Cats based on cost [1]

![picture 8](https://res.cloudinary.com/drxuo575c/image/upload/v1673083276/coding-problems/126e4d65e9357c17d55e42de420a36e13eb5362c4186011d4f076ee36acd9ced.png)  

When the button `#filter-less-than-50` is clicked, the cat list is expected to be filtered. It should only show the cats whose `cost` is less than 50.

When the button `#filter-more-than-equal-50` is clicked, the cat list is expected to be filtered. It should only show the cats whose `cost` is more than or equal to 50.

You may use any approach of your choice for filtering. You may filter the available data or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/

Note: the `sort` and the `filter` functionality is just for the cats. You don't need to worry about sorting & filtering recipes & employees.

### 4. Fetch & Display Recipes [1]

On click of the button `#fetch-recipes`, A list of 25 `recipes` should be displayed in the `div#data-list-wrapper`

Screenshot UI: 
![picture 9](https://res.cloudinary.com/drxuo575c/image/upload/v1673086759/coding-problems/c3ccbb03065248208b7e11b9503afe77d4c42f2716f97b221617e7aee0bfb81b.jpg)  

Screenshot Markup: 
![picture 10](https://res.cloudinary.com/drxuo575c/image/upload/v1673086825/coding-problems/89191eafb7765fc5fe340a5bfb8bf01c963857d909862fa5a691bf893f7f6701.png)  

- You need to make a request to `${baseServerURL}/recipes`
- The markup should exactly match the screenshot
- The markup looks slightly different from the Cat's card
- Here, the `price` is placed inside `.card-description` and is appended with `Rs.`
- By default, on page `load`, cats will be shown, only on the `button#fetch-recipes` click the recipes will be shown.  
- Only the first 25 results should be *fetched* & *shown*
- You may refer to the [JSON Server documentation](https://github.com/typicode/json-server)

### 5. Fetch & Display Employees [1]
On click of the button `fetch-employees`, all the `employees` should be displayed in the `div#data-list-wrapper`

Screenshot: 
![picture 11](https://res.cloudinary.com/drxuo575c/image/upload/v1673089469/coding-problems/c2f28bb245ee36c216e4de0b8cc1efa032f24beefa1ea27468c0e4640c067a50.png)  

- `${baseServerURL}/employees`
- The employee `name` is placed in `div.card-title`
- The `div.card-description` contains `salary`
- The salary is prepended with `Rs. `
- The card also contains a link with text `Greet`
- The page does not refreshes on the click of the link

### 6. Alert on click of greet link [3]
- On the click of the `greet` link, an alert is shown as the following screenshot.

![picture 13](https://res.cloudinary.com/drxuo575c/image/upload/v1673090286/coding-problems/b19c8e59a5691238a87ccd22eb2414b341a81f83841d11292bb3867f92012283.png)  

- The alert contains string "Greetings from `<employee full name>`!";


### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
