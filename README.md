<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Study Cards App</h3>

  <p align="center">
    Take your notes to a new level with Study Cards!
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#instructions">Instructions</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

## Introduction

The purpose of this document is to build an online system that will allow users to create flash cards 

## Intended audience:
This project is intended for students within the collage premises, requirements have been implemented under the guidance of the university professors and the student support team. 

## Project scope:
The purpose of this cue card app is to help students study and revise their work by making use of flashcards that they can either create for themselves or search the community for flashcards regarding a certain topic that may have been summarized already by a fellow student.

## System architecture

This project will be built using the MERN stack. This stack is comprised of:
-React Client, a JavaScript framework used for creating dynamic client-side applications in HTML. Reacts strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists.

-Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js.
Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses. By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front-end, you can connect to Express.js functions that power your application. Those functions in turn use MongoDB’s Node.js drivers, either via callbacks for using Promises, to access and update data in your MongoDB database.
-MongoDB, a NoSQL database management system that will store user data in JSON documents created in client and sent to the Express.js server, where they can be processed stored directly in MongoDB for later retrieval. 
 
## System Requirements

### Functional Requirements:
<ul>
  <li>A user will be able to create an account</li>
  <li>A user will be able to create a new collection/flashcard</li>
  <li>A user will be able to edit a collection on their dashboard</li>
  <li>A user will be able to delete a collection from their dashboard</li>
</ul>

### Non-Functional Requirements:
<ul>
   <li> Security: 
      <ul>
        <li> Systems may require users to create an account to access the application.
        A user will be granted access to an account when the user enters the correct username and password
        </li>
        <li>After a certain number of login attempts, the system may lock the user account, to unlock an account a user will need to verify the identity using                  credentials namely e-mail or phone number</li>
        <li>Users will be able to sign in using their Google account</li>
      </ul>
   </li>
  <li>Compatibility:
    <ul><li>System will be designed to work on desktop and mobile devices.</li></ul>
  </li>
  <li>Capacity:
    <ul><li>The system has a capacity of 1000 users, each having access to a maximum of 100 collections per calendar year</li></ul>
  </li>
</ul>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm, install npm using the command line interface
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Navigate to project folder from the command line interface, you will find 2 folders namely client and server.
3. Navigate to the server and install dependencies
   ```sh
   cd ./server
   npm install
   npm start
   ```
4. Navigate to the client and install dependencies
   ```sh
   cd ./client
   npm install
   npm start
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Optional: Run tests in backend and frontend by navigating to the designated folder and typing the following into the terminal
```
npm run test
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTRUCTIONS -->
## Instructions
<ol>
<li>Login using your email and password
  <ul>
    <li>If you have not yet registered, you can register by clicking on the register link on the login page</li>
  </ul>
 </li>
<li>Once you have been succesfully authenticated you will be redirected to the home page, here you can:
  <ul>
    <li>You can create a new collection</li>
    <li>You can view a saved collection in the form of flashcards that can be flipped around</li>
    <li>You can edit a saved collection</li>
    <li>You can delete a saved collection</li>
  </ul>
 </li>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: https://sweet-biscotti-3d0038.netlify.app/

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

