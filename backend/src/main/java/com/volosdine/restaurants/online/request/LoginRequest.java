package com.volosdine.restaurants.online.request;

import lombok.Data;

@Data
public class LoginRequest {

    private String email;

    private String password;
}
