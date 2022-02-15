---
layout: post
title: SparkSQL – Embedded BI Data Connector | Bold BI Docs
description: Learn how to connect SparkSQL database with Embedded Bold BI and create data source for widget configuration.
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to SparkSQL data source
The Bold BI Dashboard designer connects the SparkSQL database using the SQL Live Query.

## Choose the SparkSQL data source
To configure the SparkSQL data source, follow these steps: 
1. Click the **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/datasource.png#max-width=60%)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
   
   ![Data source Button](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/datasourcebutton.png#max-width=60%)
   
3. Select the **SparkSQL** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/sparksqlbutton.png#max-width=60%)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from homepage](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/selectconnector.png#max-width=100%)

## Connect to SparkSQL
### Create SparkSQL data source
After clicking the data source, the NEW DATA SOURCE configuration panel opens. Follow the given steps to create a SparkSQL data source: 
1. Enter a name and description(optional) for the data source. 
2. Enter a valid SparkSQL server or hostname in the ServerName text box.
3. Enter its corresponding port in the Port text box.
4. Choose **None** or **BASIC authentication** in the Authentication Mechanism combo box.
5. Enter a valid SparkSQL username and password if you choose the Basic Authentication Mechanism. 
6. Select a database you want to query in the listed database associated with the given SparkSQL server in the database combo box.

   ![Sparksql Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/sparksql_connection.png#max-width=60%)

> **NOTE:** To connect data source with SSH, enable the **SSH** check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.
![Enable SSH](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/enable-ssh.png#max-width=60%)

### Data Preview
1. Click **Connect** to connect the SparkSQL server with configured details. 
The schema represents the collection list that is retrieved from the SparkSQL server. This dialog displays a list of schemas in the treeview and their corresponding values.
   
   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/Treeview_schema.png#max-width=100%)

2. Now, the data design view page with the selected table schema opens. Drag and drop the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/dragtable.png#max-width=100%)

    You can either use the Code View options to pass the query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/Sparksql/CodeViewMode.png#max-width=100%)

3. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)
