Pod::Spec.new do |s|
  s.name             = 'APIVerveSyllableCounter'
  s.version          = '1.2.3'
  s.summary          = 'Syllable Counter counts syllables across any submitted text string up to 500 characters.'
  s.description      = <<-'DESC'
Syllable Counter counts syllables across any submitted text string up to 500 characters. It returns the total syllable count, total word count, and average syllables per word.

This iOS/macOS SDK provides a convenient way to access the Syllable Counter from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/syllablecounter?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/syllablecounter-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSyllableCounter/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
