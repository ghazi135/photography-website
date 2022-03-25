import React, {useCallback, useState} from "react";
import './Street.css';
import Carousel, { Modal, ModalGateway } from "react-images";
import {Fade, ImageList, ImageListItem} from "@mui/material";
import {streetPhotos} from "./StreetPhotos";

function Street() {
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

                {streetPhotos.map((item) => (
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
                                currentIndex={streetPhotos.indexOf(currentImage)}
                                views={streetPhotos.map(x => ({
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

export default Street;