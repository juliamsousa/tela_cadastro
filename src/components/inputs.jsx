import React from 'react'

function Inputs() {
    return(
        <section id="campos">
            <div id="formulario">
                <form action="#" method="post">
                    <fieldset class="conjunto">
                        <div class="campo">
                            <label for="nome">Nome:</label>
                            <input type="text" name="nome" id="nome"/>
                        </div>

                        <div class="campo">
                            <label for="sobrenome">Sobrenome:</label>
                            <input type="text" name="sobrenome" id="sobrenome"/>
                        </div>

                        <div class="campo">
                            <label for="dataDeNascimento">Data de Nascimento:</label>
                            <input type="text" name="dataDeNascimento" id="dataDeNascimento"/>
                        </div>
                        
                        <div class="campo">
                            <label for="cpf">CPF:</label>
                            <input type="integer" name="cpf" id="cpf"/>
                        </div>

                        <div class="campo">
                            <label for="telefone">Telefone:</label>
                            <input type="integer" name="telefone" id="telefone"/>
                        </div>

                        <div class="campo">
                            <label for="endereco">Endereco:</label>
                            <input type="text" name="endereco" id="endereco"/>
                        </div>

                        <div class="campo">
                            <label for="email">Email:</label>
                            <input type="text" name="email" id="email"/>
                        </div>
                        
                        <div class="campo">
                            <label for="senha">Senha:</label>
                            <input type="text" name="senha" id="senha"/>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div id="botaoEnviar">
                <button type="submit" class="botao">ENVIAR</button>
            </div>
        </section>)
}

export default Inputs