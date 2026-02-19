[[Artimus Extension Development]]

# Extension Development
Extensions are a feature defined in the [Artimus web editor](https://coffee-engine.github.io/Artimus/)

## Preamble
First you will need an HTTP server with cors support.

I would reccomend these two choices at the time of writing, the NPM module [http-server](https://npmjs.com/package/http-server) by [http-party](https://github.com/http-party/http-server#readme),
or for a more local solution you can use [commandable-http-server](https://github.com/David-Orangemoon/commandable-http-server) which is a small python application that is similar to simpleHTTPServer.

Either way you will want to turn on cors headers.
For `http-server` and `commandable-http-server` one appending `--cors` as an argument should do the job.

## Setting up the extension!
Once you have the folder you will be developing your extension in you will want to create a JSON file. In this example I will use one called `main.json`

The extension json requires 3 things
- A name
- An ID
- A list of files.

The inside of your extension's JSON file should look somewhat like this.
```javascript
{
    "name": "My Cool Extension",
    "id": "myExtension",
    "files": []
}
```

And with that you can start your server and load your extension into artimus with the path to your extension's JSON, for example mine is `http://127.0.0.1:8080/main.json` so I would put that into the extension url box.

After adding it your extension should have a new entry!

![An extension in the extension list.](images/artimus/extensionIntro/added.png)

You can have various values in your extension json that don't relate explitly to your extension's code. These are as follows
| Property     | Type         | Notes                                                                                                         |
|--------------|--------------|---------------------------------------------------------------------------------------------------------------|
| author       | String       | Your name!                                                                                                    |
| version      | String       | The current version of the extension.                                                                         |
| icon         | String       | The path to your extension's icon. Preferably square.                                                         |
| translations | Object       | A dictionary of paths to language files for your extension, those will be covered soon.                       |

## Adding a tool
First let's add a tool. First you will want to create a javascript file. I will name mine `tool.js` and it can be added to the extension's json by putting the path to it in the `files` array.
```javascript
{
    "name": "My Cool Extension",
    "id": "myExtension",
    "files": [
        "tool.js"
    ]
}
```

And inside of our tool's function we can have a simple script like this.
```javascript
addTool("helloWorld", class extends artimus.tool {
    mouseDown(gl, x, y, toolProperties) {
        console.log(`Clicked at (${x}, ${y})!`);
    }
});
```

Now when you reload the page your tool should be in the tool list! And when you click it should make a message in the console!

![An extension in the extension list.](images/artimus/extensionIntro/console.png)

So now you may want to fix the name of the tool being `myExtension.tool.helloWorld` this can be done 1 of two ways.
### Name
Putting a name in your tool's class like so
```javascript
addTool("helloWorld", class extends artimus.tool {
    get name() { return "Hello World!"; };

    mouseDown(gl, x, y, toolProperties) {
        console.log(`Clicked at (${x}, ${y})!`);
    }
});
```

This is unideal for extensions that want to support multiple languages. Thankfully extensions can include language files!

## Language files
As of current Artimus only supports english so you can add an english language named `english.json`.

Remember the strange text that was `myExtension.tool.helloWorld`? That is a language key. So within our `english.json` we can fill out
```javascript
{
    "myExtension.tool.helloWorld": "Hello World!"
}
```

After that the `english.json` file can be added to the extension's json by adding the path to the translations object with the `english` key.

```javascript
{
    "name": "My Cool Extension",
    "id": "myExtension",
    "files": [
        "tool.js"
    ],
    "translations": {
        "english": "english.json"
    }
}
```

Now if you reload the tool should have it's proper name!

## So what next?
You may want to check out other pages. These may be good to check out first!
- [Tools](?page=artimus/tools)
- [Modals](?page=artimus/modals)