[[Artimus Library Configuration]]
# Configuration
Artimus is a very configurable library when it comes to most aspects. Most of these values are within the `artimus` object. Though some pre Γ1.5.0 are located within the workspace object itself.

## Editor Values
Artimus has various values that the workspaces will use to do anything from indexing color to know how much to remember.
|     Identifier    |                                          USE                                         |           Default           |
|-------------------|--------------------------------------------------------------------------------------|-----------------------------|
|     maxHistory    |This determines how long the editor's paint history is.                               |              10             |
|      pickType     |This determines where to pick the color from, either the `composite` or the `layer`.  |             layer           |
|preferredMoveTool  |The move tool to use when pasting an image into the current workspace.                |             move            |
|preferredPasteLayer|The layer to paste the image onto, either `current` or `new`.                         |              new            |
|preferGreaterAxis  |Wether or not the editor should prefer the larger axis when evenly scaling things.    |             true            |
|unfocusedHotkeys   |Allows hotkeys to be triggered when the editor is unfocused, good for non-art apps.   |             false           |
|layerIcon          |What winding mode to use when clipping to a selection, commonly `evenodd` or `nonzero`|            evenodd          |

## Icons
Artimus has various values that the workspaces will use to do anything from indexing color to know how much to remember.
|     Identifier    |                                                   USE                                                  |
|-------------------|--------------------------------------------------------------------------------------------------------|
|    defaultArrow   |An arrow that is shown around the editor, though mostly seen when arranging layers.                     |
|      hideIcon     |The icon for the button that hides layers.                                                              |
|  unknownToolIcon  |The icon shown for tools with no icon.                                                                  |
|      toolIcon     |The icon shown in small screen mode to represent the tools tab.                                         |
|   propertiesIcon  |The icon shown in small screen mode to represent the properties tab.                                    |
|     layerIcon     |The icon shown in small screen mode to represent the layers tab.                                        |

## Magic Numbers/Strings
Artimus as a software has a set of magic numbers and strings associated with it. These can be configured and are as follows

!! As of Γ1.5.0 `workspace.magic` and `workspace.jsonMagic` have been moved to `artimus.magic` and `artimus.jsonMagic`

|    Identifier    |    Magic Number    |    Magic String    |                                   USE                                   |
|------------------|--------------------|--------------------|-------------------------------------------------------------------------|
|  clipboardMagic  |        N/A         |      H_ARTIMUS     |Prefixes clipboard data when copying image data.                         |
|      magic       |  [67, 79, 70, 69]  |         COFE       |This lets the file loader know that it is indeed an artimus image file.  |
|    jsonMagic     |  [78, 83, 79, 78]  |         JSON       |This marks the JSON section of an artimus file, where info can be stored |

## Functions
When using artimus as a library it may request data from a function for various purposes (e.g. Translation or Layer Menus) these are the ones you need to know about.

### translate `translate(item, context, noComplaints)`

This function is called whenever artimus wants a string for a translation key.
|   Property   |     Type     | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
|     item     |    String    | The item that Artimus wants from the translation. (e.g. paintBrush, paintBucket, eraser...)                   |
|    context   |    String    | The context for the translation. (e.g. tool, layer, property...)                                              |
|    context   |    String    | The context for the translation. (e.g. tool, layer, property...)                                              |

### layerPropertyMenu `layerPropertyMenu(workspace, layer)`

Called when a user requests to view/edit a layer's properties.
|   Property   |     Type     | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
|   workspace  |   workspace  | The workspace that requested the layer property menu.                                                         |
|     layer    |     layer    | The layer that the menu will target.                                                                          |

### fontPopup `fontPopup(workspace) -> promise`

A popup menu that shows available fonts that text-based tools can select from. It must return a promise that resolves to a font's name or ID.
|   Property   |     Type     | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
|   workspace  |   workspace  | The workspace that requested the layer property menu.                                                         |