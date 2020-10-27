# Lan-Messenger

This application is targeting mobile users intends to help the user messaging on localhost or another given host. A user can find other users and send or receive messages from this application.

#### Objectives

- Can send or receive messages from registered users.
- Show online users.

#### Technical Challenges

- Build a system using **WebSocket** that can communicate between two specific clients as any chat app does.
- Connect **WebSocket** with **express**.
- A client can send a message to another client whether the client is online or not.
- Active Sockets:
  - Show active sockets to communicate using **WebSocket**.
  - Remove active sockets after logout
- Design a **NoSQL** chat schema that effectively helps to load the chat page.

#### Disadvantages

- This app is built to demonstrate socket communication so that <u>***no database is used***</u>, <u>server stored data in local storage as a string</u>. But stored data can be parsed as **JSON** and used as **NoSQL** database schema.
- For the first time messaging, other users have to be online and then from online list they can send a message after that it will be listed on the message list page.
- This application is not built for design purpose.

#### Installation and Run

- [Frontend](https://github.com/rjarman/House-Rent/tree/master/frontend)

  - To **install** run:

    ```
    npm install
    ```

  - To run on **development** mode _(it will run in http://localhost:4200 by default)_:
    ```
    npm run start
    ```

  - To build on **production** mode _(it will run in http://localhost:4200 by default)_:
    ```
    npm run build
    ```

- [Backend](https://github.com/rjarman/House-Rent/tree/master/backend)

  - To **install** run:

    ```
    npm install
    ```

  - To run **development server** _(it will run in http://localhost:3000 by default)_:
    ```
    npm run dev:server
    ```

  - To run **server** _(it will run in http://localhost:3000 by default)_:
    ```
    npm run server
    ```

#### Screenshots

![photo no 1](https://drive.google.com/uc?export=view&id=1HoaYWVonYaO70mSrKi7d-wh_tqFnbxHb)
![photo no 2](https://drive.google.com/uc?export=view&id=1jaO6HNyQFRbLeFaH-12Mm4cOAGStWoqs)
