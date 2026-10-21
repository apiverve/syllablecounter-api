# Syllable Counter API - PHP Package

Syllable Counter counts syllables across any submitted text string up to 500 characters. It returns the total syllable count, total word count, and average syllables per word.

## Installation

Install via Composer:

```bash
composer require apiverve/syllablecounter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Syllablecounter\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['text' => 'The quick brown fox jumps over the lazy dog']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Syllablecounter\Client;
use APIVerve\Syllablecounter\Exceptions\APIException;
use APIVerve\Syllablecounter\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'The quick brown fox jumps over the lazy dog']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/syllablecounter?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/syllablecounter?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/syllablecounter?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
