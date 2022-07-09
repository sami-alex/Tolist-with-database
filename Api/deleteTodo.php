<?php
$conn=mysqli_connect("localhost","root","","todo");
include 'permission.php';
$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$id=$obj['task'];

$sql="DELETE FROM todo WHERE id=$id";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('deleted sucessfully');
header('location:permission.php');
}
else{
echo json_encode('deletion failed');
  
}
mysqli_close($conn);






?>


