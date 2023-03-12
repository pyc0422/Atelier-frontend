
# front-end-capstone

> This is a web application that uses the Atelier API to provide customers with a user friendly interface. The user interface provides relevant information about a product in the Atelier retail catalog. It features the product's details, ratings and reviews, and a related questions and answers section.
## Product Detail Page
Show the relevant information for a single product in the catalog.<br>
Contains 4 modules:<br/>
- Product Overview Module - Huan Tran
- Ratings & Reviews Module - Yuchen Pan
- Questions & Answers Module - Vivienne Weilacker
- Related Items & Outfit Creation Module - Cameron Hirsh

  ![Screen Recording 2023-03-09 at 2 08 02 PM 2](https://user-images.githubusercontent.com/86500068/224519994-0a071166-c8ca-4d05-8989-665041e78529.GIF)

I'm working on Rating&Reviews Module. This module contains 2 parts. Left side is rating breakdown ans product breakdown, Right part is the reviews list.

- The rating and reviews module detail review

    <img width="500" alt="Screen Shot 2022-10-20 at 12 38 21 PM" src="https://user-images.githubusercontent.com/86500068/197021510-2d97817e-a6d7-49d7-af03-c5bca405197f.png">

 - The sorting and filtering reviews depends on rating, sorting method and searching key works.

    ![9C7482FA-F928-4A9A-8D02-D71DE6E40748 2](https://user-images.githubusercontent.com/86500068/224519967-77d6dc86-0f92-4650-8b68-9fe976128c1f.GIF)

 - Click the add a new review button will trigger a popup window to add a new review with mandatory fields.
If the user doesn't fill all the mandatory fields, it will alert with information. Ohterwise the review will submit successfully.
Also the user can upload less than 5 pictures when add a new review

    ![Add a new review](https://user-images.githubusercontent.com/86500068/224519965-ac730134-c80e-451f-98c1-435b005b3aa4.GIF)


## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Accessing Atelier API && Accessing Cloudinary image host

Refactor config.example.js using instructions provided.

### Running App In Development

From within the root directory:

```sh
npm run build
npm run client-dev
npm run server-dev
```
