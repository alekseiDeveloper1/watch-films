const initialState = {
    cards: [ 
        {
            id:1, 
            title: "back to the future", 
            desc: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown", 
            img: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            video: "http://www.youtube.com/embed/qvsgGtivCgs"
        },
        {
            id:2, 
            title: "House of the dragon", 
            desc: "The reign of House Targaryen begins with this prequel to popular HBO series 'Game of Thrones.' Based on George R.R. Martin's 'Fire & Blood,' 'House of the Dragon' is set nearly 200 years before the events of \"Game of Thrones,\" telling the story of the Targaryen civil war with King Viserys", 
            img: "https://resizing.flixster.com/QrT-Krzry3Ikh6cH4u9bHCYH_6w=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNGZmZmJkN2YtZDA4YS00ZjkzLWE3OTMtNTgyNDE5NWM3YjhmLmpwZw==",
            video: "http://www.youtube.com/embed/DotnJ7tTA34" 
        },
        {
            id:3, 
            title: "interstellar", 
            desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", 
            img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            video: "http://www.youtube.com/embed/zSWdZVtXT7E"
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}