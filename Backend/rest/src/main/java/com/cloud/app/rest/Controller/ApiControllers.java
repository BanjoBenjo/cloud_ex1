package com.cloud.app.rest.Controller;

import com.cloud.app.rest.Models.Entry;
import com.cloud.app.rest.Repo.EntryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiControllers {

    @Autowired
    private EntryRepo entryRepo;

    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    @GetMapping(value = "/entries")
    public List<Entry> getEntries() {
        return entryRepo.findAll();
    }

    @PostMapping(value = "/save")
    public String saveEntry(@RequestBody Entry entry) {
        entryRepo.save(entry);
        return "Saved...";
    }

    @PutMapping(value = "/update/{id}")
    public String updateEntry(@PathVariable long id, @RequestBody Entry entry) {
        Entry updatedEntry = entryRepo.findById(id).get();

        updatedEntry.setName(entry.getName());

        entryRepo.save(updatedEntry);
        return "Updated...";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteEntry(@PathVariable long id) {
        entryRepo.deleteById(id);
        return "Deleted...";
    }
}
