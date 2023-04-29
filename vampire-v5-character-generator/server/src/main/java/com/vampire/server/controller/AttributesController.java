package com.vampire.server.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attribute-dots")
public class AttributesController {

    @PostMapping
    public void cadastrar(@RequestBody String attribute, @RequestParam String label) {
        System.out.println(attribute);
        System.out.println(label);
    }

}
