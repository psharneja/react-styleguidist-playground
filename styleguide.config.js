module.exports =  {
    title: 'styleguidist playground',
    pagePerSection: true,
    styleguideDir: 'public/example',
    theme: {
        color: {
            sidebarBackground: '#FFCBA4',
            link: '#0A41C5',
            linkHover: 'green',
            codeBackground: '#000',
            codeBase: '#9f4511',
        },
        sidebarWidth: '350px',
    },
    sections: [ {
        name: 'Components',
        sections:  [{
            name: 'Weather',
            sections: [ {
                name:'weather component',
                exampleMode: 'expand',
                content: 'guides/weather.md'
            }]
        }, {
            name: 'random',
            sections: [ {
                name:'random component',
                exampleMode: 'expand',
                content: 'guides/random.md'
            }]
        }]
    }]

}