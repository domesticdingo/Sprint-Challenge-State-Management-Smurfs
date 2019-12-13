1. What problem does the context API help solve?

Context is a way to have global data without having to pass it into components as props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers are the functions that change state, and actions are the helper functions that work inside the components to link to the reducer. In Redux the store is a central nexus that holds your state for your application, and your components can connect to it to access state as needed. It is the single source of truth because it is the base of the tree of redux, the reducers and actions all grow from it and alter the state inside of it, which is how the react app is able to have a globally accessible state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state all components can access. Component state is local to just a particular component. The application state is good if you're working with a locally stored set of data and need to manipulate it with features that are across all of your components. Component state is good for things that just that component is doing, such as keeping a user's form input as a string in a form component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware for Redux that lets you write async logic for your store. Normally you can only write syncronous logic with your actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux was my favorite, because while all the new syntax was difficult to grasp, the overall concept of a storage box outside of your app that your components access pieces of as needed was easy to comprehend.
