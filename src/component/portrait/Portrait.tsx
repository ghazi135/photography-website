import React, {useCallback, useState} from "react";
import './Portrait.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {portraitPhotos} from './PortraitPhotos';
import {Fade} from "@mui/material";

function Landscape() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (
        <Fade in timeout={{enter: 1200}}>
            <div className="Photography">
                <Gallery photos={portraitPhotos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={portraitPhotos.map(x => ({
                                    ...x,
                                    source: x?.src,

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
