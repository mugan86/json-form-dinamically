interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

interface JsonFormSelectOptions {
  value: string | number;
  label: string;
}

interface JsonFormTextAreaOptions {
  cols?: number;
  rows?: number;
}

interface JsonFormValidatorsMessages {
  min?: string;
  max?: string;
  required?: string;
  requiredTrue?: string;
  email?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  nullValidator?: string;
}

export interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
  validatorsMessage?: JsonFormValidatorsMessages;
  extraData: {
    listValues?: JsonFormSelectOptions[];
    textAreaOptions?: JsonFormTextAreaOptions;
  };
  space: {
    label: number;
    field: number;
  }
}
export interface JsonFormData {
  controls: JsonFormControls[];
  blocks?: any
}

export enum EFormValidator {
  EMAIL = 'email',
  MIN = 'min',
  MIN_LENGTH = 'minLength',
  MAX = 'max',
  MAX_LENGTH = 'maxLength',
  NULL_VALIDATOR = 'nullValidator',
  PATTERN = 'pattern',
  REQUIRED = 'required',
  REQUIRED_TRUE = 'requiredTrue',
}

export enum EFieldTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  SEARCH = 'search',
  TEL = 'tel',
  URL = 'url',
  TEXTAREA = 'textarea',
  DROPDOWN = 'dropdown'
}

export const TEXT_FIELDS: Array<string> = [
  EFieldTypes.EMAIL,
  EFieldTypes.PASSWORD,
  EFieldTypes.SEARCH,
  EFieldTypes.TEL,
  EFieldTypes.TEXT,
  EFieldTypes.URL
];
