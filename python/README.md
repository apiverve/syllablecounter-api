Syllable Counter API
============

Syllable Counter is a tool for counting syllables in words and text. It uses the CMU Pronouncing Dictionary for accurate syllable counting with rule-based fallback for unknown words.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Syllable Counter API](https://apiverve.com/marketplace/syllablecounter?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-syllablecounter
```

Using `pip3`:

```bash
pip3 install apiverve-syllablecounter
```

---

## Configuration

Before using the syllablecounter API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient

# Initialize the client with your APIVerve API key
api = SyllablecounterAPIClient("[YOUR_API_KEY]")

query = { "text": "The quick brown fox jumps over the lazy dog" }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Syllable Counter API documentation is found here: [https://docs.apiverve.com/ref/syllablecounter](https://docs.apiverve.com/ref/syllablecounter?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient

# Initialize the client with your APIVerve API key
api = SyllablecounterAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "text": "The quick brown fox jumps over the lazy dog" }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "text": "The quick brown fox jumps over the lazy dog",
    "total_syllables": 11,
    "word_count": 9,
    "average_syllables_per_word": 1.22,
    "words": [
      {
        "word": "the",
        "syllables": 1
      },
      {
        "word": "quick",
        "syllables": 1
      },
      {
        "word": "brown",
        "syllables": 1
      },
      {
        "word": "fox",
        "syllables": 1
      },
      {
        "word": "jumps",
        "syllables": 1
      },
      {
        "word": "over",
        "syllables": 2
      },
      {
        "word": "the",
        "syllables": 1
      },
      {
        "word": "lazy",
        "syllables": 2
      },
      {
        "word": "dog",
        "syllables": 1
      }
    ]
  }
}
```

---

## Error Handling

The API client provides comprehensive error handling through the `SyllablecounterAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient, SyllablecounterAPIClientError

api = SyllablecounterAPIClient("[YOUR_API_KEY]")

query = { "text": "The quick brown fox jumps over the lazy dog" }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except SyllablecounterAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient, SyllablecounterAPIClientError

api = SyllablecounterAPIClient("[YOUR_API_KEY]")

query = { "text": "The quick brown fox jumps over the lazy dog" }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except SyllablecounterAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient, SyllablecounterAPIClientError

query = { "text": "The quick brown fox jumps over the lazy dog" }

# Using context manager ensures proper cleanup
with SyllablecounterAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except SyllablecounterAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient

# Enable debug mode
api = SyllablecounterAPIClient("[YOUR_API_KEY]", debug=True)

query = { "text": "The quick brown fox jumps over the lazy dog" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_syllablecounter.apiClient import SyllablecounterAPIClient

api = SyllablecounterAPIClient("[YOUR_API_KEY]")

query = { "text": "The quick brown fox jumps over the lazy dog" }

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
