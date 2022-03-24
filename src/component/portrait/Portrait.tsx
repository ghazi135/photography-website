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
            <div>

            <ImageList cols={3} >

                {portraitPhotos.map((item) => (
                    <ImageListItem key={item}>
                        <img
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
                            <Carousel
                                currentIndex={portraitPhotos.indexOf(currentImage)}
                                views={portraitPhotos.map(x => ({
                                    source: x,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Fade>
    );

}

export default Landscape;
