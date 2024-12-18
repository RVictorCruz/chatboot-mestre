# Chatboot Mestre

## Descrição
O projeto **Chatboot Mestre** é uma solução baseada no [Venom-Bot](https://github.com/orkestral/venom), uma biblioteca que facilita a automação de mensagens no WhatsApp. Este projeto visa criar um chatbot para atender diversas finalidades, como suporte ao cliente, respostas automáticas ou integração com outros sistemas.

## Requisitos
- **Node.js** (v14 ou superior)
- **npm** ou **yarn** para gerenciar dependências

## Instalação
1. Clone o repositório ou baixe os arquivos do projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd chatboot-mestre
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   ou, se estiver usando yarn:
   ```bash
   yarn install
   ```

3. Verifique se o plugin `puppeteer-extra-plugin-user-preferences` foi instalado corretamente:
   ```bash
   npm install puppeteer-extra-plugin-user-preferences
   ```

## Como usar
1. Inicie o chatbot executando o arquivo principal:
   ```bash
   node index.js
   ```

2. Escaneie o QR Code que será gerado no console para autenticar a sessão no WhatsApp.

3. O chatbot estará pronto para uso e começará a interagir automaticamente.

## Dependências
- **[venom-bot](https://www.npmjs.com/package/venom-bot)**: Biblioteca principal para automação do WhatsApp.
- **[puppeteer-extra-plugin-user-preferences](https://www.npmjs.com/package/puppeteer-extra-plugin-user-preferences)**: Plugin para personalizar as preferências do navegador utilizado pelo Puppeteer.

## Contribuição
Sinta-se à vontade para contribuir com este projeto! Envie pull requests ou relate problemas na página do repositório.

## Licença
Este projeto está licenciado sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

