Text Lemmatization API
============

Lemmatizer is a simple tool for lemmatizing text. It returns the lemmatized text.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Text Lemmatization API](https://apiverve.com/marketplace/api/lemmatizer)

---

## Installation
	npm install @apiverve/lemmatizer --save

---

## Configuration

Before using the lemmatizer API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Text Lemmatization API documentation is found here: [https://docs.apiverve.com/api/lemmatizer](https://docs.apiverve.com/api/lemmatizer).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var lemmatizerAPI = require('@apiverve/lemmatizer');
var api = new lemmatizerAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  "text": "The quick brown foxes jumped over the lazy dogs and other foxes"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "found": 9,
    "lemmas": {
      "quick": 1,
      "brown": 1,
      "fox": 2,
      "jump": 1,
      "over": 1,
      "lazi": 1,
      "dog": 1,
      "and": 1,
      "other": 1
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.