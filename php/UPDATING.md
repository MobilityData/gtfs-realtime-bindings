# How-To Update Bindings When gtfs-realtime.proto Changes

*NOTE:* Due to limitations in
 [Composer/Packagist](https://github.com/composer/packagist/issues/472), we had
 to put the `composer.json` PHP package definition in the root of the
 `gtfs-realtime-bindings` GitHub repo (as opposed to in the `php`
 sub-directory).  The `phpunit.xml.dist` had to be moved as well.  As result,
 all of the following commands should be run in the root of the
 `gtfs-realtime-bindings` repo, not in the `php` sub-directory.

First, make sure you have all [Composer](https://getcomposer.org/) dependencies
installed:

```
composer update
```

Regenerate the language binding source from gtfs-realtime.proto.

```
vendor/bin/protoc-gen-php.php --include=. --out=php/src ./gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
vendor/bin/phpunit
````
