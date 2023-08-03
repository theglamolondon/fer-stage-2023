
<!DOCTYPE html>
<?php
require 'connexion.php';

  
$sql = "SELECT * FROM facture";
$stmt = $conn->prepare($sql);
$stmt->execute();



?>

<html>
<head>
    <title>Gestion des Factures et Produits</title>
     <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Gestion des Factures et Produits</h1>
    <div class="container">
        <h2>Créer un produit</h2>
        <form action="creat.product.php" method="post">
            <label>Nom du produit:</label>
            <input type="text" name="product_name" required>
            <label>Prix du produit:</label>
            <input type="number" name="product_price" step="0.01" required>
            <input type="submit" value="Ajouter le produit">
        </form>

        <h2>Créer une facture</h2>
        <form action="creat.invoice.php" method="post">
            <label>Nom du client:</label>
            <input type="text" name="customer_name" required>
            <label>Produits (séparez par des virgules):</label>
            <input type="text" name="products" required>
            <input type="submit" value="Créer la facture">
        </form>

        <h2>Liste des produits</h2>
        <table>
            <tr>
                <th>Nom du produit</th>
                <th>Prix du produit</th>
                <?php include 'product.php'; ?>
            </tr>
            
            
        </table>

        <h2>Liste des factures</h2>
        <table>
            <tr>
                <th>Numéro de facture</th>
                <th>Nom du client</th>
                <th>Produits</th>
                <?php include 'facture.php'; ?>
            </tr>
            
           
        </table>
    </div>

    <div class="footer">
        <p>&copy; <?php echo date("Y"); ?> LTS LYAM. Tous droits réservés.</p>
    </div>
</body>
</html>
