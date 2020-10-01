# Keyword Generator

This tool is generating keywords from descriptions.

to make the harmonisation code search function more accurate, this function is loop thru all off the table contents and extracting all the words form the description.
this result is run thru multiple filters to factor the keywords and store them in the database.

<Note type="tip">

Each run of the command will overwrite the previous keywords to have room for adjustments and later refinements.

</Note>


<Note type="warning">

This is not a YII2 framework standard tool, so the is no official yii2 documentation on this topic.

</Note>

## Commands

`keyworld-generator/all`
Generates all keywords for the `hs_code`, `hs_heading` tables

`keyworld-generator/codes`
Generates keywords for the `hs_code` table.

`keyworld-generator/headings`
Generates keywords for the `hs_heading` table.


## Run Generator


```bash
php yii keyworld-generator/all
```