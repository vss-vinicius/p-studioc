# p-studioc

Projeto StudioC Cabelereiros

## Sobre o projeto

Site institucional estático para o Studio C Cabelereiros com páginas dedicadas
ao espaço masculino e feminino, além da página inicial com serviços e formas de
contato.

Link para acessar o projeto: https://vss-vinicius.github.io/p-studioc/

## Recursos principais

- Alternância entre modo claro e escuro com persistência da preferência do
  usuário e respeito às configurações do sistema operacional.
- Layout responsivo com destaques para serviços masculinos e femininos.
- Acesso rápido ao WhatsApp por QR Code para agendamento.

## Como executar localmente

1. Clone este repositório e instale uma extensão de servidor local ou utilize um
   servidor HTTP simples.
2. Com Python instalado, execute:

   ```bash
   python3 -m http.server
   ```

3. Acesse `http://localhost:8000` no navegador para visualizar o site.

## Acessibilidade

- O botão de alternância de tema possui rótulos acessíveis e atalho por teclado
  (`d`).
- Estados de foco visíveis foram adicionados para navegação por teclado.
- Usuários que preferem menos animações têm as transições desativadas
  automaticamente.

