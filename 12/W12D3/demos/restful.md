# RESTful

## REST

- REpresentational State Transfer
- Resource = idea of a thing (e.g., <https://appacademy.io>)

## 3 types of URLs

1. Collections (e.g., /posts)
2. Single (e.g., /posts/4)
3. Nested collections (e.g., /posts/4/likes)

- M:1 relationships (e.g., 1 post many likes, 1 like 1 post)

## HTML-only RESTful Interaction Conventions

| HTTP Verb | Endpoint          | Meaning                         |
| --------- | ----------------- | ------------------------------- |
| GET       | /owners           | Get a list of all owners        |
| POST      | /owners           | Create a new owner              |
| GET       | /owners/new       | Get the form to create an owner |
| GET       | /owners/64        | Get owner 64                    |
| GET       | /owners/:id       | Get owner `${req.params.id}`    |
| POST      | /owners/64        | Update owner 64                 |
| GET       | /owners/64/edit   | Get the edit form for owner 64  |
| POST      | /owners/64/delete | Delete owner 64                 |
| GET       | /owners/64/pets   | Get all pets for owner 64       |
| GET       | /pets/82/owners   | Get all owners for pet 82       |
