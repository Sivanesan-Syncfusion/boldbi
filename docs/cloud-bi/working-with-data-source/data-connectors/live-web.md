---
layout: post
title: Connect Live Web data in Dashboard Designer | Cloud Bold BI Docs
description: Learn how to create a data source by connecting the Live Web data through the REST API in Bold BI's Cloud Dashboard Designer and prepare your dashboards online.
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Web data source
Bold BI dashboard designer supports connecting almost all web services that has a REST API interface.

## Choose web data source
To configure the web data source, follow the below steps:
1. Click the **Data Sources** button in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/cloud/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)
   
2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Web** connection in the connection panel.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/ChooseDS_Server.png)

## Create web data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the below steps to create web data source:
1. Enter a name and description (optional) for the data source.
2. Enter a valid REST API endpoint in the URL text box.
3. Choose one of the **Method Type** from the combo box for the provided REST API. Options are *GET* and *POST*.
4. If required by the REST API, provide key value pairs in **Headers**. To get details about headers, refer to [Query Parameters](/cloud-bi/working-with-data-source/data-connectors/restful-web-services/#query-parameters).
5. Choose a time interval for **Refresh Settings** using the combo box to trigger the Rest API request periodically to keep the data in sync with our dashboard.  
6. Choose a **Data Format** from the combo box based on the response of your provided REST API. Options are *JSON, CSV, and XML*.
7. Choose an **Authentication Type** supported by the data source. Options are *Basic http authentication* and *None*. Learn more about [Authentication Types](/cloud-bi/working-with-data-source/data-connectors/restful-web-services/#authentication-types).

![Data source preview](/static/assets/embedded/working-with-datasource/data-connectors/images/LiveWeb/DataSourcesView.png)
 

#### Limitation information
<table width="600">
<tr>
<td>
Live mode max rows limitation
</td>
<td>
For optimum performance in live mode Web API, records restricted to 5000 by default. Change the limit from Max Rows option to fetch more records in live mode or in extract mode for more than 5000 records.
</td>
</tr>
<tr>
<td>
Shared tables limitation
</td>
<td>
For live mode Web API, combination of shared tables is not possible because there is no physical table we maintaining for live data sources.
</td>
</tr>
<tr>
<td>
Join tables limitation
</td>
<td>
For live mode Web API, Joining of tables is not possible because there is no physical table we maintaining for live data sources.
</td>
</tr>
<tr>
<td>
Expressions limitation
</td>
<td>
For live mode Web API, as we have using SQLite as an intermediate database for live mode, only SQLite expressions are used in live mode.
</td>
</tr>
<tr>
<td>
Refresh Settings limitation
</td>
<td>
For live mode Web API, refreshing tables is not possible because we have not storing the data while connecting the data source in live mode.
</td>
</tr>
</table>


#### Query parameters

1. If required by the Rest API, pass required values as key-value pairs in **Headers**.
2. For **POST** method type, if required, pass required values as key-value pairs in **Parameter(s)**.
3. Use either *Parameter(s)* or *Raw* for POST request.

#### Authentication types

1. If your data source supports authentication directly through REST API URL, choose **None** under **Authentication Type**.
2. If your data source supports API Key/API Token authentication, pass these values under **Header(s)** by clicking **+Add**. Choose **None** under **Authentication Type**.
3. If your data source has Basic HTTP authentication, choose **Basic http Authentication** under **Authentication Type** and input the username and password.

#### Connecting Web API data source with API Key Authentication
API Key is one of the most commonly used authentication types for REST API. API Key will be assigned to a user by the provider at the time of user creation or when enabling the API Key authentication to access the data via REST API.

API Key can be used in following places which have listed below.
* Authorization/Custom Header (Basic or Bearer).
* Query String.
* Body Data.

##### Adding Authorization/Custom header for API Key
To connect REST API for adding API Key in the header, you can follow below steps to connect the API in Bold BI. 

* Add header in Web API data source as below.

    ![Header Bearer View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Header_Bearer_View.png)

* You need to select the Authentication Type as None.

    ![Authentication View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Authentication_View.png)
	
* Header value can be either basic or bearer based on the application that you are connecting.
* Most of the API Key authentication connect using Authorization header. You can also change the name of the header key as per your need.

    ![Header Basic View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Header_Basic_View.png)
 
##### Adding API Key in Query String Parameter
Query String parameter will be added within the URL, so you can access the REST API without adding any header or body.
    ![Query String parameter View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Query_String_parameter_View.png)
	
* No additional steps may require for connecting API using Query String type of API Key authentication. 
* You need to select the Authentication Type as None since its API Key added in the Query String parameter.

    ![Authentication Type View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Authentication_Type_View.png)
	
##### Adding API Key in the Body Data for Post method REST APIs
Body Data usually be added for Post method API calls. If the application designed to send the API Key over the Body Data of REST API, you can follow the below steps.
    
* Choose POST method in Web API data source to add Body Data and add the API Key as below with relevant property names.

    ![Post method View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Post_Method_View.png)

* You need to select the Authentication Type as None since its API Key added as Body Data.

    ![Post Authentication Type View](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/Post_Authentication_Type_View.png)

### Preview and data import
* Click **Preview & Connect** to connect with the configurations set.
* The Choose Schema(s) dialog opens. The schema represents the key fields of data retrieved from Web Rest API request. This dialog displays a list of schemas in treeview and its corresponding values in grid for preview. Select required schema(s) from treeview to use in designer and click **Connect**.

   ![Preview](/static/assets/cloud/working-with-datasource/data-connectors/images/common/Preview.png)

* Now, the data design view page with selected table schema opens. Drag and drop the table.

   ![Query Editor](/static/assets/cloud/working-with-datasource/data-connectors/images/common/QueryEditor.png)

* Click **Save** to save the data source with a relevant name.

## Configuring Date Parameters

You can configure the URL of the API request with templates containing date queries. The queries will be updated with respective date values.

**Syntax**`{{:today()}}:`It is used for single calendar related method.

Or

**Syntax**`{{:today().adddays(1)}}:`It is used when more than one method is added.

For example,a dummy API is used to explain here

![Showing configuration of relative date parameter with web url](/static/assets/cloud/working-with-datasource/data-connectors/images/LiveWeb/RelativeDateParsing.png)

Now, this URL will be parsed, and templates will be matched, hence the templates will be replaced with dates accordingly. This helps you to fetch data between the start date and end date.

### Functions supported in date parameters

You can configure parameters as numeric values for the following functions: AddMinutes, Addhours, AddDays, AddWeeks, AddMonths, AddYears, AddQuarters, SetDayStart, and SetMonthStart.

All the Add methods should not have parameter as 0, the SetDayStart should have a numerical value between 0 and 6, and the SetMonthStart should have a numerical value between 1 and 12.

String parameters are used in the next set of functions which are start, end, format, and SetTimeZone. Both start and end functions support four string parameters which are week, month, quarter, and year. The format function is used to change the format of date and time, and the parameter is matched with the date and time format supported in C#. A support for epoch time is also made available in the format function. The SetTimeZone is used to change the time zone of the date and the parameter is matched with TimeZoneInfo IDs present in C#.

`Today` function does not hold any parameters.
Here for example concern we are using `today()`as `11/16/2018 12:17`

<table>
<tr>
<th scope="col">Function Name</th>
<th scope="col">Type(s) Used</th>
<th scope="col">Description</th>
<th scope="col">Example(s)</th>
<th scope="col">Result</th>
</tr>
<tr>
<td>Today</td>
<td>No Parameter</td>
<td>Sets date and time to current date and time.</td>
<td>{{:today()}}</td>
<td>11/16/2018 12:17</td>
</tr>
<tr>
<td>AddMinutes</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of minutes.</td>
<td>{{:today().addminutes(10)}}</td>
<td>11/16/2018 12:27</td>
</tr>
<tr>
<td>AddHours</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of hours.</td>
<td>{{:today().addminutes.addhours(2)}}</td>
<td>11/16/2018 14:29</td>
</tr>
<tr>
<td>AddDays</td>
<td>Numerical</td>
<td>Updates the date and time by changing the number of days.</td>
<td>{{:today().adddays(2)}}</td>
<td>11/18/2018 12:17</td>
</tr>
<tr>
<td>AddWeeks</td>
<td>Numerical</td>
<td>Updates the date time by adding a date with the numerical parameter considered as 7 days.</td>
<td>{{:today().addweeks(1)}}</td>
<td>11/23/2018 12:17</td>
</tr>
<tr>
<td>AddMonths</td>
<td>Numerical</td>
<td>Updates date and time by adding months with numerical parameter.</td>
<td>{{:today().addmonths(2)}}</td>
<td>1/16/2018 12:17</td>
</tr>
<tr>
<td>AddYears</td>
<td>Numerical</td>
<td>Updates date and time by adding years with the numerical parameter.</td>
<td>{{:today().addyears(3)}}</td>
<td>11/16/2020 12:17</td>
</tr>
<tr>
<td>AddQuarters</td>
<td>Numerical</td>
<td>Updates date and time by adding months with a numerical parameter, where parameter value 1 means 3 months.</td>
<td>{{:today().adddays(10).addquarters(2)}}</td>
<td>5/26/2019 12:17</td>
</tr>
<tr>
<td>Start</td>
<td>String</td>
<td>Sets the date and time values to the start of the given string parameter.</td>
<td>{{:today.addweeks(2).start(week)}}</td>
<td>11/25/2018 00:00</td>
</tr>
<tr>
<td>End</td>
<td>String </td>
<td>Sets the date and time value to the end of the given string parameter.</td>
<td>{{:today().addmonths(4).end(year{{}})}}</td>
<td>12/31/2019 00:00</td>
</tr>
<tr>
<td>Format</td>
<td>String</td>
<td>Formats the date and time to the correct date format entered as string parameter.</td>
<td>{{:today().start(week).format(MM/dd/yyyy)}}</td>
<td>11/11/2018</td>
</tr>
<tr>
<td>SetTimeZone</td>
<td>String</td>
<td>Changes the time zone to the time zone entered as string parameter.</td>
<td>{{:today().settimezone(New Zealand Time Zone)}}</td>
<td>11/16/2018 19:47</td>
</tr>
<tr>
<td>SetDayStart</td>
<td>Numerical</td>
<td>Updates the date to the day of the week based on the entered numerical parameter.</td>
<td>{{:today().Setdaystart(1)}}</td>
<td>11/12/2018 12:17</td>
</tr>
<tr>
<td>SetMonthStart</td>
<td>Numerical</td>
<td>Updates the date to change the month based on the entered numerical parameter</td>
<td>{{:today().SetMonthStart(10)}}</td> 
<td>10/16/2018 12:17</td>
</tr>
</table>

> **NOTE:**  Each template should mandatorily start with today function. 
> For a template, if the format function is used, it should be the last function call.

## Related links
[Data Transformation](/cloud-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/cloud-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/cloud-bi/getting-started/quick-start/)
