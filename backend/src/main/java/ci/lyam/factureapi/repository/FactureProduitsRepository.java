package ci.lyam.factureapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ci.lyam.factureapi.entities.FactureProduits;

public interface FactureProduitsRepository extends JpaRepository<FactureProduits, Long> {
    
}
