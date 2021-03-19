import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Arrow} from '../arrow/arrow';

const Slider = ({className, images}) => {

    const [currentImg, setNewCurrentImg] = useState(0);

    return (
        <section className={`${className} slider`}>
            <div className="slider__main-img">
                <img src={images[currentImg].src}
                     width="600"
                     height="375"
                     alt={images[currentImg].alt}
                     className="slider__img"/>
            </div>

            <div className="slider__nav">
                <Arrow className="slider__arrow" isRotate={true} onClick={() => setNewCurrentImg(currentImg + -1)}
                       disabled={currentImg <= 0}/>
                {images.map((img, index) =>
                    <img key={index}
                         src={img.src}
                         width="128"
                         height="80"
                         alt={img.alt}
                         className="slider__img"/>
                )}
                <Arrow className="slider__arrow" onClick={() => setNewCurrentImg(currentImg + 1)}
                       disabled={currentImg >= images.length - 1}/>
            </div>
        </section>
    );
};

Slider.propTypes = {
    className: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string
    }))
};

export {Slider};
