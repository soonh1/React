# Plan B - Tasks

## 1 Add a Input field
Add a text input field. Remember that you need a state object to handle the updating of the value.

## 2 Make your List Component dynamic
Change your App to pass dynamic items to your List Component instead of hardcoded values.
Add a button next to your text input and when pressed append the entered text to your List Components items.

## 3 Make a List Item Component
Create a new Item Component for the items in your List Component.

```
<List> 
  <Item/>
  <Item/> 
  <Item/> 
  ...
</List>
```

## 4 Add a delete button to the Item Component
Add a button to your Item Component that allows to remove the given item from the List.

## 5 Implement react-router-dom
Add a BrowserRouter to your App to allow multiple pages depending of the URL path.

## 6 Add authentication
Create a Context that keeps track of user authentication with a simple credentials object. Example:

```
{ id: 42, name: ‘John Doe’,}
```

## 7 Make a login screen
Add a simple login screen that takes a username and password.
Implement a dummy authentication service that looks for a given hardcoded credentials.

## 8 Use Auth Context
Using your Auth Context update your BrowserRouter to check for required authentication and redirect to the login screen if not authenticated.
