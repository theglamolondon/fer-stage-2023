<?php
require 'connexion.php';

 
    // Requête SQL pour récupérer toutes les factures
$sql = "SELECT * FROM products";
$stmt = $conn->prepare($sql);
$stmt->execute();

// Affichage des factures sous forme de liste
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
 
    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['price'] . "</td>";
     
    echo "</tr>";

}

?>