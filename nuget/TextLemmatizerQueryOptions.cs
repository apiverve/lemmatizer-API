using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TextLemmatizer
{
    /// <summary>
    /// Query options for the Text Lemmatizer API
    /// </summary>
    public class TextLemmatizerQueryOptions
    {
        /// <summary>
        /// The text to lemmatize
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
