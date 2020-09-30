# Text Manipulations

Text helpers to achieve certain text outputs via traits.

**usage:**
Include the trait in your class like a normal trait.
```PHP
use \common\traits\TextManipulator;
```


## camelCase
Yii2 has a function to camelise, but that is not camelCase, that is make the text to PascalCase.

**usage:**
```PHP
$this->camelCase(string $string)
```
**Return:** camelCase formatted String

**Accept** string as
* space separated string
* Snake case string
* PascalCase String




## snake_case
Creates snake_case formatted string from a string


**usage:**
```PHP
$this->snakeCase(string $string)
```
**Return:** snake_case formatted String

**Accept** string as
* space separated string
* camelCase string
* PascalCase String




## singularize

Yii2 has a built in singularisation function but that can't be customised with exceptions.
This function created for the keyword generator.

This function ignore the following words to run on it:
            `'equipment',
            'information',
            'rice',
            'money',
            'species',
            'series',
            'fish',
            'sheep',
            'press',
            'sms',
            'olives',
            'gas',
            'asparagus',
            'scissors',
            'goggles',
            'pants',
            'panties',
            'clothes',
            'riches',
            'jitters',
            'shenanigans',
            'remains',
            'annals',
            'suds',
            'less'`


**usage:**
```
$this->singularize($word);
```
**Accept:** string

**Result:** string (singular form word)



## regulateSearchTerms
Rules applied on search terms.
This function created for the keyword generator.
This will get a multiple world string, explode them to Individual words, and run the following filters on each word:
* singularise
* convert to small case

then rejoin them and return as a string.

**usage:**
```
$this->regulateSearchTerms($word);
```
**Accept:** string

**Result:** string

#### example:
```
$this->regulateSearchTerms('Bag Of bannanas');
```
will result:
```
bag of banana
```







## normaliseSearchInput
Rules applied on the search input
This function created for the keyword generator.

This will get a string, and run the following filters on each word:
* take out all none letter or aphanumeric characters except `-` (pattern: `a-zA-Z0-9-`)
* remove all of the following words `" to ", " of ", " from ", " a ", " or ", " and ", " other ", " similar ", " not "`
* trim

**usage:**
```
$this->normaliseSearchInput($words);
```
**Accept:** string

**Result:** string

#### example:
```
$this->regulateSearchTerms('Bag Of Bannanas');
```
will result:
```
bag banana
```