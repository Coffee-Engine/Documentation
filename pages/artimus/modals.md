[[Modals]]

# Modals
## What are modals?
Modals are a class defined in the [web editor](https://coffee-engine.github.io/Artimus/) that allows for code to create popups.

## How do I use them?
Modals can be accessed from the editor using `editor.modal`, and opened by using
```javascript
new editor.modal("Hello Modals", "This is a very cool modal!");
```

This code will create a modal titled `Hello Modals` with the contents of `This is a very cool modal!`

## Arguments
The modal class has three arguments during it's creation.
- The Title
- The Contents
- Additional Options

### The Title
The title is a string that shows up on the top of the modal. This can be virtually anything.

![The natural habitat of the modal's title.](images/artimus/modals/modalTitle.png)

### The Contents
The contents of a modal come in 3 different forms.
- A HTML String
- A CUGI menu
- A Function

Each one has a different complexity, with HTML string being the simplist, and functions being the most complex, but the most customizable.

![The natural habitat of the modal's contents, this one is an HTML string.](images/artimus/modals/modalContents.png)

#### The function
When using a function of the contents the function will be passed two values.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| contentHolder| HTML div     | The HTML div that makes up the inner part of the modal.                                                       |
| modal        | Modal        | The actual modal object itself.                                                                               |