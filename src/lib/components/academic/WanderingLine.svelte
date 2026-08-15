<style>
    .rainy-court {
        width: 100%;
        margin: 0;
        color: var(--muted-strong);
    }

    .rainy-court svg {
        width: 100%;
        height: auto;
        display: block;
        overflow: visible;
    }

    .rainy-court__cloud {
        color: var(--muted-strong);
        animation: cloud-drift 10s ease-in-out infinite alternate;
    }

    .rainy-court__cloud--one {
        animation-delay: -2s;
    }

    .rainy-court__cloud--two {
        animation-duration: 13s;
        animation-delay: -7s;
    }

    .rainy-court__cloud--three {
        animation-duration: 11s;
        animation-delay: -4s;
    }

    .rainy-court__cloud-shadow {
        fill: color-mix(in srgb, var(--muted-strong) 10%, transparent);
        stroke: none;
    }

    .rainy-court__rain line {
        stroke: var(--accent-muted);
        stroke-width: 1.05;
        stroke-linecap: round;
        opacity: 0;
        animation: rain-fall 1.55s linear infinite;
    }

    .rainy-court__rain--late line {
        animation-delay: -0.45s;
    }

    .rainy-court__rain--later line {
        animation-delay: -0.9s;
    }

    .rainy-court__splash path {
        fill: none;
        stroke: var(--accent-muted);
        stroke-linecap: round;
        stroke-width: 0.8;
        opacity: 0;
        transform-box: fill-box;
        transform-origin: center bottom;
        animation: rain-splash 1.55s linear infinite;
    }

    .rainy-court__splash--late path {
        animation-delay: -0.45s;
    }

    .rainy-court__splash--later path {
        animation-delay: -0.9s;
    }

    .rainy-court__backboard,
    .rainy-court__net,
    .rainy-court__stand {
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .rainy-court__stand {
        fill: none;
        opacity: 0.72;
        stroke-width: 1.6;
    }

    .rainy-court__backboard {
        fill: color-mix(in srgb, var(--muted-strong) 6%, var(--canvas));
        opacity: 0.9;
        stroke-width: 1.4;
    }

    .rainy-court__target {
        fill: none;
        opacity: 0.64;
        stroke: currentColor;
        stroke-width: 1;
    }

    .rainy-court__hoop {
        color: var(--accent-strong);
        fill: color-mix(in srgb, var(--accent-strong) 10%, var(--canvas));
        stroke: currentColor;
        stroke-width: 1.65;
    }

    .rainy-court__net {
        fill: none;
        opacity: 0.55;
        stroke-width: 0.78;
    }

    .rainy-court__base {
        fill: color-mix(in srgb, var(--muted-strong) 13%, var(--canvas));
        opacity: 0.8;
        stroke: currentColor;
        stroke-width: 1.15;
    }

    .rainy-court__ball {
        color: var(--accent-strong);
        transform-box: fill-box;
        transform-origin: center;
        animation: ball-rest 5.8s ease-in-out infinite;
    }

    .rainy-court__ball circle {
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
    }

    .rainy-court__ball path {
        fill: none;
        stroke: currentColor;
        stroke-width: 1.25;
    }

    .rainy-court__motto {
        fill: var(--accent-strong);
        font-family: var(--font-display);
        font-size: 14px;
        font-style: italic;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-anchor: middle;
        animation: motto-breathe 8s ease-in-out infinite;
    }

    @keyframes cloud-drift {
        from {
            transform: translate3d(-0.35rem, 0, 0);
        }

        to {
            transform: translate3d(0.8rem, -0.12rem, 0);
        }
    }

    @keyframes rain-fall {
        0% {
            opacity: 0;
            transform: translateY(0);
        }

        12%,
        82% {
            opacity: 0.76;
        }

        100% {
            opacity: 0;
            transform: translateY(88px);
        }
    }

    @keyframes rain-splash {
        0%,
        82% {
            opacity: 0;
            transform: translateY(2px);
        }

        88% {
            opacity: 0.72;
            transform: translateY(0);
        }

        100% {
            opacity: 0;
            transform: translateY(-4px);
        }
    }

    @keyframes ball-rest {
        0%,
        30%,
        100% {
            transform: translate3d(-0.18rem, 0, 0) rotate(-4deg);
        }

        42% {
            transform: translate3d(0, -0.42rem, 0) rotate(7deg);
        }

        54%,
        84% {
            transform: translate3d(0.18rem, 0, 0) rotate(12deg);
        }
    }

    @keyframes motto-breathe {
        0%,
        100% {
            opacity: 0.66;
        }

        50% {
            opacity: 1;
        }
    }

    @media (max-width: 700px) {
        .rainy-court__motto {
            font-size: 19px;
            font-weight: 600;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .rainy-court__ball,
        .rainy-court__cloud,
        .rainy-court__motto,
        .rainy-court__rain line,
        .rainy-court__splash path {
            animation: none;
        }

        .rainy-court__rain line {
            opacity: 0.5;
        }

        .rainy-court__ball {
            transform: none;
        }
    }
</style>

<figure class="rainy-court">
    <svg viewBox="0 0 280 190" role="img" aria-label="A basketball court in gentle moving rain with the words life is beautiful">
        <defs>
            <g id="rain-cloud-wide">
                <path
                    d="M3 22 C3.6 16.4 8 12.8 13.5 13 C16.4 5.6 27.7 3.4 33.7 10.1 C37.2 7.2 42.6 6.9 46.5 9.5 C50.3 12 51.2 15.2 50.8 18.3 C56 18.5 59.4 21.5 60 26 H1 C1 24.2 1.7 22.9 3 22 Z"
                    fill="color-mix(in srgb, currentColor 12%, var(--canvas))"
                    stroke="currentColor"
                    stroke-width="0.9"
                />
                <path class="rainy-court__cloud-shadow" d="M6 22 C18 24.5 43 24.5 56 21.8 C54.9 25.1 52.1 27 48 27 H10 C7.9 27 6.5 25.2 6 22 Z" />
            </g>
            <g id="rain-cloud-tall">
                <path
                    d="M4 23 C4 17.8 8.2 14 13.2 14 C13.2 6.6 19 1.5 26.1 2.3 C31.8 2.9 35.7 7.3 36.1 12.4 C44.2 9.3 52.8 14.4 52.8 22 C57 22.2 60 25.3 60 29 H2 C2 26.8 2.7 24.8 4 23 Z"
                    fill="color-mix(in srgb, currentColor 14%, var(--canvas))"
                    stroke="currentColor"
                    stroke-width="0.9"
                />
                <path class="rainy-court__cloud-shadow" d="M6 24 C18 27.5 43 27.5 56 24 C55.3 27.6 52.4 30 48 30 H11 C8.2 30 6.5 27.8 6 24 Z" />
            </g>
            <g id="rain-cloud-soft">
                <path
                    d="M5 19 C7 13.9 11.6 11.6 16 12.4 C19.8 5.7 29.9 4.9 34.7 11 C40.6 8.9 47.3 12.5 48.7 18.5 C54.7 18.2 59.1 21.9 60 27 H2 C1.8 23.6 2.9 20.8 5 19 Z"
                    fill="color-mix(in srgb, currentColor 11%, var(--canvas))"
                    stroke="currentColor"
                    stroke-width="0.9"
                />
                <path class="rainy-court__cloud-shadow" d="M5 22.5 C18 25.5 44 25.2 57 22.4 C56.2 26 53.6 28 49 28 H10 C7.4 28 5.7 25.5 5 22.5 Z" />
            </g>
        </defs>

        <g class="rainy-court__cloud rainy-court__cloud--one"><use href="#rain-cloud-wide" transform="translate(18 7) scale(0.95)" /></g>
        <g class="rainy-court__cloud rainy-court__cloud--two"><use href="#rain-cloud-tall" transform="translate(96 3) scale(0.9)" /></g>
        <g class="rainy-court__cloud rainy-court__cloud--three"><use href="#rain-cloud-soft" transform="translate(174 9) scale(1.02)" /></g>

        <g class="rainy-court__rain">
            <line x1="20" x2="17" y1="47" y2="57" />
            <line x1="67" x2="64" y1="47" y2="57" />
            <line x1="114" x2="111" y1="47" y2="57" />
            <line x1="161" x2="158" y1="47" y2="57" />
            <line x1="208" x2="205" y1="47" y2="57" />
            <line x1="255" x2="252" y1="47" y2="57" />
        </g>
        <g class="rainy-court__rain rainy-court__rain--late">
            <line x1="37" x2="34" y1="50" y2="60" />
            <line x1="84" x2="81" y1="50" y2="60" />
            <line x1="131" x2="128" y1="50" y2="60" />
            <line x1="178" x2="175" y1="50" y2="60" />
            <line x1="225" x2="222" y1="50" y2="60" />
            <line x1="272" x2="269" y1="50" y2="60" />
        </g>
        <g class="rainy-court__rain rainy-court__rain--later">
            <line x1="5" x2="2" y1="54" y2="64" />
            <line x1="52" x2="49" y1="54" y2="64" />
            <line x1="99" x2="96" y1="54" y2="64" />
            <line x1="146" x2="143" y1="54" y2="64" />
            <line x1="193" x2="190" y1="54" y2="64" />
            <line x1="240" x2="237" y1="54" y2="64" />
        </g>

        <g class="rainy-court__splash">
            <path d="M14 146 Q20 141 26 146 M18 144 L16 140 M22 144 L25 140 M108 146 Q114 141 120 146 M112 144 L110 140 M116 144 L119 140 M202 146 Q208 141 214 146 M206 144 L204 140 M210 144 L213 140" />
        </g>
        <g class="rainy-court__splash rainy-court__splash--late">
            <path d="M31 146 Q37 141 43 146 M35 144 L33 140 M39 144 L42 140 M125 146 Q131 141 137 146 M129 144 L127 140 M133 144 L136 140 M219 146 Q225 141 231 146 M223 144 L221 140 M227 144 L230 140" />
        </g>
        <g class="rainy-court__splash rainy-court__splash--later">
            <path d="M46 146 Q52 141 58 146 M50 144 L48 140 M54 144 L57 140 M140 146 Q146 141 152 146 M144 144 L142 140 M148 144 L151 140 M234 146 Q240 141 246 146 M238 144 L236 140 M242 144 L245 140" />
        </g>

        <g class="rainy-court__basket">
            <path class="rainy-court__stand" d="M248 82 C254 83 257 87 257 93 V142 M244 69 C251 71 254 75 255 83" />
            <path class="rainy-court__base" d="M247 141 H265 L269 149 H241 Z" />
            <rect class="rainy-court__backboard" x="205" y="62" width="42" height="29" rx="2.2" />
            <rect class="rainy-court__target" x="213" y="70" width="25" height="15" rx="1" />
            <ellipse class="rainy-court__hoop" cx="213" cy="91" rx="15" ry="3.2" />
            <path class="rainy-court__net" d="M199 92 C201 99 204 106 207 111 H219 C222 106 225 99 227 92 M204 94 L208 111 M211 94 L211 111 M219 94 L216 111 M202 99 C209 101 217 101 224 99 M205 105 C211 107 217 107 221 105" />
        </g>

        <g transform="translate(165 136)">
            <g class="rainy-court__ball">
                <circle cx="0" cy="0" r="10" />
                <path d="M-9.8 0 H9.8 M0 -9.8 V9.8 M-7 -6.9 C-2 -3.1 -2 3.1 -7 6.9 M7 -6.9 C2 -3.1 2 3.1 7 6.9" />
            </g>
        </g>

        <text class="rainy-court__motto" x="140" y="185">Life Is Beautiful</text>
    </svg>
</figure>
