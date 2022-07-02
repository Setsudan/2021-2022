<div class="tool-bar">
    <div class="tools">
        <a href="dashboard.php" class="tool shapes" id="home">
            <img src="./styles/img/home.svg" alt="select" />
        </a>
        <?php
        // Totalité de la toolbar avec les fonctions javascript qui permettent d'utiliser les != outils
        ?>
        <input type="text" name="projectname" id="projectname" placeholder="Project Name...">
        <button onclick="onFocus()" class="tool shapes" id="focus">
            <img src="./styles/img/select.svg" alt="select" />
        </button>
        <button onclick="eraseObject()" class="tool" id="Eraser">
            <img src="./styles/img/Erase.svg" alt="eraser" />
        </button>
        <button onclick="runDrag()" class="tool drag" id="position">
            <img src="./styles/img/Position.svg" alt="position" />
        </button>
        <button onclick="resizable()" class="tool resize" id="resize">
            <img src="./styles/img/Resize.svg" alt="resize" />
        </button>
        <button onclick="addShape('circle')" class="tool shapes" id="circle">
            <img src="./styles/img/Circle.svg" alt="add circle" />
        </button>
        <button onclick="addShape('triangle')" class="tool shapes" id="triangle">
            <img src="./styles/img/Triangle.svg" alt="add triangle" />
        </button>
        <button onclick="addShape('rectangle')" class="tool" id="rectange">
            <img src="./styles/img/Rectangle.svg" alt="add rectangle" />
        </button>
        <button onclick="addShape('text')" class="tool shapes" id="txt">
            <img src="./styles/img/addtxt.svg" alt="add txt" />
        </button>
        <div class="tool shapes txt">
            <img src="./styles/img/Txt.svg" alt="add txt" />
            <div class="font-list">
                <button onclick="changeFont('Default')">Default</button>
                <button onclick="changeFont('Montserrat')">Montserrat</button>
                <button onclick="changeFont('BhuTuka')">BhutTuka</button>
                <button onclick="changeFont('Smooch')">Smooch</button>
            </div>
        </div>
        <div class="tool">
            <input type="color" name="primary-color" id="primarycolor" onclick="colorChange()">
        </div>
        <div class="tool">
            <input type="color" name="secondary-color" id="secondaryColor" onclick="colorChange()">
        </div>
        <button onclick="save()" class="tool" id="Save">
            <img src="./styles/img/Save.svg" alt="Save" />
        </button>
    </div>
</div>