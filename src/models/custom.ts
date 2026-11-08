export interface ErrorResponse {
  data: null;
  error: {
    status: number | string;
    name: string;
    message?: string;
    details?: {
      errors?: Array<{ message?: string }>;
      [key: string]: unknown;
    } | null;
  };
}
