# WorldFeed
Final project for the distributed systems course

## Proposal
The provisional name of our project is WorldFeed, is a feed type web application that displays news about global issues or international companies, the format will be a main column where the headline of the news with a description and to the left of the news item will show a chart related to the topic of the news, a chart of the stock of a company if it is a company or the chart of the national currency compared to the US dollar if it is about a country, the focus of the news will be on the topic commonly referred to as "Macroeconomics".
The idea is slightly inspired by the finance.yahoo.com page and the Twitter feed.


The purpose of our project is to give the average person a better understanding of the events happening in the world and the impact they cause, showing them a more complete picture of the news. It seeks to generate social awareness of international events and their effect on the economy of various entities such as companies, currencies or other economic indicators.
The project could also be useful to those dedicated to "News trading".


The 2 services will be provided thanks to Alpha Vantage API's for economic information and NewsAPI for news.


1 own service will be provided from a Manjaro Linux server.


Keywords will be stored in a table of tags, in another table will be stored the symbol with which a company is listed on the stock exchange, the symbol of several currencies and a set of tags to identify keywords of the news and in another table will be stored the information of the news, in another table could be stored names of multimedia resources that we could need, these tables will be stored in .txt format files.
For the replication of the storage through a distributed file system we will use NFS for its use in Linux systems since this will be the system that we will use for the server.


For the multiplatform we will have a web application developed in React and an adaptation to Android probably using what we learnt in the subject of Programming mobile devices with kotlin or tentatively it could also be developed with **React native**.


## Requirements
c. Storage Structure. Data must be stored in at least four (4) "tables". Such tables must be implemented in plain files such as txt or xml files and such files must be stored in two different servers by means of a Distributed File System as mentioned in d).

d. Replication of storage. This must done by means of set up and configuration of a Distributed File System such as **NFS**, SMB or CIFS.

e. Multiplatform. Your project must integrate two different client platforms ([mobile](https://github.com/1RV1NG-Y/WorldFeedApp) and web browser). In addition, the servers must be deployed in any Linux distro.

## Screenshots
![Alt text](/img/Screenshot_20221213_185449.png?raw=true "Optional Title")


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## installation

In the terminal, you can run:

### `npm install`
### `npm install react-plotly.js plotly.js`
### `npm install -S react-router-dom`                                                                                                                       


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
