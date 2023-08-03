<?php
require 'connexion.php';
 
    
$customerName = $_POST['customer_name'];
$products = $_POST['products'];
 

 
$productArray = explode(",", $products);

 
$sql = "INSERT INTO facture (nomClient,produit) VALUES (:customer_name,:products)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':customer_name', $customerName);
$stmt->bindParam(':products', $products);
 
if ($stmt->execute()) {
    header("Location: monIndex.php");
        exit();
} else {
    echo "Erreur lors de l'ajout du produit : " . $stmt->errorInfo()[2];
}

?>
