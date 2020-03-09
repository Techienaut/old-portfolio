# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

| Day  | Deliverable                                                  | Status |
| ---- | ------------------------------------------------------------ | ------ |
| D1   | Wireframe and UI                                             |        |
| D2   | Finish Wireframe, Research Libraries and other assest, [Code] Front Page |        |
| D3   | [Code] About me, [Code] Work history, [Code] Projects        |        |
| D4   | [Code] Skill divs (MVP)                                      |        |
| D5   | [Code] Contact Form, Skill Mind Map                          |        |
| D6   | Present                                                      |        |



## Project Description

My website will show to potential employers and clients will showcase a collection of projects and my accomplishments as a Software Engineer / Web Developer:

### 6 Pages 

- Front Page
  - Navigation bar
  - Tron-like background theme
  - Link to twitter handle (@techienaut)
  - Click to scroll down button.
- About Me
  - Showcase story
  - headers: Methodical, Creative, Knowledge Seeker
    - Descriptions underneath
- Work History and Education
  - "Connect with me on Linkedin" (Linkedin profile link)
  - Work History
  - Certifications
- Projects
  - All GA Projects
  - Past Github projects
  - Using UI Cards
  - Google's API for spreadsheet
- Skillset
  - MVP: Using UI Cards for skills
  - Extra: Mind Map Library showcasing knowledge tree.
- Contact Form
  - Links to social media
  - Form to fill email and message
  - google forms: emails me to my inbox

## Google Sheet

[Google Sheet](https://docs.google.com/spreadsheets/d/1DfAA8BO98XjX5GeqjctSKzKRZMktYXFHZGb8mR-fEQ0/edit?usp=sharing)

## Wireframes

 [WireFrame: (Should be the frame with a black background)](https://www.figma.com/file/3scDXZePjvadqEBwMG139M/Untitled?node-id=0%3A1)

## Time/Priority Matrix 

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

**[Time Priority Matrix](https://www.figma.com/file/3scDXZePjvadqEBwMG139M/Untitled?node-id=3%3A0)**

- click on "Time Priority" on the left side bar, under "Sheets"

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### - MVP

- Wireframe and idea features
- Retouch old projects
- Move old projects to public github
- Front page (as seen on Figma)
- Nav bar that collapses into hamburger 
- Divs, wrapped in spaceships, showcasing github project images and links
- Cards that show Skill set
- Contact form: Uses google forms API

#### - PostMVP

- Skillset Mind Map

### 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| WireFrame and Ideas                | H | 7 hrs | 5 hrs |  |
| Retouch old projects               | H | 3hrs|                |             |
| Moving projects to public github   | H | 30 min |  |             |
| **<u>Mobile-First</u>**            |  |  |  |             |
| [Front Page] Tron Background | H | 3 hr |  |  |
| [Front Page] Collapsible/Hamburger |  | 1.5 hr |  |  |
| [About me] Content | H | 1.5 hr |  |  |
| [About me] |  |  |  |  |
| [Coding] Projects | H | 4 hr |  |  |
| [Coding] Skill Mind Map | L | 7 hr |  |  |
| [Coding] Contact Form | H | 2 hr |  |  |
| **<u>Desktop (last touches)</u>** |  |  |  |  |
| Total |  | 32.5 hr |  |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

- https://github.com/Mindmapp/mmp (skill mind map)
- [Bootstrap UI Cards](https://getbootstrap.com/docs/4.0/components/card/)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object