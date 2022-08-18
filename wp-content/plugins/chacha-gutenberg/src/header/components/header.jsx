import { __ } from '@wordpress/i18n';

export default function Header(props) {

    return (
        <>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 434 150">
                    <g id="Groupe_341" data-name="Groupe 341" transform="translate(-355.958 -141.939)">
                        <circle id="Ellipse_91" data-name="Ellipse 91" cx="35" cy="35" r="35" transform="translate(561.958 208.939)" fill="#fc5c38" />
                        <g id="Groupe_295" data-name="Groupe 295" transform="translate(356.221 141.939)">
                            <circle id="Ellipse_92" data-name="Ellipse 92" cx="48.5" cy="48.5" r="48.5" transform="translate(319.737 2)" fill="#682d64" />
                            <ellipse id="Ellipse_93" data-name="Ellipse 93" cx="48" cy="48.5" rx="48" ry="48.5" transform="translate(51.737 53)" fill="#682d64" />
                            <text id="R" transform="translate(-0.263 104)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">R</tspan></text>
                            <text id="e" transform="translate(47.737 128)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">E</tspan></text>
                            <text id="D" transform="translate(100.737 104)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">D</tspan></text>
                            <text id="É" transform="translate(154.737 128)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">É</tspan></text>
                            <text id="c" transform="translate(199.737 102)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">C</tspan></text>
                            <text id="o" transform="translate(245.737 123)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">O</tspan></text>
                            <text id="l" transform="translate(354.737 66)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">L</tspan></text>
                            <text id="l-2" data-name="l" transform="translate(297.737 93)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">L</tspan></text>
                            <text id="e-2" data-name="e" transform="translate(404.737 42)" fill="#fff" fontSize="43" fontFamily="Montserrat-Black, Montserrat" fontWeight="800"><tspan x="0" y="0">E</tspan></text>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="container boxed chacha-row valign-center">
                <div className="column-1">
                    <h1 className="title-home">{props.data.title}</h1>
                    <div className="content-home" dangerouslySetInnerHTML={{ __html: props.data.content }}></div>
                    <a className="button" href={__('#formulaire', 'chacha-gutenberg')}>{__("Je m'inscris", 'chacha-gutenberg')}</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="122.771" height="128.704" viewBox="0 0 122.771 128.704">
                        <defs>
                            <clipPath id="clipPath-rectangle_146">
                                <rect id="Rectangle_146" data-name="Rectangle 146" width="122.771" height="128.704" fill="#682d64" />
                            </clipPath>
                        </defs>
                        <g id="Groupe_340" data-name="Groupe 340" transform="translate(-898.615 -909.296)">
                            <g id="Groupe_317" data-name="Groupe 317" transform="translate(898.615 909.296)">
                                <g id="Groupe_312" data-name="Groupe 312">
                                    <g id="Groupe_311" data-name="Groupe 311" clipPath="url(#clipPath-rectangle_146)">
                                        <text id="E" transform="translate(12.454 58.567) rotate(-80.861)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">E</tspan></text>
                                        <text id="M" transform="translate(14.025 47.736) rotate(-65.496)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">M</tspan></text>
                                    </g>
                                </g>
                                <text id="B" transform="matrix(0.65, -0.76, 0.76, 0.65, 20.608, 34.085)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">B</tspan></text>
                                <text id="A" transform="translate(28.674 24.854) rotate(-35.418)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">A</tspan></text>
                                <g id="Groupe_314" data-name="Groupe 314">
                                    <g id="Groupe_313" data-name="Groupe 313" clipPath="url(#clipPath-rectangle_146)">
                                        <text id="R" transform="matrix(0.93, -0.366, 0.366, 0.93, 38.43, 18.055)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">R</tspan></text>
                                        <text id="Q" transform="translate(49.421 13.737) rotate(-6.612)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">Q</tspan></text>
                                        <text id="U" transform="matrix(0.989, 0.149, -0.149, 0.989, 62.788, 12.346)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">U</tspan></text>
                                        <text id="E-2" data-name="E" transform="translate(75.398 14.469) rotate(22.575)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">E</tspan></text>
                                    </g>
                                </g>
                                <text id="M-2" data-name="M" transform="matrix(0.789, 0.614, -0.614, 0.789, 85.57, 18.521)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">M</tspan></text>
                                <text id="E-3" data-name="E" transform="translate(97.303 28.148) rotate(53.08)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">E</tspan></text>
                                <g id="Groupe_316" data-name="Groupe 316">
                                    <g id="Groupe_315" data-name="Groupe 315" clipPath="url(#clipPath-rectangle_146)">
                                        <text id="N" transform="translate(103.903 36.895) rotate(67.162)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">N</tspan></text>
                                        <text id="T" transform="translate(108.698 49.073) rotate(80.638)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">T</tspan></text>
                                        <text id="_" data-name=" " transform="translate(110.031 58.873) rotate(89.071)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0"> </tspan></text>
                                    </g>
                                </g>
                                <text id="I" transform="matrix(0.709, 0.705, -0.705, 0.709, 16.628, 103.099)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">I</tspan></text>
                                <text id="M-3" data-name="M" transform="matrix(0.836, 0.549, -0.549, 0.836, 21.851, 108.562)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">M</tspan></text>
                                <text id="M-4" data-name="M" transform="matrix(0.958, 0.286, -0.286, 0.958, 36.997, 117.913)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">M</tspan></text>
                                <text id="É" transform="translate(53.975 122.271) rotate(2.139)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">É</tspan></text>
                                <text id="D" transform="translate(67.039 122.55) rotate(-11.034)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">D</tspan></text>
                                <text id="I-2" data-name="I" transform="translate(81.716 119.072) rotate(-21.626)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">I</tspan></text>
                                <text id="A-2" data-name="A" transform="translate(88.535 116.415) rotate(-31.483)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">A</tspan></text>
                                <text id="T-2" data-name="T" transform="matrix(0.733, -0.68, 0.68, 0.733, 99.681, 109.19)" fill="#682d64" fontSize="15" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">T</tspan></text>
                            </g>
                            <g id="Groupe_318" data-name="Groupe 318" transform="translate(2927.978 -1400.238) rotate(-45)">
                                <path id="Tracé_330" data-name="Tracé 330" d="M-3081.565,272.215v26.579h25.836" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                <path id="Tracé_331" data-name="Tracé 331" d="M-3081.565,298.795l23.194-23.194" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="column-2">
                    <video autoPlay loop muted src={props.data.video}></video>
                </div>
            </div>
        </>
    );
}