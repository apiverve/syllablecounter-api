# Syllable Counter API - Ruby Gem

Syllable Counter counts syllables across any submitted text string up to 500 characters. It returns the total syllable count, total word count, and average syllables per word.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_syllablecounter'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_syllablecounter
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_syllablecounter'

# Initialize the client
client = APIVerve::Syllablecounter::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ text: "The quick brown fox jumps over the lazy dog" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "The quick brown fox jumps over the lazy dog" })
  puts response["data"]
rescue APIVerve::Syllablecounter::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Syllablecounter::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Syllablecounter::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/syllablecounter?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/syllablecounter?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/syllablecounter?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
