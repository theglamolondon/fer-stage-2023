<?php
require 'connexion.php';

 
  
$productName = $_POST['product_name'];
$productPrice = $_POST['product_price'];
 
$sql = "INSERT INTO products (name, price) VALUES (:name, :price)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $productName);
$stmt->bindParam(':price', $productPrice);
 
if ($stmt->execute()) {
    echo "Le produit a été ajouté avec succès!";
} else {
    echo "Erreur lors de l'ajout du produit : " . $stmt->errorInfo()[2];
}

?>
