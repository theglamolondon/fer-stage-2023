package ci.lyam.factureapi.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ci.lyam.factureapi.Repository.FactureProduitsRepository;
import ci.lyam.factureapi.Repository.FactureRepository;
import ci.lyam.factureapi.entities.Facture;
import ci.lyam.factureapi.entities.FactureProduits;
import ci.lyam.factureapi.entities.dto.FactureInput;

@Service
public class FactureService {

    @Autowired
    private FactureRepository factureRepository;
    @Autowired
    private FactureProduitsRepository factureProduitsRepository;

    public List<Facture> listAll() {

        List<Facture> items = new ArrayList<Facture>();
        factureRepository.findAll().forEach(i -> {
            items.add(i);
        });
        return items;
    }

    public Facture save(FactureInput facture) {
        Facture f = new Facture();
        f.setClient(facture.getClient());
        f.setDateFacture(facture.getDateFacture());
        f.setValidite(facture.getValidite());
        if (f.getFactureId() == null) {
            f.setFactureId(UUID.randomUUID().toString().substring(0, 8));
        }
        final Facture fct = factureRepository.save(f);
        

        facture.getProduits().forEach(p -> {
            FactureProduits fp = new FactureProduits();
            fp.setFactureId(fct.getFactureId());
            fp.setProduitId(p.getProduitId());
            fp.setPrixUnitaireHT(p.getPrix());
            fp.setQuantity(p.getQuantity());
            factureProduitsRepository.save(fp);
        });
        return fct;
    }

    public Facture get(String id) {
        return factureRepository.findById(id).get();
    }

    public void delete(String id) {
        factureRepository.deleteById(id);
    }
}
