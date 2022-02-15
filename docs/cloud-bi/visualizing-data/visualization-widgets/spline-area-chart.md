---
layout: post
title: Spline Area Chart Widget– Cloud BI | Bold BI Documentation
description: Learn how to create a Spline Area Chart visual in Bold BI Cloud dashboard, configure data fields and other settings.
platform: bold-bi
control: Spline Area Chart
documentation: ug
---

# Spline Area Chart

Spline Area chart allows you to showcase the difference between the minimum and maximum values over a certain time period with data points are connected by smooth curves.

![Spline Area Chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart.png) 

## How to configure the table data to spline area chart?

Spline Area chart needs a minimum 1 value element and 1 column element to showcase. The `measure` or `expression` field that you would like to analyze can be dropped into the Y values block. The `dimension` that you would like to categorize the measure can be dropped onto the Columns block. If you would like to categorize based on a series, then the respective dimension can be dropped onto the Rows block in addition.

Follow the steps to configure data to Spline Area chart:

1.  Drag and drop the control to canvas and resize it to your required size.

![Drag and drop the control](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/add-splineareachart.png)

2.  Click the `Data Source` button in the configuration panel.

![Data Source](/static/assets/cloud/visualizing-data/visualization-widgets/images/databutton.png)

3.  Click the `CREATE NEW` button to launch a new connection from the connection type panel.

![CREATE NEW](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcebutton.png)

4.  In the connection type panel, click any one (Here, the `Microsoft Excel` Connection type is selected for demonstration) of the listed connection type button.

![Datasource list](/static/assets/cloud/visualizing-data/visualization-widgets/images/datasourcelist.png)

5.  In the `NEW DATA SOURCE` configuration panel, fill the connection type and related details. Click the `Preview & Connect` button.

![Connect button](/static/assets/cloud/visualizing-data/visualization-widgets/images/connectbutton.png)

6.  Drag your preferred table or view from the left pane from the data design view, and click the `Save` button.

![Virtual table](/static/assets/cloud/visualizing-data/visualization-widgets/images/virtualtable.png)

7.  Click the `Properties` button in the configuration panel, property pane opens. Now, switch to the `ASSIGN DATA` tab.

![Designer properties button](/static/assets/cloud/visualizing-data/visualization-widgets/images/designerpropertiesbutton.png)

![Spline Area assign data](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-assigneddata.png)

8.  The `ASSIGN DATA` tab will be opened with the available measures and dimensions from the connected data source.

![chart data](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/chartdata.png)

9.  You can add the required data from the `Measures` and `Dimensions` into the required field.

### Adding Values

You can add more than one `Measures` into the `Values` field by drag and drop the required measure.

![Add more than one Measures](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/add-measures.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Changing the aggregation type

Click the `Settings` option to change the name and the required summary type from the available summary types shown in the Settings.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-settings.png)

#### Filtering data

You can filter the data to be displayed in the funnel chart by using the `Filter` option. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/).

![Configuring widget filters](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/widget-filters.png)

#### Measure formatting

You can format the data to be displayed in the chart by using the `Format` option. For more details, refer to [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting measure type column](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-measure.png)

To remove the added value fields, click the highlighted button.

![Click highlighted button](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/remove-fields.png)

You can add more than one column from the `Dimensions` field into the `Values` field.

### Adding Columns

You can add more than one value into the `Columns` field.

![Add more than one value into Columns](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/adding-columns.png)

Spline Area chart will be rendered like this,

![Spline Area chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/spline-area-chart-sample.png)

#### Settings 

You can change the `Settings`.

![Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/settings.png)

#### Renaming fields

The configured field names can be edited by using the `Rename` option provided in the settings menu.

#### Sorting

You can Sort the dimension data using the `Sort` option under the Settings menu list. To apply sorting for the data, refer to [Sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column).

![Sort Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/sort-settings.png)

#### Filtering data

You can apply filter by selecting the `Filter(s)` option in the settings. For more details, refer to [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column).	

![Configuring filter for dimension column](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/configuring-filter.png)

*After Filtering data*

![Filtering data](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/filter-data.png)

To show all records, click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into the column field.

#### Drill Down

Add more than one value to the `Columns` field, an alert message will be shown. Click `Yes` to enable the option.

> **NOTE:**  If you click `No`, a single value will be added to the `Columns` field.

![Drill alert](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/drillalert.png)

The drilled view of the chart region is selected.

![Drilled view of the chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/linedrill.png)

### Adding Rows

You can drag and drop the `Dimension` into the `Rows` field. 

![Drag and drop the Dimension](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/chart-row.png)

You can apply the [filter](/cloud-bi/visualizing-data/working-with-widgets/configuring-widget-filters/#configuring-filter-for-dimension-column) and [sort](/cloud-bi/visualizing-data/working-with-widgets/advanced-sorting/#dimension-column) options for the rows field, if required.

This will render the spline area chart in a series.

![SplineAreachart_series](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-series.png)

## How to format spline area chart?

You can format the spline area chart for better illustration of the view that you require, through the settings available in the `Properties` tab.

To configure the data into spline area chart follow the steps:

1. Drag and drop the spline area chart into the canvas and resize it to your required size.

2. Configure the data into spline area chart.

3. Focus on the spline area chart and click on the widget settings.

![Spline Area widget settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-widgetsettings.png)

The property window will be opened,

![Property window](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-properties.png)

### General Settings

![General Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/general-settings.png)

#### Name

This allows you to change the `title` for this spline area chart widget.

#### Subtitle

Allows you to provide the `subtitle` for this spline area chart widget.

#### Description

Allows you to provide the `description` about this spline area chart widget.

### Basic Settings

![Basic Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/basic-settings.png)

#### Chart Type and axis

Click the `Change` button to open the `Chart Type` and `Axis Settings` dialog. 

![Chart Type](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/name.png)

**Chart Type**: This allows you to switch the widget view from the current chart type to another chart type.

**Secondary Axis**: By default, the configured field is plotted as the primary axis if you enable this option, the selected field will be plotted as the secondary axis. 

#### Enable Animation

This allows you to enable the `animation` property. It animates by the measure values.

#### Show Legend

A Legend is a text used to describe the data plotted. This allows you to toggle the visibility of legend in a chart and also change the legend text position (selecting through combo box).  

![Show Legend](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-legend.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in a chart.

### Legend Label Color

This allows you to change the chart legend title and label colors.

![Chart Legend Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/legend-label-color-option.png)

![Chart Legend Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/legend-label-color.png)


#### Customize

You can customize the legend text through the `Custom Legend Settings` dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead.

![Legend customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legendcustomize.png)

![Legend customization Change](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legendcustomize-change.png)

#### Legend Position

A Legend is a text used to describe the data plotted. This option allows you to place the legend at the position of **Left, Right, Top,** and **Bottom**.

#### Legend Shape

This allows you change the **shape** of the legend.

***Circle***

This option allows you to change the shape of the legend in a `Circle`.

![Show Legend shape](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-legend-shape.png)

***Series Type***

This option allows you to change the shape of the legend in `Series`.

![Show Legend shape Series](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-legendshape-series.png)

#### Legend Title

This allows you to add the legend title for the chart. It will reflect with the `Show Legend`.

![Show Legend Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splinearea-legendtitle.png)

#### Show Value Labels

This allows you to toggle the visibility of value labels.

![Show Value Labels](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-value-labels.png)

### Value Label Color

This allows you to customize value label color's.

![Value label Color Option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/data-label-color-option.png)

![Value label Color](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/data-label-color.png)

### Value Label Position

This allows you to place the value label at the position of `top, middle` and `bottom`.

### Value Label Rotation
 
This allows you to define the rotation angle for the value labels to display.

![Value Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-showlabelrotation.png)

### Value Label Suffix

Allows you to enable the `Suffix` value text to the value labels. 

### Suffix Value

Allows you to set or edit suffix value to the value labels when the `value label suffix` is enabled. 

![Value Label Suffix](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/label-suffix.png)

### Show Marker

This allows you to toggle the visibility of `marker` from the label to adorn each data point in a chart series.

![Show Marker](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-marker.png)

### Show Items With No Data

This allows you to show the data which column does not have value.

### Empty Point Mode

This allows you to handle the display mode of the data point values is null or undefined when `Show Items With No Data` is enabled.
 
### Gap

This option allows you to show the null or undefined values with gaps.

![Empty Point Mode Gap](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-gap.png)

### Zero

This option allows you to show the null or undefined values in the zero axis.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-zero.png)

### Average

This option allows you to display the null or undefined values as average.

![Empty Point Mode Zero](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-average.png)

### Enable Smooth Scroll

On enabling this support, the chart scroll bar thumb-size will be calculated based on the total records count. So, you can see the last record by performing a single scroll.

### Link

You can enable linking and configure to navigate to a general URL with or without parameters. For more details, refer to [Linking](/cloud-bi/visualizing-data/working-with-widgets/linking-urls-and-dashboards/).

![Link](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/link.png)

### Axis Settings

This section allows you to customize the `axis settings` in a chart.

![Axis Settings](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/axis-settings.png)

### Title color

This allows you to customize the axis title color.

### Label color

This allows you to customize the axis label color.

### Show Category Axis

This allows you to enable the visibility of `Category Axis`.

![Show Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-category-axis.png)

### Show Category Axis Title

This allows you to enable the visibility of `Category Axis` title.

![Show Category Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-categoryaxis-title.png)

### Show Axis Title

This allows you to edit the `Category Axis` title for the chart. It will reflect in the x-axis name of the chart.

![Show Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-editcategoryaxistitle.png)

### Label overflow mode

This allows you to handle the display mode of the overlapping labels in the `Category Axis`.

***Trim***

This option trims the end of overlapping label in the axis.

![Label overflow mode trim](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-category-trim-axis.png)

***Hide***

This option hides the overlapping label in the axis. 

![Label overflow mode hide](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/hide-label.png)

#### Trim Axis Labels

This option allows you to trim the axis labels, based on the `Maximum Label Width` property value.

![Trimmed label](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/trimming-label.png)

#### Label Maximum Width

This option allows you to set a maximum width for the axis labels, and also it can be made customizable when the `trim axis label` option is enabled.

![Label maximum width](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/maximum-label-width.png)

#### Category Axis Label Rotation

This allows you to define the rotation angle for the category axis labels to display.

![Category Axis Label Rotation](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/label-rotation.png)

### Auto Interval

This allows you to dynamically calculate the `axis intervals`. When you resize the chart, the axis intervals are displayed differently depending on their given data.

#### Show Primary Value Axis

This allows you to enable the `Primary Value Axis` for the chart. 

![Show Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/show-primary-value.png)

#### Show Primary Value Axis Title

This allows you to enable the visibility of the `Primary Value Axis` title of the chart.

![Show Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-primaryvalueaxistitle.png)

#### Primary Value Axis Title

This allows you to edit the `Primary Value Axis` title. It will reflect in the y-axis name of the chart. 

![Primary Value Axis Title](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/primary-value-axis-title.png)

### Axis Type

This allows you to change the type of axis in the spline area chart.

### Linear

This option allows you to handle the type of axis as linear.

### Logarithmic

This option allows you to handle the logarithmic axis that uses a logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (Eg: 10-6) and higher-order of magnitude (Eg: 106).

#### Axis Format

This option allows you to format the primary and secondary axis values from the formatting details provided using the `Format` button. For more details, refer to this [measure format](/cloud-bi/visualizing-data/working-with-widgets/formatting-measure-type-column/).

![Formatting option](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-button.png)

### Axis Range Settings

This allows you to manually set the **Minimum, Maximum,**  and **Interval** values of the primary value axis through the `Axis Range Settings` dialog.

![Axis Range Customization](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-axisrange-settings.png)

It will reflect in the primary value axis of the chart.

![Axis Range Settings output](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-axisrange-output.png)

### Grid Line

![Grid Line](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/chart-gridlines.png)

#### Primary Value Axis

This allows you to enable the `Primary Value Axis` gridlines for the spline area chart.

![Primary Value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/enable-primary-value-axis.png)

#### Secondary value Axis

This allows you to enable the `Secondary Value Axis` gridlines for the Combination chart.

![Secondary value Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachartsecondaryaxis.png)

#### Category Axis

This allows you to enable the `Category Axis` gridlines for the spline area chart.

![Category Axis](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/category-axis.png)


### Formatting

This allows you to change the `color` for the spline area chart.

![Format Colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/formatting.png)

It will reflect in the spline area chart.

![Formating Data Colors](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/formatting-color.png)

### Font Settings 

Font settings section allows you to enable the auto font size for **legend , legend title , category axis label, category axis title , primary axis label** and **primary axis title**.

### Auto Font Size

On enabling `auto font fize` , the size of the font adjusted automatically based on the screen resolution.

### Filter

This section allows you to handle the `filter` action for the spline area chart widget.

![Filter](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/filter.png)

**Act as Master Widget**

This allows you to define this chart widget as a `master widget` such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this chart widget to ignore the responding to the filter actions applied on other widgets in the dashboard.

**Enable Hierarchical Filter**

Through this option, you can enable or disable hierarchical `top N` filtering. While applying the Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering needs to be done as flat or based on the hierarchy of dimension columns added. 

When the `Enable Hierarchical Filter` option is enabled, the Top N will be applied for each individual column separately based on the number set for each column.

### Trendline

You can add more than one trendline to Cartesian charts except for bar type series(Line, Column, Area, Spline) and stacked type of charts. You can **add, edit,** and **delete** trendlines.

![Trendline](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline.png)

### Add Trendline and Edit Trendline

To add the trendline, click the highlighted button.

![Trendline Add](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlineadd.png)

Now, the dialog will open as follows.

![Trendline Dialog](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlinedialog.png)

Click `OK` button to add trendline in a spline area chart. Now, the chart renders as follows.

![Trendline chart](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendlinechart.png)

To edit the trendline select the one to be edited and click the highlighted button.

![Trendline Edit](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline-edit.png)

Again the trendline dialog window opens now.

***Legend Text***

You can edit the trendline legend by the `Legend Text` text box. By default, the `Legend Text` renders are based on the Line type and Series name.

***Series***

You can change the series to which series have to show the trendline by `Series` dropdown option. 

***Line Type***

You can select line type by the `Line Type` dropdown option(Linear, Exponential, Logarithmic, Power, and Polynomial).

***Line Color***

You can change the color of the trendline by the `Line Color` color picker.

***Line Style***

You can change the style of the trendline by the `Line Style` drop down option(Solid, Dot, Dash, DotDash, LongDash, and LongDashDotDot).

### Delete Trendline

To delete the trendline, select the one to be deleted and click the highlighted button.

![Trendline Delete](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/splineareachart-trendline-delete.png)

### Container Appearance

This Sections allows you to customize the `Container Appearance` for the spline area chart widget.

![Container Appearance](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/container-appearance.png)

### Title Alignment

This allows you to handle the alignment of widget title to either **left, center,**  or **right**.

### Title Color

This allows you to apply the text `color` to the widget title.

### Title Auto Font Size

This allows you to toggle the size of the font for the widget title.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Title Auto Font Size** is disabled. Value can be between 10 and 44.

### Subtitle Auto Font Size

This allows you to toggle the size of the font for the widget subtitle.

**Font Size**

This allows you to apply the specified size of the font to the widget title if the **Subtitle Auto Font Size** is disabled. Value can be between 10 and 32.

### Show Border

This allows you to toggle the visibility of `border` surrounding the widget.

### Corner Radius

This allows you to apply the specified `radius` to the widget corners if the **Show Border** is enabled. Value can be between 0 and 10.

### Show Background Image

This allow you to set the **background image** for the spline area chart widget.

### Background Color

This allows you to set the **background color** to the spline area chart widget.

### Transparency

This property allows you to specifies the **transparency** for the `background color`.

### Container actions

This Section allows you to customize the `Container actions` for the spline area chart widget.

![Container Actions](/static/assets/cloud/visualizing-data/visualization-widgets/images/spline-area-chart/container-actions.png)

#### Show Header

This allows you to enable or disable the `widget title` of the spline area chart. 

#### Allow Maximize View

This allows you to enable or disable the `maximized mode` of the spline area chart widget. The visibility of the maximize icon in the widget header will be defined based on the setting in the viewer.

#### Allow CSV Export

This allows you to enable or disable the `CSV export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in the viewer.

#### Allow Excel Export

This allows you to enable or disable the `Excel export` option for the spline area chart widget. Enabling this allows you to export the summarized data of the widget view to `(.xlsx or .xls)` format in the viewer.

#### Allow Image Export

This allows you to enable or disable the `Image export` option for the spline area chart widget. Enabling this allows you to export the view of the widget to image format `(.jpg), (.png), or (.bmp)` in the viewer.

#### Allow PDF Export

This allows you to enable or disable the `PDF export` option for the spline area chart widget. Enabling this allows you to export the view of the widget to pdf format in the viewer.

#### Enable Comments

This allows you to enable or disable `comment` for the dashboard widget. For more details, refer to this [link](/cloud-bi/visualizing-data/working-with-widgets/commenting-widget/).

#### Allow View Underlying Data

This allows you to visualize the raw data associated with a widget at runtime. 

#### Pin widget

This allows you to pin the widget.

To learn more about viewing the underlying widget data, refer to the [view data documentation](/cloud-bi/visualizing-data/working-with-widgets/view-data/). 







