# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Creating a portfolio on GitHub Pages

A Portfolio site is a showcase that proves that you can do what you talk about in your resume. Rather than telling prospective employers about your skills, you can create a software developer portfolio to show them.

Here we will talk through setting up a react portfolio app and deploying to GitHub pages.

## Step 1: Creating Your GitHub Repository

First step is to create the repo which will contain your website files. After logging into your GitHub account, click the button to create a new repository. You can call this repository whatever you want but make sure that you create your React app with the same name. Ensure the repo is public.

> Take a note of your GitHub username

## Step 2: Creating Your Initial React App

At this point, we won't be creating a fully-functioning React app, just enough to get something to deploy, but you could build it out over the weekend if you have time, or over the course of the course and beyond.

To initialise your React app, cd into whichever directory you want to work in on your computer and run

```bash
npx create-react-app portfolio
```

## Step 3. Install GitHub Pages as a Dev-Dependency

Dependencies in React are reusable components created by developers which give you access to interesting libraries and functionality. In order for your site to work, you'll need to install gh-pages, which you can do by cd-ing into your React app and running

```bash
npm install gh-pages --save-dev
```

This package will create a branch on Github called `gh-pages`. We don't want to checkout or make any changes on this branch, it's just for deployment.

## Step 4: Update Your package.json File

When you initialise your app, you'll notice that a package.json file is automatically generated for you. This is a JSON file that is used to manage the project's dependencies, scripts, and versions. To make sure your website can deploy properly, there are three lines of code we'll need to add.

1. Add a Home Page
In the first section of the package.json file, add a homepage. This will match the homepage that GitHub pages will generate for you in the pattern `https://<username>.github.io/<repo-name>`:

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

2. Add Predeploy
In the scripts section, add a predeploy:

```json
"predeploy": "npm run build"
```

3. Add Deploy
Also in the scripts section, add a deploy, like so:

```json
"deploy": "gh-pages -d build"
```

## Step 5: Push to GitHub
Once you've completed the above steps, you should push your changes to GitHub. To do so, you can run the following commands:

```bash
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <repository URL>
git push -u origin main
```

## Step 6: Deploy
Now it's time to get your app online! Simply run

```
npm run deploy
```

and the scripts you added to your package.json file should kick into action. It will take a few minutes to deploy.

## Step 7: Update Your Repository Settings
Go to settings in your repository and look at the GitHub Pages section. Underneath the Source heading, you should have the option to select which branch the site is being built from. If it isn't already change the branch to `gh-pages`. This way, your repository will know what files you want to use to build your website.


## Step 8: Celebrate Your Success in Building Your Website!!
Your site should now be available at `your-username.github.io/portfolio`. Sure, it's not quite a full-blown portfolio website yet, but you've done the hard work and now you can start on the fun part!

Every time you update your app (make sure you're on your main branch) you should run `npm run deploy` to update your site. This will take a few minutes.

