# Saucedemo Login Test Automation
Automated end-to-end testing suite for Saucedemo login functionality using WebDriverIO

## Test Cases
1. UC-1: Empty Credentials
- Leave username and password empty
- Click "Login" button
- Expected: Error message "Epic sadface: Username is required"
2. UC-2: Missing Password
- Enter valid username: *standard_user*
- Leave password field empty
- Click "Login" button
- Expected: Error message "Epic sadface: Password is required"
3. UC-3: Valid Credentials
- Enter valid username: *standard_user*
- Enter valid password: *secret_sauce*
- Click "Login" button
- Expected: Redirect to */inventory.html* and header displays *"Swag Labs"*

## Technology Stack
- Framework: WebDriverIO 9.20.0
- Test Runner: Mocha
- Browser: Chrome (Firefox available with setup)
- Locators: XPath
- Pattern: Page Object Model
- Features: Parallel execution, Data-driven testing, Logging

## Project Structure
├── config/\
│  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── wdio.conf.js          # WebDriverIO configuration\
├── tests/\
│  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── login.spec.js         # Test specifications\
├── pageobjects/\
│  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── login.page.js         # Page Object Model\
└── data/\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── credentials.js        # Test data provider

## Prerequisites
- Node.js v18 or higher
- npm (comes with Node.js)
- Google Chrome browser

## Running Tests
`bash`\
`# Run all tests`\
`npm run wdio  # This runs the script: wdio run ./src/config/wdio.conf.js`\

Expected output:
- ✓ UC-1 Empty credentials
- ✓ UC-2 Empty password
- ✓ UC-3 Valid credentials

## Browser configuration
- Chrome
Status: Fully configured and working.
Chrome is the primary browser for this project. WebDriverIO v9 automatically manages chromedriver.

- Firefox
Status: Available but requires manual setup:
Firefox capability is included in wdio.conf.js but commented out due to environment-specific geckodriver installation issues on Windows.

To enable Firefox (if needed):
1. Install Firefox browser
2. Uncomment Firefox capability in src/config/wdio.conf.js
3. WebDriverIO will attempt to auto-download geckodriver

Known Issues:
- Geckodriver auto-download may fail on some Windows environments
- Error: `malloc is not a function` when downloading geckodriver

Note: All test cases work identically on both browsers. Using Chrome only does not limit test coverage.

## Adding New Test Cases
Add entries to src/data/credentials.js\
Example:\
`{`\
`   name: 'UC-4 Your test name',`\
`   username: 'test_user',`\
`   password: 'test_pass',`\
`   clearUsername: false,`\
`   clearPassword: false,`\
`   expectedError: 'Error message'  // or '' for success`\
`}`

## License
Educational project for demonstration purposes.

## Last updated: November 16, 2025
