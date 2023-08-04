package ci.lyam.factureapi.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Produit {
    @Id
    private String reference;
    private String name;
    private Integer quantity = 0;

    public String getReference() {
        return reference;
    }

    public Produit(String reference, String name, Integer quantity) {
        this.reference = reference;
        this.name = name;
        this.quantity = quantity;
    }

    public Produit() {
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Produit [reference=" + reference + ", name=" + name + ", quantity=" + quantity + "]";
    }

}
