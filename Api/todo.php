<?php

include 'permission.php';
$conn=mysqli_connect("localhost","root","","todo");
$json=file_get_contents('php://input');
$obj=json_decode($json,true);
$task=$obj['task'];


$sql="INSERT into todo(task) values('$task')";

$result=mysqli_query($conn,$sql);
if($result){
echo json_encode('Inserted successfully');

}
else{
echo json_encode('inserion faild');
  
}
mysqli_close($conn);






?>


