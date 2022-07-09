<?php
$conn=mysqli_connect("localhost","root","","job_list");

if($conn){
  echo "connection successfull";
}
else{
  echo mysqli_error($conn);
}





?>


