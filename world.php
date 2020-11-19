<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$search = ucwords($_GET["country"]);
$search = trim($search);
$search = stripslashes($search);

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$search%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);



 // if($search !=""){
 //   foreach($result as $res){
 //     if ($search == $res["name"] or $search == $hero["alias"]){
 //       echo(json_encode($hero));
 //       return;
 //     }
 //   }
 //   echo "No match";
 //   return;
 // }
?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
