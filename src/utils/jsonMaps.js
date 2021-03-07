import Form from '../components/Form';
import Ilumination from '../components/Content/ilumination';
import MovieHome from '../components/Content/movieHome';
import MultizoneAudio from '../components/Content/multizoneAudio';
import NetworksWifi from '../components/Content/networksWifi';
import OptionMenu from '../components/OptionMenu';
import RoomAudio from '../components/Content/roomAudio';

export const jsonOptions = [
    {
        "page": 1,
        "component": <Form />,
        "option": null
    },
    {
        "page": 2,
        "component": <OptionMenu />,
        "option": null
    },
    {
        "page": 3,
        "component": <Ilumination />,
        "option": 1
    },
    {
        "page": 3,
        "component": <MultizoneAudio />,
        "option": 2
    },
    {
        "page": 3,
        "component": <RoomAudio />,
        "option": 3
    },
    {
        "page": 3,
        "component": <MovieHome />,
        "option": 4
    },
    {
        "page": 3,
        "component": <NetworksWifi />,
        "option": 5
    },
    {
        "page": 3,
        "component": "Form",
        "option": 6
    },
    {
        "page": 3,
        "component": "Form",
        "option": 7
    },
    {
        "page": 3,
        "component": "Form",
        "option": 8
    },
    {
        "page": 3,
        "component": "Form",
        "option": 9
    },

]

export const headerIlumination =
{
    "id": 1,
    "title": "Cantidad de zonas",
    "type": "input"
}

export const jsonImgIlumination = [
    {
        "id": "rb1",
        "title": "Entry Level US$50.00-US$100.00 x interruptor",
        "imgSrc": "https://i.ibb.co/fHjpytX/src1.png"
    },
    {
        "id": "rb2",
        "title": "Mid Level US$100-US$150 x interruptor",
        "imgSrc": "https://i.ibb.co/8N787p4/src2.png"
    },
    {
        "id": "rb3",
        "title": "Mid Level US$150.00-US$350.00 x interruptor",
        "imgSrc": "https://i.ibb.co/qdXdxTz/src3.png"
    }
]


export const jsonImgMovieHome = [
    {
        "id": "rb1",
        "title": "Entry Level US$50.00-US$100.00 x interruptor",
        "imgSrc": "https://i.ibb.co/fHjpytX/src1.png"
    },
    {
        "id": "rb2",
        "title": "Mid Level US$100-US$150 x interruptor",
        "imgSrc": "https://i.ibb.co/8N787p4/src2.png"
    },
    {
        "id": "rb3",
        "title": "Mid Level US$150.00-US$350.00 x interruptor",
        "imgSrc": "https://i.ibb.co/qdXdxTz/src3.png"
    }
]

export const headerMultizoneAudio =
{
    "id": 1,
    "title": "Cantidad de Zonas",
    "type": "input"
}


export const jsonImgMultizoneAudio = [
    {
        "id": "rb1",
        "title": "Entry Level US$50.00-US$100.00 x interruptor",
        "imgSrc": "https://i.ibb.co/fHjpytX/src1.png"
    },
    {
        "id": "rb2",
        "title": "Mid Level US$100-US$150 x interruptor",
        "imgSrc": "https://i.ibb.co/8N787p4/src2.png"
    },
    {
        "id": "rb3",
        "title": "Mid Level US$150.00-US$350.00 x interruptor",
        "imgSrc": "https://i.ibb.co/qdXdxTz/src3.png"
    }
]

export const headerNetworksWifi =
{
    "id": 1,
    "title": "Cantidad de habitaciones",
    "isHidden": false,
}

export const jsonImgNetworksWifi = [
    {
        "id": "rb1",
        "title": "",
        "imgSrc": "https://i.ibb.co/fHjpytX/src1.png"
    }
]

export const headerRoomAudio =
{
    "id": 1,
    "title": "Cantidad de habitaciones",
    "type": "input"
}


export const jsonImgRoomAudio = [
    {
        "id": "rb1",
        "title": "Entry Level US$50.00-US$100.00 x interruptor",
        "imgSrc": "https://i.ibb.co/fHjpytX/src1.png"
    },
    {
        "id": "rb2",
        "title": "Mid Level US$100-US$150 x interruptor",
        "imgSrc": "https://i.ibb.co/8N787p4/src2.png"
    },
    {
        "id": "rb3",
        "title": "Mid Level US$150.00-US$350.00 x interruptor",
        "imgSrc": "https://i.ibb.co/qdXdxTz/src3.png"
    }
]