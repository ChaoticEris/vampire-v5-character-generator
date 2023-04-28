package com.example.server.attributes;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DotsController {
    @PostMapping("/api/attribute-dots")
    public ResponseEntity<Void> saveDotsValue(@RequestBody int value, @RequestParam String label) {
        System.out.println("Received value: " + value + ", label: " + label);
        // Save the value and label to a database or perform some business logic
        return ResponseEntity.ok().build();
    }
}
