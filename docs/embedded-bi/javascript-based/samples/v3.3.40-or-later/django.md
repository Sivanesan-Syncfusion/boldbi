---
layout: post
title:  Embed the dashboards in Django apps - Embedded SDK | Bold BI Docs
description: Explore the steps for JavaScript-based dashboard embedding with Django sample application, which has been supported by Embedded Bold BI since v3.3.40 or later.
platform: bold-bi
documentation: ug
---

# Embedding Bold BI Dashboards in Django using the Embedded SDK

Created a Django application for achieving this embedding. Here, set the server and dashboard details as the embed details, and the dashboard will be rendered after passing the authorization.  

> **NOTE:** Reading the [Getting Started](/embedded-bi/javascript-based/getting-started/) section of the documentation is the best way to get started. The [Getting Started](/embedded-bi/javascript-based/getting-started/) guide provides you enough information that you need to know before working on the sample.       

## How to run the sample

1. Please download the Django sample from the attached [file](https://onpremise-demo.boldbi.com/getting-started/django/sample.zip).    

2. You need to set the following properties in `models.py` file as follows.  
![Embed Properties](/static/assets/embedded/javascript/sample/images/django-props.png)
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
        <td align="left">Provide the dashboard id of the dashboard that you want to embed here. Please refer the following for getting the dashboard id. </td>
    </tr>
    <tr>
        <td align="left">UserEmail</td>
        <td align="left">UserEmail of the Admin in your Bold BI, which will be used to get the dashboards list.</td>
    </tr>
    <tr>
    <td align="left">EmbedSecret</td>
        <td align="left">You can get your EmbedSecret key from embed tab by enabling<code>Enable embedauthentication</code> in Administration page as mentioned in next step.</td>
    </tr>    
  </tbody>
</table>


3. You can get your Embed Secret key from the administrator setting section. Please refer to this [link](/embedded-bi/site-administration/embed-settings/), for more details.  

4. Then, run your Django application.

## Get dashboard ID

Click dashboard name in the dashboard list page. Clicked dashboards are opened in new window. In that window, you can get the dashboard id in URL link as shown in the following image.

![Get dashboard ID](/static/assets/embedded/javascript/sample/images/django_dahboardid.png)

After changing the above details in the sample, you can run the Django and the dashboard will be rendered.

## How this sample works
1. Based on the provided embed details with dashboardId, you would authorize the server URL by calling the get_embed_details function `(views.py/get_embed_details)` call with provided EmbedProperties values.
Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/)
![Authorize Server URL](/static/assets/embedded/javascript/sample/images/django-api.png)
![Get Embed Details](/static/assets/embedded/javascript/sample/images/django-authorize.png)

> **NOTE:** Remove the CSRF Token from the headers, if your application does not have CSRF middleware `(django.middleware.csrf.CsrfViewMiddleware)`.
![CSRF Token](/static/assets/embedded/javascript/sample/images/django_csrf_token.png)

2. In the above authorization, generated the SignatureUrl using the provided EmbedSecret key and validate embed details in Bold BI. Once details are validated, the dashboard starts to render.

3. In the `models.py`, you can change the dashboard Id of the respective dashboard that you want to embed.
![Set Dashboard Id](/static/assets/embedded/javascript/sample/images/django-props.png)