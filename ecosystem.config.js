module.exports = {
  apps: [
    {
      name: "relationComponent",
      script: "server/index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-54-163-133-224.compute-1.amazonaws.com",
      key: "~/.ssh/tutorial.pem",
      ref: "origin/master",
      repo: "git@github.com:microdynamicservices/relationComponent.git",
      path: "/home/ubuntu/relationComponent",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
