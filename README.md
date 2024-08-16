# Metropole Garagem

## Descrição

O "Metropole Garagem" é um sistema de gerenciamento de veículos para o jogo FiveM. Ele permite que os jogadores visualizem e selecionem seus veículos, além de "spawnar" veículos personalizados no jogo. O sistema é implementado usando TypeScript e React para a interface do usuário, e utiliza um banco de dados MySQL para armazenar as informações dos veículos.

## Tecnologias

- **Front-End:**
  - React
  - TypeScript
  - Tailwind CSS

- **Back-End:**
  - Node.js
  - TypeScript
  - Sequelize (ORM para MySQL)
  - FiveM Server Integration

- **Banco de Dados:**
  - MySQL

## Funcionalidades

- **Visualização de Veículos:**
  - Listagem de veículos com detalhes como modelo, cor, e customizações.
  - Interface de usuário responsiva e estilizada com Tailwind CSS.

- **Detalhes do Veículo:**
  - Exibição de informações detalhadas do veículo selecionado.
  - Botão para "spawnar" o veículo no jogo.

- **Administração:**
  - Comando `/car (placa)` para administradores spawnarem qualquer veículo pelo número da placa.

## Configuração do Ambiente

### Front-End

1. Navegue até o diretório do front-end/metropole-garagem:
   ```bash
   cd front-end/metropole-garagem
2. Instale as dependências:
   ```bash
   npm install
3. Inicie o servidor de desenvolvimento:
4.  ```bash
    npm run dev
### Back-end
1. Navegue até o diretório do back-end:
   ```bash
   cd back-end
2. Instale as dependências:
   ```bash
   npm install
2. Inicie o servidor:
   ```bash
   npm start
### Teste com o FiveM
Clicar em start.bat.
