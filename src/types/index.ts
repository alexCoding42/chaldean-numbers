export interface IChaldeanNumber {
  id: string;
  name?: string;
  chaldean?: number;
  description?: string;
  words?: string;
  lifepath?: string;
  challenge?: string;
  phrase_title?: string;
  phrase_description?: string;
}

export interface IError {
  errorTitle: string;
  errorMessage: string;
}

export interface IFavorite {
  id: string;
  type: string;
  value: string;
  userId: string;
}
