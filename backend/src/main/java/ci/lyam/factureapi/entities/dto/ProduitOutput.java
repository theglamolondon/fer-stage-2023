package ci.lyam.factureapi.entities.dto;

import ci.lyam.factureapi.entities.Produit;

public class ProduitOutput extends Result {

    private Produit produit;

    public ProduitOutput() {
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

}
