```shell
npm install prisma@latest --save-dev

# Initializing Prisma will create a prisma/schema.prisma file.
npx prisma init

npx prisma init --datasource-provider sqlite
npx prisma init --datasource-provider mongodb

# 下面相当于，基于现有数据库，生成scheme model
npx prisma db pull
npx prisma db push
npm install @prisma/client@latest
npx prisma generate


npx prisma studio
```
