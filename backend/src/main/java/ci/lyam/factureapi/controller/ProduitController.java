package ci.lyam.factureapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ci.lyam.factureapi.Services.ProduitService;
import ci.lyam.factureapi.entities.Produit;
import ci.lyam.factureapi.entities.dto.ProduitOutput;

@RestController
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/produits")
    public List<Produit> get() {
        return produitService.listAll();
    }

    @PostMapping("/add_produit")
    public ProduitOutput add_produit(@RequestBody Produit produit) {
        System.out.println(produit);
        return produitService.save(produit.getName(), produit.getQuantity());
    }
}
