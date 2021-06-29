import Image from "next/image";
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

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
    },
  };
  
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement');

export default function Thumbnail({ result }, ref) {
    let subtitle;
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
        <>
            <div id="yourAppElement" className="group cursor-pointer p-2 hover:z-50">
                <Image
                    layout='responsive'
                    height={1080}
                    width={1920}
                    src={result.img}
                    onClick={openModal}
                    className="transition duration-500 ease-in-out transform sm:hover:scale-95"
                />
                <div className="p-2 flex flex-row-reverse">
                    <p className="max-w-md leading-5">{result.title}</p>
                    {/* <p className="mt-1 text-sm text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate max-w-md">{result.overview}</p> */}
                    <p className="flex items-center leading-5">
                        {
                            result.liked ? <HeartIconSolid className="h-7 mx-2 text-red-400" /> : <HeartIcon className="h-7 mx-2" />
                        }
                    </p>
                </div>
            </div>
        
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>

                <div dangerouslySetInnerHTML={ {__html:  result.iframe? result.iframe : ""}} />


            </Modal>
        </>
    )
}