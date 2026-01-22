# Tab 1

#### **Crazy Collab** 

#### **1\. Team info**

**Dylan Knapp**  
Role: Main Backend developer

**Sarah Pilon**  
Role: Project lead

**Ella Wilkinson**  
Role: Main Frontend developer

**Communication tools:**  
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

**Communication rules**:

* Be nice to each other  
* Respect others' boundaries  
* Safe Collaboration Environment: Everyone should feel comfortable contributing without fear of being judged or excluded.

Team Commitment to Respecting Everyone’s Time

* Give a one-day heads up if you can’t make a meeting  
* Try not to go more than 10 minutes over meeting time  
* Prompt Communication: Respond to group messages within 24hrs.  
*  Everyone must work to get assignments done on time, or agree to take penalty for late work

Team Commitment to Respecting Everyone’s Individual Differences

*  No Prejudice or Discrimination   
* Do not make people too uncomfortable if they are sending you a cue to stop  
* Decision Making Inclusion: All voices are heard in decision making.

Team Commitment to Upholding These Ground Rules

* Failure to uphold a rule more than 4 times will result in you getting considered for maybe getting kicked, and talking with the professor  
* Conflicts should be addressed within the team in a respectful and private manner. If the issue persist, involve the professor

## **Conflict Resolution Strategy**

**Initial Attempt:** Private discussion between concerned members involved in conflict.

**Secondary Attempt:** If the issue cannot be resolved, mediation with the team leader and members involved in the conflict.

**Tertiary Attempt:** If no improvement is shown, or if the issue affects the group's progress, the team leader will facilitate a respectful, structured discussion with the entire team. 

**Final Attempt:** A member who has received three warnings without showing improvement will have their case escalated to the instructor for resolution.

– Any conflict related discussions will be documented to ensure transparency and accountability.

**\*\*\* Our team is committed to creating a safe, respectful, and inclusive environment for all members. Harassment of any kind will not be tolerated.**

**GitHub repository**:  
[https://github.com/sarahpilon/-CS-362-Project-Pitch-](https://github.com/sarahpilon/-CS-362-Project-Pitch-)

**Project resources:**  
[https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)  
[https://tailwindcss.com/](https://tailwindcss.com/)  
[https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)  
[https://developers.google.com/workspace/calendar/api/guides/overview](https://developers.google.com/workspace/calendar/api/guides/overview)  
[https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

**Abstract:**

Our product is a web application that helps groups plan meetings based on overlapping availability in schedules. Individuals in a group, either remotely or locally, can input their available dates and times, adapting across timezones, and cross reference availability with other group members. From there, a group meeting/event can be scheduled and sent to google calendar for easier tracking and planning.

**Goal:**

The goal of this product is to make scheduling for teams easier and more transparent. Visualizing the scheduling process will allow teams to seamlessly find open times to meet.

**Current Practice**:

Students may approach setting a meeting time by comparing their varying school and work schedules, either verbally or via text messaging. This practice can make it difficult to visualize an open meeting time, as team members are stuck trying to decipher times from rough text. 

Our product is not the first of its kind, with similar sites such as When2meet providing similar features that we promise. However, although When2meet is also conveniently a web application, it is very outdated and features an unfriendly UI. Our implementation will be very user friendly with its visual nature and ability to connect to google calendar for external scheduling.

**Novelty:**

Our approach saves the users schedule, which means they won’t have to retype their schedule when dealing with doing different group projects. Our approach also allows users to follow an intuitive UI, as current approaches either have a hard to visualize UI or relies on memorizing multiple student’s/friends/coworkers schedules. 

**Effects:**

If our product works as intended, we believe many individuals can benefit from its ease of use and genuine helpfulness for planning group meetings. Students, co-workers, friends, and family can all utilize our product to plan their collective schedules.

**Technical Approach:** 

We plan to implement our product as a web application, making it easily accessible to anyone with an internet connection. Within our application, we will integrate an understandable and easy to navigate UI to allow a seamless experience for users on any device using frameworks such as Bootstrap and Tailwind.

**Risks:**

The time constraint we must work within is the greatest risk factor we face in the development of this project. With only 10 weeks to build our software, all the while interacting with new APIs and frameworks, we will have to ensure we adequately and efficiently block out our development timeline to help keep us on track and allow room for error and setbacks.

**Features:**

* Easy to Navigate UI  
* WCAG 2.2 compliant accessibility standards  
* Able to adapt to diff time zones   
* Suggested Meeting times   
* Connect with google calendar to set up meeting times automatically

**Stretch Goals:**

* User Login System (mongodb)  
* Database to hold user data and available times (mongodb)

# Project Milestone-2

To do:  
**External Requirements**  
**Team process description**

- Timeline  
- External Feedback

**Use Cases:**

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
     
   

**Non-functional Requirements**  
Usability

* The program must have a visually clear interface that allows users to input availability and view overlapping schedules without confusion. Users should be able to complete the scheduling process with minimal instructions.


Performance/Scalability

* The program must handle multiple users submitting and updating availability data within the same group without noticeable delays.

Reliability

* The program must behave predictably even when users make mistakes, such as entering invalid times. Errors should not cause the program to crash and should display messages to the user to provide feedback.

**External Requirements**

* The product must handle errors that can reasonably be expected to occur, such as invalid user input when creating a profile, setting schedule, creating a meeting time, etc.  
* The product must be accessible via a public URL hosted by a server that users can use to access it.   
* The product must have instructions for setting up a new server. Your system should be well documented to enable new developers to make enhancements.  
* The scope of this product is limited such that a MVP can reasonably be completed by the team of three developers in a 10 week period.

**Team process description**

Describe your quarter-long development process.

* Specify and justify the software toolset you will use.  
* Define and justify each team member’s role: why does your team need this role filled, and why is a specific team member suited for this role?  
* Provide a schedule for each member (or sub-group) with a measurable, concrete milestone for each week. "Feature 90% done" is not measurable, but "use case 1 works, without any error handling" is.  
* Specify and explain at least three major risks that could prevent you from completing your project.  
* Describe at what point in your process external feedback (i.e., feedback from outside your project team, including the project manager) will be most useful and how you will get that feedback.

**Software Toolset**

* **Frontend**:

Bootstrap 5.3 and Tailwind CSS for responsive and accessible UI design as they are considered industry standards, and are reliable in developing websites.

* **Backend**:

JavaScript with React/[Node.js](http://Node.js) for scheduling logic and API integration as we have the most experience with these platforms, and will work sufficiently with our group plans.

* **APIs**:  
  Google Calendar API for exporting finalized meetings and setting up the event on the calendar for the user.  
* **Collaboration & Version Control**:  
  GitHub for source control and issue tracking, Microsoft Teams for meetings and project coordination, Discord and an iMessage group chat for quick communication as we felt that we responded the fastest on Discord and iMessage.  
* **Documentation**:  
  Google Drive for shared planning documents and meeting notes as the group members agreed they had the most experience and felt comfortable using Google Drive.

**Team Roles and Justification**

**Sarah Pilon: Project Lead**

This role is necessary to coordinate tasks, manage deadlines, and make sure work is aligned with project goals. She also will help out with both backend and frontend, which is needed to ensure documentation stays consistent and both sides remain on the same wavelength. Sarah is responsible for planning, communicating, and conflict resolution.

**Dylan Knapp: Main Backend Developer**

The main backend developer is responsible for availability comparison logic, time zone handling, and API interactions. Dylan focuses on ensuring the system functions correctly behind the UI.

**Ella Wilkinson: Main Frontend Developer**

A main frontend role is required to ensure usability and accessibility. Ella is responsible for UI design, availability input forms, schedule visualization, and WCAG 2.2 compliance.

**Weekly Schedule by Team Member**

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

**Week 4: Requirements & Design**

Sarah (Project Lead)

* Finalize use cases and requirements document

Dylan (Backend)

* Define skeleton code for user availability and group overlap  
* Define time zone strategy

Ella (Frontend)

* Create UI wireframes for availability input and schedule view  
  * Milestone: All use cases documented, skeleton code and UI wireframes approved by team

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

**Week 6: Availability Input Feature**  
Sarah (Project Lead)

* Coordinate integration between frontend and backend

Dylan (Backend)

* Backend stores a single user’s availability in memory

Ella (Frontend)

* Availability input form implemented  
* Frontend validation prevents invalid time/date submissions  
  * Milestone: Single user can submit valid availability with no invalid submissions allowed

**Week 7: Schedule Comparison and Visualization**  
Sarah (Project Lead)

* Progress review

Dylan (Backend)

* Backend works with overlapping availability for multiple users

Ella (Frontend)

* UI displays overlapping availability visually  
  * Milestone: Two ore more users’ overlapping availability displays correctly across time zones

**Week 8: Suggested Meeting Times**  
Sarah (Project Lead)

* Validate feature completeness with use cases

Dylan (Backend)

* Backend generates suggested meeting time slots

Ella (Frontend)

* Suggested meeting times displayed in UI  
  * Milestone: Suggested meeting times appear correctly when overlap exists

**Week 9: Google Calendar Integration and Testing**  
Sarah (Project Lead)

* Organize testing and feedback

Dylan (Backend)

* Google Calendar API creates and event successfully

Ella (Frontend)

* Accessibility review and UI refinements  
  * Milestone: meeting exports successfully to Google Calendar

**Week 10: Final Testing and Presentation**  
All Members

* Bug fixes completed  
* Documentation finalized  
* Final presentation delivered  
  * Milestone: All core use cases work in live demo without crashing

**Possible risks:**

The time constraint we have of ten weeks is one of the biggest risk factors we have. With our plan, ten weeks means we need to be very efficient in the way we block out our development timeline to allow room for error and unexpected setbacks. Another risk could be implementing a login system with saved user schedules. We have only done mock user systems, and yet to have attempted one with real users. The last issue would relate to our schedules in general. All of us have at least one job, with the majority having two. This could lead to a lot of conflicting schedules, and less time to do the project in general. However, despite this our group does have good communication, matching classes, and live close by each other leading us to believe this shouldn’t be as big of a risk compared to the other ones.

**External Feedback Strategy**  
External feedback will be valuable at several points during the development process, particularly when major design and functionality decisions are being made or validated

**Early Feedback (Week 3: Project Pitch)**  
Feedback from instructor/classmates after the project pitch will help validate the project’s scope, feasibility, and overall direction. This feedback will be used to refine requirements, clarify expectations, and adjust planned features before development begins

**Midpoint Feedback (Weeks 6-7)**  
Once availability input and schedule visualization are functional, external feedback will be useful in identifying usability issues, confusing UI elements, or missing functionality. This feedback can be gathered through informal demos to classmates and short usability tests with students outside of our team.

**Late Stage Feedback (Week 9\)**  
Before final submission, external feedback will be used to identify bugs, accessibility issues, and edge cases. Instructor feedback and peer testing will help ensure the application behaves as expected and is easy to use.

# Timeline

**10 Week Development Timeline**

**Week 1: Team Formation**

* Team members assigned  
* Communication tools selected  
* Initial collaboration rules established

**Week 2: Project Brainstorming**

* Project idea finalized  
* Target users and core features identified

**Week 3: Project Pitch**

* Project proposal presentation  
* Use cases, non-functional requirements and external requirements established  
* Instructor feedback collected after presentation

**Week 4: Requirements and Design**

* Finalize all use cases  
* Create UI design draft  
* Begin shaping skeleton code

**Week 5: Frontend and Backend setup**

* GitHub repository structured  
* Frontend base created (Tailwind)  
* Backend environment initialized  
* Time zone handling approach defined

**Week 6: Availability Input Feature**

* Users can input availability manually  
* Availability data stored (use mongo)  
* Frontend form validation implemented

**Week 7: Schedule Comparison and Visualization**

* Overlapping availability logic implemented  
* Time zone conversion verified across users  
* Visual display of shared availability

**Week 8: Suggested Meeting Times**

* Algorithm that suggests meeting times  
* UI displays ranked suggestions (use algorithm)  
* Handling edge cases

**Week 9: Google Calendar Integration and Testing**

* Google Calendar API integration  
* Meetings export correctly  
* Accessibility testing (WCAG 2.2 level)  
* Any bug fixes/UI refinements

**Week 10: Final Testing and Presentation**

* Full system testing  
* Final documentation completed  
* Final presentation prepared and delivered
