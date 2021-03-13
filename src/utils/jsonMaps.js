import Alarm from '../components/Content/alarm';
import Form from '../components/Form';
import HomeDesign from '../components/Content/homeDesign';
import Ilumination from '../components/Content/ilumination';
import MovieHome from '../components/Content/movieHome';
import MultizoneAudio from '../components/Content/multizoneAudio';
import NetworksWifi from '../components/Content/networksWifi';
import OptionMenu from '../components/OptionMenu';
import RoomAudio from '../components/Content/roomAudio';
import ScreenAutomation from '../components/Content/screenAutomation';
import SecurityCamera from '../components/Content/securityCamera';

export const jsonOptions = [
    {
        "page": 1,
        "component": <Form />,
    },
    {
        "page": 2,
        "component": <OptionMenu />,
    }
]

export const jsonComponents = [
    {
        "page": undefined,
        "component": <Ilumination />,
        "id": 1
    },
    {
        "page": undefined,
        "component": <MultizoneAudio />,
        "id": 2
    },
    {
        "page": undefined,
        "component": <RoomAudio />,
        "id": 3
    },
    {
        "page": undefined,
        "component": <MovieHome />,
        "id": 4
    },
    {
        "page": undefined,
        "component": <NetworksWifi />,
        "id": 5
    },
    {
        "page": undefined,
        "component": <ScreenAutomation />,
        "id": 6
    },
    {
        "page": undefined,
        "component": <Alarm />,
        "id": 7
    },
    {
        "page": undefined,
        "component": <SecurityCamera />,
        "id": 8
    },
    {
        "page": undefined,
        "component": <HomeDesign />,
        "id": 9
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