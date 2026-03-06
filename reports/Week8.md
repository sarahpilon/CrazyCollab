# Week 8 Progress Report
## Team Report
1. **This Week's Planned Goals:**  
    1. Algorithm that suggests meeting times
    2. UI displays ranked suggestions, using algorithm
    3. Handling edge cases in preparation for beta testing
2. **Team Progress and Issues:**  
This week, our team worked towards backend implementations and connecting it to the frontend. We also worked on the network implementation and have it working for more than two users and schedule comparison works completely now as well as the database component. We are worried with our accessibility being up to standard, and the authorization for Google Calendar, but have multiple backup plans.
3. **Next Week's Planned Goals:**  
    1. Google Calendar API integration
    2. Fix bugs identified during beta testing
    3. UI Refinements, testing for accessibility.
    4. Finalize backend and networking logic
## Team Contributions
### Sarah Pilon
1. **This Week's Planned Goals:**  
     1. Add in tests according to team members chosen unit and integration tests
	 2. Work more on the backend, and how to store and recieve MongoDB information from the user
2. **Progress and Issues:**  
     1. Finished making tests, added even more to work on the use case
     2. Set up MongoDB on backend
     3. Discovered bugs relating to the database where two installations of MongoDB was installed
     4. Database function is working completely
3. **Next Week's Planned Goals:**  
     1. Finalize Google Calendar API (3 days)
     2. Work on project poster (1 day)
### Ella Wilkinson
1. **This Week's Planned Goals:**  
   1. Prepare UI pages for Beta testing
   2. Add functionality and prepare for more backend logic implementation
2. **Progress and Issues:**  
   1. Learned screen size breakpoint issue will be time consuming to resolve, resolution of this issue will be lower priority
   2. Polished UI by updating styling to buttons, making them align with calendar grid
   3. Coordinated with Dylan (backend) to implement an extra meeting page
3. **Next Week's Planned Goals:**  
   1. Implement meeting export buttons to allow user to export their selected time to their calendar.
   2. Prepare for Google Calendar API integration by coordinating with Sarah
### Dylan Knapp
1. **This Week's Planned Goals:**  
   1. Finish implementing half of component algorithms for backend components with proper testing, finish in 7 days
2. **Progress and Issues:**  
   1. With help from Sarah, we were able to implement over half of all the backend logic, including schedule parsing and comparison, and the start of database access. In the next few days, we should be able to fully complete all this logic. 
   2. Separating all the components into the backend and having the model connect them separately worked well to ensure enough abstraction for the controller was created without limiting access to functionality.
   3. We learned how to efficiently and cleanly store data on the database, and how and why that would get converted to a different format in the application. 
   4. I am still working on finishing the fetching and posting of account data in order to actually be used in the application, and I’m also trying to finish up the networking,
3. **Next Week's Planned Goals:**
   1. Finish backend logic with help from Sarah (3 days)
   2. Finish networking logic for multiple peers (5 days)
