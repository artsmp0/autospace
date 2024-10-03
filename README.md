# 项目记录

1. Initial commit and setup sample-lib

   - 初始化项目 pnpm init
   - pnpm workspace
   - 初始化 git 仓库
   - next -> apps/web
   - nest -> apps/api
   - sample-lib -> libs/sample-lib
   - 安装 typescript 在根目录：`pn add typescript -Dw`
   - tsconfig.json -> libs/sample-lib/tsconfig.json
   - 在 apps/\* 中引用 sample-lib：`pn add @autospace/sample-lib --workspace`

2. Validate script

   - 添加脚本

   ```json
     "scripts": {
       "format": "prettier  \"{apps,libs}/**/*.{ts,tsx,js,json}\" --ignore-path .gitignore",
       "format:check": "pnpm format --check",
       "format:write": "pnpm format --write",
       "tsc": "pnpm --parallel -r run tsc",
       "lint": "pnpm --parallel -r run lint",
       "build": "pnpm --parallel -r run build",
       "validate": "pnpm format:write && pnpm tsc && pnpm lint && pnpm build",
       "prepare": "husky install"
     }
   ```

   - 初始化 husky：`pn dlx husky-init && ni`
   - 添加 pre-commit hook：`npx husky add .husky/pre-commit "pnpm validate"`
   - 添加 prettier 配置，在 apps/api/.eslintrc.js 中添加：

   ```json
   {
     // ...
     "prettier/prettier": ["error", { "semi": false }]
   }
   ```

   - 删除 apps/web/.prettierrc
   - 根目录添加 .prettierrc

3. Db setup

   - 安装 prisma

   ```bash
   cd apps/api
   pnpm add prisma -D
   pnpm prisma init
   ```

   - 添加 docker-compose.yml
   - 启用 prisma 服务：`docker compose up -d`
   - 添加 prisma schema 模型
   - 运行迁移：pnpm prisma migrate dev
   - 查看结果：pnpm prisma studio
