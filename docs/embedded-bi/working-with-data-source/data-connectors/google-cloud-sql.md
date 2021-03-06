---
layout: post
title: Google Cloud SQL – Embedded BI Connector | Bold BI Docs
description: Learn how to connect Google Cloud SQL using SQL Live Query with Bold BI deployed in your server and create data source.
canonical: "/cloud-bi/working-with-data-source/data-connectors/google-cloud-sql/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Google Cloud SQL data source
The Bold BI Dashboard Designer supports connecting the multiple database by Google Cloud SQL using the SQL Live Query (C# API).

## Choose Google Cloud SQL data source
To configure the Google Cloud SQL data source, follow these steps: 
1. Click **Data Sources** in the configuration panel to add a new data connection.

   ![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/common/DataSourcesIcon.png)

2. Click **CREATE NEW** to launch a new connection from the connection panel.
3. Select the **Google Cloud SQL** connection in the connection panel.

   ![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/ChooseDS.png)

> **NOTE:**  You can also create a data source from the home page by clicking the **Data Sources** menu from left menu panel and **Create Data Source** from the data sources page.

   ![Choose data source from server](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/ChooseDS_server.png)

## Connect to Google Cloud SQL
### Create Google Cloud SQL data source
After clicking the data source, the **NEW DATA SOURCE** configuration panel opens. Follow the given steps to create a Google Cloud SQL data source: 
1. Enter a name and description (optional) for the data source. 
2. Select the database engine you want to use with the given Google Cloud SQL Server from the database engine drop-down box
3. Enter a valid Google Cloud SQL  server or host name in the **Server Name** text box.
4. Enter a valid Google Cloud SQL user name in the **User Name** text box. 
5. Enter a valid Google Cloud SQL  password in the **Password** text box.
6. Enter a valid Google Cloud SQL  Database in the **Database** text box or select in the combo box.

Google Cloud SQL supported database engine in Bold Bi:

	* MySQL
	* PostgreSQL

![Google Cloud SQL Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/GoogleCloudSQL_Connection.png)

There are two connection types available in a data source:

	* Live mode
	* Extract mode

## Live mode connection

In this connection type, a data source is directly fetched from source. Choose the **Live** mode option for this connection.

![Live Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/GoogleCloudSQL_Live_Connection.png)

### Data Preview
1. Click **Connect** to connect the Google Cloud SQL server with configured details. 
The schema represents the collection list retrieved from the Google Cloud SQL server. This dialog displays a list of schemas in treeview and their corresponding values.

   ![Treeview schema](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Treeview_schema.png)

2. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query designer](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_sql.png)

    You can use the Code View option for passing a query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode.png)

3. Click **Save** to save the data source with a relevant name.

## Extract mode connection 

In this connection type, a data source is fetched from source periodically. Choose the **Extract** mode option for this connection.

![Extract Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/GoogleCloudSQL_Extract_Connection.png)

### Refresh Settings
#### Steps to configure the data source refresh settings:
1. Click Refresh Settings in the configuration panel.

    ![Refresh Setting](/static/assets/embedded/working-with-datasource/data-connectors/images/GoogleCloudSQL/GoogleCloudSQL_Refresh_Setting.png)

2. Select the recurrence type, recurrence start, and end dates in the **Refresh Setting** dialog box.
	* Data refresh can be scheduled hourly, daily, weekly, and monthly.
	* Application Time Zone is displayed below the date picker. Start time of the schedule is converted to the client Time Zone and shown at the right-side for users convenience. After selecting, click **Schedule**.

	![Save Schedule](/static/assets/embedded/working-with-datasource/data-connectors/images/common/RefreshSetting.png)

### Preview and data import
1. Click **Connect** to connect the Google Cloud SQL server with configured details.
2. The Choose Table(s) dialog opens. This dialog displays a list of tables and views in treeview. Select the required table(s) or view(s) from treeview to use it in the designer.
The option is available for configuring incremental refresh column (The table must have a primary key column and date column to configure this option) for the selected items in the right-side panel. If you configure it, then the data source will work on [Incremental update](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#incremental-update), otherwise it will work on [Full load](/embedded-bi/working-with-data-source/data-connectors/sql-data-source/#full-load) concept. Finally, click **Connect**.

   ![Preview](/static/assets/embedded/working-with-datasource/data-connectors/images/common/Preview_Extract.png)

3. Now, the data design view page with the selected table schema opens. Drag the table.

   ![Query Editor](/static/assets/embedded/working-with-datasource/data-connectors/images/common/QueryEditor_Extract.png)
    
    You can use the Code View option for passing query to display data.

   ![Codeview mode](/static/assets/embedded/working-with-datasource/data-connectors/images/common/CodeViewMode_Extract.png)

4. Click **Save** to save the data source with a relevant name.

> **NOTE:**  In future, you can edit the connection information for both live and extract mode connections using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)