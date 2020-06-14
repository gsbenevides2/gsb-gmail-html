<h1 align="center">gsb-gmail-html</h1>
<h5 align="center">An easy way to send personalized and beautiful emails using html.</h5>
<p align="center">
<img alt="npm" src="https://img.shields.io/npm/v/gsb-gmail-html?color=FFB86C"/>
<img alt="feito por gsbenevides2" src="https://img.shields.io/badge/made%20with%20%F0%9F%92%9B%20by%20-gsbenevides2-yellow"/>
</p>

## 📋 Table of contents
1. [Inspiration](#inspiracao)
2. [How to use](#como_usar)
3. [Contributions](#contribuicoes)
4. [License](#licenca)

<a name="inspiracao"></a>
## 🤔 Inspiration
In this time of the coronavirus pandemic, students and teachers send several emails daily.  So I as a student thought why not create a tool that makes my emails more beautiful.

<a name="como_usar"></a>
## 🚴 How to use
First you need to have Node with NPM or Yarn installed, right after you type in your terminal:
```sh
npm install -g gsb-gmail-html
```
or
```sh
yarn global add gsb-gmail-html
```
Right after the end of the installation, first generate the html file:
```sh
gsb-gmail-html init
```
The tool will create an `email.html` file and load it in your browser, as you edit this file the changes are automatically reflected in the browser.
Right after creating your email use the following command to send:
```sh
gsb-gmail-html send
```
#### 💡 Tip
Use the `-html fileName` flag to specify which file you want to use.

<a name="contribuicoes"></a>
## ✍️ Contributions
All kinds of contributions are accepted, so let's collaborate.

<a name="licenca"></a>
## 📃 License
This project is under the MIT license.  See the [LICENSE](https://github.com/gsbenevides2/gsb-gmail-html/blob/master/LICENSE) file for more details.
