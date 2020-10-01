# Unit Testing
The most important thing about a unit test is to explain and show the behavior and logic of the tested component.
Some of the developers have the practice to use tests instead of documentation.
Good unit tests should be reproducible and independent from external factors such as the environment or running order.

We use PHPUnit for unit testing.
Version: 6.5 or newer



## Naming conventions

To be able to run the test you need to follow a few strict rules with your file and function naming. \
_(you can specify otherwise in the `phpunit.xml` file)_

**The filename and the class name:**
* Should end with `Test`
* Should be in **PascalCase**

**The name of the Function:**
* Should start with `test`
* Should be descriptive as possible
* Should be **snake_case** _(recommended)_ or **camelCase** but never PascalCase

<note type="tip">

Try to be explicit with the function naming to know what the test is try to test.

</note>





## Example

We create a function to convert a sentence to camelCase\
_(in this case, we use the function as a trait and include it in the test)_

The function look something like this:
```php
public function camelCase(string $string) {


    $validString = strtolower(preg_replace('/(?<=[a-z])([A-Z]+)/', '-$1', $string));
    $optimalisedString = preg_replace('/[-_ ]/', '*', $validString);
    $words_array = explode('*', $optimalisedString);
    $words = [];
    foreach ($words_array as $word) {
        $words[] = ucfirst($word);
    }
    $words[0] = strtolower($words[0]);


    return implode('', $words);
}


```

The test will look like:

```php
<?php

namespace Tests\Unit;

require_once 'common/traits/TextManipulator.php';

use PHPUnit\Framework\TestCase;

class CamelCaseTest extends TestCase {

    use \common\traits\TextManipulator;

    public function test_Sentence_to_camelCase() {

        //// Given
        $testString = "the apple is fallen";
        /// when
        $camelisedString = $this->camelCase($testString);
        /// then
        $this->assertEquals($camelisedString, 'theAppleIsFallen');
    }

    public function test_snake_case_to_camelCase() {

        //// Given
        $testString = "the_apple_is_fallen";
        /// when
        $camelisedString = $this->camelCase($testString);
        /// then
        $this->assertEquals($camelisedString, 'theAppleIsFallen');
    }

    public function test_PascalCase_to_cammelCase() {

        //// Given
        $testString = "TheAppleIsFallen";
        /// when
        $camelisedString = $this->camelCase($testString);
        /// then
        $this->assertEquals($camelisedString, 'theAppleIsFallen');
    }

}
```
As you see in the example above, the test follow the "Given, When, Then" principal.
In other words, we prepare the variables, we execute the function, and expect a certain result.




