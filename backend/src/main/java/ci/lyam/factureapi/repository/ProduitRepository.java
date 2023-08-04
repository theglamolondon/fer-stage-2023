package ci.lyam.factureapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ci.lyam.factureapi.entities.Produit;

public interface ProduitRepository extends JpaRepository<Produit, String> {

}
