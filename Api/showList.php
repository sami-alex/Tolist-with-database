<?php
include "permission.php";
$conn=mysqli_connect("localhost","root","","todo");



$sql="SELECT * FROM todo";
$result=mysqli_query($conn,$sql);
$json=array();
while($row=mysqli_fetch_assoc($result)){
$json[]=$row;

}
echo json_encode($json);










?>


