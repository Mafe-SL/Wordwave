# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto que Next.js usa por defecto (3000)
EXPOSE 3000

# Comando para construir la aplicación Next.js
RUN npm run build

# Comando para iniciar la aplicación
CMD ["npm", "start"]
