# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "gtfs-realtime-bindings"
  spec.version       = "0.0.4"
  spec.authors       = ["Google Inc."]
  spec.email         = ["gtfs-realtime@googlegroups.com"]
  spec.homepage      = "http://github.com/google/gtfs-realtime-bindings"
  spec.summary       = %q{Ruby classes generated from the GTFS-realtime protocol buffer specification.}
  spec.license       = 'Apache License, Version 2.0'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  ##
  # Dependencies
  #
  spec.add_dependency "protobuf", ">= 3.0"

  ##
  # Development dependencies
  #
  spec.add_development_dependency "rake"
  spec.add_development_dependency "rspec"
end
