# Almost news app

It is an adaptive app that has home, news, profile and login pages. Significant information user can see at home page. At news page user can see news, delete some of them and load more news by clicking on button 'Load news'. To have access to profile page user must be logged in by enter login and password. Website has supporting for Ukrainian and English.


## Technologies

Technologies stack: React, TypeScript, Redux TK, React Router DOM (6.4+version with new features), react-i18next and Material UI
## News page

News page fetch primitive news ( using loader) and render them. Redux is used to save some values between rerender.

User can delete some news and load more news on button click. Also, news array is saved globally to avoid data loss and extra fetch process.

P.S. Data from API isn't translatable in client side, backend translation isn't provided.
## Language switcher

It's implemented using react-i18next and provide supporting for Ukrainian and English
## Login and profile

User has to sign up (login: 'admin', password: '12345') to have access to profile. At the end user will see dummy profile page.