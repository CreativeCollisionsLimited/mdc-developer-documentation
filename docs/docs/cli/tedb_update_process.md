# How to update the Excise database

## Get the TEDB (Taxes in Europe database):
Visit this [page](https://ec.europa.eu/taxation_customs/tedb/advSearchForm.html)
`https://ec.europa.eu/taxation_customs/tedb/advSearchForm.html`

On this page, look for: `Tax Types, Countries and Situation on`.

To download TEDB database for each excise product we need to select specific product from tax types, all EU countries and latest date for Situation on. Follow below steps to download TEDB database for each excise product.
##### Get the TEDB database for Beer:

* Select Alcoholic Bevererages from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Beer.
    > - From Standard Rate select - standard Rate Unit(per °Alcohol/per °Plato), Per hl Per °Alcohol (min. 1.87 EUR) / Per °Plato (min. 0.748 EUR), Category range
    > - From Reduced Rate select - Per hl Per °Alcohol, Alcoholic strength range

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-beer.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Wine:

* Select Alcoholic Bevererages from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Wine.
> - From Standard Rate Still select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Standard Rate Sparkling select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Reduced Rate Still select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Reduced Rate Sparkling select - Per hl (min. 0 EUR), Alcoholic strength range

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-wine.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Fermented beverages other than wine and beer:

* Select Alcoholic Bevererages from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Fermented beverages other than wine and beer.
> - From Standard Rate Still select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Standard Rate Sparkling select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Reduced Rate Still select - Per hl (min. 0 EUR), Alcoholic strength range
> - From Reduced Rate Sparkling select - Per hl (min. 0 EUR), Alcoholic strength range

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-fermented-beverages.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

##### Get the TEDB database for Ethyl alcohol:

* Select Alcoholic Bevererages from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Ethyl alcohol.
> - From Standard Rate Still select - Per hl (min. 550 EUR or 1 000 EUR per hl of pure alcohol)
> - From Reduced Rate Still select - Per hl

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-ethyl-alcohol.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Cigarettes:

* Select Manufactured Tobacco from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Cigarettes.
> - Specific excise (per 1 000)
> - Specific excise (as % of WAP)
> - Specific excise (as % of Total tax)
> - Ad Valorem excise (as % of TIRSP)
> - Total Tax (as % of WAP)
> - Excise yield (per 1 000 of WAP)
> - Minimum excise duty (per 1 000 - pursuant to Art. 8(6) Dir. 2011/64/EU)

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-cigarettes.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

##### Get the TEDB database for Cigars and Cigarillos:

* Select Manufactured Tobacco from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Cigars and Cigarillos.
> - Specific excise (per 1 000)
> - Minimum (per 1 000)
> - Specific excise (per kg)
> - Minimum (per kg)
> - Ad valorem excise (as % of TIRSP)
> - Minimum excise duty (per 1 000 - pursuant to Art. 14(1) Dir. 2011/64/EU)
> - Minimum excise duty (per kg - pursuant to Art. 14(1) Dir. 2011/64/EU)

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-cigars-and-cigarillas.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

##### Get the TEDB database for Fine cut smoking tobacco (for rolling of cigarettes):

* Select Manufactured Tobacco from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Fine cut smoking tobacco (for rolling of cigarettes).
> - Specific excise (per kg)
> - Ad valorem excise (as % of TIRSP)
> - WAP (per kg)
> - Minimum excise duty (per kg - pursuant to Art. 14(1) Dir. 2011/64/EU)

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-fine-cut-smoking-tobacco.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Other smoking tobacco:

* Select Manufactured Tobacco from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Other smoking tobacco.
> - Specific excise (per kg)
> - Ad valorem excise (as % of TIRSP)
> - Minimum excise duty (per kg - pursuant to Art. 14(1) Dir. 2011/64/EU)

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-other-smoking-tobacco.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Petrol:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Petrol.
> - Rate > Leaded
> - Rate > Unleaded
> - Additional Information > Leaded
> - Additional Information > Unleaded 

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-petrol.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Gas Oil:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Gas Oil.
> - Rate > Propellant
> - Rate > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 8(2)(b): stationary motors
> - Rate > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Rate > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Rate > Article 15(1)(e): reduced rate applied for railways
> - Rate > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances
> - Rate > Article 7(2): commercial gas oil used as propellant
> - Additional Information > Propellant
> - Additional Information > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Article 8(2)(b): stationary motors
> - Additional Information > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Additional Information > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use
> - Additional Information > Article 15(1)(e): reduced rate applied for railways
> - Additional Information > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances
> - Additional Information > Article 7(2): commercial gas oil used as propellant

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-gas-oil.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Kerosene:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Kerosene.
> - Rate > Propellant
> - Rate > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 8(2)(b): stationary motors
> - Rate > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Rate > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Additional Information > Propellant
> - Additional Information > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Article 8(2)(b): stationary motors
> - Additional Information > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Additional Information > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-kerosene.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

##### Get the TEDB database for Heavy fuel oil:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Heavy fuel oil.
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-heavy-fuel-oil.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for LPG:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from LPG.
> - Rate > Propellant
> - Rate > If Article 15(1)(i) is used for LPG - used as propellant
> - Rate > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 8(2)(b): stationary motors
> - Rate > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Rate > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Rate > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances
> - Additional Information > Propellant
> - Additional Information > If Article 15(1)(i) is used for LPG - used as propellant
> - Additional Information > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Article 8(2)(b): stationary motors
> - Additional Information > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Additional Information > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use
> - Additional Information > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-lpg.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Natural Gas:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Natural Gas.
> - Rate > Propellant
> - Rate > If Article 15(1)(i) is used for natural gas used as propellant
> - Rate > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances
> - Rate > Article 8(2)(b): stationary motors
> - Rate > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Rate > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Additional Information > Propellant
> - Additional Information > If Article 15(1)(i) is used for natural gas used as propellant
> - Additional Information > Article 8(2)(a): motor fuel for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Article 5: differentiated rates for local public passenger transport (including taxis), waste collection, armed forces and public administration, disabled people, ambulances
> - Additional Information > Article 8(2)(b): stationary motors
> - Additional Information > Article 8(2)(c): plant and machinery used in construction, civil engineering and public works
> - Additional Information > Article 8(2)(d): vehicles intended for use off the public roadway or which have not been granted authorisation for use mainly on the public roadway
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use
> - Additional Information > Article 15(1)(e): reduced rate applied for railways
> - Additional Information > Article 7(2): commercial gas oil used as propellant

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-natural-gas.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```
##### Get the TEDB database for Coal and Coke:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Coal and Coke.
> - Rate > Heating fuel for business use
> - Rate > Heating fuel for non-business use
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 15(1)(e): reduced rate applied for railways
> - Additional Information > Heating fuel for business use
> - Additional Information > Heating fuel for non-business use
> - Additional Information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional Information > Article 15(1)(e): reduced rate applied for railways

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-coal-and-coke.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

##### Get the TEDB database for Electricity:

* Select Energy Products and Electricity from Tax Types drop down.

* Select all EU countries from Countries drop down.

* Select latest date from Situation on and click on Add field

* Open Rates Structure menu and select required fields from Electricity.
> - Rate > For business use
> - Rate > For non-business use
> - Rate > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Rate > Article 15(1)(e): reduced rate applied for railways
> - Rate > Article 15(1)(e): reduced rate applied for metro, tram and trolley bus
> - Additional information > For business use
> - Additional information > For non-business use
> - Additional information > If Article 15(3) is used for agricultural, horticultural or piscicultural works, and in forestry
> - Additional information > Article 15(1)(e): reduced rate applied for railways
> - Additional information > Article 15(1)(e): reduced rate applied for metro, tram and trolley bus

* Click on OK (at bottom of the popup) and then click on Search button

* Click on Export Result button and download database

* Change downloaded file name to Excise-rates-euc-electricity.xlsx and upload the file in the mdc app root folder under the tedb/excise/ folder:

```Bash
/var/www/mdc/tedb/excise
```

> For all the excise products if you have already existing file there, make sure you overwrite them.

> In normal circumstances these files will be kept updated by the developers to generate required seeders, so the person who will deploy the project, don't need to take this step.

## What is the tedb processor and what it is doing?
The tedb processor will open and read the excise data from the xlsx files and push them to the database.

The processor will take a look at the file one by one, row by row and all records will be stored.

All steps and all result will be displayed.

## How to run the TEDB processor:

In the CLI type in: 
```Bash
php artisan tedb:excise-rates-all
```
> This function has a progress bar, hover this process can take a long time. I'm strongly advise to use `screens` when running this code.
> [screens](https://linuxize.com/post/how-to-use-linux-screen/)