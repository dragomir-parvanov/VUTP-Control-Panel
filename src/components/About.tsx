import React, { Component } from "react";
import { Paper, Typography, Link } from "@material-ui/core";
import PAPER_PADDING from "../contstants/PAPER_PADDING";
//<Typography variant={"h4"}>Тази апликация беше направена по задания на задача в университета.</Typography>
export default class About extends Component {
  render() {
    return (
      <Paper elevation={10} style={{ padding: PAPER_PADDING }}>
        
        <Typography>Имена: Драгомир Димитров Първанов</Typography>
        <Typography>Факултетен номер: 170183</Typography>
        <Typography>Специалност "СП", вечерна форма на обучение</Typography>
        <Typography>I Курс</Typography>
        <Typography style={{ paddingTop: "5vh" }} variant={"h4"}>
          Цел
        </Typography>
        <Typography>Целта на това приложение е да предостави на потребителя възможност да управлява собствения си уеб-сайт, посредством дадени контроли.</Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          Какво предлага този контролен панел?
        </Typography>
        <Typography>
          Тук може да се наблюдава текущото сървърно натоварване, графики, които илюстрират дадени данни, таблица с регистрираните потребители, настройки на контролния панел, спиране, рестартиране и
          пускане на самия сървър.
        </Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>5 сходни готови приложения</Typography>
        <Typography><Link href="https://cpanel.net/" target={"_blank"}>cPanel</Link></Typography>
        <Typography><Link href={"http://www.webmin.com/"} target={"_blank"}>webmin</Link></Typography>
        <Typography><Link href="https://www.directadmin.com/" target="_blank">DirectAdmin</Link></Typography>
        <Typography><Link href="https://www.virtualmin.com/" target="_blank">Virtualmin</Link></Typography>
        <Typography><Link href="http://ajenti.org/" target="_blank">ajenti</Link></Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>5 сходни готови темплейти</Typography>
        <Typography><Link href="https://demo.dashboardpack.com/architectui-html-pro/index.html" target="_blank">ArchitectUI</Link></Typography>
        <Typography><Link href="https://react-material-kit.devias.io/presentation" target="_blank">Devias Kit Pro</Link></Typography>
        <Typography><Link href="https://matx-react.ui-lib.com/dashboard/analytics" target="_blank">Matx</Link></Typography>
        <Typography><Link href="https://material-ui.com/premium-themes/paperbase/" target="_blank">Paperbase</Link></Typography>
        <Typography><Link href="https://demo.uifort.com/carolina-react-admin-dashboard-pro-demo/DashboardDefault" target="_blank">Carolina</Link></Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          С какво се отличаваме от другите контролни панели?
        </Typography>
        <Typography>Тук можем да персонализираме всичко и да бъдат добавени нови характеристики, които ги няма в другите аналози.</Typography>
        
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          Поддръжка на устройства
        </Typography>
        <Typography>Приложението може да се използва както от компютър, така и от телефон, таблет или друго устройство с малък екран. Дизайнът се намества по размерите на екрана.</Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          Поддръжка на уеб-браузъри
        </Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h6"}>
          Препоръчътелни уеб-браузъри
        </Typography>
        <Typography>Google Chrome версия 60+</Typography>
        <Typography>Microsoft Edge версия 79+</Typography>
        <Typography>Mozilla Firefox версия 55+</Typography>
        <Typography>Opera версия 47+</Typography>
        <Typography>Safari версия 11.1+</Typography>
        <Typography variant={"h6"}>
          Поддръжката на Internet Explorer версия 9+ е налична, но не е препоръчително да се използва, тъй като приложението работи по-бавно и има леки дефекти по дизайна.
        </Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          Използвани технологии
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://www.typescriptlang.org/index.html">
            Typescript
          </Link>
          - програмен език
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://reactjs.org/">
            React
          </Link>
          - библиотека за построяване на потребителски интерфейси
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://create-react-app.dev/">
            Create React App
          </Link>
          - библиотека, която предоставя нужните средства за разработването на React приложения
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://material-ui.com/">
            MaterialUI
          </Link>
          - библиотека за React компоненти
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://rxjs-dev.firebaseapp.com/">
            RxJS
          </Link>
          - библиотека, използвана за контролиране състоянието на приложението
        </Typography>
        <Typography>
          <Link rel="noopener" target={"_blank"} href="https://www.chartjs.org/">
            Chart.js
          </Link>
          - библиотека за диаграми
        </Typography>
        <Typography style={{ marginTop: "3vh" }} variant={"h4"}>
          <Link rel="noopener" target={"_blank"} href="https://github.com/moderexx/VUTP-Control-Panel">
            Source code
          </Link>
        </Typography>
      </Paper>
    );
  }
}
