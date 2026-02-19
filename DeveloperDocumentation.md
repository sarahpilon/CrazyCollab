# How to Obtain the Source Code

Our website is hosted in a Git repository. To get the source code, connect your github with our repository. By doing the following:

	git clone [https://github.com/sarahpilon/CrazyCollab.git](https://github.com/sarahpilon/CrazyCollab.git)

	Cd ./CrazyCollab/frontend

**If you are planning on adding features, please fork the repository, and clone that fork\!**

# Layout of the Project

- **CrazyCollab/** - project folder
  - **backend/** - holds backend logic
    - `Controller.mjs` - Route handles
    - `Model.mjs` - Database logic
  - **frontend/** - holds frontend logic
    - **public/** - main public pages
      - `home.html` - main homepage
    - **src/**
      - `src.txt` - Placeholder for backend logic
    - **style/** - stylesheets
      - `Global.css` - main stylesheet for every page
      - `Home.css` - home specific stylesheet
      - `Login.css` - login specific stylesheet
    - `Index.html` - login homepage
  - **reports/** - weekly reports
    - `Week3.md`
    - `Week4.md`
    - `Week5.md`
    - `Week6.md`
    - `Week7.md`
    - `template.md` - template for weekly report
  - **tests/** - Test files
    - **unit-tests/** - unit tests
    - **Integration tests/** - System integration tests
  - `.gitignore` - Temp files git shouldn’t track
  - `README.md` - Project overview
  - `index.js` - Namespace
  - `Package-lock.json` - Dependency versions
  - `Package.json` - Project dependencies

# How to Build The Software

After installing the source code run the following commands, assuming you are already in the CrazyCollab folder:

Cd ./frontend

Npm install

Npm run dev

# How to Test the Software

## Unit and System / Integration Testing

For both the unit and system / integration tests we will use Jest. Here are the commands for running the tests:

**Unit Tests**

Npm run test:unitTest

**Integration Tests**

Npm run test:integrationTest

**All Tests**

Npm test

## Usability Testing

For our usability testing, we used feedback from user tests to identify pain points and improve the user experience. We followed the use cases found in the README.

## Accessibility Testing

We use a mix of automatic and manual tests for accessibility testing. 

**Automated Testing**  
	We run a browser extension called WAVE that provides real time feedback on accessibility issues. To use it, download the [chrome extension](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?pli=1) and press Control \+ Shift \+ U to activate a report.  
**Manual Testing**  
	For manual testing, Aquia is used to simulate visual impairment to identify readability issues.

# How to Add New Tests

To add a new test, navigate to the tests folder. Then proceed to the correct unit or integration test depending on the type you are planning to add. From there follow the steps below:

1. Name your test file accordingly to the type of test  
   1. Unit tests: *description*.test.js  
   2. Integration tests: *description*.int.test.js  
2. Write the test following the Jest syntax, it is advised to look at existing tests for examples.

## 

# How to Build a Release

To create a new release of our program, please make sure to do the following steps first:

1. Create a new branch for your work  
   - This ensures no issues while other developers may also be working on the program.  
2. Create your changes and provide tests to ensure the code functions correctly  
3. For a sanity check, do npm test to ensure your code runs with the current tests, and the ones you added.  
4. Ensure you follow the coding guidelines in the README

After developing your changes, please do the following:

1. Confirm all previous tests pass, as well as the new ones created in your branch  
2. Commit the changes onto github with a push message that properly describes the changes, and a description with a more detailed explanation and information on how to test the functionality.
