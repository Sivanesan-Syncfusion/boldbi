---
layout: post
title:  Embedding Multi-Tabbed dashboard using SDK | Bold BI Docs
description: Learn how to embed multi-tabbed dashboard using JavaScript embedding of Bold BI in any business application.
platform: bold-bi
documentation: ug
---

# Steps to embed Enterprise BI in your application

Follow these steps to embed multi-tabbed dashboard in your application.

## How to use BoldBI wrapper inside your html page

1. In your .html page, you need to add the following dependent scripts in the head tag of your page.

    ```js
    <head>  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsrender/1.0.0-beta/jsrender.min.js"></script>
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/signalr/jquery.signalr-2.1.0.min.js"></script>
        <script type="text/javascript" src="http://cdn.boldbi.com/embedded-sdk/v4.2.68/embed-js.js"></script>
    </head>
    ```

2. In the body tag, you need to create the div element with your own id name. This element will be used for multi-tabbed dashboard embedding.

    ```js
    <body>
        <div id="dashboard-container"></div>
    </body>
    ```

3. In the body tag, you need to add the function to create BoldBI instance with following properties and call that function in the body using the `onload` attribute as follows. Also, call the `loadDashboard()` function.

You can embed the multi-tabbed dashboard using either the dashboard ID or dashboard path like in below samples.

### Embed using dashboard ID

```js

<body onload="embedSample();">
    <div id="dashboard-container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardId: "755e99c7-f858-4058-958b-67577b283309",// This is multi-tabbed dashboard ID            
                embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.View,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDashboard();
        }
    </script>
</body>
```  

### Embed using dashboard path

```js

<body onload="embedSample();">
    <div id="dashboard-container"></div>
    <script>
        function embedSample() {
            var boldbiEmbedInstance = BoldBI.create({
                serverUrl: "http://localhost:51777/bi/site/site1",
                dashboardPath: "/Sales/Multi Tabbed Dashboard",// This is multi-tabbed dashboard Path
                embedContainerId: "dashboard-container",// This should be the container id where you want to embed the dashboard
                embedType: BoldBI.EmbedType.Component,
                environment: BoldBI.Environment.Enterprise,
                mode: BoldBI.Mode.View,
                height: "800px",
                width: "1200px",
                authorizationServer: {
                    url: "http://example.com/embeddetail/get"
                },
                expirationTime: "100000",
            });
            boldbiEmbedInstance.loadDashboard();
        }
    </script>
</body>
```   

4. Refer the following table for value of the previous properties based on your application.  

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <td align="left">serverUrl</td>
        <td align="left">Use your Bold BI server url (http://localhost:[portno]/bi/site/site1)</td>
    </tr>
    <tr>
        <td align="left">dashboardId</td>
        <td align="left">Use item id of the multi-tabbed dashboard, which need to be embed in your application.</td>
    </tr>
    <tr>
        <td align="left">dashboardPath</td>
        <td align="left">dashboardPath will be like `/{category_name}/{dashboard_name}` Use item path of the multi-tabbed dashboard, which need to be embed in your application.</td>
    </tr>
    <tr>
        <td align="left">embedContainerId</td>
        <td align="left">Id of the created div element in your body.</td>
    </tr>
    <tr>
        <td align="left">embedType</td>
        <td align="left">BoldBI.EmbedType.Component</td>
    </tr>
    <tr>
        <td align="left">environment</td>
        <td align="left">BoldBI.Environment.Cloud or BoldBI.Environment.Enterprise</td>
    </tr>
    <tr>
        <td align="left">height</td>
        <td align="left">Height of the dashboard designer in your page</td>
    </tr>
    <tr>
        <td align="left">width</td>
        <td align="left">Width of the dashboard designer in your page</td>
    </tr>
    <tr>
        <td align="left">authorizationServer</td>
        <td align="left">Use your authorization URL</td>
    </tr>
    <tr>
        <td align="left">expirationTime</td>
        <td align="left">Token expiration time</td>
    </tr>
  </tbody>
</table>


5. Copy the previous embedSample() function and paste in your page. You need to update your values to the properties.  

> **NOTE:**  embedContainerId should be same as your div element id value  

## How to implement the authorize server with user mail or user name

1. You need to implement authorization end point in your application. This will act as the bridge between your application and Bold BI server and also you need to update the secure details like email and group based access. Learn more about authorize server [here](/embedded-bi/javascript-based/authorize-server/).  

2. To create authorization-server action method, copy the following snippet in your controller. You can use currently logged in user email at `user@domain.com` or user name at `username`, but this user should have access to the dashboard.   

    ```js  

        [HttpPost]
        [Route("embeddetail/get")]
        public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
        {
            // Use your user-email as embed_user_email
            embedQuerString += "&embed_user_email=user@domain.com";

            // Use your username as embed_user_email
            //embedQuerString += "&embed_user_email=username";

            var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);

            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }
        }
    ```

3. Add the GetSignatureUrl method, and this method would be called from the previous GetEmbedDetails action. Follow the next section to get EmbedSecret key from Bold BI application.

    ```js  
            
            public string GetSignatureUrl(string queryString)
            {
                // Get the embedSecret key from Bold BI.
                var embedSecret = "8apLLNabQisvriG2W1nOI7XWkl2CsYY";
                var encoding = new System.Text.UTF8Encoding();
                var keyBytes = encoding.GetBytes(embedSecret);
                var messageBytes = encoding.GetBytes(queryString);
                using (var hmacsha1 = new HMACSHA256(keyBytes))
                {
                    var hashMessage = hmacsha1.ComputeHash(messageBytes);
                    return Convert.ToBase64String(hashMessage);
                }
            }
    ```

## How to pass the Dashboard Parameter and URL Parameter filters in the authorization end point dynamically

In the authorization endpoint, you can pass both types of filters(Dashboard Parameter/URL Filter Parameter) at the same time. 

To pass filters to the `embed_datasource_filter` parameter in the authorization endpoint, refer to the following sample in C#(It differs based on your platform language). Here, we have set both types of filters to the `embed_datasource_filter` property in the endpoint.

```js  

        [HttpPost]
        [Route("embeddetail/get")]
        public string GetEmbedDetails(string embedQuerString, string dashboardServerApiUrl)
        {
            // User your user-email as embed_user_email
            embedQuerString += "&embed_user_email=user@domain.com" + "&embed_datasource_filter=" + "[{&&Parameter=Value&Parameter=Value}]";

            var embedSignature = "&embed_signature=" + GetSignatureUrl(embedQuerString);

            var embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(dashboardServerApiUrl);
                client.DefaultRequestHeaders.Accept.Clear();

                var result = client.GetAsync(dashboardServerApiUrl + embedDetailsUrl).Result;
                string resultContent = result.Content.ReadAsStringAsync().Result;
                return resultContent;
            }
        }
```


* The `Dashboard Parameter` filter must be started with a double ampersand `&&` in the endpoint. Refer to this [link](/embedded-bi/working-with-data-source/configuring-dashboard-parameters/) for more details.    

* The `URL Parameter` filter must be started with a single ampersand `&` in the endpoint. Refer to this [link](/embedded-bi/working-with-dashboards/preview-dashboard/urlparameters/) for more details.     

Refer to the following table for the value of the filter properties based on your filter. 

<meta charset="utf-8"/>
<table>
  <tbody>
    <tr>
        <th align="left">Scenario</th>
        <th align="left">Appending Query</th>
    </tr>
    <tr>
        <td align="left">If passing Dashboard Parameter only</td>
        <td align="left">"&embed_datasource_filter=[{&&Parameter=Value}]"</td>
    </tr>
    <tr>
        <td align="left">If passing URL Parameter only </td>
        <td align="left">"&embed_datasource_filter=[{&Parameter=Value}]"</td>
    </tr>
    <tr>
        <td align="left">If passing both Dashboard Parameter and URL Parameter</td>
        <td align="left">"&embed_datasource_filter=[{&&Parameter=Value&Parameter=Value}]"</td>
    </tr>
  </tbody>
</table>

> **NOTE:**  Filter value should be enclosed with square and curly brackets as mentioned above. Filters would be applied to applicable dashboard in that multi-tabbed dashboard. 

## How to get Embed Secret key from Bold BI application

You can get your Embed Secret key from administrator setting section. Refer this [link](/embedded-bi/site-administration/embed-settings/) for more details.

> **NOTE:**  <br>This setting will be enabled only if you have Embedded BI plan. <br><br>Refer to this [link](/embedded-bi/faq/how-to-resolve-jquery-conflict-in-embedding) to resolve the jQuery conflict problem in embedded.
