---
layout: post
title: Link Dashboards configured with Stored Procedure | Embedded BI
description: This page demonstrates how to apply linking in dashboards configured with Stored Procedure in Bold BI Embedded.
canonical: "/cloud-bi/faq/how-to-apply-linking-configured-with-stored-procedure/"
platform: bold-bi
documentation: ug
---

# How to apply linking in dashboard configured with Stored Procedure?

Follow these steps to configure the grid, listed with the stored procedure and enable linking between two dashboards, say for example Sales and Order Details dashboard.   

## Sales Dashboard

Here, the column chart widget is added to show the number of orders placed by country.
	
### Configuring Chart widget
The steps for configuring the chart are listed as follows:

1. Drag the column chart widget in the dashboard designer area.
2. Add the required data sources to configure the widget. 
3. Click the **Properties** tab for the chart widget, drag the required value from the Measures `(OrderId)`, and select the count aggregate function from the settings in the right of the column name and dimension column `(ShipCountry)` as follows.

    ![Mapping Excel Sheet](/static/assets/embedded/faq/images/AssignValueAndColumnValuesToChartWidget.png)

4. In the properties, check the **Enable Link** property.

5. Add a **column linking** to the filter column `(ShipCountry)` that you want to pass and filter the grid widget in another dashboard `(Order Details)`. Here, `&shipcountry={{:ShipCountry}}` is added along with the other dashboard `(Order Details)` URL, as shown in this provided [link](https://support-onpremise-demo.boldbi.com/bi/en-us/site/site1/dashboards/f07cdff2-eecb-48bf-8331-8587d30c0df9/i315980-linkingdashboard/order%20details%20dashboard?showmydashboards=1&shipcountry=USA).

    ![Mapped Tables](/static/assets/embedded/faq/images/UrlLinkingInCharts.png)

    Sales Dashboard is shown in the following screenshot.
	
    ![Chart Widget](/static/assets/embedded/faq/images/ChartWidget.png)

## Order Details Dashboard

Here, the grid widget is added with the details of the placed orders configured from the stored procedure.
	
### Configuring Grid widget
The steps for configuring the grid widget are listed as follows:
	
1. Drag the grid widget in the designer section.
2. Add the required stored procedure `(GetOrderDetailsByYear)` from which you want to render the grid. To the stored procedure, pass the filter parameter.

    Here, I have added `GetOrderDetailsByOrderYear` stored procedure.
	
	![Stored Procedure](/static/assets/embedded/faq/images/SQLStoredProcedure.png)
	![Adding Stored Procedure](/static/assets/embedded/faq/images/AddingSPInDataSources.png)
	
3.	Add the dashboard parameter.

    ![Dashboard Parameter](/static/assets/embedded/faq/images/AddingDashboardParameter.png)

4.	Click **Settings** in the stored procedure and select the saved parameter.

    ![Parameter for SQLStoredProcedure](/static/assets/embedded/faq/images/PassingParameterForSp.png)

5.	Drag and add the required fields into the column you want to show in the grid widget by clicking the properties tab.

    The following screenshot is of Order Details dashboard, which has the order year 1997 filtered from the stored procedure.
	
	![Grid Widget](/static/assets/embedded/faq/images/GridWidget.png)
	
## Sample 
Please find the sample in this [link](https://support-onpremise-demo.boldbi.com/bi/en-us/site/site1/dashboards/203af3b9-1d73-4c34-8b4f-170daa99d912/I315980-LinkingDashboard/Sales%20Dashboard?showmydashboards=1).The following is the preview of the sample, and when you click a particular country say, for example, Venezuela in the chart widget and select **Link**, you are navigated to the grid filtered by that selected ship country column, say Venezuela. Also, the grid is set up with a stored procedure that lists the orders placed in the order year 1997.

Sales Dashboard
![Chart Preview](/static/assets/embedded/faq/images/ChartPreview.png)

Order Details Dashboard
![Grid Preview](/static/assets/embedded/faq/images/GridPreview.png)
