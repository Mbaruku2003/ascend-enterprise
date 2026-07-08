/**
 * ============================================================================
 * Ascend UI
 * Shared Form ID Utilities
 * ============================================================================
 *
 * Generates consistent IDs for form fields and all associated accessibility
 * elements.
 *
 * ============================================================================
 */

const DEFAULT_PREFIX = "field";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface FieldIdSet {
  /**
   * Control ID.
   */
  id: string;

  /**
   * Label ID.
   */
  labelId: string;

  /**
   * Helper text ID.
   */
  helperTextId: string;

  /**
   * Error message ID.
   */
  errorMessageId: string;

  /**
   * Description ID.
   */
  descriptionId: string;
}

/* -------------------------------------------------------------------------- */
/* Base ID                                                                    */
/* -------------------------------------------------------------------------- */

export function resolveFieldId(
  id?: string,
  prefix: string = DEFAULT_PREFIX,
): string {
  if (id) {
    return id;
  }

  return `${prefix}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

/* -------------------------------------------------------------------------- */
/* Individual IDs                                                             */
/* -------------------------------------------------------------------------- */

export function getFieldLabelId(
  fieldId: string,
): string {
  return `${fieldId}-label`;
}

export function getFieldHelperId(
  fieldId: string,
): string {
  return `${fieldId}-helper`;
}

export function getFieldErrorId(
  fieldId: string,
): string {
  return `${fieldId}-error`;
}

export function getFieldDescriptionId(
  fieldId: string,
): string {
  return `${fieldId}-description`;
}

/* -------------------------------------------------------------------------- */
/* Complete ID Set                                                            */
/* -------------------------------------------------------------------------- */

export function buildFieldIds(
  fieldId: string,
): FieldIdSet {
  return {
    id: fieldId,

    labelId: getFieldLabelId(fieldId),

    helperTextId: getFieldHelperId(fieldId),

    errorMessageId: getFieldErrorId(fieldId),

    descriptionId: getFieldDescriptionId(fieldId),
  };
}

/* -------------------------------------------------------------------------- */
/* aria-describedby                                                           */
/* -------------------------------------------------------------------------- */

export function getFieldDescribedBy(
  fieldId: string,
  options: {
    helperText?: boolean;
    errorMessage?: boolean;
    description?: boolean;
  },
): string | undefined {
  const ids: string[] = [];

  if (options.description) {
    ids.push(getFieldDescriptionId(fieldId));
  }

  if (options.helperText) {
    ids.push(getFieldHelperId(fieldId));
  }

  if (options.errorMessage) {
    ids.push(getFieldErrorId(fieldId));
  }

  return ids.length > 0
    ? ids.join(" ")
    : undefined;
}
