export interface Validator {
  schema: Record<string, any>,
  validate: (data: Record<string, any>) => Promise<Record<string, any>>;
  isValid: (data: Record<string, any>) => Promise<boolean>;
}
