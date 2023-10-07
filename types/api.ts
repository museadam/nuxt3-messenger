export interface APIResponse<DATA = void, ERROR = unknown> {
  status: number;
  data?: DATA;
  message?: string | string[];
  error?: ERROR;
}
