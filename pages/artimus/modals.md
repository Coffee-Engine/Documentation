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

## Additional Options
There are a few optional options when creating a modal, these are as follows.
| Property         | Type         | Default   | Notes                                                                                             |
|------------------|--------------|-----------|---------------------------------------------------------------------------------------------------|
| width            | Number       | 40        | The percentage of the screen to take up horizontally.                                             |
| height           | Number       | 40        | The percentage of the screen to take up vertically.                                               |
| hasClose         | Boolean      | true      | Whether or not the user can close the modal manually.                                             |
|translationContext| String       | "CUGI"    | The context to provide to the translation function for translating. (CUGI/Function)               |

## Extending & Functions
If you would like to extend `editor.modal` the `init` function is called whenever the modal has finished it's construction. It has the title, contents, and options passed in as arguments.

The modal also has various functions in it that may be useful.
### CUGI Preprocess `CUGIPreprocess(context, item)`
Called for each element in a CUGI menu. It is recommended to use this when calling CUGI.createList in your extended modal.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| context      | String       | The translation context.                                                                                      |
| item         | CUGI Item    | The current item which can be modified by this function.                                                      |


### close `close()`
Defines the closing of the menu, can be called to close the menu.