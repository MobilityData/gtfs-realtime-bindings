# How-To Update Bindings When gtfs-realtime.proto Changes

First, make sure you have all [Composer](https://getcomposer.org/) dependencies installed:

```
composer update
```

Regenerate the language binding source from gtfs-realtime.proto.

```
vendor/bin/protoc-gen-php.php --include=.. --out=src ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
vendor/bin/phpunit
````

Update the version number in `gtfs-realtime-bindings.gemspec`.

Build and deploy the gem to rubygems.org

```
gem build gtfs-realtime-bindings.gemspec
gem push gtfs-realtime-bindings-0.0.1.gem
```


php /usr/local/bin/composer install
