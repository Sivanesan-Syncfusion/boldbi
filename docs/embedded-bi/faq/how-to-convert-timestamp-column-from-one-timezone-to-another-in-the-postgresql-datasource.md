---
layout: post
title: Convert Timestamp column in PostgreSql | Embedded Bold BI Docs
description: Learn the steps a user has to convert a timestamp column from one time zone to another in the PostgreSQL datasource in Bold BI for embedded analytics.
canonical: "/cloud-bi/faq/how-to-convert-timestamp-column-from-one-timezone-to-another-in-the-postgresql-datasource/"
platform: bold-bi
documentation: ug
---

# How to convert a Datetime column from one timezone to another in the PostgreSQL data source

Bold BI application allows you to convert the timestamp column in the PostgreSQL data source from one time zone to another.

## Steps to convert Datetime column to another time zone

1.	Refer to the [Connecting Bold BI to PostgreSQL data source documentation](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/postgresql/) to successfully connect to it.

2.	Drag and drop the table from the table schema in the data design view page.

    ![Drag table](/static/assets/embedded/faq/images/drag-timestamp-table.png)

3.	Click on the `Expression` icon and choose the date column which needs to be converted to the local time zone as shown in the following image.

    ![Expression icon](/static/assets/embedded/faq/images/expression-icon.png)
	
	![Datetime column](/static/assets/embedded/faq/images/timestamp-column.png)

4.	Then add the following code to the date column which needs to be converted from Greenwich Mean Time (GMT) to your local time zone in the Expression editor as shown in the following image and click `Save.`

        AT TIME ZONE 'GMT' AT TIME ZONE '+05:30'
	  
	The above sample registers the timestamp column in the GMT format and converts the timestamp into Indian Standard Time(IST).
	
	![Create Expression](/static/assets/embedded/faq/images/timezone-expression.png)
	
	>**NOTE:** The time difference from GMT to your local time zone should be set manually in the above sample. 
	
5.	Click on the `Update` and you can find the result where the created date column in GMT will be converted into Indian Standard Time.

    ![Result preview](/static/assets/embedded/faq/images/converted-timezone.png)

    >**Note:**  This documentation works for all the web data sources in the extract mode only and [PostgreSQL in live](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/postgresql/#live-mode-connection) and [extract](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/postgresql/#extract-mode-connection) modes in the Bold BI. For [MS SQL Server](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/sql-data-source/) and [MySQL](https://help.boldbi.com/embedded-bi/working-with-data-source/data-connectors/mysql/) data sources, use the following expressions for converting the GMT date column to the Indian Standard Time zone.
	
	<table>
	<tr>
	<th style="text-align:center">
	Data sources
    </th>
	<th style="text-align:center">
	Expressions
	</th>
	</tr>
	<tr>
	<td>
	MS SQL Server
    </td>
	<td>
	DATEADD(mi,DATEDIFF(mi, GETUTCDATE(), GETDATE()),[last_requested])
	</td>
	</tr>
	<tr>
	<td>
	MySQL
    </td>
	<td>
	CONVERT_TZ([last_requested],'+00:00','+05:30')
	</td>
	</tr>
	</table>



