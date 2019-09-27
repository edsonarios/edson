var shell = require('shelljs')

  if (shell.exec('service ssh restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: ssh restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","ssh ok...!!!")
  }  
  if (shell.exec('service postgresql restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: postgresql restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","postgresql ok...!!!")
  }
  
  if (shell.exec('service apache2 restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: apache2 restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","apache2 ok...!!!")
  }
  