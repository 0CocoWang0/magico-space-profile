import Image from "next/image";
import WiggleElement from "./WiggleElement";


export default function Showcase() {

    const showcasePhotos = [
        { title: "showcase 1", path: "/images/show1.png" },
        { title: "showcase 2", path: "/images/show2.png" },
        { title: "showcase 3", path: "/images/show3.png" },
        { title: "showcase 4", path: "/images/show4.png" },
        { title: "showcase 5", path: "/images/show5.png" },

    ]
    return (
        <div id="showcase" className="flex justify-center p-4 mb-6">
            {showcasePhotos.map((photo, index) => (
                <WiggleElement key={index} >
                    
                    <Image
                        id="gallery"
                        src={photo.path}
                        alt={photo.title}
                        width={270}
                        height={253}></Image>
                </WiggleElement>
                
            ))}
        </div>
    );
}