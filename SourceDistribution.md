# How to Build
Open up a terminal on your computer (Windows Powershell or just command prompt). 

From there, clone the crazy collab repository to your machine . To do this, select code, and copy the http clone link. Then go back to the terminal, and ensure you are in a good directory you would want the file to be at (EX: Downloads). From there, type 

git clone [copied and pasted http link.

Now assuming VS Code is installed, open up the new folder on your Visual Studio Code. At the top of the screen, go to the 3 dots and click new terminal. From there do the following steps:

Run "npm install" to ensure all packages are downloaded.

Next, type cd backend. Once you enter this there, run "npm install" again. Run "npm start".

In the terminal you should see a plus sign with an “open a new terminal” button. Without closing the one you just ran npm start on, open up a new terminal. From the new terminal, type cd frontend. Run "npm install" again. Run "npm run dev".

Locate the locally hosted react page, on port 5173.

---

# How to Build a Release
To create a new release of our program, please make sure to do the following steps first:
Create a new branch for your work
This ensures no issues while other developers may also be working on the program.
Create your changes and provide tests to ensure the code functions correctly
For a sanity check, do npm test to ensure your code runs with the current tests, and the ones you added.
Ensure you follow the coding guidelines in the README

After developing your changes, please do the following:
Confirm all previous tests pass, as well as the new ones created in your branch
Commit the changes onto github with a push message that properly describes the changes, and a description with a more detailed explanation and information on how to test the functionality.

---

# How to Test the Software
Unit and System / Integration Testing
For both the unit and system / integration tests we will use Jest. Here are the commands for running the tests:
Unit Tests

npm run unitTests

Integration Tests

npm run integrationTests
	
All Tests

npm test

---

# Usability Testing
For our usability testing, we used feedback from user tests to identify pain points and improve the user experience. We followed the use cases found in the README.

---

### Accessibility Testing
We use a mix of automatic and manual tests for accessibility testing. 
## Automated Testing
	We run a browser extension called WAVE that provides real time feedback on accessibility issues. To use it, download the chrome extension and press Control + Shift + U to activate a report.
## Manual Testing
	For manual testing, Aquia is used to simulate visual impairment to identify readability issues.
## How to Add New Tests
To add a new test, navigate to the tests folder. Then proceed to the correct unit or integration folder depending on the type you are planning to add. From there follow the steps below:
It is important your file is named correctly! Jest finds the file automatically as long as it's named correctly! Name your test file as follows:
function name.test.js
Write the test following the Jest syntax, it is advised to look at existing tests for examples. A simple example for an async function would be this:

// Get the function (in this case parseSchedule) from the correct backend folder
const { parseSchedule } = require("../../backend/schedule_component.mjs");
// function for test, where example is the name of the test
test('example', async () => {
// return what you would expect from parseSchedule
    return expect(parseSchedule()).resolves.toBe(4)
})



