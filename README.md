# How to Build a React Application with Load More Functionality using React Hooks

> https://www.freecodecamp.org/news/build-a-react-application-with-load-more-functionality-react-hooks/
> npm i && npm run start

In this article, we will build a React application using class components. Then we'll convert it to functional components using React Hooks in a step-by-step way.

By building this app, you will learn:

- How to make API calls
- How to implement load more functionality
- How to debug application issues
- How to use async/await
- How to update the component when something changes
- How to fix the infinite loop issue in the useEffect hook
- How to refactor class-based components into functional components with Hooks

and much more.

So let’s get started.

## Initial Project Setup

Create a new project using ```create-react-app```:

```
npx create-react-app class-to-hooks-refactoring
```

Once the project is created, delete all files from the ```src``` folder and create the ```index.js``` file and the ```styles.css``` file inside the ```src``` folder. Also, create a ```components``` folders inside the ```src``` folder.

Install the ```axios``` library by executing the following command from the project folder:

```
npm install axios@0.21.1
```

Open the ```styles.css``` file and add the contents from [this GitHub repo](https://github.com/feanlau/class-to-hooks-refactoring) to it.

## How to Create the Initial Pages

Create a new file called ```Header.js``` inside the ```components``` folder with the following content:

```
import React from "react";

const Header = () => {
  return <h1 className="header">Random Users</h1>;
};

export default Header;
```

Create a new file called ```App.js``` inside the ```src``` folder with the following content:

```
import React from 'react';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-section">
        <Header />
        <h2>App Component</h2>
      </div>
    );
  }
}
```








