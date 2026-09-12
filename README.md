# Dev Stack Builder

An interactive React and Tailwind CSS application designed to help developers explore modern technologies and build custom technology stacks.

## 🚀 Features
- **Dynamic Technology Grid:** Browse through multiple categories of technologies with ratings, difficulty badges, and descriptions.
- **Interactive Stack Management:** Add items to your custom stack with built-in duplicate prevention and real-time counter updates.
- **Toast Notifications:** Immediate visual feedback for all stack actions using `react-toastify`.

---

## 💡 Assignment Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML structures directly within JavaScript files. It is used in React to make UI code more readable, expressive, and easier to structure.

### 2. What is the difference between props and state?
- **Props** are passed from parent to child components and are read-only (immutable).
- **State** is managed internally within a component, holds dynamic data, and triggers a re-render upon updates.

### 3. What does the useState hook do, and where did you use it in this project?
The `useState` hook allows functional components to manage local state. In this project, it is used to manage the fetched technology list (`techs`), the selected stack items (`stack`), and the loading state (`loading`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components. It was used here to fetch the `technologies.json` file asynchronously when the component mounts, avoiding infinite rendering loops.

### 5. Why does every item in a .map() list need a unique key prop?
React uses `key` props to identify which items have changed, been added, or been removed, optimizing rendering performance and preserving component state.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means rendering elements based on specific conditions. Example used for the empty stack message:

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 
* **Parent to Child:** Passed down via **props**.
* **Child to Parent:** Sent back using a **callback function** passed down from the parent.
```jsx
{stack.length === 0 ? <p>Your stack is empty.</p> : <StackList/>}"# dev-stack-builder" 
