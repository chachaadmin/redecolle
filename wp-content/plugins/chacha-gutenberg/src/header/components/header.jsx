import { __ } from '@wordpress/i18n';

export default function Header(props) {

    let images = ["gars", "fille"];
    let image = images[Math.floor(Math.random() * images.length)];
    return (
        <>
            <a href="/" className="logo primary">
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
            </a>
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
                            <g id="Fleche_blanche" data-name="Groupe 318" transform="translate(2927.978 -1400.238) rotate(-45)">
                                <g>
                                    <path id="Tracé_330" data-name="Tracé 330" d="M-3081.565,272.215v26.579h25.836" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                    <path id="Tracé_331" data-name="Tracé 331" d="M-3081.565,298.795l23.194-23.194" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="column-2 chacha-column valign-bottom">

                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 770 930" style={{ enableBackground: "new 0 0 770 930" }}>
                        <g id="Fenetre">
                            <path style={{ fill: "#682D64" }} d="M664.8,495.8c-4.8-152.1-129.6-274-282.8-274s-278.1,121.9-282.8,274H99v435h566v-435H664.8z" />
                        </g>
                        <g id="Perso">

                            <image style={{ overflow: "visible" }} width="660" height="731" href={`/wp-content/plugins/chacha-gutenberg/assets/images/${image}.png`} transform="matrix(1 0 0 1 45.2648 199)">
                            </image>
                        </g>
                        <g id="Laptop">
                            <g>
                                <circle id="Ellipse_100" style={{ fill: "#F5D1D2" }} cx="681" cy="468.8" r="89" />

                                <rect id="Rectangle_168" x="654.8" y="407.9" transform="matrix(0.1049 -0.9945 0.9945 0.1049 158.4139 1103.7675)" style={{ fill: "#682D64" }} width="75.2" height="112" />
                                <path id="Path_365" style={{ fill: "#39173C" }} d="M632.7,495.3l-20.9,10.9L723.2,518l20.9-10.9L632.7,495.3z" />
                                <path id="Path_366" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFFFFF" }} d="M735.6,499.9l-92.9-9.8c-2-0.2-3.4-2-3.2-3.9
			l5.8-55.1c0.2-2,2-3.4,3.9-3.2c0,0,0,0,0,0l92.9,9.8c2,0.2,3.4,2,3.2,3.9c0,0,0,0,0,0l-5.8,55.1
			C739.3,498.7,737.5,500.1,735.6,499.9L735.6,499.9"/>
                                <path id="Path_367" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FC5C38" }} d="M702.9,456.7c-0.6,5.3-5.4,9.2-10.7,8.7
			c-5.3-0.6-9.2-5.4-8.7-10.7c0.6-5.3,5.4-9.2,10.7-8.7C699.6,446.5,703.5,451.3,702.9,456.7L702.9,456.7"/>

                                <path id="Path_368_00000162326758762615428820000004813883127190653836_" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#FC5C38" }} d="
			M675.7,480.2c0.9-8.2,8.3-14,16.5-13.1c8.1,0.9,13.9,8.1,13.1,16.2L675.7,480.2z"/>
                                <path id="Rectangle_171_00000006668919380869963580000005505271326432640142_" style={{ fill: "#F5D1D2" }} d="M715.2,468.4l20.2,2.1
			c1.1,0.1,1.9,1.1,1.8,2.2L735,493c-0.1,1.1-1.1,1.9-2.2,1.8l-20.2-2.1c-1.1-0.1-1.9-1.1-1.8-2.2l2.1-20.2
			C713.1,469.1,714.1,468.3,715.2,468.4z"/>
                                <path style={{ fill: "#682D64" }} d="M733,496.3c-0.1,0-0.2,0-0.4,0l-20.2-2.1c-0.9-0.1-1.8-0.6-2.4-1.3c-0.6-0.7-0.9-1.6-0.8-2.6
			l2.1-20.2c0.1-0.9,0.6-1.8,1.3-2.4s1.6-0.9,2.6-0.8l20.2,2.1c0.9,0.1,1.8,0.6,2.4,1.3c0.6,0.7,0.9,1.6,0.8,2.6l-2.1,20.2
			c-0.1,0.9-0.6,1.8-1.3,2.4C734.6,496,733.8,496.3,733,496.3z M714.9,469.9c-0.2,0-0.3,0.1-0.3,0.1c-0.1,0-0.2,0.2-0.2,0.3
			l-2.1,20.2c0,0.2,0.1,0.3,0.1,0.4c0,0.1,0.2,0.2,0.3,0.2l20.2,2.1c0.2,0,0.3-0.1,0.4-0.1c0.1,0,0.2-0.2,0.2-0.3l2.1-20.2
			c0-0.2-0.1-0.3-0.1-0.4c0-0.1-0.2-0.2-0.3-0.2L714.9,469.9C715,469.9,715,469.9,714.9,469.9z"/>
                                <path id="Path_370" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#682D64" }} d="M716.6,488.8c0.4-3.6,3.6-6.2,7.2-5.8
			c3.6,0.4,6.2,3.6,5.8,7.2"/>
                                <path id="Path_369" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#682D64" }} d="M728.6,478.4c-0.2,2.4-2.4,4.1-4.7,3.8
			c-2.4-0.2-4.1-2.4-3.8-4.7c0.2-2.4,2.4-4.1,4.7-3.8C727.2,473.9,728.9,476.1,728.6,478.4L728.6,478.4"/>
                            </g>
                        </g>
                        <g id="Livre">
                            <g>
                                <circle id="Ellipse_99" style={{ fill: "#682D64" }} cx="548" cy="89.8" r="89" />
                                <path id="Path_339" style={{ fill: "#39173C" }} d="M482.3,72.1l16.5,71.3l2-0.5c8.4-1.9,41.5-8.8,58.4-4.6
			c18.7-10.2,38.7-17.8,59.5-22.6l-16.5-71.3L482.3,72.1z"/>
                                <path id="Path_340" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} d="M559.1,138.4L540.8,59c0,0,5.6-19.3,41.2-27.6
			l16.9,73.4C599,104.8,582.1,107.9,559.1,138.4"/>
                                <path id="Path_341" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} d="M559.1,138.4L540.8,59c0,0-13.5-14.9-49.1-6.7
			l16.9,73.4C508.6,125.7,525.1,121.1,559.1,138.4"/>
                                <path style={{ fill: "#FC5C38" }} d="M555,79.8c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.4-0.9-1.4-0.5-2.1c4.7-7.4,12.4-12.6,21-14.4
			c0.8-0.2,1.6,0.4,1.8,1.2c0.2,0.8-0.4,1.6-1.2,1.8c-7.8,1.6-14.8,6.3-19,13C556,79.5,555.5,79.8,555,79.8z"/>
                                <path style={{ fill: "#FC5C38" }} d="M556.9,87.9c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.4-0.9-1.4-0.5-2.1c4.7-7.4,12.4-12.6,21-14.4
			c0.8-0.2,1.6,0.4,1.8,1.2c0.2,0.8-0.4,1.6-1.2,1.8c-7.8,1.6-14.8,6.3-19,13C557.9,87.7,557.4,87.9,556.9,87.9z"/>
                                <path style={{ fill: "#FC5C38" }} d="M559,96.8c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.4-0.9-1.4-0.5-2.1c4.7-7.4,12.4-12.6,21-14.4
			c0.8-0.2,1.6,0.4,1.8,1.2c0.2,0.8-0.4,1.6-1.2,1.8c-7.8,1.6-14.8,6.3-19,13C559.9,96.5,559.5,96.8,559,96.8z"/>
                                <path style={{ fill: "#FC5C38" }} d="M536.1,84.2c-0.3,0-0.5-0.1-0.8-0.2c-6.8-4.2-15.1-5.4-22.8-3.4c-0.8,0.2-1.6-0.3-1.8-1.1
			c-0.2-0.8,0.3-1.6,1.1-1.8c8.5-2.2,17.7-0.9,25.2,3.7c0.7,0.4,0.9,1.4,0.5,2.1C537.1,83.9,536.6,84.2,536.1,84.2z"/>
                                <path style={{ fill: "#FC5C38" }} d="M553.2,71.7c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.4-0.9-1.4-0.5-2.1c4.7-7.4,12.4-12.6,21-14.4
			c0.8-0.2,1.6,0.4,1.8,1.2c0.2,0.8-0.4,1.6-1.2,1.8c-7.8,1.6-14.8,6.3-19,13C554.1,71.4,553.7,71.7,553.2,71.7z"/>
                                <path style={{ fill: "#FC5C38" }} d="M534.3,76c-0.3,0-0.5-0.1-0.8-0.2c-6.8-4.2-15.1-5.4-22.8-3.4c-0.8,0.2-1.6-0.3-1.8-1.1
			s0.3-1.6,1.1-1.8c8.5-2.2,17.7-0.9,25.2,3.7c0.7,0.4,0.9,1.4,0.5,2.1C535.3,75.8,534.8,76,534.3,76z"/>
                                <path style={{ fill: "#FC5C38" }} d="M538,92.3c-0.3,0-0.5-0.1-0.8-0.2c-6.8-4.2-15.1-5.4-22.8-3.4c-0.8,0.2-1.6-0.3-1.8-1.1
			c-0.2-0.8,0.3-1.6,1.1-1.8c8.5-2.2,17.7-0.9,25.2,3.7c0.7,0.4,0.9,1.4,0.5,2.1C539,92,538.5,92.3,538,92.3z"/>
                                <path style={{ fill: "#FC5C38" }} d="M540.1,101.1c-0.3,0-0.5-0.1-0.8-0.2c-6.8-4.2-15.1-5.4-22.8-3.4c-0.8,0.2-1.6-0.3-1.8-1.1
			s0.3-1.6,1.1-1.8c8.5-2.2,17.7-0.9,25.2,3.7c0.7,0.4,0.9,1.4,0.5,2.1C541.1,100.9,540.6,101.1,540.1,101.1z"/>
                                <path style={{ fill: "#FC5C38" }} d="M560.8,104.9c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.4-0.9-1.4-0.5-2.1c4.7-7.4,12.4-12.6,21-14.4
			c0.8-0.2,1.6,0.4,1.8,1.2c0.2,0.8-0.4,1.6-1.2,1.8c-7.8,1.6-14.8,6.3-19,13C561.8,104.7,561.3,104.9,560.8,104.9z"/>
                                <path style={{ fill: "#FC5C38" }} d="M541.9,109.3c-0.3,0-0.5-0.1-0.8-0.2c-6.8-4.2-15.1-5.4-22.8-3.4c-0.8,0.2-1.6-0.3-1.8-1.1
			s0.3-1.6,1.1-1.8c8.5-2.2,17.7-0.9,25.2,3.7c0.7,0.4,0.9,1.4,0.5,2.1C542.9,109,542.4,109.3,541.9,109.3z"/>
                            </g>
                        </g>
                        <g id="Calculatrice">
                            <g>
                                <circle id="Ellipse_98" style={{ fill: "#39173C" }} cx="206" cy="146.8" r="89" />

                                <rect id="Rectangle_165" x="194.9" y="76.9" transform="matrix(8.701806e-02 -0.9962 0.9962 8.701806e-02 76.6488 312.5078)" style={{ fill: "#FC5C38" }} width="27.8" height="75.1" />

                                <rect id="Rectangle_166" x="172.4" y="123" transform="matrix(8.701806e-02 -0.9962 0.9962 8.701806e-02 26.9981 350.6225)" style={{ fill: "#682D64" }} width="64.9" height="75.1" />

                                <rect x="159.7" y="109.2" transform="matrix(8.701806e-02 -0.9962 0.9962 8.701806e-02 41.8877 339.1924)" style={{ fill: "none" }} width="92.6" height="75.1" />
                                <path id="Path_362" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F5D1D2" }} d="M227.1,124.8l-37.4-3.3
			c-4.5-0.4-7.9-4.4-7.5-8.9s4.4-7.9,8.9-7.5l37.4,3.3c4.5,0.4,7.9,4.4,7.5,8.9C235.6,121.8,231.6,125.2,227.1,124.8"/>
                                <path style={{ fill: "#FFFFFF" }} d="M199.4,144.9l-6.9-0.6l0.6-6.9c0.1-1.1-0.7-2.1-1.8-2.2c-1.1-0.1-2.1,0.7-2.2,1.8l-0.6,6.9
			l-6.9-0.6c-1.1-0.1-2.1,0.7-2.2,1.8c-0.1,1.1,0.7,2.1,1.8,2.2l6.9,0.6l-0.6,6.9c-0.1,1.1,0.7,2.1,1.8,2.2c0.1,0,0.1,0,0.2,0
			c1,0,1.9-0.8,2-1.8l0.6-6.9l6.9,0.6c0.1,0,0.1,0,0.2,0c1,0,1.9-0.8,2-1.8C201.3,146,200.5,145,199.4,144.9z"/>
                                <path style={{ fill: "#FFFFFF" }} d="M196.4,165.4c-0.7-0.8-2-1-2.8-0.2l-5.3,4.5l-4.5-5.3c-0.7-0.8-2-1-2.8-0.2c-0.8,0.7-1,2-0.2,2.8
			l4.5,5.3l-5.3,4.5c-0.8,0.7-1,2-0.2,2.8c0.4,0.5,1,0.7,1.5,0.7c0.5,0,0.9-0.2,1.3-0.5l5.3-4.5l4.5,5.3c0.4,0.5,1,0.7,1.5,0.7
			c0.5,0,0.9-0.2,1.3-0.5c0.8-0.7,1-2,0.2-2.8l-4.5-5.3l5.3-4.5C197,167.5,197.1,166.3,196.4,165.4z"/>
                                <path style={{ fill: "#FFFFFF" }} d="M230.4,151.7c-0.1,0-0.1,0-0.2,0l-14.3-1.2c-1.1-0.1-1.9-1.1-1.8-2.2c0.1-1.1,1.1-1.9,2.2-1.8
			l14.3,1.2c1.1,0.1,1.9,1.1,1.8,2.2C232.3,150.9,231.5,151.7,230.4,151.7z"/>
                                <path style={{ fill: "#FFFFFF" }} d="M228.1,178c-0.1,0-0.1,0-0.2,0l-14.3-1.2c-1.1-0.1-1.9-1.1-1.8-2.2c0.1-1.1,1.1-1.9,2.2-1.8
			l14.3,1.2c1.1,0.1,1.9,1.1,1.8,2.2C230,177.2,229.2,178,228.1,178z"/>
                                <path id="Path_363" style={{ fill: "#FC5C38" }} d="M224.1,169.4c-0.1,1.4-1.4,2.4-2.8,2.3c-1.4-0.1-2.4-1.4-2.3-2.8
			c0.1-1.4,1.4-2.4,2.8-2.3C223.2,166.8,224.2,168,224.1,169.4C224.1,169.4,224.1,169.4,224.1,169.4"/>
                                <path id="Path_364" style={{ fill: "#FC5C38" }} d="M223,181.8c-0.1,1.4-1.4,2.4-2.8,2.3c-1.4-0.1-2.4-1.4-2.3-2.8
			c0.1-1.4,1.4-2.4,2.8-2.3C222.1,179.1,223.1,180.3,223,181.8C223,181.8,223,181.8,223,181.8"/>
                            </g>
                        </g>
                        <g id="Sourire">
                            <g>
                                <circle id="Ellipse_90" style={{ fill: "#F1BF45" }} cx="89" cy="406.8" r="89" />
                                <path id="Path_335" style={{ fill: "#682D64" }} d="M78.5,388.2c2.6,11.4,0.3,21.6-5,22.8c-5.3,1.2-11.7-7.1-14.2-18.5
			c-2.6-11.4-0.3-21.6,5-22.8C69.5,368.5,75.9,376.7,78.5,388.2"/>
                                <path id="Path_336" style={{ fill: "#682D64" }} d="M108.8,381.4c2.6,11.4,0.3,21.6-5,22.8c-5.3,1.2-11.7-7.1-14.2-18.5
			s-0.3-21.6,5-22.8C99.8,361.7,106.2,370,108.8,381.4"/>
                                <path style={{ fill: "#682D64" }} d="M139.3,397.3l-18.8-0.3c-0.9,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5l8.4,0.1
			c4.5,22.1-9.5,43.2-32,48.1c-3.2,0.7-6.3,1-9.4,1c-18.8,0-35.2-12.3-39.7-31l7.1-3.9c0.7-0.4,1-1.3,0.6-2c-0.4-0.7-1.3-1-2-0.6
			l-16.1,8.8c-0.7,0.4-1,1.3-0.6,2c0.3,0.5,0.8,0.8,1.3,0.8c0.2,0,0.5-0.1,0.7-0.2l6.3-3.5c5.1,19.6,22.5,32.5,42.4,32.5
			c3.3,0,6.7-0.4,10-1.1c24-5.2,38.9-27.5,34.4-51l7.4,0.1c0,0,0,0,0,0c0.8,0,1.5-0.7,1.5-1.5C140.8,398,140.1,397.3,139.3,397.3z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </>
    );
}