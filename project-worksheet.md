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



**[Time Priority Matrix](https://www.figma.com/file/3scDXZePjvadqEBwMG139M/Untitled?node-id=3%3A0)**

1. click on "Time Priority" on the left side bar, under "Sheets"
2. Ctrl+Mouse Wheel to zoom in.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### - MVP

- Everything listed in Time Matrix **except** Skillset Mind Map and retouching old Github projects

#### - PostMVP

- Skillset Mind Map
- Retouch old github projects

### 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| A: WireFrame and Ideas                            | H | 7 hrs | 5 hrs |  |
| B: Retouch old projects                           |    M     | 3hrs|                |             |
| C: Moving projects to public github               | H | 30 min |  |             |
| Sub-Total                                         |  | 10.5 hr |  |             |
| **<u>Mobile-First</u>**                           |  |  |  |             |
| D: [Front Page] Tron Background | H | 2 hr |  |  |
| E: [Front Page] Collapsible/Hamburger | H | 1 hr |  |  |
| F: [About me] Content | H | 1.5 hr |  |  |
| G: [About me] HTML and CSS | H | 2 hr |  |  |
| H: [Work Hist and Ed.] Content | H | 0.25 hr |  |  |
| I: [Work Hist] HTML and CSS | H | 2 hr |  |  |
| J: [Projects] Google API data retrival | H | 0.25 hr |  |  |
| K: [Projects] HTML and CSS | H | 2 hr |  |  |
| L: [Skillset] Content | H | 1.75 hr |  |  |
| M: [Skillset] MVP HTML and CSS | H | 2 hr |  |  |
| N: [Skillset] Mind Map library | L | 3 hr |  |  |
| O: [Contact Form] HTML and CSS | H | 1 hr |  |  |
| P: [Contact Form] Google Forms API => email send. | M | 2.5 hr |  |  |
| Sub-Total |  | 19 hr |  |  |
| Q: **<u>Desktop (last touches)</u>** |  | 4.75 hr = (19 * .25) |  |  |
| <u>**Total**</u> |  | 23.75 hr | 5 hrs |  |

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