package com.example.server.attributes;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DotsAttributeController {
    @PostMapping("/dots")
    public ResponseEntity<Void> saveDotsValue(@RequestBody int value) {
        return ResponseEntity.ok().build();
    }

}
