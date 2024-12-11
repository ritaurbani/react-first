
// function App() {

//   //stampa nome-voto in una lista
//   const studenti = [
//     { nome: 'Alessandro', voto: 7 },
//     { nome: 'Giulia', voto: 5 },
//     { nome: 'Marco', voto: 8 },
//     { nome: 'Elena', voto: 4 },
//   ];

//   function getResult() {
//     const jsxElemArray = studenti.map((curStudent,index) => {
//       console.log(curStudent.nome, curStudent.voto)
//       return (<li key={index}>{curStudent.nome}-{curStudent.voto}</li>)
//     })
//     return jsxElemArray
//   }

//   return (
//     <>
//       <ul>
//         {getResult()}
//       </ul>
//     </>
//   )
// }
/////////////////////////////////////////////////

// function App() {

//   //stampa la lista di nomi in maiuscolo
//   const nomi = ['alessandro', 'giulia', 'marco', 'elena'];
//   const upperCase = nomi.map((nome) => {
//     return nome.toUpperCase()
//   })
//   console.log(upperCase)

//   return (
//       <>
// <ul>
//   {
//     upperCase.map((elem, index)=>{
//       (<li key={index}>{elem}</li>)
//     })
//   }
// </ul>
//       </>
//     )
// }

///////////////////////////////////////////////////
