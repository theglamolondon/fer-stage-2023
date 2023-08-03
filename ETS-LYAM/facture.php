<?php
require 'connexion.php';

  
$sql = "SELECT * FROM facture";
$stmt = $conn->prepare($sql);
$stmt->execute();


while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['nomClient'] . "</td>";
    echo "<td>" . $row['produit'] . "</td>";
    echo "</tr>";
}

?>
