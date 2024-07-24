# Cohire Coding Challenge (Frontend)

## Last Updated

18-06-2024

### Introduction

Welcome! This coding challenge is designed to explore your React & SCSS frontend skills. You will have to create a simple SPA based off the provided mockup and make a few API calls to a public web API.

### The challenge

You have to complete the test and write any necessary code so that the search page looks like this [mockup]. All the images/icons you need are already imported into this repository.

The discover page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon.

As you may have noticed, there are a few TypeScript errors that need to be fixed. Also, there are some UI bugs that you should spot and fix. If time permits, you would want to add responsive stylesheets for the app to run smoothly on mobile devices.

Movie data can be queried via:

- [theMovieDB]

Packages & Technologies used in the repo:

- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`
- `typescript`

### Setup guide

1. Clone this repo
2. `npm i --legacy-peer-deps` to install dependencies. Node v16^ preferable

### Submission guide

Please create a git repository of your solution and send the link to your contact person once you are done.

### How we review

- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account? Weight: 25%
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, especially ES6? Weight: 15%
- **Performance**: Does the UI render quickly? Are the choice of libraries etc appropriate for the web page? Weight: 10%

### Bonus points

- **Documentation** - Is the README well written? Are the commit messages clear?
- **Automated Tests** - Are there any automated frontend tests?
- **Reporting** - React Profiler report with demonstrated knowledge of reading / reporting performance data
- **Production-readiness** - Is there proper error handling? Is the code ready to put into production? Code-Splitting?
- **Future-readiness** - React Hooks? Web workers? PWA? Client-side caching?

[mockup]: https://cord-coding-challenges.s3-eu-west-1.amazonaws.com/frontend-test-mockups.zip
[theMovieDB]: https://www.themoviedb.org/documentation/api

# Steps taken

1. `npm i --legacy-peer-deps`
2. Updated script in package.json: `"start-js": "react-scripts --openssl-legacy-provider start",`. The flag tells Node.js to use the legacy OpenSSL provider. (Ideally we would update all dependencies, but not for this takehome test instance)
3. Swapping `box-sizing: content-box` to `box-sizing: border-box`. I'm a bit more used to this approach as it is standard for tailwindcss. Components width will not be altered if padding is changed
4. Main App.tsx has props passed in. Based off this I will add some app wide props in the index.tsx to pass on. Personally this would not be my approach however I am trying to go off what is presented
5. Updating display: flex or hidden to transform instead, this will allow for a side effect of the sidebar, especially when activating it via mobile
6. Adding Toggle button to App.tsx, also conditionally changing the x-axis depending on if its open/closed (active or not). Also changing icon from menu icon to close icon.
7. Adding useEffect to ensure the activeSidebar is set to false if the user widens screen past the mobile threshold. This way when user shrinks screen, the sidebar is not still open.
8. Starting to build out fetcher.ts, adding movie API here as its not that sensitive
