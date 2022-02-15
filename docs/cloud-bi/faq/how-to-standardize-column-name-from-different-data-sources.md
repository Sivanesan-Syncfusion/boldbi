---
layout: post
title: Standardizing Column Name – Cloud BI | Bold BI Docs
description: This page describes the general guidelines to combine the columns of different formats from various data connections.
platform: bold-bi
documentation: ug
---

# How to Standardize column names from different data sources?

Bold BI has a variety of data source connections, allowing the user to easily retrieve data from various connections. However, when it is necessary to use these data sources in a single location, the common problem is that each connection may have a different format of values, i.e, DateTime format may vary with connections, username format may vary. This article explains how to standardize the string values of a column that varies depending on the connection.  

For example, you are standardizing the username column from two different connections.

1. Assume, you have two different data sources, such as connection 1 (Jira) and connection 2 (GitLab).
2. Connection 1 has a different naming format for the username than connection 2. 

    ![Jira data source](/static/assets/cloud/faq/images/JiraDataSource.png)

    ![GitLab data source](/static/assets/cloud/faq/images/GitlabDataSource.png)

3. You can standardize these two fields by creating a mapping table that contains both the names of connection 1 and 2 as well as the standardized name. This can be an excel, csv or Google Sheets or any Web connection.

    ![Mapping Excel Sheet](/static/assets/cloud/faq/images/MappingExcelSheet.png)

4. Now, this mapping table should be added as a data source in Bold BI.

    ![Importing Mapping File](/static/assets/cloud/faq/images/ImportingMappingExcelFile.png)

5. You can use and join the mapping table with the Connection 1 and Connection 2 data sources because the mapping table has column values (username) in common to both the connections as well as the standardized name.

    ![Mapped Tables](/static/assets/cloud/faq/images/MappedTables.png)

    Here, sheet 1 is the mapping table, bulk is the data from Jira data source (connection 1), and users is the GitLab user information table.

    <table>
     <tr>
     <th><b>Mapping table</b></th>
     <th><b>Mapped to</b></th>
     </tr>
     <tr>
     <td> Jira Username </td>
     <td> Bulk table (displayName column) - Jira connection 1 </td>
     </tr>
     <tr>
     <td> GitLabUsername </td>
     <td> Users (username column)- GitLab connection 2 </td>
     </tr>
     </table>
	
     Inner joins are used to join the tables as follows.
	
    ![Inner Joins](/static/assets/cloud/faq/images/InnerJoinsForTables.png)
 
6. Now, users can configure the widgets from different data sources. For example, the grid widget is configured as follows. 

    ![Grid Sample](/static/assets/cloud/faq/images/GridWidgetWithSharedFields.png)

