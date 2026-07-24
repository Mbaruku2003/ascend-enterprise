/**
 * ============================================================================
 * Ascend Enterprise UI
 * Forms
 * ----------------------------------------------------------------------------
 * File: PhoneField.types.ts
 *
 * Enterprise PhoneField types.
 *
 * ============================================================================
 */

import type {
    ComponentPropsWithoutRef,
    ReactNode,
} from "react";

/* -------------------------------------------------------------------------- */
/* Country                                                                    */
/* -------------------------------------------------------------------------- */

export interface PhoneCountry {

    /**
     * ISO 3166-1 alpha-2 code.
     *
     * Example:
     * KE
     * US
     * GB
     */
    code: string;

    /**
     * Display name.
     */
    name: string;

    /**
     * International dialing prefix.
     *
     * Example:
     * +254
     */
    dialCode: string;

    /**
     * Emoji flag.
     */
    flag?: string;

    /**
     * Placeholder example.
     */
    example?: string;

    /**
     * National number length.
     */
    nationalNumberLength?: number;

}

/* -------------------------------------------------------------------------- */
/* Formats                                                                    */
/* -------------------------------------------------------------------------- */

export type PhoneFormat =
    | "international"
    | "national"
    | "e164";

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldValidation {

    /**
     * Invalid state.
     */
    invalid?: boolean;

    /**
     * Validation message.
     */
    error?: ReactNode;

    /**
     * Helper text.
     */
    description?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldLabelOptions {

    /**
     * Field label.
     */
    label?: ReactNode;

    /**
     * Required indicator.
     */
    required?: boolean;

    /**
     * Optional label suffix.
     */
    labelSuffix?: ReactNode;

}

/* -------------------------------------------------------------------------- */
/* Callbacks                                                                  */
/* -------------------------------------------------------------------------- */

export interface PhoneFieldHandlers {

    /**
     * Fired when the phone value changes.
     */
    onValueChange?(
        value: string,
    ): void;

    /**
     * Fired when the selected country changes.
     */
    onCountryChange?(
        country: PhoneCountry,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Root                                                                       */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldProps
    extends
        ComponentPropsWithoutRef<"div">,
        FormPhoneFieldValidation,
        FormPhoneFieldLabelOptions,
        PhoneFieldHandlers {

    /**
     * Controlled value.
     */
    value?: string;

    /**
     * Uncontrolled value.
     */
    defaultValue?: string;

    /**
     * Selected country.
     */
    country?: PhoneCountry;

    /**
     * Default selected country.
     */
    defaultCountry?: PhoneCountry;

    /**
     * Supported countries.
     */
    countries?: PhoneCountry[];

    /**
     * Output format.
     */
    format?: PhoneFormat;

    /**
     * Placeholder.
     */
    placeholder?: string;

    /**
     * Disabled.
     */
    disabled?: boolean;

    /**
     * Read only.
     */
    readOnly?: boolean;

    /**
     * Auto focus.
     */
    autoFocus?: boolean;

    /**
     * Auto complete.
     */
    autoComplete?: string;

    /**
     * Name.
     */
    name?: string;

    /**
     * Field id.
     */
    id?: string;

}

/* -------------------------------------------------------------------------- */
/* Country Select                                                             */
/* -------------------------------------------------------------------------- */

export interface CountrySelectProps
    extends ComponentPropsWithoutRef<"button"> {

    country: PhoneCountry;

    countries: PhoneCountry[];

    disabled?: boolean;

    readOnly?: boolean;

    onCountryChange?(
        country: PhoneCountry,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Country Flag                                                               */
/* -------------------------------------------------------------------------- */

export interface CountryFlagProps
    extends ComponentPropsWithoutRef<"span"> {

    country: PhoneCountry;

}

/* -------------------------------------------------------------------------- */
/* Dial Code                                                                  */
/* -------------------------------------------------------------------------- */

export interface DialCodeProps
    extends ComponentPropsWithoutRef<"span"> {

    country: PhoneCountry;

}

/* -------------------------------------------------------------------------- */
/* Phone Input                                                                */
/* -------------------------------------------------------------------------- */

export interface PhoneInputProps
    extends ComponentPropsWithoutRef<"input"> {

    value: string;

    country: PhoneCountry;

    format?: PhoneFormat;

    disabled?: boolean;

    readOnly?: boolean;

    onValueChange?(
        value: string,
    ): void;

}

/* -------------------------------------------------------------------------- */
/* Label                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldLabelProps
    extends ComponentPropsWithoutRef<"label"> {

    required?: boolean;

}

/* -------------------------------------------------------------------------- */
/* Description                                                                */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldDescriptionProps
    extends ComponentPropsWithoutRef<"p"> {}

/* -------------------------------------------------------------------------- */
/* Error                                                                      */
/* -------------------------------------------------------------------------- */

export interface FormPhoneFieldErrorProps
    extends ComponentPropsWithoutRef<"p"> {}
