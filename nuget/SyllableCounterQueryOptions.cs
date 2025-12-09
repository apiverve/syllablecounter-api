using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SyllableCounter
{
    /// <summary>
    /// Query options for the Syllable Counter API
    /// </summary>
    public class SyllableCounterQueryOptions
    {
        /// <summary>
        /// The text to count syllables in (max 500 characters)
        /// Example: The quick brown fox jumps over the lazy dog
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
