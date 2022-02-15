---
layout: post
title:  Embedded SDK v3.3.40 WPF Framework Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with WPF sample application,which has been supported by Bold BI since v3.3.40.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in WPF using the Embedded SDK

Created a WPF application for achieving this embedding. Here, set the server and dashboard details as the embed details, and the dashboard will be rendered after passing the authorization.   

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide provides you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the WPF Forms sample from the attached [file](https://onpremise-demo.boldbi.com/getting-started/wpf/sample.zip).    

2. You need to set the following properties in `EmbedProperties.cs` file as follows.  
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/wpf-props.png#width=550px;height=410px)

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi, http://dashboard.syncfusion.com/bi)</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For Bold BI Enterprise edition, it should be like <code>site/site1</code>. For Bold BI Cloud, it should be empty string.</td>
        </tr>
        <tr>
        <td align="left">DashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard you want to embed here. Please refer below how to get the dashboard id. </td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">UserPassword</td>
            <td align="left">Password of the Admin in Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step. </td>
        </tr>    
    </tbody>
    </table>


3. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/), for more details.  

4. Then, run your WPF application.

## Get dashboard ID

You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.

![Get dashboard ID](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

After changing the above details in the sample, you can run the WPF forms and the dashboard will be rendered.

## How this sample works
1. We are using WebView to render the BoldBI Dashboard in WPF application.

2. Since we are using WebView, we have to generate the html file to append to WebView.

3. We have to authorize the application by calling the `MainWindow` method as follows,

    ![embed details](/static/assets/embedded/javascript/sample/images/mainwindow-wpf.png#width=550px;height=410px)

4. In the above authorization, generated a SignatureUrl with the provided EmbedSecret key and using the signature, we will validate the details and BoldBI will return the token. We will pass the token with the HtmlString as below,

    ![Htmlstring](/static/assets/embedded/javascript/sample/images/wpf-htmlstring.png#width=550px;height=410px)

5. In the `EmbedProperties.cs`, you can change the dashboard Id of the respective dashboard as you wish to embed.
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/wpf-props.png#width=550px;height=410px)