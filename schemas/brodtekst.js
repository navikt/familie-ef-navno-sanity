export default {
    name: 'brodtekst',
    type: 'document',
    title: 'Brødtekst',
    fields: [
        {
            name: 'body',
            type: 'array', 
            of: [
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean'
                                    }
                                ]
                            },
                            {
                                name: 'internalLink',
                                type: 'object',
                                title: 'Internal link',
                                fields: [
                                    {
                                        name: 'reference',
                                        type: 'reference',
                                        title: 'Reference',
                                        to: [
                                            { type: 'artikkel' },
                                            // other types you may want to link to
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
        }
    ]
}
