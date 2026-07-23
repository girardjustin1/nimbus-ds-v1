/**
 * Nimbus color scales — extracted from the Figma variable panel screenshots in
 * `reference/colors/072326/`.
 *
 * The screenshots are Display P3 captures; each was converted to sRGB and the
 * centre of every swatch sampled, so these hexes match the Figma source values
 * (spot-checked against the theme: Brand 500 = #DA6EA3, 600 = #C33F79).
 *
 * Presentation data only — NOT wired into theme.css or any component.
 *
 * 25 scales x 12 steps = 300 colors.
 */

export interface ColorStep {
    /** Scale step, e.g. "25" … "950". */
    step: string;
    /** Uppercase sRGB hex, e.g. "#DA6EA3". */
    hex: string;
}

export interface ColorScale {
    /** Scale name as it appears in Figma, e.g. "Gray blue". */
    name: string;
    steps: ColorStep[];
}

export const colorScales: ColorScale[] = [
    {
        "name": "Brand",
        "steps": [
            {
                "step": "25",
                "hex": "#FEF9FC"
            },
            {
                "step": "50",
                "hex": "#FDF4F8"
            },
            {
                "step": "100",
                "hex": "#FAEAF4"
            },
            {
                "step": "200",
                "hex": "#F5D5E7"
            },
            {
                "step": "300",
                "hex": "#EEB4D4"
            },
            {
                "step": "400",
                "hex": "#E383B5"
            },
            {
                "step": "500",
                "hex": "#DA6EA3"
            },
            {
                "step": "600",
                "hex": "#C33F79"
            },
            {
                "step": "700",
                "hex": "#A82E61"
            },
            {
                "step": "800",
                "hex": "#8B2A51"
            },
            {
                "step": "900",
                "hex": "#752646"
            },
            {
                "step": "950",
                "hex": "#461126"
            }
        ]
    },
    {
        "name": "Gray blue",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFD"
            },
            {
                "step": "50",
                "hex": "#F8F9FC"
            },
            {
                "step": "100",
                "hex": "#EBECF5"
            },
            {
                "step": "200",
                "hex": "#D5D9EC"
            },
            {
                "step": "300",
                "hex": "#B3B8DB"
            },
            {
                "step": "400",
                "hex": "#717BBC"
            },
            {
                "step": "500",
                "hex": "#4F5BA6"
            },
            {
                "step": "600",
                "hex": "#3E4784"
            },
            {
                "step": "700",
                "hex": "#363F73"
            },
            {
                "step": "800",
                "hex": "#293057"
            },
            {
                "step": "900",
                "hex": "#0F1323"
            },
            {
                "step": "950",
                "hex": "#0C0F1C"
            }
        ]
    },
    {
        "name": "Gray cool",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFD"
            },
            {
                "step": "50",
                "hex": "#F9F9FB"
            },
            {
                "step": "100",
                "hex": "#F0F1F5"
            },
            {
                "step": "200",
                "hex": "#DDDFEA"
            },
            {
                "step": "300",
                "hex": "#BAC0D4"
            },
            {
                "step": "400",
                "hex": "#7D89B0"
            },
            {
                "step": "500",
                "hex": "#5D6B98"
            },
            {
                "step": "600",
                "hex": "#4A5578"
            },
            {
                "step": "700",
                "hex": "#404968"
            },
            {
                "step": "800",
                "hex": "#30374F"
            },
            {
                "step": "900",
                "hex": "#101322"
            },
            {
                "step": "950",
                "hex": "#0D101B"
            }
        ]
    },
    {
        "name": "Gray modern",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFD"
            },
            {
                "step": "50",
                "hex": "#F9FAFC"
            },
            {
                "step": "100",
                "hex": "#EEF2F6"
            },
            {
                "step": "200",
                "hex": "#E3E8F0"
            },
            {
                "step": "300",
                "hex": "#CED5DF"
            },
            {
                "step": "400",
                "hex": "#9AA4B2"
            },
            {
                "step": "500",
                "hex": "#697587"
            },
            {
                "step": "600",
                "hex": "#4B5565"
            },
            {
                "step": "700",
                "hex": "#364152"
            },
            {
                "step": "800",
                "hex": "#202939"
            },
            {
                "step": "900",
                "hex": "#121926"
            },
            {
                "step": "950",
                "hex": "#0D121C"
            }
        ]
    },
    {
        "name": "Gray neutral",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFD"
            },
            {
                "step": "50",
                "hex": "#F9FAFB"
            },
            {
                "step": "100",
                "hex": "#F3F4F6"
            },
            {
                "step": "200",
                "hex": "#E6E7EB"
            },
            {
                "step": "300",
                "hex": "#D2D6DC"
            },
            {
                "step": "400",
                "hex": "#9EA4AE"
            },
            {
                "step": "500",
                "hex": "#6D737F"
            },
            {
                "step": "600",
                "hex": "#4D5761"
            },
            {
                "step": "700",
                "hex": "#384250"
            },
            {
                "step": "800",
                "hex": "#1F2A37"
            },
            {
                "step": "900",
                "hex": "#101927"
            },
            {
                "step": "950",
                "hex": "#0D121C"
            }
        ]
    },
    {
        "name": "Gray iron",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFC"
            },
            {
                "step": "50",
                "hex": "#FAFAFA"
            },
            {
                "step": "100",
                "hex": "#F4F4F5"
            },
            {
                "step": "200",
                "hex": "#E4E4E7"
            },
            {
                "step": "300",
                "hex": "#D1D1D6"
            },
            {
                "step": "400",
                "hex": "#A0A0AB"
            },
            {
                "step": "500",
                "hex": "#70707B"
            },
            {
                "step": "600",
                "hex": "#51525C"
            },
            {
                "step": "700",
                "hex": "#3F3F47"
            },
            {
                "step": "800",
                "hex": "#26272C"
            },
            {
                "step": "900",
                "hex": "#1A1A1E"
            },
            {
                "step": "950",
                "hex": "#131317"
            }
        ]
    },
    {
        "name": "Gray true",
        "steps": [
            {
                "step": "25",
                "hex": "#FCFCFC"
            },
            {
                "step": "50",
                "hex": "#F7F7F7"
            },
            {
                "step": "100",
                "hex": "#F5F5F5"
            },
            {
                "step": "200",
                "hex": "#E5E5E5"
            },
            {
                "step": "300",
                "hex": "#D6D6D6"
            },
            {
                "step": "400",
                "hex": "#A3A3A3"
            },
            {
                "step": "500",
                "hex": "#737373"
            },
            {
                "step": "600",
                "hex": "#525252"
            },
            {
                "step": "700",
                "hex": "#424242"
            },
            {
                "step": "800",
                "hex": "#292929"
            },
            {
                "step": "900",
                "hex": "#141414"
            },
            {
                "step": "950",
                "hex": "#0F0F0F"
            }
        ]
    },
    {
        "name": "Gray warm",
        "steps": [
            {
                "step": "25",
                "hex": "#FDFDFC"
            },
            {
                "step": "50",
                "hex": "#FAFAF9"
            },
            {
                "step": "100",
                "hex": "#F5F5F4"
            },
            {
                "step": "200",
                "hex": "#E7E5E4"
            },
            {
                "step": "300",
                "hex": "#D8D3D1"
            },
            {
                "step": "400",
                "hex": "#A9A29D"
            },
            {
                "step": "500",
                "hex": "#79726B"
            },
            {
                "step": "600",
                "hex": "#58534F"
            },
            {
                "step": "700",
                "hex": "#45403D"
            },
            {
                "step": "800",
                "hex": "#292524"
            },
            {
                "step": "900",
                "hex": "#1B1917"
            },
            {
                "step": "950",
                "hex": "#171412"
            }
        ]
    },
    {
        "name": "Green light",
        "steps": [
            {
                "step": "25",
                "hex": "#FAFEF5"
            },
            {
                "step": "50",
                "hex": "#F3FEE7"
            },
            {
                "step": "100",
                "hex": "#E4FBCC"
            },
            {
                "step": "200",
                "hex": "#D0F8AB"
            },
            {
                "step": "300",
                "hex": "#A6EF68"
            },
            {
                "step": "400",
                "hex": "#85E13A"
            },
            {
                "step": "500",
                "hex": "#66C61D"
            },
            {
                "step": "600",
                "hex": "#4CA30F"
            },
            {
                "step": "700",
                "hex": "#3B7D0D"
            },
            {
                "step": "800",
                "hex": "#326213"
            },
            {
                "step": "900",
                "hex": "#2C5314"
            },
            {
                "step": "950",
                "hex": "#152A0A"
            }
        ]
    },
    {
        "name": "Green",
        "steps": [
            {
                "step": "25",
                "hex": "#F7FEFA"
            },
            {
                "step": "50",
                "hex": "#EDFCF2"
            },
            {
                "step": "100",
                "hex": "#D3F8DF"
            },
            {
                "step": "200",
                "hex": "#AAF0C4"
            },
            {
                "step": "300",
                "hex": "#74E3A3"
            },
            {
                "step": "400",
                "hex": "#3DCB7F"
            },
            {
                "step": "500",
                "hex": "#14B464"
            },
            {
                "step": "600",
                "hex": "#079251"
            },
            {
                "step": "700",
                "hex": "#0A7444"
            },
            {
                "step": "800",
                "hex": "#085C37"
            },
            {
                "step": "900",
                "hex": "#094C2F"
            },
            {
                "step": "950",
                "hex": "#062E1B"
            }
        ]
    },
    {
        "name": "Cyan",
        "steps": [
            {
                "step": "25",
                "hex": "#F5FEFF"
            },
            {
                "step": "50",
                "hex": "#ECFEFF"
            },
            {
                "step": "100",
                "hex": "#CFF9FE"
            },
            {
                "step": "200",
                "hex": "#A6F0FC"
            },
            {
                "step": "300",
                "hex": "#68E3F9"
            },
            {
                "step": "400",
                "hex": "#24CCEE"
            },
            {
                "step": "500",
                "hex": "#02AFD4"
            },
            {
                "step": "600",
                "hex": "#0C8AB2"
            },
            {
                "step": "700",
                "hex": "#0F7190"
            },
            {
                "step": "800",
                "hex": "#165B76"
            },
            {
                "step": "900",
                "hex": "#164C63"
            },
            {
                "step": "950",
                "hex": "#0D2D3A"
            }
        ]
    },
    {
        "name": "Blue",
        "steps": [
            {
                "step": "25",
                "hex": "#F5FAFF"
            },
            {
                "step": "50",
                "hex": "#EFF8FF"
            },
            {
                "step": "100",
                "hex": "#D2E9FF"
            },
            {
                "step": "200",
                "hex": "#B2DDFF"
            },
            {
                "step": "300",
                "hex": "#85CAFF"
            },
            {
                "step": "400",
                "hex": "#53B1FD"
            },
            {
                "step": "500",
                "hex": "#2E90FB"
            },
            {
                "step": "600",
                "hex": "#1671EF"
            },
            {
                "step": "700",
                "hex": "#175CD3"
            },
            {
                "step": "800",
                "hex": "#1849A9"
            },
            {
                "step": "900",
                "hex": "#194186"
            },
            {
                "step": "950",
                "hex": "#102B56"
            }
        ]
    },
    {
        "name": "Blue dark",
        "steps": [
            {
                "step": "25",
                "hex": "#F6F8FF"
            },
            {
                "step": "50",
                "hex": "#EFF4FF"
            },
            {
                "step": "100",
                "hex": "#D1E0FF"
            },
            {
                "step": "200",
                "hex": "#B2CCFF"
            },
            {
                "step": "300",
                "hex": "#85ADFF"
            },
            {
                "step": "400",
                "hex": "#538BFF"
            },
            {
                "step": "500",
                "hex": "#2870FF"
            },
            {
                "step": "600",
                "hex": "#155EF0"
            },
            {
                "step": "700",
                "hex": "#004EEB"
            },
            {
                "step": "800",
                "hex": "#0040C1"
            },
            {
                "step": "900",
                "hex": "#00359E"
            },
            {
                "step": "950",
                "hex": "#002266"
            }
        ]
    },
    {
        "name": "Indigo",
        "steps": [
            {
                "step": "25",
                "hex": "#F6F8FF"
            },
            {
                "step": "50",
                "hex": "#EEF4FF"
            },
            {
                "step": "100",
                "hex": "#E0EAFF"
            },
            {
                "step": "200",
                "hex": "#C7D8FE"
            },
            {
                "step": "300",
                "hex": "#A5BCFD"
            },
            {
                "step": "400",
                "hex": "#8099F9"
            },
            {
                "step": "500",
                "hex": "#6273F3"
            },
            {
                "step": "600",
                "hex": "#454CE8"
            },
            {
                "step": "700",
                "hex": "#3638CD"
            },
            {
                "step": "800",
                "hex": "#2D31A6"
            },
            {
                "step": "900",
                "hex": "#2D3282"
            },
            {
                "step": "950",
                "hex": "#1F235B"
            }
        ]
    },
    {
        "name": "Violet",
        "steps": [
            {
                "step": "25",
                "hex": "#FBFAFF"
            },
            {
                "step": "50",
                "hex": "#F5F3FF"
            },
            {
                "step": "100",
                "hex": "#EDE9FE"
            },
            {
                "step": "200",
                "hex": "#DDD6FE"
            },
            {
                "step": "300",
                "hex": "#C3B6FD"
            },
            {
                "step": "400",
                "hex": "#A48AFB"
            },
            {
                "step": "500",
                "hex": "#875BF8"
            },
            {
                "step": "600",
                "hex": "#783AEE"
            },
            {
                "step": "700",
                "hex": "#6927DA"
            },
            {
                "step": "800",
                "hex": "#5820B7"
            },
            {
                "step": "900",
                "hex": "#4A1C96"
            },
            {
                "step": "950",
                "hex": "#2F125E"
            }
        ]
    },
    {
        "name": "Purple",
        "steps": [
            {
                "step": "25",
                "hex": "#FAFAFF"
            },
            {
                "step": "50",
                "hex": "#F4F3FF"
            },
            {
                "step": "100",
                "hex": "#EBE9FE"
            },
            {
                "step": "200",
                "hex": "#DAD6FE"
            },
            {
                "step": "300",
                "hex": "#BEB5FE"
            },
            {
                "step": "400",
                "hex": "#9B8AFB"
            },
            {
                "step": "500",
                "hex": "#7A5BF8"
            },
            {
                "step": "600",
                "hex": "#6A39EF"
            },
            {
                "step": "700",
                "hex": "#5A25DD"
            },
            {
                "step": "800",
                "hex": "#4B1EB8"
            },
            {
                "step": "900",
                "hex": "#3E1C96"
            },
            {
                "step": "950",
                "hex": "#27115F"
            }
        ]
    },
    {
        "name": "Fuchsia",
        "steps": [
            {
                "step": "25",
                "hex": "#FFFAFF"
            },
            {
                "step": "50",
                "hex": "#FEF5FF"
            },
            {
                "step": "100",
                "hex": "#FBE8FF"
            },
            {
                "step": "200",
                "hex": "#F6D1FE"
            },
            {
                "step": "300",
                "hex": "#EEAAFD"
            },
            {
                "step": "400",
                "hex": "#E478FA"
            },
            {
                "step": "500",
                "hex": "#D444F1"
            },
            {
                "step": "600",
                "hex": "#BA24D5"
            },
            {
                "step": "700",
                "hex": "#9F19B1"
            },
            {
                "step": "800",
                "hex": "#821890"
            },
            {
                "step": "900",
                "hex": "#6F1977"
            },
            {
                "step": "950",
                "hex": "#47104D"
            }
        ]
    },
    {
        "name": "Pink",
        "steps": [
            {
                "step": "25",
                "hex": "#FFF6FB"
            },
            {
                "step": "50",
                "hex": "#FDF3FB"
            },
            {
                "step": "100",
                "hex": "#FDE7F6"
            },
            {
                "step": "200",
                "hex": "#FCCEEE"
            },
            {
                "step": "300",
                "hex": "#FAA7E0"
            },
            {
                "step": "400",
                "hex": "#F770C7"
            },
            {
                "step": "500",
                "hex": "#EE47BC"
            },
            {
                "step": "600",
                "hex": "#DD2591"
            },
            {
                "step": "700",
                "hex": "#C11574"
            },
            {
                "step": "800",
                "hex": "#9E1660"
            },
            {
                "step": "900",
                "hex": "#851551"
            },
            {
                "step": "950",
                "hex": "#4E0D30"
            }
        ]
    },
    {
        "name": "Rosé",
        "steps": [
            {
                "step": "25",
                "hex": "#FFF6F6"
            },
            {
                "step": "50",
                "hex": "#FFF2F3"
            },
            {
                "step": "100",
                "hex": "#FFE4E8"
            },
            {
                "step": "200",
                "hex": "#FECDD6"
            },
            {
                "step": "300",
                "hex": "#FEA3B5"
            },
            {
                "step": "400",
                "hex": "#FD708E"
            },
            {
                "step": "500",
                "hex": "#F63D69"
            },
            {
                "step": "600",
                "hex": "#E41C54"
            },
            {
                "step": "700",
                "hex": "#C00F48"
            },
            {
                "step": "800",
                "hex": "#A11043"
            },
            {
                "step": "900",
                "hex": "#8A123E"
            },
            {
                "step": "950",
                "hex": "#510B24"
            }
        ]
    },
    {
        "name": "Orange dark",
        "steps": [
            {
                "step": "25",
                "hex": "#FFF9F6"
            },
            {
                "step": "50",
                "hex": "#FFF5ED"
            },
            {
                "step": "100",
                "hex": "#FFE6D5"
            },
            {
                "step": "200",
                "hex": "#FFD6AE"
            },
            {
                "step": "300",
                "hex": "#FF9C66"
            },
            {
                "step": "400",
                "hex": "#FF6A2F"
            },
            {
                "step": "500",
                "hex": "#FF4407"
            },
            {
                "step": "600",
                "hex": "#E62E05"
            },
            {
                "step": "700",
                "hex": "#BD1B06"
            },
            {
                "step": "800",
                "hex": "#98180B"
            },
            {
                "step": "900",
                "hex": "#771A0D"
            },
            {
                "step": "950",
                "hex": "#57140A"
            }
        ]
    },
    {
        "name": "RubberDuck",
        "steps": [
            {
                "step": "25",
                "hex": "#FFFEF5"
            },
            {
                "step": "50",
                "hex": "#FEFCE8"
            },
            {
                "step": "100",
                "hex": "#FEF8C3"
            },
            {
                "step": "200",
                "hex": "#FFEF8B"
            },
            {
                "step": "300",
                "hex": "#FEDF47"
            },
            {
                "step": "400",
                "hex": "#FBCE27"
            },
            {
                "step": "500",
                "hex": "#EBB206"
            },
            {
                "step": "600",
                "hex": "#CB8806"
            },
            {
                "step": "700",
                "hex": "#A16008"
            },
            {
                "step": "800",
                "hex": "#854C0D"
            },
            {
                "step": "900",
                "hex": "#713F12"
            },
            {
                "step": "950",
                "hex": "#431F06"
            }
        ]
    },
    {
        "name": "Melon",
        "steps": [
            {
                "step": "25",
                "hex": "#FFF9F7"
            },
            {
                "step": "50",
                "hex": "#FFF4ED"
            },
            {
                "step": "100",
                "hex": "#FFE3D5"
            },
            {
                "step": "200",
                "hex": "#FEC4AA"
            },
            {
                "step": "300",
                "hex": "#FE9974"
            },
            {
                "step": "400",
                "hex": "#FC5E34"
            },
            {
                "step": "500",
                "hex": "#FB3C14"
            },
            {
                "step": "600",
                "hex": "#EB230B"
            },
            {
                "step": "700",
                "hex": "#C3150B"
            },
            {
                "step": "800",
                "hex": "#9B1210"
            },
            {
                "step": "900",
                "hex": "#7E1311"
            },
            {
                "step": "950",
                "hex": "#430608"
            }
        ]
    },
    {
        "name": "Teal",
        "steps": [
            {
                "step": "25",
                "hex": "#F8FEFE"
            },
            {
                "step": "50",
                "hex": "#F1FCFB"
            },
            {
                "step": "100",
                "hex": "#D0F7F4"
            },
            {
                "step": "200",
                "hex": "#A3EDEA"
            },
            {
                "step": "300",
                "hex": "#6BDEDA"
            },
            {
                "step": "400",
                "hex": "#37B7B7"
            },
            {
                "step": "500",
                "hex": "#24A6A9"
            },
            {
                "step": "600",
                "hex": "#1A8287"
            },
            {
                "step": "700",
                "hex": "#18676C"
            },
            {
                "step": "800",
                "hex": "#195357"
            },
            {
                "step": "900",
                "hex": "#184649"
            },
            {
                "step": "950",
                "hex": "#08262B"
            }
        ]
    },
    {
        "name": "Sky",
        "steps": [
            {
                "step": "25",
                "hex": "#F7FDFF"
            },
            {
                "step": "50",
                "hex": "#F0FAFF"
            },
            {
                "step": "100",
                "hex": "#E0F5FE"
            },
            {
                "step": "200",
                "hex": "#BBE9FC"
            },
            {
                "step": "300",
                "hex": "#7ED9FB"
            },
            {
                "step": "400",
                "hex": "#3BC6F7"
            },
            {
                "step": "500",
                "hex": "#12B7EF"
            },
            {
                "step": "600",
                "hex": "#028DC5"
            },
            {
                "step": "700",
                "hex": "#0671A0"
            },
            {
                "step": "800",
                "hex": "#065F84"
            },
            {
                "step": "900",
                "hex": "#0E4F6E"
            },
            {
                "step": "950",
                "hex": "#083249"
            }
        ]
    },
    {
        "name": "Yoda",
        "steps": [
            {
                "step": "25",
                "hex": "#FDFEF5"
            },
            {
                "step": "50",
                "hex": "#FBFCEA"
            },
            {
                "step": "100",
                "hex": "#F5F7CD"
            },
            {
                "step": "200",
                "hex": "#EBF09F"
            },
            {
                "step": "300",
                "hex": "#DFE568"
            },
            {
                "step": "400",
                "hex": "#D5DB43"
            },
            {
                "step": "500",
                "hex": "#BFC426"
            },
            {
                "step": "600",
                "hex": "#A3A31D"
            },
            {
                "step": "700",
                "hex": "#817C19"
            },
            {
                "step": "800",
                "hex": "#68631B"
            },
            {
                "step": "900",
                "hex": "#59541C"
            },
            {
                "step": "950",
                "hex": "#332F00"
            }
        ]
    }
];
