package ci.lyam.factureapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ci.lyam.factureapi.Services.FactureService;
import ci.lyam.factureapi.entities.Facture;
import ci.lyam.factureapi.entities.dto.FactureInput;

@RestController
public class FactureController {

    @Autowired
    private FactureService factureService;

    @GetMapping("/factures")
    public List<Facture> get() {
        return factureService.listAll();
    }

    @PostMapping("/factures")
    public Facture add_produit(@RequestBody FactureInput facture) {
        return factureService.save(facture);
    }
}
