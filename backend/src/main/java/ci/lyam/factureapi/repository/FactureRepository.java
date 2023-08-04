package ci.lyam.factureapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ci.lyam.factureapi.entities.Facture;

public interface FactureRepository extends JpaRepository<Facture, String> {

}
