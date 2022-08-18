import { __ } from '@wordpress/i18n';
import { useEffect } from "react";

export default function Steps(props) {

    useEffect(() => {

        let images = document.querySelectorAll('.step-item .step-image');

        if (images) {
            images.forEach(function (image) {
                image.onclick = function (e) {
                    e.preventDefault();

                    let parent = image.parentElement;
                    let video = parent.querySelector('video');
                    video.play();
                };
            });
        }

        let videos = document.querySelectorAll('.step-item video');

        if (videos) {
            videos.forEach(function (video) {
                video.onplay = function () {

                    let parent = video.parentElement;
                    let item = parent.parentElement;
                    item.classList.add('play');
                };
                video.onended = function () {

                    let parent = video.parentElement;
                    let item = parent.parentElement;
                    item.classList.remove('play');
                };
            });
        }
    }, [])

    return (
        <>
            <div className="background chacha-row">
                <div className="left"></div>
                <div className="right"></div>
            </div>
            <div className="container boxed">
                {props.data?.length > 0 &&
                    props.data?.map(function (item, index) {
                        return <div className="step-item chacha-row valign-center" key={index}>
                            <div className="step-video">
                                <div className="step-circle" style={{ backgroundColor: item.fields.step_color }}></div>
                                <video controlsList="nodownload" playsInline={true}>
                                    <source src={item.fields.step_video} type="video/mp4" />
                                </video>
                                <div className="step-image">
                                    <img src={item.post_image.guid} alt={item.post_title} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="109" viewBox="0 0 94 109">
                                        <path id="Polygone_3" data-name="Polygone 3" d="M54.5,0,109,94H0Z" transform="translate(94) rotate(90)" fill="#9b91f4" />
                                    </svg>
                                </div>

                            </div>
                            <div className="step-content">
                                <h2>{item.post_title}</h2>
                                <p>{item.post_excerpt}</p>
                                <a className="button" href={__('#formulaire', 'chacha-gutenberg')}>{__("Je m'inscris", 'chacha-gutenberg')}</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
}