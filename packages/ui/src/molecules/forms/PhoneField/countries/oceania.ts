/**
 * ============================================================================
 * Ascend Enterprise UI
 * PhoneField
 * ----------------------------------------------------------------------------
 * File: oceania.ts
 *
 * Oceania country dataset.
 *
 * Part 1
 *
 * ============================================================================
 */

import type {
    PhoneCountry,
} from "../PhoneField.types";

/* -------------------------------------------------------------------------- */
/* Oceania                                                                    */
/* -------------------------------------------------------------------------- */

export const OCEANIA_COUNTRIES: readonly PhoneCountry[] = [

    /* ====================================================================== */
    /* Australia & New Zealand                                                */
    /* ====================================================================== */

    {
        code: "AU",
        alpha3: "AUS",
        numericCode: "036",
        name: "Australia",
        englishName: "Australia",
        dialCode: "+61",
        flag: "🇦🇺",
        region: "Oceania",
        subregion: "Australia and New Zealand",
        example: "412345678",
        nationalNumberLength: 9,
        internationalPrefix: "0011",
        trunkPrefix: "0",
        independent: true,
    },

    {
        code: "NZ",
        alpha3: "NZL",
        numericCode: "554",
        name: "New Zealand",
        englishName: "New Zealand",
        dialCode: "+64",
        flag: "🇳🇿",
        region: "Oceania",
        subregion: "Australia and New Zealand",
        example: "211234567",
        nationalNumberLength: 9,
        internationalPrefix: "00",
        trunkPrefix: "0",
        independent: true,
    },

    /* ====================================================================== */
    /* Melanesia                                                              */
    /* ====================================================================== */

    {
        code: "FJ",
        alpha3: "FJI",
        numericCode: "242",
        name: "Fiji",
        englishName: "Fiji",
        dialCode: "+679",
        flag: "🇫🇯",
        region: "Oceania",
        subregion: "Melanesia",
        example: "7012345",
        nationalNumberLength: 7,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "PG",
        alpha3: "PNG",
        numericCode: "598",
        name: "Papua New Guinea",
        englishName: "Papua New Guinea",
        dialCode: "+675",
        flag: "🇵🇬",
        region: "Oceania",
        subregion: "Melanesia",
        example: "70123456",
        nationalNumberLength: 8,
        internationalPrefix: "05",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "SB",
        alpha3: "SLB",
        numericCode: "090",
        name: "Solomon Islands",
        englishName: "Solomon Islands",
        dialCode: "+677",
        flag: "🇸🇧",
        region: "Oceania",
        subregion: "Melanesia",
        example: "7412345",
        nationalNumberLength: 7,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "VU",
        alpha3: "VUT",
        numericCode: "548",
        name: "Vanuatu",
        englishName: "Vanuatu",
        dialCode: "+678",
        flag: "🇻🇺",
        region: "Oceania",
        subregion: "Melanesia",
        example: "5912345",
        nationalNumberLength: 7,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    /* ====================================================================== */
    /* Micronesia                                                             */
    /* ====================================================================== */

    {
        code: "FM",
        alpha3: "FSM",
        numericCode: "583",
        name: "Micronesia",
        englishName: "Federated States of Micronesia",
        dialCode: "+691",
        flag: "🇫🇲",
        region: "Oceania",
        subregion: "Micronesia",
        example: "3501234",
        nationalNumberLength: 7,
        internationalPrefix: "011",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "KI",
        alpha3: "KIR",
        numericCode: "296",
        name: "Kiribati",
        englishName: "Kiribati",
        dialCode: "+686",
        flag: "🇰🇮",
        region: "Oceania",
        subregion: "Micronesia",
        example: "72012345",
        nationalNumberLength: 8,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "MH",
        alpha3: "MHL",
        numericCode: "584",
        name: "Marshall Islands",
        englishName: "Marshall Islands",
        dialCode: "+692",
        flag: "🇲🇭",
        region: "Oceania",
        subregion: "Micronesia",
        example: "2351234",
        nationalNumberLength: 7,
        internationalPrefix: "011",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "NR",
        alpha3: "NRU",
        numericCode: "520",
        name: "Nauru",
        englishName: "Nauru",
        dialCode: "+674",
        flag: "🇳🇷",
        region: "Oceania",
        subregion: "Micronesia",
        example: "5551234",
        nationalNumberLength: 7,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "PW",
        alpha3: "PLW",
        numericCode: "585",
        name: "Palau",
        englishName: "Palau",
        dialCode: "+680",
        flag: "🇵🇼",
        region: "Oceania",
        subregion: "Micronesia",
        example: "6201234",
        nationalNumberLength: 7,
        internationalPrefix: "011",
        trunkPrefix: "",
        independent: true,
    },

    /* ====================================================================== */
    /* Polynesia                                                              */
    /* ====================================================================== */

    {
        code: "WS",
        alpha3: "WSM",
        numericCode: "882",
        name: "Samoa",
        englishName: "Samoa",
        dialCode: "+685",
        flag: "🇼🇸",
        region: "Oceania",
        subregion: "Polynesia",
        example: "7212345",
        nationalNumberLength: 7,
        internationalPrefix: "0",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "TO",
        alpha3: "TON",
        numericCode: "776",
        name: "Tonga",
        englishName: "Tonga",
        dialCode: "+676",
        flag: "🇹🇴",
        region: "Oceania",
        subregion: "Polynesia",
        example: "7712345",
        nationalNumberLength: 7,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

    {
        code: "TV",
        alpha3: "TUV",
        numericCode: "798",
        name: "Tuvalu",
        englishName: "Tuvalu",
        dialCode: "+688",
        flag: "🇹🇻",
        region: "Oceania",
        subregion: "Polynesia",
        example: "901234",
        nationalNumberLength: 6,
        internationalPrefix: "00",
        trunkPrefix: "",
        independent: true,
    },

];
