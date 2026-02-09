# ".artimus" Files
".artimus" files are the main way of saving a project in the Artimus editor. The format is a lossless, run-length encoded, layered image format.

### The file header
Artimus starts with a header, the first four bytes should spell out "COFE", with a format byte following.
| Data         | Size         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| Magic Number | 4 Bytes      | Should be "COFE", otherwise invalid                                                                           |
| Format       | 1 Byte       | The general version, there are major changes between these.                                                   |
| Width        | 3 Bytes      | Will be changed to 2 in a future version, 3 is just a ridiculously large number that came to me on the spot.  |
| Height       | 3 Bytes      | Same rules apply as the height                                                                                |
| Layers       | 2 Bytes      | This is the amount of layers within the project, there is a soft limit of 65535 layers.                       |

### The layer header.
Each layer in Artimus includes this initial header, this is what is most likely to change between versions.
| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Name Length  | 3 Bytes      | The number of bytes the name takes up, large because I know somebody will write an essay. Also some unicode characters.|
| Encoding Mode| 1 Byte       | This is how the layer's data is encoded                                                                                |
| Visibility   | 1 Byte       | This is currently only used for visibility. Could potentially be used for flags in the future.                         |
| Blend mode   | 1 Byte       | An integer that defines the blend mode the layer uses.                                                                 |
| Alpha        | 1 Byte       | The alpha of the layer.                                                                                                |
| Name String  | NL Bytes     | The bytes that make up the layer's name. It takes up "Name Length" bytes.                                              |
| Data         | WH Bytes     | The bytes that make up the layer's image, it is "width*height" bytes large.                                            |

### Encoding Modes

#### 0 : RGBA full color
This format is comprised of strips of data each with formatted as so.
| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Count        | 2 Bytes      | How many pixels are in this strip, a max of 65535.                                                                     |
| Color        | 4 Bytes      | The color of the pixels in this strip. Formatted as RGBA.                                                              |

#### 1 : 256 color paletted
This format is comprised of strips of data preceeded by a header that contains palette information.

The header is formatted as so.
| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Colors       | 1 Bytes      | How many colors are in the following palette.                                                                          |
| Palette      | C*4 Bytes    | Groups of RGBA values that make up the palette.                                                                        |

| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Count        | 2 Bytes      | How many pixels are in this strip, a max of 65535.                                                                     |
| Color        | 1 Byte       | The color to draw for this strip from the palette.                                                                     |

#### 2 : Single color
This format is to keep single color backgrounds from hogging up file-size. All it contains is a color.
| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Color        | 4 Bytes      | The color of this layer. Formatted as RGBA.                                                                            |

#### 3 : Single color with alpha.
This format is good for line art, as it allows for solid color lines that don't take up much space in the file compared to paletted or full color, it contains an initial color within the header.
| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Color        | 3 Bytes      | The color of this layer. Formatted as RGBA.                                                                            |

| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Count        | 2 Bytes      | How many pixels are in this strip, a max of 65535.                                                                     |
| Alpha        | 1 Byte       | The alpha of the this strip.                                                                                           |




### Blend modes
A comprehensive list of the blend modes, this is unlikely to change.
| Name                        | ID           |
|-----------------------------|--------------|
| Source over                 | 0            |
| Source in                   | 1            |
| Source out                  | 2            |
| Source atop                 | 3            |
| Lighter/Additive            | 4            |
| Multiply                    | 5            |
| Screen                      | 6            |
| Overlay                     | 7            |
| Darken                      | 8            |
| Lighten                     | 9            |
| Color dodge                 | 10           |
| Color burn                  | 11           |
| Hard light                  | 12           |
| Soft light                  | 13           |
| Difference                  | 14           |
| Exclusion                   | 15           |
| Hue                         | 16           |
| Saturation                  | 17           |
| Color                       | 18           |
| Luminosity                  | 19           |
| Destination Over            | 20           |
| Destination in              | 21           |
| Destination out             | 22           |
| Destination atop            | 23           |
| Copy                        | 24           |
| XOR                         | 25           |

### JSON footer
This footer is entirely optional and will take up the rest of the file. It contains json data and is identified by the magic number "JSON"

| Data         | Size         | Notes                                                                                                                  |
|--------------|--------------|------------------------------------------------------------------------------------------------------------------------|
| Magic Number | 4 Bytes      | Spells out the "JSON"                                                                                                  |
| JSON Data    | EOF Bytes    | This portion continues until the end of the file is reached. It contains the JSON data.                                |