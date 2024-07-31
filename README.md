# Desafio ONE - Oracle + Alura

Este projeto foi desenvolvido como parte do Desafio ONE, uma colaboração entre a Oracle e a Alura. O objetivo do projeto é criar uma página web que permite a criptografia e descriptografia de mensagens, bem como a cópia do texto resultante. A interface é simples e intuitiva, com um design responsivo que se adapta a diferentes tamanhos de tela.

## Funcionalidades

- **Criptografia de texto:** O usuário pode inserir um texto na área de texto e criptografá-lo clicando no botão "Criptografar".
- **Descriptografia de texto:** O usuário pode descriptografar o texto criptografado clicando no botão "Descriptografar".
- **Cópia do texto:** O usuário pode copiar o texto resultante clicando no botão "Copiar".
- **Responsividade:** A interface se ajusta automaticamente para diferentes tamanhos de tela, proporcionando uma boa experiência de usuário em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **HTML:** Utilizado para estruturar a página web.
- **CSS:** Utilizado para estilizar a página, incluindo a utilização de variáveis CSS para cores e responsividade.
- **JavaScript:** Utilizado para adicionar interatividade à página, incluindo a lógica de criptografia e descriptografia.

## Estrutura do Projeto

### HTML

O arquivo HTML (`index.html`) contém a estrutura básica da página, incluindo:

- Um cabeçalho com o logo da Alura.
- Uma área principal com duas seções:
  - A primeira seção contém a área de entrada de texto e os botões de criptografia e descriptografia.
  - A segunda seção exibe o texto criptografado ou descriptografado e um botão para copiá-lo.
- Um rodapé com links para o GitHub e LinkedIn do desenvolvedor.

### CSS

O arquivo CSS (`styles/style.css`) define o estilo da página, incluindo:

- **Variáveis CSS:** Utilizadas para definir as cores principais do projeto.
- **Estilos Globais:** Para remover margens e paddings padrão, e definir a fonte global.
- **Estilos de Componentes:** Para estilizar a área de entrada de texto, os botões, a área de saída de texto e o rodapé.
- **Media Queries:** Para garantir que a página seja responsiva e se adapte bem a diferentes tamanhos de tela.

### JavaScript

O arquivo JavaScript (`js/script.js`) contém a lógica para:

- Criptografar e descriptografar o texto com base em uma lista de chaves.
- Validar a entrada de texto para garantir que apenas letras minúsculas sem acentos sejam aceitas.
- Alternar a visibilidade das áreas de saída de texto com base na ação do usuário.
- Copiar o texto resultante para a área de transferência do usuário.

## Como Usar

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Digite o texto que deseja criptografar ou descriptografar na área de entrada de texto.
4. Clique no botão apropriado para criptografar ou descriptografar o texto.
5. Use o botão "Copiar" para copiar o texto resultante para a área de transferência.

## Autor

- **Renato Santos**
  - [GitHub](https://github.com/Renato32s)
  - [LinkedIn](https://www.linkedin.com/in/renato-32p-santos/)

---

Este projeto foi desenvolvido como parte do programa de capacitação em desenvolvimento web promovido pela Alura em parceria com a Oracle.
