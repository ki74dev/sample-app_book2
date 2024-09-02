export type FetchError = Error & {
    info?: any;
    status?: number;
  };