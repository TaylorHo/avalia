# Roadmap do Projeto Avalia

Abaixo segue uma lista de funcionalidades que estarão contidas em cada uma das versões planejadas para o sistema "Avalia".

### Versão 1.0 (Concluída)

- **Avaliador:**

  - [x] Área dos avaliadores acessível via link direto
  - [x] Área dos avaliadores acessível via código
  - [x] Enviar link de acesso e código do avaliador via email e WhatsApp
  - [x] Bloquear o envio de avaliações fora do período definido

- **Administração:**

  - [x] Importar Avaliadores via Google Sheets
  - [x] Importar Projetos via Google Sheets
  - [x] Configurar planilha de destino das notas
  - [x] Área administrativa com login sem senha
  - [x] Configuração de acesso e link das planilhas de controle
  - [x] Autenticação com Google na área administrativa
  - [x] Convite de administradores para a área administrativa
  - [x] Configurar data máxima para o recebimento das avaliações
  - [x] Configurar data de início para o recebimento das avaliações
  - [x] Possibilidade de ver quantas avaliações foram feitas em cada projeto

- **Sistema:**
  - [x] Listagem de projetos com notas (classificação/ranking)
  - [x] Atribuir um projeto a um avaliador
  - [x] Exportar lista de QR codes e códigos dos projetos
  - [x] Adicionar favicon
  - [x] Definir página 404 com link para a /
  - [x] Adicionar `robots.txt`
  - [x] Tratar erros 429 (WAF Rate-Limit) informando o usuário
  - [x] Publicar a documentação

### Versão 2.0 (Em Andamento)

- **Avaliador:**

  - [ ] Página para cadastro de avaliadores
  - [ ] Confirmar a avaliação do projeto usando Código do Projeto (QR Code/Código numérico)

- **Administração:**

  - [ ] Página para cadastro de projetos
  - [ ] Configuração do formulário do avaliador
  - [ ] Configuração de diferentes rankings
  - [ ] Adicionar mais formas de login social
  - [ ] Possibilidade de editar o nome da escola/feira (atualmente é possível apenas na configuração inicial)
  - [ ] Melhorar estilos CSS para visualização em celulares (atualmente funciona apenas em desktop, apenas as páginas do avaliador que são otimizadas para celulares e desktops)
  - [ ] Exportar colocações como PDF
  - [ ] Opção de diferentes sistemas de notas (de 5 a 10 e de 1 a 5)

- **Sistema:**
  - [ ] Criar automaticamente as planilhas no Drive conectado
  - [ ] Utilizar IDs numéricos para projetos, de forma reordenável

### Versão 3.0

- **Sistema:**

  - [ ] Migrar a pasta `/src/pages` para o padrão Next.js de `/src/app` (usando SSR)
  - [ ] Melhor componentização do conteúdo das páginas
  - [ ] Melhorar a documentação do projeto e guias de desenvolvimento para a comunidade
  - [ ] Implementar sistemas de internacionalização
  - [ ] Implementar meio de doações para o projeto além do GitHub Sponsors
  - [ ] Mover todos os textos para um arquivo de fácil tradução (internacionalização)

- **Avaliador:**

  - [ ] Exportar certificado de participação como avaliador

- **Administração:**

  - [ ] Configurações para certificado de participação do avaliador

### Versão 4.0

- **Sistema:**

  - [ ] Configurações de remoção da marca d'água e uso de logo customizado (escolas privadas)
  - [ ] Sistema de pagamentos para liberação de sistema para escolas particulados (para escolas públicas sempre será gratuito)
