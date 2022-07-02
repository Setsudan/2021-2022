<?php
require "./components/header.php";
require "./includes/db_connect.inc.php";
// Connection à la db en séléctionnent uniquement les projets de l'utilisateur connecté
$getProjectsCommand = "SELECT projectname,author,id FROM projects WHERE author=" . '"' . $_SESSION["useruid"] . '"';
$getProjects = mysqli_query($connection, $getProjectsCommand);
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
}
?>

<div class="dashboard">
    <nav class="dashboard-nav">
        <h1>My project</h1>
        <ul>
            <li><a href="https://github.com/paint-en-mieux/paint-en-mieux"><img src="./styles/img/github.svg"
                        alt=""></a></li>
            <li><a class="logout" href="./includes/Logout.inc.php"><img src="./styles/img/logout.svg" alt=""></a></li>
        </ul>
    </nav>
    <section class="project-dashboard">
        <div id="addCard">
            <img class="create-project" src="./styles/img/add.svg" alt="">
            <h3>Create new project</h3>
        </div>
        <?php
        // boucle pour rendre les projets et si inexistant affiche un message indiquant qu'il n'y a pas de projet 
        if (mysqli_num_rows($getProjects) > 0) {
            while ($row = mysqli_fetch_assoc($getProjects)) {
                echo "<button onclick='load({$row["id"]})' class='project-card " . $row['author'] . "'><h2 class='project-name'>Project:</h2><span>" . $row["projectname"] . "</span>" . "<h3 class='author'>Author: " . $row["author"] . "</h3></button>";
            }
        } else {
            echo "you don't have any projects";
        }
        ?>
    </section>
</div>
<script>
document.getElementById("addCard").addEventListener("click", () => {
    window.location = "whiteboard.php?loaddata=false"
})
</script>
<?php
mysqli_close($connection); ?>
<script src="./js/dashboard.js"></script>