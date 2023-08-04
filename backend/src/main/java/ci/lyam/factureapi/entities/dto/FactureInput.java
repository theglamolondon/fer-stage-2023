package ci.lyam.factureapi.entities.dto;

import java.sql.Date;
import java.util.List;


public class FactureInput {
        
    private String client;
    private Date dateFacture;
    private String validite;

    private List<FactureProduit> produits;

    public FactureInput() {
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public Date getDateFacture() {
        return dateFacture;
    }

    public void setDateFacture(Date dateFacture) {
        this.dateFacture = dateFacture;
    }

    public String getValidite() {
        return validite;
    }

    public void setValidite(String validite) {
        this.validite = validite;
    }

    public List<FactureProduit> getProduits() {
        return produits;
    }

    public void setProduits(List<FactureProduit> produits) {
        this.produits = produits;
    }

    
}
