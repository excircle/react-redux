# Basics of Deploying Redux + React

There are 8 primary step in the initial setup of Redux

- Create Action
- Create Reducer
- Create Root Reducer
- Configure store
- Instantiate store
- Connect component
- Pass props via connect
- Dispatch action

What do these things do

| Redux Aspect   | Function                                                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action         | Define what is being performed                                                                                                                     |
| Reducers       | Handle the action being requested. This is a function that accepts state, mods it, then returns it.                                                |
| RootReducer    | Collects and offers up all reducers from a single place                                                                                            |
| configureStore | A "store" is an object within the Redux library. `configureStore` is a function within this library that is used to hold state data for Redux apps |

Once setup with these features, the workflow for adding features is as follows.

- Create action
- Enhance reducers
- Connect component
- Dispatch action

# Notes on when to use arrow functions.

There are many wants to write event handlers in React. There are sometimes you may wish to choose one Vs. the other.

#### Standard way of declaring functions

```jsx
handleChange(event) {
    const course = {...this.state.course, title: event.target.value};
    this.setState({ course })
}
```

#### Arrow Function method

```jsx
handleChange = (event) => {
  const course = { ...this.state.course, title: event.target.value };
  this.setState({ course });
};
```

Why do this? <b>ANSWER:</b> Because arrow functions inherit the binding context of the component they are written inside of.
