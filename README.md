# note-taker

## Table of content

* [Description](#description)
* [Project Requirements](#projectrequirements)
* [Preview](#preview)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [License](#license)
* [Badge](#badge)
* [Contributing](#contributing)

## Description

As a small business owner, 

I want to be able to write and save notes so that 

I can keep track of tasks I need to complete and organize my thoughts.

[Deployed application](https://note-taker-28.herokuapp.com/)

[Github Repository](https://github.com/kingopara/note-taker)

[Link to walk-through video](https://drive.google.com/file/d/1_rh0ZC2yD1hjaONjkE_87j4GhBniZbjZ/view?usp=sharing)


## Project Requirements

* GIVEN a note-taking application

* WHEN I open the Note Taker
    
    `THEN I am presented with a landing page with a link to a notes page`

* WHEN I click on the link to the notes page

    `    THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column`

* WHEN I enter a new note title and the note’s text

    `THEN a Save icon appears in the navigation at the top of the page`

* WHEN I click on the Save icon

    `THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes`

* WHEN I click on an existing note in the list in the left-hand column

    `THEN that note appears in the right-hand column`

* WHEN I click on the Write icon in the navigation at the top of the page

    `THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column`

## Preview
![Preview 1](public/assets/img/noteTk2.png)
![Preview 2](public/assets/img/noteTk1.phg.png)

## Installation

* Clone this repository into your local machine
* Install dependencies using 
1. npm init -y
2. npm install express

## Usage

* invoke/start the local host with any of these commands

1. node server. js
2. npm start

* navigate to the browser and open `http://localhost:3009` to run the app

When the app is opened, hit `Get Started` to create your notes and you'll be taken to page to create your notes, 

* Add a Title of the note at the `Note Title` label
* Create your note at the `Note Text` label
* Hit the `💾` icon that will appear at the top right to save your note and your note will be added to the list of test notes on the left
* To delete a note, hit the `trash icon` associated with the note

## Features

1. Express.json to build back-end server
2. db.json file used the fs module to store & retrieve data
3. connected front-end to back-end
4. App deployed to heroku

## Credit

Made by Praise Opara with assistance from UT Austing Coding Bootcamp

## License

[MIT](https://opensource.org/licenses/MIT)

## Badge

[badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)