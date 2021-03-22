# How to update the Duties/Taxes database

## Get the Taric database:
Visit this [page](https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp?Lang=en)
`https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp?Lang=en`

On this page, look for: `User Guides, Information and Downloadable data:[Info]`.
Click on the Info, this will redirect you to the folders containing the files

click on `Duties & related files` then year then the latest month's folder.
**Download** the `Duties Export 01-99.xlsx` and `Duties Import 01-99.xlsx` files.

Without changing anything on the file or the name, **upload the files** in the mdc app root folder under the `taric/` folder
for example:
```Bash
/var/www/mdc/taric
```
> If you have already existing file there, make sure you overwrite them.

> In normal circumstances this file will be kept updated by the developers, so the person who will deploy the project, don't need to take this step.

## What is the taric processor and what it is doing?
The taric processor will open and read the import and export data immediately from the xlsx files and push them to the database.

The processor will take a look at the file one by one, row by row.
With every row, lookup in the database for a match 

if there is a match the record will be updated, if not, the record will sored.

After the database insertion completed the `parseDuties` function will be triggered which will calculate and populate the necessary fields in the database.
> this function(s) was created by previous developers, so don't blame it on me. 

All steps and all result will be displayed.





## How to run the Taric processor:

In the CLI type in: 
```Bash
php yii taric
```
> This function has a progress bar, hover this process can take a long time. I'm strongly advise to use `screens` when running this code.
> [screens](https://linuxize.com/post/how-to-use-linux-screen/)



