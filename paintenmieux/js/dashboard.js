/**
 * fonction qui "permet" de charger un projet sauvegarder
 * Attente de correction
 * @param {Int} projectId
 */
function load(projectId) {
  fetch("./includes/loadBoard.inc.php", {
    method: "GET",
  })
    .then((res) => res.text())
    .then((txt) => {
      let parsedJson = JSON.parse(txt);
      parsedJson.forEach((project) => {
        if (project[2] == projectId) {
          let formData = new FormData();
          formData.append("projectname", project[0]);
          formData.append("board", project[1]);
          formData.append("id", project[2]);
          fetch("./whiteboard.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then(() => (window.location = "whiteboard.php?loaddata=true"));
        } else {
          return;
        }
      });
    });
}
