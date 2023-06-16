
FROM node:12

# Create an application directory
RUN mkdir -p /app

# The /api directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
#COPY ["package*.json ./app", "yarn.lock ./app", "tsconfig.json ./app"]
COPY ./package.json ./yarn.lock* ./tsconfig.json ./

# Install node packages
RUN yarn install
RUN yarn global add ts-node

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . .

#RUN yarn build


CMD ["yarn", "start:dev"]
