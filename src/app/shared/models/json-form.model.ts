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

export interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
  extraData: {
    listValues?: JsonFormSelectOptions[];
    textAreaOptions?: JsonFormTextAreaOptions
  }
}
export interface JsonFormData {
  controls: JsonFormControls[];
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
