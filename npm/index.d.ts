declare module '@apiverve/syllablecounter' {
  export interface syllablecounterOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface syllablecounterResponse {
    status: string;
    error: string | null;
    data: SyllableCounterData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SyllableCounterData {
      text:                    null | string;
      totalSyllables:          number | null;
      wordCount:               number | null;
      averageSyllablesPerWord: number | null;
      words:                   Word[];
  }
  
  interface Word {
      word:      null | string;
      syllables: number | null;
  }

  export default class syllablecounterWrapper {
    constructor(options: syllablecounterOptions);

    execute(callback: (error: any, data: syllablecounterResponse | null) => void): Promise<syllablecounterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: syllablecounterResponse | null) => void): Promise<syllablecounterResponse>;
    execute(query?: Record<string, any>): Promise<syllablecounterResponse>;
  }
}
