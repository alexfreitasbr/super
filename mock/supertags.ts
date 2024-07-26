export const  supertagsMock = [
    {
        id: 1,
        name: 'tag1',
        icon: "icone1",
        type: 1,
        father_id:  null,
        properties:[{
            id: 1,
            description: "prop1",
            type: 'C',
            value: "value1",
            supertag_id:1
        },
        {
            id: 1,
            description: "prop2",
            type: 'C',
            value: "value2",
            supertag_id:2
        },
    
    ]
    },
    {
        id: 2,
        name: 'tag2',
        icon: "icone2",
        type: 2,
        father_id:  null
    },
    {
        id: 3,
        name: 'tag3',
        icon: "icone15",
        type: 5,
        father_id:  1
    },
    {
        id: 4,
        name: 'tag4',
        icon: "icone4",
        type: 4,
        father_id:  1
    },
    {
        id: 5,
        name: 'tag5',
        icon: "icone5",
        type: 5,
        father_id:  null
    },
]
