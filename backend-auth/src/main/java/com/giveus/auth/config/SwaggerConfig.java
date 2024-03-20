package com.giveus.auth.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.models.OpenAPI;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * API 문서 관련 springdoc 설정 정의.
 */
//@OpenAPIDefinition(
//        servers = {
//                @Server(url = "https://j10c206.p.ssafy.io", description = "배포 Auth 서버 API"),
//                @Server(url = "http://localhost:8082", description = "로컬 Auth 서버 API"),
//        },
//        info = @Info(
//                title = "GIVEUS 인증 API 명세서",
//                description = "C206",
//                version = "1.0.0",
//                contact = @Contact(name = "seojihyeon", email = "seojihyeon99@naver.com")),
//        tags = {
//                @Tag(name = "01.User", description = "유저 기능"),
//                @Tag(name = "02.Auth", description = "인증 기능")
//        }
//)
//
@SecurityRequirement(name = "JWT")
@SecurityScheme(
        name = "JWT",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)

@Configuration
@RequiredArgsConstructor
public class SwaggerConfig {
    @Value("${swagger.server}")
    private String server;
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new io.swagger.v3.oas.models.info.Info()
                        .title("인증 API 명세서")
                        .description("C206")
                        .version("1.0.0")
                        .contact(new io.swagger.v3.oas.models.info.Contact()
                                .email("giveus2024@gmail.com")
                                .name("giveus"))
                )
                .servers(List.of(new io.swagger.v3.oas.models.servers.Server()
                        .url(server)));
    }
    public static final String SECURITY_SCHEMA_NAME = "JWT";
    public static final String AUTHORIZATION_SCOPE_GLOBAL = "global";
    public static final String AUTHORIZATION_SCOPE_GLOBAL_DESC = "accessEverything";

}
