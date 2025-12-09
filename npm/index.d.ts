declare module '@apiverve/lemmatizer' {
  export interface lemmatizerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface lemmatizerResponse {
    status: string;
    error: string | null;
    data: TextLemmatizerData;
    code?: number;
  }


  interface TextLemmatizerData {
      found:  number;
      lemmas: Lemmas;
  }
  
  interface Lemmas {
      cat:  number;
      ran:  number;
      door: number;
  }

  export default class lemmatizerWrapper {
    constructor(options: lemmatizerOptions);

    execute(callback: (error: any, data: lemmatizerResponse | null) => void): Promise<lemmatizerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: lemmatizerResponse | null) => void): Promise<lemmatizerResponse>;
    execute(query?: Record<string, any>): Promise<lemmatizerResponse>;
  }
}
