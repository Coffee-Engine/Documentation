[[Artimus Tools]]

# Tools
## What are tools?
Tools are the life, and blood of Artimus, these classes contain the code needed for drawing to Artimus' canvases.

Tools can be defined through, `artimus.tool` which is the base class for every tool featured within the editor by default.

## Input functions
Tools contain multiple functions that exist to determine when input from the editor is given, touches may also count as mouse input for the sake of brevity.

### mouseDown `mouseDown(gl, x, y, toolProperties)`

This function is triggered whenever the user clicks on the canvas, and will allow other mouse related functions to run alongside it.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| x            | Number       | This value represents the X position of the mouse, or touch.                                                  |
| y            | Number       | This value represents the Y position of the mouse, or touch.                                                  |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### mouseMove `mouseMove(gl, x, y, vx, vy, toolProperties)`

This function is triggered whenever the mouse is moved while the mouse is down.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| x            | Number       | This value represents the X position of the mouse, or touch.                                                  |
| y            | Number       | This value represents the Y position of the mouse, or touch.                                                  |
| vx           | Number       | This value is the change in the X position between calls                                                      |
| vy           | Number       | This value is the change in the Y position between calls                                                      |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### mouseDown `mouseUp(gl, x, y, toolProperties)`

This function is triggered whenever the user releases their mouse from the canvas, this will disable any mouse related functions besides mouseDown.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| x            | Number       | This value represents the X position of the mouse, or touch.                                                  |
| y            | Number       | This value represents the Y position of the mouse, or touch.                                                  |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### keyPressed `keyPressed(gl, event, toolProperties)`

This function is triggered whenever the user releases their mouse from the canvas, this will disable any mouse related functions besides mouseDown.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| event        |Keyboard Input| This is the keyboard input event that is given from the browser.                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### keyReleased `keyReleased(gl, event, toolProperties)`

This function is triggered whenever the user releases their mouse from the canvas, this will disable any mouse related functions besides mouseDown.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| event        |Keyboard Input| This is the keyboard input event that is given from the browser.                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### keyReleased `preview(gl, event, toolProperties)`

This function is called whenever a tool preview is needed, is passes in a context seperate from the ones shown in the other input events.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| x            | Number       | This value represents the X position of the mouse, or touch.                                                  |
| y            | Number       | This value represents the Y position of the mouse, or touch.                                                  |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### selected `selected(gl, previewGL, toolProperties)`

This function is called whenever a tool is selected, you can use this to set up various properties.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| previewGL    | Context2D    | This is the canvas context of the preview layer.                                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### deselected `deselected(gl, previewGL, toolProperties)`

This function is called whenever a tool is selected, you can use this to clean up any memory that may need to be cleansed.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| previewGL    | Context2D    | This is the canvas context of the preview layer.                                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### undo `undo(gl, previewGL, toolProperties) -> bool || undefined`

This function is called whenever a tool the undo function is called while the tool is selected, returning true prevents the undo from commencing.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| previewGL    | Context2D    | This is the canvas context of the preview layer.                                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### redo `redo(gl, previewGL, toolProperties) -> bool || undefined`

This function is called whenever a tool the redo function is called while the tool is selected, returning true prevents the redo from commencing.
The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| previewGL    | Context2D    | This is the canvas context of the preview layer.                                                              |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |

### rerenderBounds `rerenderBounds(gl, previewGL, context, toolProperties) -> [x, y, w, h] || bool || undefined`
As of "Γ 1.1" (Gamma 1.1) this does nothing, but the function's idea is to return the bounds of where to redraw, allowing for artimus to be drawn more efficiently while keeping the valuable features of the canvas2D renderer.

The following properties are passed into it.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| previewGL    | Context2D    | This is the canvas context of the preview layer.                                                              |
| context      | UseContext   | This object contains information on how the tool is currently being used. Like state and position.            |
|toolProperties| Object       | This value is the workspace's tool properties.                                                                |


## Properties
Tools come with a few properties you will have to configure, these are as follows.

### CUGI `CUGI() -> Array[Object]`

This function is called whenever artimus needs properties for the properties panel, this function will return a valid [CUGI menu](https://github.com/Coffee-Engine/CUGI/blob/main/site/demo.js).

### icon `get icon() -> String`

This function is called whenever the workspace needs the tool's icon, it can either return an image URL or stringified SVG data.

### properties `properties = {}`

This property contains the default properties for the tool. This can range from colors to fonts.

### colorProperties `colorProperties = []`

This property defines any properties to set whenever a color is picked from the canvas.

### colorProperties `constructive = true`

This property defines if the tool should automatically add history data to the workspace when the mouse is released. Otherwise you may have to call `this.workspace.updateLayerHistory();`

## Helpers
Helpers are functions and values that can be used to make development of a tool faster.

### inSelection `inSelection(gl, x, y) -> bool`

This function can tell you if a certain point is within the current Artimus selection.
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| gl           | Context2D    | This is the canvas context of the current layer.                                                              |
| x            | Number       | The X position of the point.                                                                                  |
| y            | Number       | The Y position of the point.                                                                                  |

### shiftHeld `shiftHeld = true || false`

This property can be used to tell whether or not the shift key is held.

### workspace `workspace = parentWorkspace`

This is the workspace the tool belongs to, very useful if you need to add a layer history point via
`this.workspace.updateLayerHistory();`
or you need to dirty that canvas via
`this.workspace.dirty = true;`