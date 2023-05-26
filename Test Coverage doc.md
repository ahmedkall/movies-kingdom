# Test Coverage/ React app

### **What’s** **Code coverage?**

- It’s  metric that help you understand how much of your software code is tested

→ **statement coverage :** how many statements in the softare code have beene executed

→**branches coverage :** how many branches of the control structures have been executed

→ **function coverage:** how many of the functions defined have been called

→ **Line coverage:** how many lines of source code have been tested.

Visual example of some manual test coverage

![Untitled.png](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/Untitled.png)

### Questions you might ask?

*What’s test coverage tool?* 

→ usually you can make the test coverage just by adding one line to package.json exactly in the scripts section and then type on the cmd npm coverage

like this: 

![Untitled2.png](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/Untitled2.png)

BUT ⇒ manual methods are more time-consuming, prone to human error, and may not provide as comprehensive coverage analysis as automated tools.

**Manual methods** are more **time-consuming**, prone to human **error**, and may not provide as comprehensive coverage analysis as automated tools.

What’s the test coverage tool  I used? 

This is from where comes our the test coverage tool that I will use: ISTANBUL

*Why do we even need this thing?* 

Because it’s genius (ofc kidding) it just helps point out the edge cases that you’re not accounting for, it shows line numbers for are of our code that we didn’t have tests written for (check in the first screenshot upstairs) 🔝

### **The Goal:**

You don’t need to fix a goal of 100% of test coverage, generally 80% is good enough, Oki doki?

### 🚨 Things that you should not assume!

Test coverage won’t tell you if it works with all the code in your application.

Won’t tell if your app can get in a bad state. 

Won’t tell you if it meets the business requirements.

### Steps I used to do the Test coverage:

1) Install Istanbul: `npm install --save-dev nyc`

This will install the nyc package, which is the command-line interface for Istanbul, as a development dependency for the project.

2) Add just one line of code to package.json

```python
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
CHANGED => "test": "react-scripts test --coverage --watchAll",
    "eject": "react-scripts eject"
  },
```

3) Run this command:

`npm test`

4) **MAGIC! NOW WE HAVE A REPORT:**

Getting the report: 

- After running the command, Istanbul will generate the code coverage report in both HTML and text formats.
- Look for the generated coverage report files in your project's directory. Typically, the coverage report will be saved in a directory named **`coverage`**.
- Open the HTML coverage report file (usually named **`index.html`**) in your web browser. This report provides a detailed overview of the code coverage, including which parts of the code were covered by the tests and which parts were not.
- Additionally, the text coverage report will be displayed in the terminal. This report shows a summary of the code coverage percentage and provides a breakdown of coverage for each file and line of code.

⇒ The Path to the report: 

![Untitled3.png](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/Untitled3.png)

⇒ How it looks like:

![Untitled4.png](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/Untitled4.png)

![Untitled5.png](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/Untitled5.png)

![testcoverage2.JPG.jpg](Test%20Coverage%20React%20app%20901077f3d9aa432bb0930a2d3d51926b/testcoverage2.JPG.jpg)