---
layout: post
title: Side Bar Menu customization – Embedded BI | Bold BI Docs
description: This page describes how to customize side bar menu based on user permission in the Bold BI Embedded.
platform: bold-bi
documentation: ug
---
# How to customize side bar menu based on user permission

This page describes how to customize side bar menu in the Bold BI application, based on user permission.

## Steps to customize side bar menu option based on user permission

1. Set the `<IsUserBasedMenu>` as true in the config file, which is available in the following location.
   * For Windows - `C:\BoldServices\app_data\bi\configuration`
   * For Linux - `/var/www/bold-services/application/app_data/bi/configuration/`

   ![User Based Menu](/static/assets/embedded/faq/images/set-customized-side-bar-menu.png)

2. Restart the Bold BI Application in IIS.

   ![Restart IIS](/static/assets/embedded/faq/images/restart-bold-bi-in-iis.png)

3. If the user does not have any kind of permission in the sense, the dashboards and pinboards options will be displayed.

   ![No Permission User Login](/static/assets/embedded/faq/images/no-permission-user-login.png)

4. For example, if the user has any kind of permission in data sources in the sense, it will show data sources option.

   ![Data source Permission User](/static/assets/embedded/faq/images/data-source-permission-login.png)