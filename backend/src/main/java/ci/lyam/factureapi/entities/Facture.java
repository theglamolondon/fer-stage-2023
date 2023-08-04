package ci.lyam.factureapi.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Facture {
    @Id
    private String factureId;
    private String client;
    private Date dateFacture;
    private String validite;

    public Facture() {
    }

    public String getFactureId() {
        return factureId;
    }

    public void setFactureId(String factureId) {
        this.factureId = factureId;
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

}
