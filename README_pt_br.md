<h1 align="center">gsb-gmail-html</h1>
<h5 align="center">Uma forma fácil de enviar e-mails personalizados e bonitos usando html.</h5>
<p align="center">
<img alt="npm" src="https://img.shields.io/npm/v/gsb-gmail-html?color=FFB86C"/>
<img alt="feito por gsbenevides2" src="https://img.shields.io/badge/feito%20com%20%F0%9F%92%9B%20por%20-gsbenevides2-yellow"/>
</p>

## 📋 Tabela dos conteúdos
1. [Inspiração](#inspiracao)
2. [Como usar](#como_usar)
3. [Contribuições](#contribuicoes)
4. [Licença](#licenca)

<a name="inspiracao"></a>
## 🤔 Inspiração
Nesse tempo de pandemia de coronavírus, estudantes e professores enviam vários e-mails diariamente. Então eu como estudante pensei porque não criar uma ferramenta que torna meus e-mails mais bonitos.

<a name="como_usar"></a>
## 🚴 Como Usar
Primeiro você precisa ter o Node com o NPM ou Yarn instalado, logo após digite no seu terminal:
```sh
npm install -g gsb-gmail-html
```
ou
```sh
yarn global add gsb-gmail-html
```
Logo após o final da instalação primeiro gere o arquivo html:
```sh
gsb-gmail-html init
```
A ferramenta vai criar um arquivo `email.html`  e carregar ele em seu navegador, conforme você edita esse arquivo as alterações se refletem automáticamente no navegador.
Logo após de criar seu email use o seguinte comando pra enviar:
```sh
gsb-gmail-html send
```
#### 💡 Dica
Utilize a flag `-html nomeDoArquivo` para especificar qual o arquivo que você quer usar.

<a name="contribuicoes"></a>
## ✍️ Contribuições
Todo tipo de contribuição é aceita, então bora colaborar.

<a name="licenca"></a>
## 📃 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/gsbenevides2/gsb-gmail-html/blob/master/LICENSE) para mais detalhes.
