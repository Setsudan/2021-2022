<?php
// Code permettant de charger les projets
// Bloqué par le problème dans /js/dashboard.js
session_start();
require "./db_connect.inc.php";
$loadProject = "SELECT projectname,board,id FROM projects";
$rows = [];
$getProject = mysqli_query($connection, $loadProject);
if (mysqli_num_rows($getProject) > 0) {
    $rows = mysqli_fetch_all($getProject);
    echo json_encode($rows);
} else {
    echo "you don't have any projects";
}