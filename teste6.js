const permissions = {
    usuario1: {
      Delete: true,
      Update: true
    },
    usuario2: {
      Delete: false,
      Update: true
    },
    usuario3: {
        Delete: false,
        Update: false
      },
   
  };


  const checkPermissions = (req, res, next) => {
    const username = req.query.username;     
    if (permissions.hasOwnProperty(username)) {
      if (!permissions[username].Delete) {
        return res.status(403).send("Você não tem permissão para deletar os usuários");
      }
    
      if (!permissions[username].Update) {
        return res.status(403).send("Você não tem permissão para atualizar os usuários");
      }  
      
      next();
    } else {
      res.status(404).send("Usuário foi não encontrado");
    }
  };