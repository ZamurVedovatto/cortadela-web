import Image from "next/image";
import { HeartIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';

import { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '96vw',
        minHeight: '96vh',
        backgroundColor: 'transparent',
        padding: "0",
        border: "none"
    },
  };
  
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement');
Modal.defaultStyles.overlay.backgroundColor = 'black';

export default function Thumbnail({ result }, ref) {
    let subtitle;
    let videoIframe = `
        <iframe 
            style="height:86vh;width:100%;border:none;overflow:hidden;"
            src="https://www.youtube.com/embed/${result.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" mute=1 allow="autoplay; fullscreen">
        </iframe>
    `
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="m-1">
            <div id="yourAppElement" className="group cursor-pointer hover:z-50 flex flex-col justify-between">
                <Image
                    layout='responsive'
                    height={1080}
                    width={1920}
                    src={result.img}
                    onClick={openModal}
                    className="transition duration-300 ease-in-out transform sm:hover:scale-110"
                />
                <div className="p-2 flex flex-row-reverse relative bg-gray-800 border-opacity-50 border-black border-2">
                    <p className="max-w-md leading-4 text-sm">{result.title}</p>
                    {/* <p className="mt-1 text-sm text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate max-w-md">{result.overview}</p> */}
                    {/* <p className="flex items-center leading-5">
                        {
                            result.liked ? <HeartIconSolid className="h-7 mx-2 text-red-400" /> : <HeartIcon className="h-7 mx-2" />
                        }
                    </p> */}
                </div>
            </div>
        
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex justify-between px-3 py-2">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <button onClick={closeModal}><XIcon className="h-10 mx-2 text-white" /></button>
                </div>

                <div
                    style={{ width: "100%", height: "100%" }}
                    dangerouslySetInnerHTML={ {__html: videoIframe? videoIframe : ""}}
                />
            </Modal>
        </div>
    )
}