FROM node:alpine3.14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apk add --no-cache \
    python3==3.9.6-r0 \
    py3-pip==20.3.4-r1 \
    && pip3 install awscli==1.20.4 \
    && rm -rf /var/cache/apk/*

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3030

CMD [ "node", "server.js" ]