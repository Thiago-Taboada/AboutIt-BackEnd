
CREATE TABLE `comunidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `descricao` mediumtext,
  `imagem-path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comunidade` VALUES (1,'desabafos','Quer desabafar e não tem com quem fazer isso? Quer apenas ser ouvido sem ser julgado? Quer apenas despejar tudo e ficar com o coração mais leve? Ou quer simplesmente pedir conselhos para algo que o aflija? Está no lugar certo.',NULL);

CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `texto` longtext,
  `imagem` varchar(255) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `comunidade_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_usuario_idx` (`usuario_id`),
  KEY `fk_post_comunidade_idx` (`comunidade_id`),
  CONSTRAINT `fk_post_comunidade` FOREIGN KEY (`comunidade_id`) REFERENCES `comunidade` (`id`),
  CONSTRAINT `fk_post_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `post` VALUES (1,'Sobre o que aconteceu...','Minha casa pegou fogo ontem e por conta disso não poderei estar presente',NULL,2,1);

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `perfil_img` varchar(255) DEFAULT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `usuario` VALUES (1,'lurrion@email.com','1234',NULL,'Lurrion'),(2,'dolphanana@email.com','thiago123',NULL,'Dolphanana');