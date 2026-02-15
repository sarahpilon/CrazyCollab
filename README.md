# **Crazy Collab**

## Abstract

Our product is a web application that helps groups plan meetings based on overlapping availability in schedules. Individuals in a group, either remotely or locally, can input their available dates and times, adapting across timezones, and cross reference availability with other group members. From there, a group meeting/event can be scheduled and sent to google calendar for easier tracking and planning.

**Features:**

* Easy to Navigate UI  
* WCAG 2.2 compliant accessibility standards  
* Able to adapt to different time zones   
* Suggested Meeting times   
* Connect with google calendar to set up meeting times automatically  
* Cached browser data with Web Storage API

**Stretch Goals:**

* User Login System (MongoDB)  
* Parser for .ics files, both importing and exporting (with ical.js)  
* Database to hold user data and available times (mongodb)  
* Adjustable UI and Font  
* Support other calendar apps (Outlook, Apple)

## Goal

The goal of this product is to make scheduling for teams easier and more transparent. Visualizing the scheduling process will allow teams to seamlessly find open times to meet.

## Current Practice

Students may approach setting a meeting time by comparing their varying school and work schedules, either verbally or via text messaging. This practice can make it difficult to visualize and decipher an open and optimal meeting time, as team members are stuck trying to convey availability via back-and-forth messaging or unclear communication.

One of our main competitors with a foothold in this type of team scheduling is Microsoft with Outlook Calendar, which has many of the same features we wish to implement such as visualized schedule overlap and exporting the meeting time to your calendar. From our own experiences, and testimonies from peers, Outlook calendar isn’t widely known nor utilized by students, who are ultimately our target audience. Additionally, Outlook calendar (depending on courses or app settings) can automatically insert times for events like office hours, zoom meetings, or campus events. Many of these events may not impact one’s schedules, contrary to their depiction on Outlook. Additionally, Outlook assumes by default individuals are unavailable outside of business hours. If one were to use Outlook Calendar to set up a meeting, they’d have to ensure all the information regarding their schedule, and everyone else’s, is already inputted correctly, or they’d have to adjust it before creating an event/meeting time. This may be less of an issue for some in the professional world, but it may be much more problematic for students based on our explorations of this issue. Although OSU’s systems, and perhaps other schools’, are integrated with Microsoft’s services, we believe our implementation will provide a better experience.

Existing web applications such as When2meet also provide similar features that we promise. However, it features an outdated and may feature inaccessible UI that doesn’t comply with WCAG standards. When2meet also allows 3rd party advertisements to be on their site that may be predatory and unfiltered, possibly leading users to visit or download harmful sites and media. Another competitor, Timeful, features a more modern UI than When2meet, and has almost all the features we plan to implement in ours. It also has many great reviews, and already has a strong presence online among those seeking these kinds of services. However, our team had difficulty with the interface on mobile devices, and it felt very clunky to navigate through. Additionally, there didn’t seem to be any method of preventing multiple meeting times being scheduled for an event, possibly introducing an issue where team members all schedule different times for their meetings with no way to communicate what one individual, or the group leader, already scheduled.

## Novelty

Crazy Collab will have users input their availability in the form of a weekly schedule as soon as they log-on. A helpful, visual representation of a calendar week will serve as a visual and interactive way to plot out one’s schedule. Dates, times, and days of the week can all be configured to represent a user’s schedule, which will be used to cross reference with their group members. This availability will be saved if they log-in to their profile, meaning they will not need to re-enter their availability across different group settings. Unlike Outlook, our implementation will not be dependent on any pre-existing calendar set-up, although we hopefully plan to add this option for users who regularly use digital calendar apps, which makes our approach a more isolated and stream-lined experience that avoids the need to manage a digital calendar.

Users can invite each other to sessions to participate in the scheduling of a meeting, and our UI will then clearly visualize each user’s schedules to illustrate overlap and openings, with the program automatically suggesting best meeting times. The visualized schedule will be designed to be easily readable, universally accessible, and friendly across different devices. From there, the session leader can pick a meeting time, allowing all users to export that time to their Google Calendar (and other supported calendars). 

Our unique approach will take the best features of other implementations and condense them into a neat package that provides individuals with an easy experience for planning meeting times with others.

## Effects

If our product works as intended, we believe many individuals can benefit from its ease of use and genuine helpfulness for planning group meetings. Students, co-workers, friends, and family can all utilize our product to plan their collective schedules.

## Technical Approach 

We plan to implement our product as a web application, making it easily accessible to anyone with an internet connection. Users can interact with or without an account, with the benefit being long-term saved information on a cloud database. Users will connect to each other via peer to peer networking using WebRTC, which provides secure, reliable, and widely supported connections in browsers. Within our application, we will integrate an understandable and easy to navigate UI to allow a seamless experience for users on any device using frameworks such as Tailwind and React.

## Risks

The time constraint we must work within is the greatest risk factor we face in the development of this project. With only 10 weeks to build our software, all the while interacting with new APIs and frameworks, we will have to ensure we adequately and efficiently block out our development timeline to help keep us on track and allow room for error and setbacks.

### Risk assessment

**Unrealistic Timeline and Falling Behind**  
**Likelihood:** Medium  
**Impact:** High  
**Evidence:** As college students with other classes, jobs and responsibilities, we are naturally very busy. It is likely that there will be moments where other coursework, or life, gets in the way of us staying on schedule. Falling behind schedule regularly means we are unable to hit milestone goals and deadlines, and thus we are always playing catch-up. If this does occur, more stress and crunch will be added on top of everything else causing this issue to occur in the first place.  
**Plan:** Create a detailed schedule and provide lots of opportunities for check-ups and updates.   
**Plan for detection:** If we stick to the schedule and closely analyze our progress along it, we can adequately monitor when and if we are starting to slip. If we miss a majority of deadlines in one week, we know our timeline needs to be updated and our work needs to be re-prioritized.  
**Mitigation plan:** We plan to communicate with our professor, and realign our goals and figure out if we have to cut a feature to fit the timeline, or if we could put more hands on deck for one week to catch up. 

**Miscommunicated functionality**  
**Likelihood:** Low  
**Impact:** Medium  
**Evidence:** When designing the UI, there was some confusion on how we wanted the website to function. The impact did not seem to be too high, however that is because the issue was caught early. If the issue happened later then it would have a bigger impact.  
**Plan:** Sarah’s role as support allows her to ensure both the frontend and backend remain in the know, and there is no miscommunication.    
**Plan for detection:** If the miscommunication falls through the cracks, the team will also during their weekly meetings discuss their understanding of the implementation.  
**Mitigation plan:** If the issue makes it past all previous possible detections, the group will get onto a call, or meet up in person, and work on the part that was miscommunicated and come up with an universally agreed upon functionality.

**Website is not universally intuitive, and only we think it is intuitive**  
**Likelihood**: Low  
**Impact:** Medium  
**Evidence:** Previously, whenever designing a website our group, because we designed it, would view the design as intuitive. However, whenever we would have a test user or have a fringe user, they would be confused when navigating the website.  
**Plan:** Throughout the development, show our designs to many different users to test the UI on a variety of different users.  
**Plan for detection:** Have a variety of test users from different ranges test the program out whenever we add a new feature. If the user struggles with the new feature, we will rework the UI a bit to abide by their expectations or make it easier to understand.  
**Mitigation plan:** By also having a FAQ section with video tutorials, the risk of a user not understanding how to use the website runs low.

**Moving Website from locally hosted to publically hosted**  
**Likelihood:** Low  
**Impact:** High  
**Evidence:** Since we are using node and will either utilize aws or the OSU webengr server, this process should be relatively simple and straightforward. However, if we are unable to make this transition, the functionality of our product will be ruined based on our design intentions.  
**Plan:** We will rigorously test our application using node, ensuring that all components that are needed for an actual web application are present and that everything is connecting properly.  
**Plan for detection:** Regular testing our application on our choice of server throughout milestones in development will help us make sure that our application is properly functioning on a server.   
**Mitigation plan:** We can search for another method of hosting, or go back through our code-base ensuring everything is as it should be. Adjusting to a new method of hosting shouldn’t be too difficult, so we always have that option.

**Difficulty Learning and Implementing New APIs**  
**Likelihood:** Medium  
**Impact:** Medium  
**Evidence:** Our product will use several packages and APIs, many of which are new to one if not all team members. Additionally, not all browsers may support certain features of the API we are using, or perhaps they aren’t supported at all. Working out kinks and learning proper implementations of these APIs is likely going to be a challenge, and this can definitely cause a setback as more time is spent reading documentation and debugging.   
**Plan:** Before implementing any API calls, ensure that the documentation has thoroughly been read and understood. From there, map out what the implementation will look like before moving onto coding.  
**Plan for detection:** Slowly implement the APIs step by step and ensure there are no issues before proceeding. As soon as something begins to stop working properly or when we don’t understand what our code is doing, we must take a step back and re-group to ensure our implementation is proper.  
**Mitigation plan:** Searching up tutorials or existing projects that utilize these APIs can help us see where we are going wrong and try to replicate those successes in our project.

## Use Cases

1. Group of Students (Google Calendar Syncing)

	**Actors:** Student 1, Student 2, Student 3

**Triggers/Goals:** Students need to find time in their busy course schedule to meet for a study session.  
**Preconditions:** Multiple students need to be in touch with each other, and needing to slot out a specific time for a study session  
**Postconditions (success scenario):** The students have found a time that works for all of them. They set a meeting time and send a reminder to all of their google calendars all through the app.  
**List of steps (success scenario):** 

1. Each student logs onto the app, either locally on the same device or remotely, and inputs their schedules.   
2. Through the app’s UI, all of the student’s overlapping schedules will be shown, revealing gaps/portions in which a meeting time would be suitable.   
3. A day and time is chosen, and the students are able to send a reminder for their set time to their google calendar.  
   **Extensions/variations of the success scenario:** One of the students incorrectly inputs their schedule and needs to adjust it; the app will be able to update and reflect any changes.  
   **Exceptions: failure conditions and scenarios:**   
- Students are unable to input their schedules locally on one device since they can’t meet.  
- Students who are participating in multiple group schedules are unable to add those meeting times to their availability.

 

2. Teachers:

	**Actors:** Professor, Administrator 

**Triggers/Goals:** The administrator wants to find out when the professor is free to have a meeting to send an invite.  
**Preconditions:** Professor had made meetings beforehand, and therefore have data associated with their accounts  
**Postconditions (success scenario):** When the professor adds their account to the schedule, the system adjusted itself accordingly and once the administrator put in their schedule, they clicked a suggested meeting time.  
**List of steps (success scenario):** 

4. Administrator logs in  
5. Administrator inputs their schedule manually  
6. Administrator adds the professors account to the meetup by username  
7. Administrator clicks on one of the suggested meeting times  
   **Extensions/variations of the success scenario:** No suggested meeting times can be found due to time conflicts always happening.   
   **Exceptions: failure conditions and scenarios:** Data shows up incorrect, or fails to show up at all. 

3. Friends   
   **Actors**: Student 1 (PST), Student 2 (MST), Student 3 (CST)  
   **Triggers/Goals:** One friend proposal planning a group activity that requires making a new meeting in the application.  
   **Preconditions**: All three users have access to the application and are able to input their availability. Each user’s time zone will either be detected automatically or input manually.  
   **Postconditions** (success scenario): Program converts all availability times into one unified time and the group selects a meeting time that works for all participants.  
   **List of steps** (success scenario):  
1. Each student logs into the program and confirms/inputs their time zone.  
2. Each student inputs their availability.  
3. The program converts all times into a common format and compares schedules.  
4. One meeting time is selected and confirmed by the group.  
   **Extensions/variations of the success scenario**: One or more friends updates their availability and the program recalculates overlapping times  
   **Exceptions: failure conditions and scenarios**: A user’s time zone is entered incorrectly, causing misleading availability

## Non-functional Requirements

**Usability**

* The program must have a visually clear interface that allows users to input availability and view overlapping schedules without confusion. Users should be able to complete the scheduling process with minimal instructions.


**Performance/Scalability**

* The program must handle multiple users submitting and updating availability data within the same group without noticeable delays.

**Reliability**

* The program must behave predictably even when users make mistakes, such as entering invalid times. Errors should not cause the program to crash and should display messages to the user to provide feedback.

## External Requirements

* The product must handle errors that can reasonably be expected to occur, such as invalid user input when creating a profile, setting schedule, creating a meeting time, etc.  
* The product must be accessible via a public URL hosted by a server that users can use to access it.   
* The product must have instructions for setting up a new server. Your system should be well documented to enable new developers to make enhancements.  
* The scope of this product is limited such that a MVP can reasonably be completed by the team of three developers in a 10 week period.

## External Feedback Strategy

External feedback will be valuable at several points during the development process, particularly when major design and functionality decisions are being made or validated

**Early Feedback (Week 3: Project Pitch)**  
Feedback from instructor/classmates after the project pitch will help validate the project’s scope, feasibility, and overall direction. This feedback will be used to refine requirements, clarify expectations, and adjust planned features before development begins

**Midpoint Feedback (Weeks 6-7)**  
Once availability input and schedule visualization are functional, external feedback will be useful in identifying usability issues, confusing UI elements, or missing functionality. This feedback can be gathered through informal demos to classmates and short usability tests with students outside of our team.

**Late Stage Feedback (Week 9\)**  
Before final submission, external feedback will be used to identify bugs, accessibility issues, and edge cases. Instructor feedback and peer testing will help ensure the application behaves as expected and is easy to use.

# **10 Week Development Timeline and Project Schedule**

**Week 1: Team Formation**

All Members

* Team created and roles assigned  
* Communication platforms (Discord, Teams, GitHub) set up  
  * Milestone: Team roles and collaboration tools finalized

**Week 2: Project Brainstorming**

All Members

* Project idea finalized  
* Core features identified  
* Initial research completed  
  * Milestone: Project concept and feature list documented

**Week 3: Project Pitch**

Sarah (Project Lead)

* Project proposal slides completed

Dylan (Backend)

* Backend considerations documented

Ella (Frontend)

* Initial UI ideas drafted  
  * Milestone: Project pitch presented and feedback received

**Major Milestone: Use Cases**  
Set a universal definition for how a user will interact with the system, and what they would expect to see

*Team Member:* Sarah  
*Dependencies:*

- N/A

**Week 4: Requirements & Design**

Sarah (Project Lead)

* Finalize use cases and requirements document

Dylan (Backend)

* Define skeleton code for user availability and group overlap  
* Define time zone strategy

Ella (Frontend)

* Create UI wireframes for availability input and schedule view  
  * Milestone: All use cases documented, skeleton code and UI wireframes approved by team  
    

**Major Milestone: UI Framework / Frontend Logic**  
Set up UI framework on Figma, and work out, based on the use case definition, the logic behind the frontend.

*Team Member:* Ella  
*Dependencies:*

- Use cases must be done before UI  
- UI design must be done before frontend logic

**Week 5: Frontend and Backend setup**  
Sarah (Project Lead)

* GitHub issues created for all remaining milestones

Dylan (Backend)

* Backend project structure created  
* Server accepts test availability input

Ella (Frontend)

* Frontend project scaffolded  
* Basic UI loads in browser with placeholder components  
  * Milestone: Application loads successfully and accepts test input without errors  
    

**Major Milestone: Backend Logic**  
Set up skeleton code that adheres to what the user would expect based off of both the UI and Use case

*Team Member:* Dylan  
*Dependencies:*

- Use cases must be done before backend logic  
- UI Framework needs to at least be in a draft stage to begin on backend logic

**Week 6: Availability Input Feature**  
Sarah (Project Lead)

* Coordinate integration between frontend and backend

Dylan (Backend)

* Backend stores a single user’s availability in memory

Ella (Frontend)

* Availability input form implemented  
* Frontend validation prevents invalid time/date submissions  
  * Milestone: Single user can submit valid availability with no invalid submissions allowed

**Major Milestone: Availability Input**  
Take in availability from user and send to server

*Team Member:* Ella (lead) Sarah (support)  
*Dependencies:*

- N/A

**Major Milestone: Availability Memory**  
Have availability sent from input saved in database

*Team Member:* Dylan (lead) Sarah (support)  
*Dependencies:*

- Availability input must work as intended  
- Small tests can be run by manually inputting a schedule  
- Backend logic must be mostly figured out 

**Week 7: Schedule Comparison and Visualization**  
Sarah (Project Lead)

* Progress review

Dylan (Backend)

* Backend works with overlapping availability for multiple users

Ella (Frontend)

* UI displays overlapping availability visually  
  * Milestone: Two or more users’ overlapping availability displays correctly across time zones  
    

**Major Milestone: Overlapping Schedules Logic**  
Marks at what points would some peoples schedules overlap and sends that information to frontend.

*Team Member:* Dylan (lead) Sarah (support)  
*Dependencies:*

- Availability aspects must work as intended


**Major Milestone: Schedule Visualization**  
On the UI, have the overlapping schedule logic able to be visually understood on a calendar. 

*Team Member:* Ella (lead) Sarah (support)  
*Dependencies:*

- Overlapping schedules must be working as intended  
- UI must already be drafted from UI Framework / Logic

**Week 8: Suggested Meeting Times**  
Sarah (Project Lead)

* Validate feature completeness with use cases

Dylan (Backend)

* Backend generates suggested meeting time slots

Ella (Frontend)

* Suggested meeting times displayed in UI  
  * Milestone: Suggested meeting times appear correctly when overlap exists  
    

**Major Milestone: Suggested Time**  
Generate suggested meeting time slots

*Team Member:* Dylan (lead) Sarah (support)  
*Dependencies:*

- Availability must be working as intended  
- Overlapping schedules must be working as intended

**Week 9: Google Calendar Integration and Testing**  
Sarah (Project Lead)

* Organize testing and feedback

Dylan (Backend)

* Google Calendar API creates and event successfully

Ella (Frontend)

* Accessibility review and UI refinements  
  * Milestone: meeting exports successfully to Google Calendar  
    

**Major Milestone: API for invites**  
Implement a google calendar invite link based off of the users selected meeting time.

*Team Member:* Sarah (lead) Dylan (support)  
*Dependencies:*

- Suggested time does not need to be done for it to work, but suggested to be done  
- Schedule conflict needs to work  
- Login also needs to work, or some way to verify email

**Week 10: Final Testing and Presentation**  
All Members

* Bug fixes completed  
* Documentation finalized  
* Final presentation delivered  
  * Milestone: All core use cases work in live demo without crashing  
    

**Major Milestone: Final Accessibility Check**  
Final review to make sure the website is accessible, and follows WCAG 2.2 compliant accessibility standards.

*Team Member:* Ella (lead) Sarah (support)  
*Dependencies:*

- All previous Ella led projects needs to be completed (UI Framework / Frontend Logic, Availability Input, Schedule Visualization)


**Major Milestone: Final Testing**  
Do test cases that are based off of the use case, and run by people not in the group to test for edge cases.

*Team Member:* All members  
*Dependencies:*

- All previous milestones must be done  
- Use Cases must be finalized and passed

# **Software Architecture**

Our web application will utilize a **peer to peer** (P2P) system architecture with cloud assistance in order to maximize scalability and overall ease of use for connecting multiple users and sharing data between them. Our application will be hosted on AWS, which integrates well with our chosen architecture due to AWS’s provided static IP address that our networking can work off of. Our P2P API, WebRTC, will ensure a secure and stable connection between clients.

## Major Components:

The major components present here follow the basic architecture of a full-stack MERN web app using a restful API and a model-view-controller structure.

- The client-side/fronted component will contain all content pages with dynamic interaction for the user to send HTTP requests and navigate the single page web application. The client will also optionally be in charge of locally storing cached data.  
- The controller component will contain route handlers in order to properly respond to HTTP requests by calling the model component.  
- The model component is in charge of making calls to the other server-side components and executing other algorithms in order to respond to the HTTP requests.   
- The database component will contain all API calls needed to execute CRUD operations on the DBMS  
- The network component will contain all API calls relating to peer to peer networking connectivity and communication.  
- The schedule component will be responsible for parsing user-inputed schedule data, either manually inputted or uploaded from a file, and making API calls related to time zone calculations. Additionally, the schedule component will export meeting times to Google calendar, and any other calendars we wish to integrate.

## Interfaces Between Components:

Our backend (model, controller, network, database components; server-side) will be developed using express.js in order to implement route handling and HTTP requests from the user/client. Each request’s body will be structured to contain all the information our route handlers, located in our controller component, will need to process the requests properly. The controller component will route the requests with the corresponding data/arguments to the model, who may then handle the request itself or send it to the database, network, or schedule component if it pertains to the DBMS, P2P connection, or schedule parsing respectively. The database component will only be used when CRUD operations are executed via HTTP requests.

Our frontend will be sending all the requests through fields, forms, and fetch calls. As data is inputted by the frontend and responses are sent back from the controller, the optionally browser caching will locally save data and load it into respective portions of the pages. Error handling will be implemented to ensure all request bodies contain the sufficient data needed, and appropriate response codes will be sent back. Our debugging and test suite procedures will make input validation and request sending and responses work properly. The requests will inherently be secure since they are using HTTPS protocol for the HTTP requests. The controller component will directly call the model component’s functions for executing requests.

The network component may need to update the web page at any given moment depending on when data is sent over by other users in a session. It will be able to send a signal to the frontend React application and make it update to reflect the corresponding change in data. This data will be parsed via the schedule component and be sent over. and from there the frontend will be able to update the contents of the page accordingly. Error handling will be implemented to ensure data shown on each client is accurate and consistent. The network connections and data transfers will be inherently secure due to the nature of our chosen API, WebRTC, which utilizes end to end encryption. 

## Data

Data pertaining to individual users will be stored on the cloud database with MongoDB, so all information they have can be accessed easily. Data will be retrieved and written by users whenever they login and update, view, or send their schedule.

Database Schema: Each user has this data stored in the database as their profile information.

- Username (String)  
- Password (String)  
- Availability (JS Object: {“Monday”, \[8:15, 16:45\], ….)

Users are not required to log-in, and this is the main way we’ve designed our system work. The implementation of cached data in the browser is a feature we hope to add to extend the functionality of the application. We would implement this feature using Web Storage API, which can easily and almost universally store data cached in browser sessions. The stored data would be any relevant data to the current browser session the user is involved in. Moreover, any inputted information like their schedule, display name in session, etc.

## Architecture Assumptions:

- A large number of clients can all access the MongoDB database in order to add their user profile information and share their availability with other clients while still having a secure and reliable username and password.  
- The connection between other clients is smooth and updates consistently with accurate data across all clients connected in a session.  
- Each client is able to simultaneously run their client-side and server-side components in the browser with no external downloads or resources required outside of the browser.  
- The P2P connections can handle a medium number of users (at least a dozen) in any given session.  
- The AWS server is able to properly host our application and field our P2P networking through it.

## Alternative Architecture Choices:

- A client-server architecture was initially proposed instead of P2P  
  - Client-server Pros:  
    - More secure data encryption.  
    - More reliable and consistent data across clients.  
  - Client-server Cons:  
    - More expensive to manage.  
    - The loss of the server means all clients lose connection.  
    - One server would possibly host all sessions, or multiple serves would be required. This could quickly become complicated and costly.  
- We have chosen to separate our backend components, rather than having the model hold all API calls.  
  - Centralized API Calling Pros:  
    - APIs, data, and functions can all be stored in one place and obfuscated from the rest of the program, allowing for flexible changes to be made as long as input and output are the same from the eyes of the rest of the program.  
  - Centralized API Calling Cons:  
    - The model should only be used for route handling, and functions from APIs or ones we write may need to be used elsewhere in the program.

# **Software Design** 

## Client/Frontend Component:

The client-side component will be built with React, Vite, and Tailwind to give the user an interactive and dynamic interface to perform actions by navigating pages, interacting with React components, and sending HTTP requests to the backend components. Certain pages will contain interactive portions, such as input fields, whose data will fill out the request body of a HTTP request, which will then be sent to the controller for processing and response. The view will receive the response of the controller and may give the user visual access to data, update page elements or navigate to other pages. The added functionality available to us through React’s API will make creating robust interactions and pages easier.

Packages:

- **React.js & Vite:** Allows for a dynamically created and component-based SPA implementation  
- **Tailwind CSS:** Providing utility classes and prefixes for developing UI

## Controller Component:

The controller’s main purpose is to define route handlers for HTTP requests sent from the frontend. Requests will be monitored and routed using Express.js. Based on the request method and the target address, the controller will call certain functions from the model component in order to complete the request. The controller will ensure a status code and a response to each request is sent based on the success of the request.

Packages:

- **Express.js:** Used to build the backend component to create and manage http request route handlers, as well as for allowing asynchronous functions.

## Model Component

The model component will call the other backend components in response to the calls from the route handler. Data passed through from the controller will undergo any extra parsing or modification, and then will be sent to the respective component(s) depending on the requests’ goal/purpose. Additionally, the model component may store references to relative data that the components will use. The model essentially acts as the middle man between the controller and the API calls, and will ensure that the controller gets the data it needs to send back a response to the client.

Dependencies:

- **Database Component**  
- **Network Component**  
- **Schedule Component**

## Database Component:

This component will house all references and calls to the DBMS and its respective API. The database schema will be set up here, as well as the connection to the database with the proper log-in metrics so the user can only access their data. All standard CRUD operations will be supported here.

Packages:

- **Mongoose for MongoDB:** Provides API calls for connecting to a MongoDB cluster and performing CRUD operations on data. 

## Network Component:

The network component will be in charge of connecting clients to other clients in sessions. A form of an invitation will be sent through and authenticated, allowing for a connection to me made, maintained, and monitored by this component. The model will call this component in response to route handlers passed to it, and additionally this component will need to update the client’s view in response to data transfers from other clients in the session, additionally calling the schedule component to update the session’s group schedule.

Packages:

- **WebRTC:** Allows secure, robust peer to peer connectivity capabilities across modern browsers.

## Schedule Component:

This component will be in charge of making comparisons and calculations based on schedules that are inputted and parsed. The schedules, which will be some data structure or type like a JavaScript Object or a JSON, will be inputted and parsed from both the user and other clients in the user’s session. This data will be sent from the user via the model after the information is requested by the user. An algorithm will be executed to examine all schedules and return the results of overlapping availability and or openings. This data can be passed to the view component and be displayed so the user can visually view the results. This component has the potential to also support parsing schedules to and from files, as well as making calls to calendar APIs to export meeting times.

Packages:

- **Timezone API:** Translates times between timezones.  
- **Google Calendar API:** Creating calendar events based on meeting times decided in user sessions

## Coding Guidelines

These guidelines are the most similar to what we usually comment, and easiest to understand. They will force our team to write readable code in a format that we all understand and are comfortable with. We plan to enforce these guidelines at the end of each week, reviewing comments to ensure they match the style guideline before committing. 

- **JavaScript**: https://github.com/rwaldron/idiomatic.js  
- **HTML and CSS:** https://google.github.io/styleguide/htmlcssguide.html

# **Test Plan and bugs**

### Unit testing

Verify that individual functions behave correctly in isolation

**What we’ll test for:**

- **Schedule input testing:** Validate that inputs are accepted only in correct time formats. Ensure that start times \< end times. Make sure that empty/invalid input is handled.  
- **Timezone testing:** Make sure the program converts individual availability into a unified timezone.  
- **Login system testing:** Ensure the user cannot create a login (username) with invalid characters, such as spaces. We also need to ensure that usernames are created one time, and are unique.  
- **Overlap/Suggested Meeting:** Make sure the program correctly identifies times across multiple users.

**Our strategy:**  
Write tests for both normal and edge cases, with each module passing 100% before integration.

### System / Integration Testing

Ensure functions interact correctly as a whole system.

**What we’ll test for:**

- **Multi user availability submission:** Multiple users input availability, system computes overlap, UI displays correct results.  
- **Suggested meeting flow:** Algorithm suggests meeting, meeting is confirmed, Google Calendar integration works.  
- **Error handling:** Submitting invalid availability triggers error messages and the system does not crash.

**Our strategy**:

- Conduct integration tests  
- Create user scenarios  
- Perform cross browser testing (Chrome, Firefox, Edge)

### Usability Testing

Verify that the application is intuitive, accessible, and meets user needs

**What we’ll test for:**

- **Availability Input:** Can users select time blocks easily, and does it prevent invalid inputs?  
- **Schedule Visualization:** Can users interpret overlapping times visually? Does color usage (contrast) support accessibility?  
- **Suggested meeting Confirmation:** Users can follow steps to finalize a meeting and export to their Google Calendar.  
- **Mobile responsiveness:** UI works on mobile and tablet layouts

**Our strategy**:

- Have non-group peers/students conduct a usability test  
- Assign tasks, such as input availability, identify overlapping time with another user, and confirm a suggested meeting and export to Google Calendar  
- Have the students record any errors, time taken to complete tasks, and accessibility issues.  
- Collect feedback once the test has concluded.

### Accessibility Testing

Verify our software is WCAG compliant using tools that are often seen as industry standard.

**What tools and methods we’ll use:**

- **Wave Evaluation Tool:** Identify common issues, an automated tool that will catch missing alt text, skipped heading levels, and contrast issues.  
- **Aquia Web Governance:** Simulate visual impairment disabilities to identify readability issues.  
- **Keyboard navigation:** Ensure the site can be navigated without the use of a mouse   
- **Screen reader testing:** Confirm compatibility with popular screen readers.  
- **Visual Test Stress:** Check for screen shaking and/or extra windows opening

### Bug handling

Each failed test leads to a bug report to ensure the issue can properly be resolved and lead to the test passing in the future. Once we find a bug, we will make a GitHub issue detailing the bug, how to reproduce the bug, and its severity (critical, major, minor). Then we will work to fix the bug and perform testing until we can verify the bug has been fixed. 

Before launch, we will ensure all critical bugs are eliminated, and 90% of the major bugs are resolved. We want the crucial components of the application to work first, and then the remaining bugs can be fixed when there’s time, such as in post-launch patches.

### Test Data and Metrics

**Dataset:** Our testing datasets will include edge case test suites that test different user, reservation, group, and notification data. Automated testing will provide a random array of data that can be tested against all of our features. Practical user testing will give us insight into and feedback for UI accessibility and functionality.

**Specific Test Suites:**

- **User:** empty username, duplicate user, user with special characters, different languages  
- **Reservation:** Multiple overlapping ones, end time before start time, different timezones  
- **Group:** Empty group, maximum group size, minimum group size  
- **Notifications:** no email (no account), invalid email

**Metrics:** We will chase branch and path coverage metrics to ensure that our test cases cover each possible edge case, as those will predict as being the most problematic, and additionally cover all portions of our application to ensure proper functionality all around.

# **Team Info**

**Dylan Knapp**  
Role: Main Backend developer  
Responsibility: Most knowledge in code of program and implementation. Works mainly with JavaScript.  
Justification: The main backend developer is responsible for availability comparison logic, time zone handling, and API interactions. Dylan focuses on ensuring the system functions correctly behind the UI through integrating implementations and directing testing methods.

**Sarah Pilon**  
Role: Project Manager   
Responsibility: Ensures project stays on track, and goals are met. Flexible in helping out both front and backend developers depending on what goal needs the most focus. Doesn’t have a specific language they mainly work on. Will handle the testing.  
Justification: This role is necessary to coordinate tasks, manage deadlines, and make sure work is aligned with project goals. She also will help out with both backend and frontend, which is needed to ensure documentation stays consistent and both sides remain on the same wavelength. Sarah is responsible for planning, communicating, and conflict resolution.

**Ella Wilkinson**  
Role: Front-End Engineer, UI Design, QA Engineer  
Responsibility: Most knowledge in finalized UI of program, and leads the team with UI design. Works mainly with HTML and CSS.  
Justification: A main frontend role is required to ensure usability and accessibility. Ella is responsible for UI design, availability input forms, schedule visualization, and WCAG 2.2 compliance.

### Software Toolset

* **Frontend**:  
  Tailwind CSS for responsive and accessible UI design as they are considered industry standards, and are reliable in developing websites.  
* **Backend**:  
  JavaScript with Express.js and Node.js for scheduling logic and API integration as we have the most experience with these platforms, and will work sufficiently with our group plans.  
* **APIs**:  
  Google Calendar API for exporting finalized meetings and setting up the event on the calendar for the user, and WebRTC will be used for P2P networking.  
* **Collaboration & Version Control**:  
  GitHub for source control and issue tracking, Microsoft Teams for meetings and project coordination, Discord and an iMessage group chat for quick communication as we felt that we responded the fastest on Discord and iMessage.  
* **Documentation**:  
  Google Drive for shared planning documents and meeting notes as the group members agreed they had the most experience and felt comfortable using Google Drive.

### Documentation Plan

Throughout our assignment, we will develop a readme for debugging, and develop a FAQ page. Most of the point of our UI is to be intuitive, but because our target audience is so vast, it will be good to have a FAQ page. The FAQ page will also provide screen recording guides for the main functionalities. On the FAQ page we will have a survey for any issues we don't expect for users to input their issues into.

### Communication tools

\-Instant messaging group chat  
\-Discord channel   
\-Microsoft teams with GitHub plugin

*Communication methods:*

* Discord → Quick chats.  
* Teams → Meetings, project related matters.  
  *Collaboration Tools:*  
* Google Drive → Documents.  
* Teams → Meetings, project related matters.  
* Github → Code.

### Communication rules

* Be nice to each other  
* Respect others' boundaries  
* Safe Collaboration Environment: Everyone should feel comfortable contributing without fear of being judged or excluded.

### Team Commitment to Respecting Everyone’s Time

* Give a one-day heads up if you can’t make a meeting  
* Try not to go more than 10 minutes over meeting time  
* Prompt Communication: Respond to group messages within 24hrs.  
*  Everyone must work to get assignments done on time, or agree to take penalty for late work

### Team Commitment to Respecting Everyone’s Individual Differences

*  No Prejudice or Discrimination   
* Do not make people too uncomfortable if they are sending you a cue to stop  
* Decision Making Inclusion: All voices are heard in decision making.

### Team Commitment to Upholding These Ground Rules

* Failure to uphold a rule more than 4 times will result in you getting considered for maybe getting kicked, and talking with the professor  
* Conflicts should be addressed within the team in a respectful and private manner. If the issue persist, involve the professor

### Conflict Resolution Strategy

**Initial Attempt:** Private discussion between concerned members involved in conflict.

**Secondary Attempt:** If the issue cannot be resolved, mediation with the team leader and members involved in the conflict.

**Tertiary Attempt:** If no improvement is shown, or if the issue affects the group's progress, the team leader will facilitate a respectful, structured discussion with the entire team. 

**Final Attempt:** A member who has received three warnings without showing improvement will have their case escalated to the instructor for resolution.

– Any conflict related discussions will be documented to ensure transparency and accountability.

**\*\*\* Our team is committed to creating a safe, respectful, and inclusive environment for all members. Harassment of any kind will not be tolerated.**

### Resources and Links

**GitHub repository**:  
[https://github.com/sarahpilon/-CS-362-Project-Pitch-](https://github.com/sarahpilon/-CS-362-Project-Pitch-)

**Project resources:**  
[https://tailwindcss.com/](https://tailwindcss.com/)  
[https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)  
[https://vite.dev/guide/](https://vite.dev/guide/)  
[https://react.dev/learn/build-a-react-app-from-scratch](https://react.dev/learn/build-a-react-app-from-scratch)  
[https://webrtc.org](https://webrtc.org)  
https://www.mongodb.com/docs/api/  
[https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)  
[https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)  
