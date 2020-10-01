# Naming Conventions

```php
<?php

declare(strict_types=1);

namespace Vendor\Package;

use Vendor\Package\{ClassA as A, ClassB, ClassC as C};
use Vendor\Package\SomeNamespace\ClassD as D;

use function Vendor\Package\{functionA, functionB, functionC};

use const Vendor\Package\{ConstantA, ConstantB, ConstantC};

class Foo extends Bar implements FooInterface
{
    public function sampleFunction(int $a, int $b = null): array
    {
        if ($a === $b) {
            bar();
        } elseif ($a > $b) {
            $foo->bar($arg1);
        } else {
            BazClass::bar($arg2, $arg3);
        }
    }

    final public static function bar()
    {
        // method body
    }
}
```


### Filenames - **PascalCase**
```
CurrencyCalculator.php
```

### Class Names - **PascalCase**


```php
class ClassName {
}
```

### Function Names - **camelCase**
```php
public function sampleFunction()
{

}
```
### Database Table Names - **snake_case**
```sql
table_name

```

### Other naming conventions
[Unit Test](/tests/unit#naming-conventions)




