import React, {useCallback, useState} from "react";
import './Landscape.css';
import Carousel, { Modal, ModalGateway } from "react-images";
import {landscapePhotos} from './landscapePhotos';
import {Fade, ImageList, ImageListItem} from "@mui/material";

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
                    {landscapePhotos.map((item) => (
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
                            <div                                 onContextMenu={(e)=> e.preventDefault()}>
                                <Carousel
                                    currentIndex={landscapePhotos.indexOf(currentImage)}
                                    views={landscapePhotos.map(x => ({
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
