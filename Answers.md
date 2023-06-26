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

    State is an internal variable of a component and props are variables passed down from higher level components.

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
	const { name, setName } = useState("");
	const { email, setEmail } = useState("");

    const submitHandler = (event) => {
            event.preventDefault();
            // handle submit with code
    }

	return (
    	<form onSubmit={submitHandler}>
        	<label htmlFor="name">Name</label>
        	<input type="text" id="name" name="name" value={name}  onChange={(ev) => setName(ev.target.value)} required></input>

            <label htmlFor="email">Email</label>
        	<input type="email" id="email" name="email" value={email}  onChange={(ev) => setEmail(ev.target.value)} required></input>

        	<button>Submit</button>
    	</form>
	);
}
```

10. Implement a React component that displays a list of items.
```js
export default function List() {
	const someItems = [{id: 1, val: 1}, {id: 2, val: 3}, {id: 4, val: 4},];

	return (
    	<ul>
        	{someArr.map(item => <li key={item.id}>{item.val}</li>)}
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
			<Route path="/page1" element={<h1>Page1</h1>Page1}></Route>
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

13. What are higher-order components in React and how are they useful?

14. Explain the difference between server-side rendering and client-side rendering in React.

15. How would you optimize the performance of a React application?

16. What is the role of context in React?

## Part 4 - Real-world Application:

17. Describe a React.js project you have worked on and your contribution to it.

18. How did you ensure the project was maintainable and scalable?

19. What challenges did you face while working on the project, and how did you overcome them?