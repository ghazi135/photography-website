import React, {useCallback, useState} from "react";
import './Portrait.css';
import Carousel, { Modal, ModalGateway } from "react-images";
import {Fade, ImageList, ImageListItem} from "@mui/material";
import {portraitPhotos} from "./PortraitPhotos";

function Landscape() {
    const [currentImage, setCurrentImage] = useState("");
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback(image => {
        setCurrentImage(image);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage("");
        setViewerIsOpen(false);
    };


    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="container">

            <ImageList sx={{ width: "100%", height: "90%" }} cols={3} >

                {portraitPhotos.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            onContextMenu={(e)=> e.preventDefault()}

                            onClick={() =>openLightbox(item)}
                            src={item}
                            alt={"test"}
                            loading="lazy"
                        />
                        position="below"

                    </ImageListItem>
                ))}
            </ImageList>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <div onContextMenu={(e)=> e.preventDefault()}>
                                <Carousel
                                    currentIndex={portraitPhotos.indexOf(currentImage)}
                                    views={portraitPhotos.map(x => ({
                                        source: x,
                                    }))}
                                />
                            </div>

                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Fade>
    );

}

export default Landscape;
