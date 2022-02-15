---
layout: post
title: Amazon Athena – Embedded BI Connector | Bold BI Learning
description: Learn how to connect Amazon Athena database with Bold BI deployed in your server and create data source.
canonical: "/embedded-bi/working-with-data-source/data-connectors/amazon-athena/"
platform: bold-bi
documentation: ug
---

# Connecting Bold BI to Amazon Athena data source
The **Bold BI** Dashboard Designer supports connecting the Amazon Athena database using the SQL Live Query (C# API).

## Choose an Amazon Athena data source
To configure the Amazon Athena data source, follow these steps: 
1.  Click **Data Sources** in the configuration panel to add a new data connection.
![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/data-sources-icon.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
![Create new datasource](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/create-new-datasource.png#max-width=60%)

3. Select the **Amazon Athena** connection in the connection panel.
![Amazon Athena icon](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/amazon-athena-icon.png#max-width=60%)

>**NOTE:** You can also create a data source from the home page by clicking the Data Sources menu from the left menu panel and Create Data Source from the data sources page.
![Amazon Athena connector](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-select-connector.png#max-width=90%)

## Connect to Amazon Athena
Amazon Athena data source can be accessed in Bold BI using the live connection mode.

### Create Amazon Athena data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create an Amazon Athena data source: 
1.	Enter a name and description (optional) for the data source. 
2.	Choose the region endpoint of the server from the **Region Endpoint** drop-down.
3.	Enter the port, in which the server is running in the **AwsAccessKeyID** text box.
4.	Enter a valid Amazon Athena secret key in the **AwsSecretKey** text box. 
5.	Enter a valid output location for storing the output files in the **Output location** text box in the format mentioned in the tooltip.
6.	Select a database that you want to query in the listed database associated with the given Amazon Athena server in the database combo box.
![Amazon Athena connection details](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-connection-details.png#max-width=60%)

### Data preview
1.	Click Connect to connect the Amazon Athena server with the configured details. The schema represents the collection list retrieved from the Amazon Athena server. This dialog box displays a list of schemas in a tree view and their corresponding values.
![Query designer page](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/athena-query-designer.png#max-width=100%)

2.	Now, the data design view page with the selected table schema opens. Drag the table.
![Drag table](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/drag-table.png#max-width=100%)
 
You can use the Code View option for passing a query to display data.
![Code view mode](/static/assets/embedded/working-with-datasource/data-connectors/images/amazon-athena/code-view-mode.png#max-width=100%)

3.	Click Save to save the data source with a relevant name.

>**NOTE:** In the future, you can edit the connection information using the [Edit Connection](https://help.syncfusion.com/bold-bi/editing-a-data-connection) option.

## Related links
[Data transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a data connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)

[Dashboard designer walk-through](/embedded-bi/getting-started/quick-start/)



