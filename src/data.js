import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Jazz Cabbage",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Ian Ewing, Strehlow",
            id: uuidv4(),
            active: true,
            color: ["#BA4A42", "#F5C5AF"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=6492'
        },
        {
            name: "On The Moon",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            id: uuidv4(),
            active: false,
            color: ["#252f2f", "#5E4326"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15233'
        },
        {
            name: "Lagoons",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            artist: "Strehlow, Chris Mazuera",
            id: uuidv4(),
            active: false,
            color: ["#BA4A42", "#F5C5AF"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=6130'
        },
        {
            name: "Skates",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            id: uuidv4(),
            active: false,
            color: ["#252f2f", "#5E4326"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15225'
        },
        {
            name: "Blue Moon",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist: "C Y G N",
            id: uuidv4(),
            active: false,
            color: ["#D19CC9", "#84BEEE"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=14990'
        },
        {
            name: "Under the City Stars",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            id: uuidv4(),
            active: false,
            color: ["#07363E", "#FDA84C"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10071'
        },
        {
            name: "Longing",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makzo",
            id: uuidv4(),
            active: false,
            color: ["#4F64A3", "#FAAF63"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11775'
        }
    ]
}

export default chillHop;