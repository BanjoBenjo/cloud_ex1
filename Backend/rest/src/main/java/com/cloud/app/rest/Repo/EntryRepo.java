package com.cloud.app.rest.Repo;

import com.cloud.app.rest.Models.Entry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntryRepo extends JpaRepository<Entry, Long> {
}
