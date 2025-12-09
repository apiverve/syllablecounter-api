declare module '@apiverve/syllablecounter' {
  export interface syllablecounterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface syllablecounterResponse {
    status: string;
    error: string | null;
    data: SyllableCounterData;
    code?: number;
  }


  interface SyllableCounterData {
      text:                    string;
      totalSyllables:          number;
      wordCount:               number;
      averageSyllablesPerWord: number;
      words:                   Word[];
  }
  
  interface Word {
      word:      string;
      syllables: number;
  }

  export default class syllablecounterWrapper {
    constructor(options: syllablecounterOptions);

    execute(callback: (error: any, data: syllablecounterResponse | null) => void): Promise<syllablecounterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: syllablecounterResponse | null) => void): Promise<syllablecounterResponse>;
    execute(query?: Record<string, any>): Promise<syllablecounterResponse>;
  }
}
