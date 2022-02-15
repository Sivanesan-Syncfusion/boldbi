---
layout: post
title:  Embedded SDK v3.3.40 PHP with javascript Sample | Bold BI Docs
description: Explore the JavaScript-based embedding with PHP sample,which has been supported by Bold BI since v3.3.40.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in PHP using the Embedded SDK

Created a PHP application for achieving this embedding. Here, set the server and dashboard details as the embed details, and the dashboard will be rendered after passing the authorization. 

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide provides you enough information that you need to know before working on the sample. 
    
## How to run the sample

1. Please download the PHP Core sample from provided [link](https://onpremise-demo.boldbi.com/getting-started/php/sample.zip).    

2. In `Index.php`, you must set your server details to EmbedProperties as follows.  
    ![Embed Properties](/static/assets/embedded/javascript/sample/images/php-props.png#width=550px;height=410px)

3. In `AuthorizeServer.php`, you must set UserEmail and Embed Secret key, which has been used for creating embed signature to get authorize the server from PHP sample. Learn more about authorize server [here](https://help.syncfusion.com/bold-bi/embedded-bi/javascript/authorize-server).

    ![Authorize Server](/static/assets/embedded/javascript/sample/images/authorize-server-php.png#width=550px;height=310px)

4. Set the following properties in both files.

    <meta charset="utf-8"/>
    <table>
      <tbody>
        <tr>
            <td align="left">ServerUrl</td>
            <td align="left">Dashboard Server BI URL 
    Enterprise Edition- http://localhost:5000/bi/site/site1 
    Cloud -http://dashboard.syncfusion.com/bi
    </td>
        </tr>
        <tr>
            <td align="left">DashboardPath</td>
            <td align="left">Set the dashboard path by category name following by dashboard name.
    Ex: <code>/Sales/Sales Performance</code>
    </td>
        </tr>
        <tr>
          <td align="left">AuthorizeServerURL</td>
            <td align="left">URL pointing to AuthorizeServer API file. We have running PHP sample in 8080 port.
    Ex: <code> http://localhost:8080/rest/authorizeserver.php</code>
    </td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which will be used to access the widgets of the dashboard.</td>
        </tr>
        <tr>
        <td align="left">EmbedSecret</td>
            <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step.</td>
        </tr>    
      </tbody>
    </table>


5. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/), for more details.  

6. You can render the dashboard by passing the Dashboard path or Dashboard id. 

    ![dashboard path](/static/assets/embedded/javascript/sample/images/dashboardpath-php.png#width=550px;height=410px)

7. Then, run your PHP Core sample.

## How this sample works

1. When you embed a dashboard to render, you will authorize the server URL by calling the GetEmbedDetails function by API call with provided EmbedProperties values. 

    ![Getdetails](/static/assets/embedded/javascript/sample/images/embeddetails-php.png#width=550px;height=410px)

2. In above authorization, generated the SignatureUrl with the provided EmbedSecret key and validate the embed details in Bold BI. Then only the embedded widget will be rendered in `Index.php`.

3. In `Index.php`, we have initialized the dashboard from the Sales Performance. You can change the dashboard path according to the dashboard you wish to embed. 

    ![Embed Properties](/static/assets/embedded/javascript/sample/images/php-props.png#width=550px;height=410px)
