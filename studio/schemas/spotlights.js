export default {
    "type": "object",
    "name": "spotlights",
    "title": "Spotlights Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The text displayed at the top of the section (Also used by the CMS, even if no title is displayed in the section)",
            "initialValue": "Spotlights Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Section Id",
            "initialValue": "four",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Spotlights"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlights"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}