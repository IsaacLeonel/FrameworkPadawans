<!DOCTYPE html>

<head>
    <meta charset="UTF-8" />
    <title>FrameWork</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./CSS/style.css" />
</head>


<body>
    <div class="TituloTabelas">
        <h1>ATIVIDADES</h1>
        <div class="btnVoltar">
            <a href="index.php"><button >VOLTAR AO MENU</button></a>
        </div>
    </div>

    <content class="tabPostagens">
        <div>
            <div class="list">
                <div class="filtro">
                    <div class="opcoes">
                        <h3>- FILTROS -</h3>
                        <p>Selecione um filtro para começar<p>
                        <br>
                       
                        <br>
                        <div>
                            <input type="checkbox" id="all" name="all" >
                            <label for="scales">Tudo</label>
                            <input type="checkbox" id="finalizados" name="Finalizados" >
                            <label for="scales">Finalizados</label>
                            <input type="checkbox" id="NFinalizados" name="NFinalizados" >
                            <label for="scales">Não finalizados</label>
                            
                            
                        </div>
                        <div>
                        <button id="Limpar">LIMPAR</button>
                        <button id="filtrar">FILTRAR</button>
                        </div>
                    </div>

                </div>
                <div class="tabela">
                    <div class="dentrodatabela">
                        <div class="todosTable">
                            <div>
                                <div class="table-wrapper">
                                    <table id="id_para_tables" class="fl-table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>FINALIZADO</th>
                                                <th>USUARIO</th>
                                                <th>DESCRIÇÃO</th>
                                            </tr>
                                        </thead>
                                        <tbody id="todos">
                                            

                                        <tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
    </content>


    <script src="JS/JavaScript.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

</body>

</html>