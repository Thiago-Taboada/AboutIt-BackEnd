
CREATE TABLE `comunidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `descricao` mediumtext,
  `imagem-path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `texto` varchar(255),
  `imagem` varchar(255) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `comunidade_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_usuario_idx` (`usuario_id`),
  KEY `fk_post_comunidade_idx` (`comunidade_id`),
  CONSTRAINT `fk_post_comunidade` FOREIGN KEY (`comunidade_id`) REFERENCES `comunidade` (`id`),
  CONSTRAINT `fk_post_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `perfil_img` varchar(255) DEFAULT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


