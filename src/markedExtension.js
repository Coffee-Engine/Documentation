(function() {
    const titleRegex = /\[\[.+\]\]/;
    const titleTokenizer = new RegExp(`^${titleRegex.source}`);

    const importantRegex = /!!\s+.+/;
    const importantTokenizer = new RegExp(`^${importantRegex.source}`);

    marked.use({
        name: "daveDocsUtilities",
        renderer: {
            code: ({ lang, text }) => {
                const codeElement = document.createElement("code");
                
                codeElement.innerHTML = text;
                CodeMirror.colorize([codeElement], lang);
                codeElement.innerHTML = codeElement.innerHTML.replace("\n", "<br>");

                return codeElement.outerHTML;
            },

            //Add link icons
            link: (element) => {
                //Find the best icon if possible
                let bestIcon = "";
                for (let icon in linkIcons) {
                    if (
                        (element.href.startsWith(`https://${icon}`) || element.href.startsWith(`http://${icon}`)) &&
                        icon.length > bestIcon.length
                    ) bestIcon = icon;
                }

                if (bestIcon) return `<a href="${element.href}"><img src="${linkIcons[bestIcon]}">${element.text}</a>`
                return `<a href="${element.href}">${element.text}</a>`
            },
        },

        extensions: [
            {
                name: "title",
                level: 'inline',
                renderer: (token) => {
                    document.title = token.title;
                    return ``;
                },

                tokenizer(src, tokens) {
                    const match = titleTokenizer.exec(src);
                    if (!match) return;

                    return {
                        type: "title",
                        raw: match[0],
                        title: match[0].substring(2, match[0].length - 2)
                    }
                },
            },
            {
                name: "important",
                level: 'inline',
                renderer: (token) => {
                    return `<div class="important">${token.content}</div>`;
                },

                tokenizer(src, tokens) {
                    const match = importantTokenizer.exec(src);
                    if (!match) return;

                    return {
                        type: "important",
                        raw: match[0],
                        content: match[0].replace(/!!\s+/, "")
                    }
                },
            },
        ]
    });
})();