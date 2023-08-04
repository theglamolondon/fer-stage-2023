package ci.lyam.factureapi.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.lyam.factureapi.Repository.ProduitRepository;
import ci.lyam.factureapi.entities.Produit;
import ci.lyam.factureapi.entities.dto.ProduitOutput;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<Produit> listAll() {

        List<Produit> items = new ArrayList<Produit>();
        produitRepository.findAll().forEach(i -> {
            items.add(i);
        });
        return items;
    }

    public ProduitOutput save(String name, Integer quantity) {
        ProduitOutput produitOutput = new ProduitOutput();

        Produit p = new Produit(
                UUID.randomUUID().toString().substring(0, 6),
                name,
                quantity);
        p = produitRepository.save(p);
        produitOutput.setStatus(true);
        produitOutput.setMessage("Produit ajouté");
        produitOutput.setProduit(p);

        return produitOutput;
    }

    public Produit get(String id) {
        return produitRepository.findById(id).get();
    }

    public void delete(String id) {
        produitRepository.deleteById(id);
    }
}
