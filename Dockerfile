# Use a imagem oficial do Node como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package.json package-lock.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para que possa ser acessível fora do contêiner
EXPOSE 3000

# Comando para iniciar o aplicativo React
CMD ["npm", "run", "dev"]

