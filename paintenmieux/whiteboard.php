<?php // Ethan
require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<div id="board">
</div>
<script src="./js/whiteboard.js"></script>
<script>
// Rendu des formes sur la page
function renderBoardData(projectname, projectboard) {
    let board = document.getElementById("board")
    let pName = projectname;
    document.getElementById("projectname").value = pName
    console.log(projectboard);
    let parsedJson = JSON.parse(projectboard);
    parsedJson.forEach(element => {
        console.log(element);
        shape = document.createElement("div");
        // Ajout de tout les arguments nécéssaire
        shape.classList.add("item");
        shape.classList.add(element.Shapes);
        shape.id = parsedJson.push.Id;
        shape.style.top = element.Top;
        shape.style.left = element.Left;
        shape.style.height = element.Height;
        shape.style.width = element.Width;
        shape.style.background = element.BgColor;
        shape.style.border = element.Border;
        // Ajout de la forme au tableau
        board.appendChild(shape);
    });
}
</script>
<?php
require "./includes/db_connect.inc.php";
require "./includes/functions.inc.php";
if (isset($_POST["board"])) {
    setcookie("projectname", $_POST['projectname']);
    setcookie("id", $_POST['id']);
    setcookie("board", $_POST['board']);
}
if ($_GET['loaddata'] == 'true') {
    echo "<script>renderBoardData(" . "'" . $_COOKIE['projectname'] . "'," . "'" . $_COOKIE['board'] . "'" . ")</script>";
}
exit();
?>