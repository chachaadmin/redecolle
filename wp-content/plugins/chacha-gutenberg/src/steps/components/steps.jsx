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

                var title = video.closest('.step-item').querySelector('h2');
                if (title) title = title.textContent || title.innerText;
                video.onplay = function () {

                    let parent = video.parentElement;
                    let item = parent.parentElement;
                    item.classList.add('play');

                    console.log(video.querySelector('source').src);
                    dataLayer.push({
                        'event': 'gtm.video',
                        'gtm.videoStatus': 'start',
                        'gtm.videoUrl': video.querySelector('source').src,
                        'gtm.videoTitle': title,
                        'gtm.videoProvider': 'Amazon S3'
                    });
                };
                video.onended = function () {

                    let parent = video.parentElement;
                    let item = parent.parentElement;
                    item.classList.remove('play');
                };
            });
        }

        jQuery.attach.refresh()
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
                                <div className="step-circle" style={{ backgroundColor: item.fields.step_color }} data-scroll-animation="width" data-scroll-animation-unit="%" data-scroll-animation-format="%v" data-scroll-animation-min="100" data-scroll-animation-max="158"></div>
                                <video controlsList="nodownload" playsInline={true} controls>
                                    <source src={item.fields.step_video} type="video/mp4" />
                                </video>
                                <div className="step-image">
                                    <img src={item.post_image.guid} alt={item.post_title} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="166" viewBox="0 0 166 166">
                                        <g id="Groupe_386" data-name="Groupe 386" transform="translate(-425 -1509)">
                                            <path id="Polygone_3" data-name="Polygone 3" d="M40.5,0,81,69H0Z" transform="translate(550 1552) rotate(90)" fill="#fff" />
                                            <g id="Ellipse_123" data-name="Ellipse 123" transform="translate(425 1509)" fill="none" stroke="#fff" stroke-width="6">
                                                <circle cx="83" cy="83" r="83" stroke="none" />
                                                <circle cx="83" cy="83" r="80" fill="none" />
                                            </g>
                                        </g>
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