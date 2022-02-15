---
layout: post
title:  Embedded SDK v3.3.40 ColdFusion Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with ColdFusion sample application,which has been supported by Bold BI since v3.3.40.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in ColdFusion using the Embedded SDK

Created a ColdFusion application for achieving this embedding. Here, set the server and dashboard details as the embed details, and the dashboard will be rendered after passing the authorization. 

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide provides you enough information that you need to know before working on the sample.      

## How to run the sample

1. Please download the BoldBI ColdFusion Embed sample from the attached [file](https://onpremise-demo.boldbi.com/getting-started/coldfusion/sample.zip).    

2. You need to set the following properties in `BoldBIEmbed.html` and `embedDetails.cfc` file as follows.

    ![Embed Properties](/static/assets/embedded/javascript/sample/images/coldfusion-props.png#width=550px;height=410px)

    ![embed details](/static/assets/embedded/javascript/sample/images/embeddetailsColdfusion.png#width=550px;height=410px)
    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">ServerUrl</td>
            <td align="left">Dashboard Server BI URL (ex: http://localhost:5000/bi/site/site1, http://dashboard.syncfusion.com/bi/site/site1)</td>
        </tr>   
        <tr>
          <td align="left">DashboardID</td>
            <td align="left">Provide the dashboard id of the dashboard you want to embed here.Please refer below how to get the dashboard id.</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step. </td>
        </tr>    
      </tbody>
    </table>


3. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/), for more details.  

4. Then, run your ColdFusion application.

## Get dashboard ID

You could get the item id of the dashboard from the BI server. Please refer to this [link](/embedded-bi/working-with-dashboards/share-dashboards/get-dashboard-link/#get-link) and the following screenshot.

![Get dashboard ID](/static/assets/embedded/javascript/sample/images/get-dashboard-id.png)

After changing the above details in the sample, you can run the ColdFusion Forms and the dashboard will be rendered.

## How this sample works
1. Based on the dashboardId provided in the `BoldBIEmbed.html`, you will authorize the server URL by calling the GetEmbedDetails function as follows.
  ![embed details](/static/assets/embedded/javascript/sample/images/embeddetailsColdfusion.png#width=550px;height=410px)

2. In the above authorization, generated the SignatureUrl with the provided EmbedSecret key and validate the embed details in Bold BI. Once details are validated, the dashboard starts to render.

3. In the `BoldBIEmbed.html`, you can change the dashboard Id of the respective dashboard as you wish to embed.
  ![Embed Properties](/static/assets/embedded/javascript/sample/images/coldfusion-props.png#width=550px;height=410px)