import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import h337 from "heatmap.js";


export default function App() {

  useEffect(() => {

    //  Criando uma instancia de heatmap
    var heatmapInstance = h337.create({

      // Somente o conteiner foi definido, o restante será o padrão
      container: document.querySelector('.App')
    });

    ////////////////////////// Gerando dados aleatórios //////////////////////////
    var points = [];
    var max = 0;
    var min = 0;
    var width = 1276;
    var height = 86;
    var len = 200;

    while (len--) {
     var val = Math.floor(Math.random()*100);
     max = Math.max(max, val);

     var point = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height),
      value: val
     };

     // Adicionando os pontos: x, y e o valor de tal ponto
     points.push(point);
   }
    ///////////////////////////////////////////////////////////////////////////////

   // formato de dados do heatmap
  var data = {
    max: max,
    min: min,
    data: points
  };

  // se você tiver um conjunto de pontos de dados, use sempre setData em vez de addData
  // para inicialização de dados
    heatmapInstance.setData(data);
 })

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);