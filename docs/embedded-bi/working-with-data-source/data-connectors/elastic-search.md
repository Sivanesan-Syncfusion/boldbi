---
layout: post
title: Connecting Bold BI application to Elastic Search data source 
description: Learn how to connect Bold BI to Elastic search data source and create data source for widget configuration.
canonical: "/cloud-bi/working-with-data-source/data-connectors/Elastic-Search/"
platform: bold-bi
documentation: ug
---
 
# Connecting Bold BI to Elastic Search data source
The **Bold BI Cloud** Dashboard designer supports connecting the Elastic Search database using the SQL Live Query. 

**Supported Server Versions**:
*  Elasticsearch `7.0` and above 
*  Amazon Elastic Search `7.10` and above

## Choose an Elastic Search data source
To configure the Elastic Search data source, follow these steps:  
1. Click the `Data Sources` icon in the configuration panel to add a new data connection.

![Data source icon](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Datasourceicon.png#width=359.5px;height=512.2px)

2. Click the `CREATE NEW` button to launch a new connection from the connection panel.

![Create data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Newdatasource.png#width=358.5px;height=515.17px)

3. Select the Elastic Search connection in the connection panel.

![Choose data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Choosedatasource.png#width=355.5px;height=509.7px)
   
> **NOTE:**  You can also create a data source from the Bold BI home page by clicking the **Data Sources** menu from the left menu panel and **Create Data Source** from the data sources page.

![Select data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Selectdatasource.png#max-width=85%)

## Connect to Elastic Search
An Elastic Search data source can be accessed in Bold BI using the live connection mode.

### Create an Elastic Search data source
After clicking a data source, the `NEW DATA SOURCE` configuration panel opens. Follow the given steps to create an Elastic Search data source: <br/>
1.	Enter a name and description (optional) for the data source. 
2.	Select a connection type you want to use with Elastic Search from the `Connection Type` drop-down box. 

There are two connection types available in the Elastic Search connector:
   *  Elasticsearch SQL
   *  Open Distro
	
![Elastic search Connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Connectiontype.png#width=349px;height=496.75px)

### Connect using the Elasticsearch SQL connection type
1.	Enter a valid Elastic Search `server` or `hostname` in the Server Name text box.
2.	Enter the `port` in which the server is running in the port text box.
3.	The Authentication type provided is determined by the configuration of the Elastic Search server.

   *  None
   *  Basic HTTP Authentication	

![Choose Authentication](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Authenticationtype.png#width=358.5px;height=511.06px)

4.	If the Elastic Search server uses the `Basic HTTP Authentication` in the Authentication type, then, enter a valid Elastic Search username in the `Username` text box and enter a valid Elastic Search `password` in the Password text box.
5.	Select a `database` that you want to query in the listed database associated with the given Elastic Search server in the database drop-down box.
6.	Click `Connect` to connect the Elastic Search server with the configured details.

![Data source connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Connectingdatasource.png#width=351px;height=501.06px)

> **NOTE:** To connect data source with **SSH**, enable the SSH check box in the **NEW DATA SOURCE** configuration panel and enter the required credentials.

![Enable SSH](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/enable-ssh.png#max-width=45%)

### Connect using Open Distro connection type

### Prerequisites
To connect Amazon Elasticsearch service through Open Distro, make sure you have enabled settings:

PUT _opendistro/_sql/settings <br />
“persistent”:{ <br />
“opendistro.sql.cursor.enabled”: true <br />
} <br />
}

Please follow these steps to connect using the Open Distro connection type.
1.	Enter a valid Elastic Search `server` or `hostname` in the Server Name text box.
2.	Enter the `port`, in which the server is running in the port text box.
3.	Enter a valid Elastic Search `username` in the Username text box.
4.	Enter a valid Elastic Search `password` in the Password text box.
5.	Click `Connect` to connect the Elastic Search server with the configured details.

![Open distro connection](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Opendistroconnection.png#width=346px;height=527.33px)

### Data Transformation

1.	After connecting the data source, the data design view page will be opened. On this page, the list of schemas and tables from the Elastic Search server will be shown in a `treeview` section.

![Tree view](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Treeview.png#max-width=100%)

2.	Now, you can drag and drop the required table from the `tree view` list.

![Drag and drop table](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Draganddroptable.png#max-width=100%)

3.	After dragging and dropping the required table, you can do data modeling such as [Joining Tables](/embedded-bi/working-with-data-source/transforming-data/), [Formatting Columns](/embedded-bi/working-with-data-source/transforming-data/), [Configure Data Filters](/embedded-bi/working-with-data-source/transforming-data/), and [Configure Expression Columns](/embedded-bi/working-with-data-source/transforming-data/) can be done.

### Data Preview
1.	To view the data from the selected table, select the `Update` button.

![Update values](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Updatevalues.png#max-width=100%)

2.	Now, the data from the selected table will be shown.

![Table values retrieve](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Retrievedvalues.png#max-width=100%)
	
3.	Click `Save` to save the data source with a relevant name.

![Save data source](/static/assets/embedded/working-with-datasource/data-connectors/images/Elastic-search/Savedatasource.png#max-width=100%)	

> **NOTE:**  In the future, you can edit the connection information using the [Edit Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/) option and <br/>
 Joins are not supported for the Elastic Search data source in Bold BI.

## Related links
[Data Transformation](/embedded-bi/working-with-data-source/transforming-data/joining-table/)

[Editing a Data Connection](/embedded-bi/working-with-data-source/editing-a-data-connection/)   

[Dashboard Designer Walkthrough](/embedded-bi/getting-started/quick-start/)