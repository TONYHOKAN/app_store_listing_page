#Requirements
1. By using HTML, CSS, React.JS create a single page web application that redesign the
App Store listing page. There are 3 major features: app listing, app recommendation
and search. A sample layout is provided below for your reference;

#App listing
- [x] 2. Display top 100 free apps;
- [x] 3. Data source can be found from the API;
https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json and
https://itunes.apple.com/hk/lookup?id=[app_id]
- [x] 4. Support vertical scrolling with pagination (10 records per page) and lazy load;
- [x] 5. For every odd row, app icon is cropped with round corner. For every even row, app
icon is cropped in circle;

#App recommendation
- [x] 6. Display top 10 grossing apps;
- [x] 7. Data source can be found from the API;
https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json
- [x] 8. Items are scrolled horizontally;
- [x] 9. App icons are cropped with round corner;
- [x] 10. Located above app listing section. When app listing section is scrolled vertically, the
app recommendation section will also be scrolled together;

#Search
- [x] 11. For searching the apps displayed in app listing and recommendation section by matching the keyword;
- [x] 12. The search keyword text field is located at the top of the page, and remains the position even app listing is scrolled;
- [x] 13. Once the search is performed, app listing and recommendation section only shows
- [x] the apps whose app name, category, author or summary contains the keyword;
- [x] 14. Search is performed immediately when the keyword is typed;

#Hints​​ for ​​Bonus
- [x] 1. Use of Redux for development;
- [x] 2. Use responsive design;
- [ ] 3. Use of SASS / LESS for CSS
- [x] 4. Show loading indicator when fetching data;
- [x] 5. Add row scroll-in animation;
- [ ] 6. Any other interesting features or things that can show your skills;
- [ ] 7. PWA is a plus

Quality requirement
- [x] 1. Store the API response data locally with data model;
- [x] 2. Follow the best practice of the corresponding platform;
# How to use
clone the project

`git clone https://github.com/TONYHOKAN/app_store_listing_page.git`

and run

`cd app_store_listing_page && yarn setup`

# Start Local Development
`yarn dev`

Using create-react-app web pack dev server to run react_client.

`yarn server:dev`

 Using Node.js express server as backend API server. 

# Product Build
`yarn build && yarn server:prod`

# Test
`yarn test`

# Docker
build image

`docker build -t app_store_listing_page .`

start image

`docker run -p 80:80 -d app_store_listing_page`
#What next?
explore rss API to add more feature
SEARCH API
https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
RSS Generator
https://affiliate.itunes.apple.com/resources/blog/introduction-rss-feed-generator/

provide more filter options e.g dropdown
sorting like price
localization
error handling like network problem
design local cache expire logic

#Code Refactor
use react-reselect to cache component calculation logic 
use type-to-reducer to avoid reducers boilerplate 
use redux-promise-middleware avoid actions boilerplate 
webpack code split enhance performance
add more test case
mock API in dev mode
clean code
