# Week 7 Progress Report
## Team Report
1. **This Week's Planned Goals:**  
    1. Draft and start implementing algorithms for backend components, finish in 7 days
    2. Fully implement half of the frontend UI, finish in 7 days
    3. Begin developing tests (total time 6 days)
2. **Team Progress and Issues:**  
This week, our team greatly expanded our codebase and dived deeper into development as we start implementing core features of the application. 
Backend components were developed, key UI interaction was added, and tests were developed and prepared for components as they are written. 
Our solidified and well-defined team roles played a large part in ensuring each portion of development was covered for and worked on throughout 
the week. Our team has continue to learn new tools and APIs, as well as how to navigate bringing cohesion to our project's different elements. 
Work on the backend was slow, but progressive, due to working with alien APIs. The backend components will surely prove to be the most time-
consuming and difficult portion of the development process. To allocate more time for developing the backend, and to have code to test, we completed the CI and test suite logic this week, and will fully dedicate the next week to backend.
3. **Next Week's Planned Goals:**  
    1. Finish implementing half of component algorithms for backend components with proper testing, finish in 7 days
		1. Confirm schedule parsing works (finish in 1 day)
		2. Work on database retrieval (finish in 3 days)
		3. Test edge cases, and guest data logic (finish in 3 days)
    2. Fully implement all of the frontend UI, finish in 7 days
		1. Polish up schedule UI (3 days)
		2. Implement group UI (4 days)
## Team Contributions
### Sarah Pilon
1. **This Week's Planned Goals:**  
     1. Begin Developing tests (total time: 6 days)
         1. Develop plans for manual tests to ensure data is being taken in properly, finish in 2 days.
         2. Develop test suites for reservations (invalid inputs, overlapping times from one user, ect.), finish in 4 days
     2. Be support for developing avaliablity on front and backend when needed (flex) 
2. **Progress and Issues:**  
     1. After researching common testing frameworks, found out Jest worked best with our project and seemed the easiest to implement.
	 2. After using Github actions in class, did more research on it and decided on it for our project.
	 3. Did more research on usability tests, and fleshed out some manual tests in the developer documentation for them.
	 4. Began to develop test suites, and learned how to make new tests, manage different test suites, and organize our tests with Jest.
	 5. Realized we needed one fully fleshed out component to test out on, so focused on completing our schedule logic and developed both a unit and integration test suite.
3. **Next Week's Planned Goals:**  
     1. Add in tests according to team members chosen unit and integration tests
	 2. Work more on the backend, and how to store and recieve MongoDB information from the user
### Ella Wilkinson
1. **This Week's Planned Goals:**  
   1. Fully implement half of the frontend UI, finish in 7 days
2. **Progress and Issues:**  
   1. w
   2. a
   3. s
   4. d
3. **Next Week's Planned Goals:**  
   1. w
   2. a
### Dylan Knapp
1. **This Week's Planned Goals:**  
   1. Draft and start implementing algorithms for backend components, finish in 7 days
2. **Progress and Issues:**  
   1. Code for the network component is almost fully fleshed out, and the algorithms for the schedule component has been 
   started with accompanying functionality on the front-end.
   2. The front-end side of the scheduling component worked out very well using React's "useState" and the conversion of ui 
   elements into components. It is the start of our dynamic and visual-feedback driven scheduling system, and it is working well 
   so far.
   3. When implementing the network component, I learned that although P2P technically requires no server over-head (server-less 
   architecture), a signaling server still needs to be setup. As I work through this new discovery and challenge, the living document 
   will reflect the implementation of this component. I also learned that although the P2P networking component can be considered 
   "backend", it's JavaScript file must live on the React app's directory so it may access the window / browser (at least for testing 
   purposes, since we are testing with npm and thus locally hosting. We will test our application on a public server to examine  
   differences, and note how things may change between the testing phase and launch).
   4. Implementing the network component was difficult due to having to learn yet another API for the signaling server, and having most 
   of the information I came across regarding those API calls be out-of-date. Once I am able to dedicate more time to ensuring everything 
   is up-to-date, I should be able to test the code and ensure it works properly. 
3. **Next Week's Planned Goals:**
   1. Finish implementing half of component algorithms for backend components with proper testing, finish in 7 days

