import { __ } from '@wordpress/i18n';

export default function Header(props) {

    let images = ["Gars", "Fille"];
    let image = images[Math.floor(Math.random() * images.length)];
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
                    <div className="animated-object">
                        {/* Bonhomme Sourire */}
                        <svg version="1.1" id="bonhomme_sourire" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 178 178" style={{ enableBackground: "new 0 0 178 178" }}>
                            <g>
                                <g id="Bonhomme-sourire">
                                    <g id="Groupe_336" transform="translate(-148 -469)">
                                        <g id="Ellipse_90">
                                            <circle cx="237" cy="558" r="89" style={{ fill: "#F1BF45" }} />
                                        </g>
                                        <g id="Groupe_323" transform="translate(185.198 514)">
                                            <g id="Groupe_324" transform="translate(0 0)">
                                                <g id="Tracé_335">
                                                    <path d="M41.3,25.4c2.6,11.4,0.3,21.6-5,22.8S24.6,41.1,22,29.7S21.7,8.1,27,6.9S38.7,14,41.3,25.4" style={{ fill: "#682D64" }} />
                                                </g>
                                                <g id="Tracé_336">
                                                    <path d="M71.6,18.6c2.6,11.4,0.3,21.6-5,22.8s-11.7-7.1-14.2-18.5S52,1.3,57.3,0.1S69,7.2,71.6,18.6" style={{ fill: "#682D64" }} />
                                                </g>
                                                <g id="Tracé_337">
                                                    <path d="M50.8,89.4C30.5,89.4,12,75.4,7.3,54.8C7.1,54,7.6,53.2,8.4,53c0.8-0.2,1.6,0.3,1.8,1.1
							c4.4,19.2,21.6,32.3,40.6,32.3c2.9,0,5.9-0.3,8.8-1C82,80.6,96.2,58.4,91.3,36c-0.2-0.8,0.3-1.6,1.1-1.8
							c0.8-0.2,1.6,0.3,1.8,1.1c5.2,24-10,47.8-34,53C57.1,89.1,53.9,89.4,50.8,89.4z" style={{ fill: "#682D64" }} />
                                                </g>
                                                <g id="Ligne_1">
                                                    <path d="M102,37.5C102,37.5,102,37.5,102,37.5l-18.8-0.3c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5l18.8,0.3
							c0.8,0,1.5,0.7,1.5,1.5C103.5,36.9,102.9,37.5,102,37.5z" style={{ fill: "#682D64" }} />
                                                </g>
                                                <g id="Ligne_2">
                                                    <path d="M0.8,60.6c-0.5,0-1-0.3-1.3-0.8c-0.4-0.7-0.1-1.6,0.6-2L16.2,49c0.7-0.4,1.6-0.1,2,0.6
							c0.4,0.7,0.1,1.6-0.6,2L1.5,60.5C1.3,60.6,1,60.6,0.8,60.6z" style={{ fill: "#682D64" }} />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        {/* Calculatrice */}
                        <svg version="1.1" id="calculatrice" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 178 178" style={{ enableBackground: "new 0 0 178 178" }}>
                            <g>
                                <g id="Calculatrice">
                                    <g id="Groupe_358" transform="translate(-1937 -525)">
                                        <g id="Ellipse_117">
                                            <circle cx="2026" cy="614" r="89" style={{ fill: "#39173C" }} />
                                        </g>
                                        <g id="Groupe_338" transform="matrix(0.996, 0.087, -0.087, 0.996, 1992.62, 564.572)">
                                            <g id="Rectangle_165">

                                                <rect x="18.9" y="-18.9" transform="matrix(2.536970e-06 1 -1 2.536970e-06 56.2694 -18.8525)" width="37.4" height="75.1" style={{ fill: "#FC5C38" }} />
                                            </g>
                                            <g id="Rectangle_166">

                                                <rect x="5.1" y="22.7" transform="matrix(2.536970e-06 1 -1 2.536970e-06 97.7859 22.6638)" width="64.9" height="75.1" style={{ fill: "#682D64" }} />
                                            </g>
                                            <g id="Groupe_354" transform="translate(0 0)">
                                                <g>
                                                    <defs>

                                                        <rect id="SVGID_1_" x="-8.8" y="8.8" transform="matrix(8.701806e-02 -0.9962 0.9962 8.701806e-02 -11.8627 79.7179)" width="92.6" height="75.1" />
                                                    </defs>
                                                    <clipPath id="SVGID_CALC">
                                                        <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                                                    </clipPath>
                                                    <g id="Groupe_353" style={{ clipPath: "url(#SVGID_CALC)" }}>
                                                        <g id="Tracé_362">
                                                            <path d="M56.7,22.6H19.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2h37.6c4.5,0,8.2,3.7,8.2,8.2
									S61.2,22.6,56.7,22.6" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                        </g>
                                                        <g id="Ligne_7">
                                                            <path d="M31,49.1c-0.1,0-0.1,0-0.2,0l-17.9,0c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2l17.9,0c1.1,0,2,0.9,2,2
									C32.8,48.2,32,49,31,49.1z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Ligne_8">
                                                            <path d="M22.1,58c-0.1,0-0.1,0-0.2,0c-1.1,0-2-0.9-2-2l0-17.9c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2l0,17.9
									C23.9,57.1,23.1,58,22.1,58z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Ligne_9">
                                                            <path d="M28.4,81.8c-0.6,0-1.2-0.1-1.6-0.6L14.2,68.6c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l12.6,12.6
									c0.8,0.8,0.8,2,0,2.8C29.3,81.6,28.8,81.8,28.4,81.8z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Ligne_10">
                                                            <path d="M15.7,81.8c-0.6,0-1.2-0.1-1.6-0.6c-0.8-0.8-0.8-2,0-2.8l12.6-12.6c0.8-0.8,2-0.8,2.8,0
									c0.8,0.8,0.8,2,0,2.8L17,81.3C16.6,81.6,16.2,81.8,15.7,81.8z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Ligne_11">
                                                            <path d="M62.3,49.1c-0.1,0-0.1,0-0.2,0l-14.3,0c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2l14.3,0c1.1,0,2,0.9,2,2
									C64.2,48.2,63.4,49,62.3,49.1z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Ligne_12">
                                                            <path d="M62.3,75.5c-0.1,0-0.1,0-0.2,0l-14.3,0c-1.1,0-2-0.9-2-2s0.9-2,2-2l14.3,0c1.1,0,2,0.9,2,2
									C64.2,74.6,63.4,75.4,62.3,75.5z" style={{ fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Tracé_363">
                                                            <path d="M57.6,67.3c0,1.4-1.1,2.6-2.6,2.6c-1.4,0-2.6-1.1-2.6-2.6c0-1.4,1.1-2.6,2.6-2.6S57.6,65.9,57.6,67.3
									C57.6,67.3,57.6,67.3,57.6,67.3" style={{ fill: "#FC5C38" }} />
                                                        </g>
                                                        <g id="Tracé_364">
                                                            <path d="M57.6,79.7c0,1.4-1.1,2.6-2.6,2.6c-1.4,0-2.6-1.1-2.6-2.6c0-1.4,1.1-2.6,2.6-2.6S57.6,78.3,57.6,79.7
									C57.6,79.7,57.6,79.7,57.6,79.7" style={{ fill: "#FC5C38" }} />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        {/* Livre */}
                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 178 178" style={{ enableBackground: "new 0 0 178 178" }}>
                            <g>
                                <g id="Livre">
                                    <g id="Groupe_359" transform="translate(-2279 -468)">
                                        <g id="Ellipse_115">
                                            <circle cx="2368" cy="557" r="89" style={{ fill: "#682D64" }} />
                                        </g>
                                        <g id="Groupe_337" transform="translate(2298.435 522.577) rotate(-13)">
                                            <g>
                                                <g id="Groupe_351">
                                                    <g id="Tracé_339">
                                                        <path d="M0,17.2l0,73.2h2.1c8.7,0.1,42.4,0.8,57.9,8.6c20.5-5.7,41.7-8.6,63-8.6l0-73.2L0,17.2z" style={{ fill: "#39173C" }} />
                                                    </g>
                                                    <g id="Tracé_340">
                                                        <path d="M60,99.1l0-81.5c0,0,9.8-17.6,46.4-17.6v75.3C106.3,75.3,89.2,74.5,60,99.1" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_341">
                                                        <path d="M59.9,99.1l0-81.5c0,0-9.8-17.6-46.4-17.6l0,75.3C13.6,75.3,30.7,74.5,59.9,99.1" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_342">
                                                        <path d="M69.5,39.6c6-5.9,14.2-9.1,22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_343">
                                                        <path d="M69.1,41.1c-0.3-0.1-0.5-0.2-0.7-0.4c-0.6-0.6-0.6-1.5,0-2.1c6.3-6.2,14.9-9.5,23.7-9.3
								c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-8-0.2-15.8,2.8-21.5,8.4C70.2,41,69.6,41.2,69.1,41.1z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_344">
                                                        <path d="M69.5,48c6-5.9,14.2-9.1,22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_345">
                                                        <path d="M69.1,49.4c-0.3-0.1-0.5-0.2-0.7-0.4c-0.6-0.6-0.6-1.5,0-2.1c6.3-6.2,14.9-9.5,23.7-9.3
								c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-8-0.2-15.8,2.8-21.5,8.4C70.1,49.4,69.6,49.5,69.1,49.4z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_346">
                                                        <path d="M69.5,57c6-5.9,14.2-9.1,22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_347">
                                                        <path d="M69.1,58.5c-0.3-0.1-0.5-0.2-0.7-0.4c-0.6-0.6-0.6-1.5,0-2.1c6.3-6.2,14.9-9.5,23.7-9.3
								c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-8-0.2-15.8,2.8-21.5,8.4C70.2,58.5,69.6,58.6,69.1,58.5z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_348">
                                                        <path d="M50.1,39.6c-6-5.9-14.2-9.1-22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_349">
                                                        <path d="M49.7,41.1c-0.3-0.1-0.5-0.2-0.7-0.4c-5.7-5.6-13.5-8.6-21.5-8.4c-0.8,0-1.5-0.6-1.5-1.5
								c0-0.8,0.6-1.5,1.5-1.5c8.8-0.3,17.4,3.1,23.7,9.3c0.6,0.6,0.6,1.5,0,2.1C50.8,41,50.2,41.2,49.7,41.1z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_350">
                                                        <path d="M69.5,31.3c6-5.9,14.2-9.1,22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_351">
                                                        <path d="M69.1,32.7c-0.3-0.1-0.5-0.2-0.7-0.4c-0.6-0.6-0.6-1.5,0-2.1c6.3-6.2,14.9-9.5,23.7-9.3
								c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-8-0.2-15.8,2.8-21.5,8.4C70.2,32.7,69.6,32.8,69.1,32.7z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_352">
                                                        <path d="M50.1,31.3c-6-5.9-14.2-9.1-22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_353">
                                                        <path d="M49.7,32.7c-0.3-0.1-0.5-0.2-0.7-0.4c-5.7-5.6-13.5-8.6-21.5-8.4c-0.8,0-1.5-0.6-1.5-1.5
								c0-0.8,0.6-1.5,1.5-1.5c8.8-0.3,17.4,3.1,23.7,9.3c0.6,0.6,0.6,1.5,0,2.1C50.8,32.7,50.2,32.9,49.7,32.7z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_354">
                                                        <path d="M50.1,48c-6-5.9-14.2-9.1-22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_355">
                                                        <path d="M49.7,49.4c-0.3-0.1-0.5-0.2-0.7-0.4c-5.7-5.6-13.5-8.6-21.5-8.4c-0.8,0-1.5-0.6-1.5-1.5
								c0-0.8,0.6-1.5,1.5-1.5c8.8-0.3,17.4,3.1,23.7,9.3c0.6,0.6,0.6,1.5,0,2.1C50.8,49.4,50.2,49.5,49.7,49.4z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_356">
                                                        <path d="M50.1,57c-6-5.9-14.2-9.1-22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_357">
                                                        <path d="M49.7,58.5c-0.3-0.1-0.5-0.2-0.7-0.4c-5.7-5.6-13.5-8.6-21.5-8.4c-0.8,0-1.5-0.6-1.5-1.5
								c0-0.8,0.6-1.5,1.5-1.5c8.8-0.3,17.4,3.1,23.7,9.3c0.6,0.6,0.6,1.5,0,2.1C50.8,58.5,50.2,58.6,49.7,58.5z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_358">
                                                        <path d="M69.5,65.4c6-5.9,14.2-9.1,22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_359">
                                                        <path d="M69.1,66.8c-0.3-0.1-0.5-0.2-0.7-0.4c-0.6-0.6-0.6-1.5,0-2.1c6.3-6.2,14.9-9.5,23.7-9.3
								c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-8-0.2-15.8,2.8-21.5,8.4C70.1,66.8,69.6,66.9,69.1,66.8z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                    <g id="Tracé_360">
                                                        <path d="M50.1,65.4c-6-5.9-14.2-9.1-22.6-8.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} />
                                                    </g>
                                                    <g id="Tracé_361">
                                                        <path d="M49.7,66.8c-0.3-0.1-0.5-0.2-0.7-0.4c-5.7-5.6-13.5-8.6-21.5-8.4c-0.8,0-1.5-0.6-1.5-1.5
								c0-0.8,0.6-1.5,1.5-1.5c8.8-0.3,17.4,3.1,23.7,9.3c0.6,0.6,0.6,1.5,0,2.1C50.8,66.8,50.2,66.9,49.7,66.8z" style={{ fill: "#FC5C38" }} />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        {/* Portable */}
                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 178 178" style={{ enableBackground: "new 0 0 178 178" }}>
                            <g>
                                <g id="Portable">
                                    <g id="Groupe_360" transform="translate(-2412 -847)">
                                        <g id="Ellipse_116">
                                            <circle cx="2501" cy="936" r="89" style={{ fill: "#F5D1D2" }} />
                                        </g>
                                        <g id="Groupe_339" transform="matrix(0.995, 0.105, -0.105, 0.995, 2396.19, 881.048)">
                                            <g id="Rectangle_168">

                                                <rect x="83.2" y="-18.4" transform="matrix(2.538940e-06 1 -1 2.538940e-06 158.3352 -83.1726)" width="75.2" height="111.9" style={{ fill: "#682D64" }} />
                                            </g>
                                            <g id="Tracé_365">
                                                <path d="M64.7,75.1l-19.6,13H157l19.6-13L64.7,75.1z" style={{ fill: "#39173C" }} />
                                            </g>
                                            <g id="Groupe_357" transform="translate(0 0)">
                                                <g>
                                                    <g id="Groupe_356">
                                                        <g id="Tracé_366">
                                                            <path d="M167.5,68.8H74.1c-2,0-3.6-1.6-3.6-3.6V9.9c0-2,1.6-3.6,3.6-3.6c0,0,0,0,0,0l93.4,0
									c2,0,3.6,1.6,3.6,3.6c0,0,0,0,0,0v55.4C171,67.2,169.4,68.8,167.5,68.8L167.5,68.8" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }} />
                                                        </g>
                                                        <g id="Tracé_367">
                                                            <path d="M130.5,29.3c0,5.4-4.4,9.7-9.7,9.7c-5.4,0-9.7-4.4-9.7-9.7s4.4-9.7,9.7-9.7S130.5,23.9,130.5,29.3
									L130.5,29.3" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FC5C38" }} />
                                                        </g>
                                                        <g id="Tracé_368">
                                                            <path d="M105.9,55.6c0.1-8.2,6.8-14.8,15-14.7c8.1,0.1,14.7,6.6,14.7,14.7" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FC5C38" }} />
                                                        </g>
                                                        <g id="Rectangle_171">
                                                            <path d="M143.8,39.7h20.3c1.1,0,2,0.9,2,2V62c0,1.1-0.9,2-2,2h-20.3c-1.1,0-2-0.9-2-2V41.7
									C141.8,40.6,142.7,39.7,143.8,39.7z" style={{ fill: "#F5D1D2" }} />
                                                            <path d="M164.5,65.5c-0.1,0-0.2,0-0.4,0l-20.3,0c-0.9,0-1.8-0.4-2.5-1c-0.7-0.7-1-1.5-1-2.5l0-20.3
									c0-0.9,0.4-1.8,1-2.5c0.7-0.7,1.5-1,2.5-1l20.3,0c0.9,0,1.8,0.4,2.5,1c0.7,0.7,1,1.5,1,2.5l0,20.3
									C167.7,63.8,166.3,65.3,164.5,65.5z M143.8,41.2c-0.2,0-0.3,0.1-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.4l0,20.3
									c0,0.2,0.1,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.1l20.3,0c0.3,0,0.5-0.2,0.5-0.5l0-20.3c0-0.2-0.1-0.3-0.1-0.4
									c-0.1-0.1-0.2-0.1-0.4-0.1L143.8,41.2C143.8,41.2,143.8,41.2,143.8,41.2z" style={{ fill: "#682D64" }} />
                                                        </g>
                                                        <g id="Tracé_370">
                                                            <path d="M147.5,59.8c0-3.6,2.9-6.5,6.5-6.5c3.6,0,6.5,2.9,6.5,6.5" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#682D64" }} />
                                                        </g>
                                                        <g id="Tracé_369">
                                                            <path d="M158.3,48.2c0,2.4-1.9,4.3-4.3,4.3s-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3S158.3,45.9,158.3,48.2L158.3,48.2
									" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#682D64" }} />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>

                    </div>
                    <img src={`/wp-content/plugins/chacha-gutenberg/assets/images/${image}.png`} alt={props.data.title} />
                </div>
            </div>
        </>
    );
}