<!DOCTYPE html>

<head>
    <meta charset="UTF-8" />
    <title>FrameWork</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./CSS/style.css" />
</head>


<body>
    <div class="TituloTabelas">
        <h1>FOTOS</h1>
        <div class="btnVoltar">
        <a href="index.php"><button >VOLTAR AO MENU</button></a>
        </div>
    </div>

    <content class="tabPostagens">
        <div id="paginate">
            <div class="list">
            <div class="filtro">
                <div class="tabela">
                    <div class="dentrodatabela" id="id_para_tables">
                    <div class="photosTable" id="photos">
                            <div class="card">
                            <div class="content">
                                       <div>
                                           <img class="thumb" src="">
                                           <p> Album: ${data.albumId}</p>
                                    </div class="titlefoto">
                                        <h2> </h2>
                                    </div>
                                <div class="imgBox">
                                    <img class ="imgdentrobox" src="">
                                </div>
                                <div>
                                </div>
                            </div>
                    </div>
    </content>


    <script src="JS/JavaScript.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</body>

</html>