# Theory Of React.JS

## Part 1 - Basic Knowledge:

1. What is React.js?

    React.js is a javascript library designed to allow users to create dynamic user interfaces.

2. What are the key features of React.js?

    The main key features of React are the Virtual DOM, JSX, components, React hooks and state management.

3. What is JSX?

    JavaScript XML is a syntax extension to JS that allows users to return html elements in Javascript directly.

4. What is a virtual DOM?

    The virtual DOM is a copy of the DOM (Document object model) that react can traverse and make comparisons in quickly to allow for speedy updates in the DOM.

5. What is the difference between props and state?

    State is an internal variable of a component and can be changed via hooks and props are variables passed down from parent components and should not be changed.

6. What is the role of Redux in a React.js application?

    Redux is used for complex state management in a React.js application.

7. What is the purpose of React Router?

    React router allows for seamless navigation between different components without refreshing the page.

## Part 2 - Code Implementation:

8. Create a simple React component that displays "Hello World!" as text.
```js
export default function HelloWorld() {
    return (
        <p>Hello World!</p>;
    );
}
```

9. Create a form component with input fields for name and email.
```js
import { useState } from "react";

export default function Form() {
	const [info, setInfo] = useState({
		name: "",
		email: ""
	});

    const submitHandler = (event) => {
            event.preventDefault();
            // handle submit with code
    }

	return (
    	<form onSubmit={submitHandler}>
        	<label htmlFor="name">Name</label>
        	<input type="text" id="name" name="name" value={info.name}  onChange={(ev) => setName(currInfo => {...currInfo, name: ev.target.value})} required></input>

            <label htmlFor="email">Email</label>
        	<input type="email" id="email" name="email" value={info.email}  onChange={(ev) => setName(currInfo => {...currInfo, email: ev.target.value})} required></input>

        	<button type="submit">Submit</button>
    	</form>
	);
}
```

10. Implement a React component that displays a list of items.
```js
export default function List() {
	const someItems = [{id: 1, val: 1}, {id: 2, val: 3}, {id: 4, val: 4}];

	return (
    	<ul>
        	{someItems.map(item => <li key={item.id}>{item.val}</li>)}
    	</ul>
	);
}
```

11. Use React Router to create a multi-page application with a navigation menu.
```js
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
	<BrowserRouter>
		<div className="App">
		<nav>
			<Link to="/">Home</Link>
			<Link to="/page1">Page1</Link>
			<Link to="/page2">Page2</Link>
		</nav>
		<Routes>
			<Route path="/" element={<h1>Home</h1>}></Route>
			<Route path="/page1" element={<h1>Page1</h1>}></Route>
			<Route path="/page2" element={<h1>Page2</h1>}></Route>
			<Route path="/*" element={<h1>404: Page Not Found</h1>}></Route>
		</Routes>
		</div>
	</BrowserRouter>
  );
}
```

## Part 3 - Advanced Concepts:

12. Explain the concept of React hooks.

Hooks are functions which let you access state and other React features within a componenet.

13. What are higher-order components in React and how are they useful?

	A higher-order component is a function that takes in an exisiting component as an arguement and returns a new one. This is useful for re-using component logic.

14. Explain the difference between server-side rendering and client-side rendering in React.
	
	Server-side rendering is when the HTML for the page is generated on the server and the complete page is sent to the client, whereas client-side rendering this process is done on the clients machine with JavaScript in the browser. SSR improves initial load times and Search Engine Optimisation but lacks the speedy interactiveness of CSR.

15. How would you optimize the performance of a React application?

	Firstly by making sure component state is as local as possible, secondly by identifying components that are viable for memoization and lastly by making sure files are optimally stored and loaded e.g lazy loading.

16. What is the role of context in React?

	The role of context in React is mainly to avoid prop-drilling by giving components access to a state from anywhere in the component tree.

## Part 4 - Real-world Application:

17. Describe a React.js project you have worked on and your contribution to it.

	I single-handedly created a full stack web application that displays articles which are divided into topics. Each article has user curated ratings and can be up or down voted. Users can also add comments about an article. The frontend was built using React.js and the backend uses Express.js. The code can be found here https://github.com/HarCass/nc-news-site

18. How did you ensure the project was maintainable and scalable?
	I adhered to industry best practices and created modular and reusable code on both the backend and frontend and made sure there was a seperation of concern between the two. I also had a fully tested backend with CI/CD setup and used git for version control on both ends.

19. What challenges did you face while working on the project, and how did you overcome them?
	The main challenge I faced was with styling the frontend as I opted to use raw CSS in that endeavour and as I am not a great artist I found it quite difficult to find the right style and colours for the site. I eventually settled on a scheme and implemented some interactive features and made the UI as responsive as possible.