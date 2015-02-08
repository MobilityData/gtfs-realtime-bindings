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

