---
layout: post
title: Intermediate DB for Data Extract - Embedded BI | Bold BI Docs
description: This page summarizes the intermediate database used in Bold BI for processing data extracts with extract mode data sources for embedded analytics.
platform: bold-bi
documentation: ug
---
# Bold BI Intermediate Database 

Bold BI Intermediate database is a data store to import data from the Web API data sources, extract mode connection data sources like SQL, and statistic files and connect with dashboards quickly. 

The Bold BI Data Engine is where you can perform simple transformations to your data and format them for use in visualizations. The following transformations are supported: 

* Join tables
* Create calculated fields
* Format
* Filter

You can use the scheduled refresh option to update data. Refresh settings will be configured by users for periodic updates. Based on the Refresh Settings, data will be imported into the intermediate database and in this case, the dashboard is rendered with the newly imported data.

The intermediate database is configured when the on-premise version is installed. Please refer to the [Database Configuration for Data Store Intermediate](https://help.boldbi.com/embedded-bi/application-startup/#database-configuration-for-data-store) section for more details.

![Bold BI Intermediate Database Structure](/static/assets/embedded/working-with-datasource/images/boldbiintermediatedatabase.png)
         
In the Bold BI Enterprise platform, the following intermediate databases are supported.
 * Microsoft SQL Server
 * PostgreSQL
 
 Refer to this section to know the details of [Software Requirements](/embedded-bi/setup/overview/#software-requirements).