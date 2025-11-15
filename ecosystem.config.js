module.exports = {
  apps: [
    {
      name: 'corner',
      script: 'pnpm', // 使用 pnpm
      args: 'start', // pnpm start 会执行 package.json 中的 start 脚本
      cwd: '/var/www/corner',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      // 确保 PM2 能加载 .env.production 文件
      env_file: '/var/www/corner/.env.production',
    },
  ],
};
