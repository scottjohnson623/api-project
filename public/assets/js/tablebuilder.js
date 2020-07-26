console.log("running script");
fetch("http://localhost:3000/allUsers")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let tableBody = document.getElementById("MyData");
    data.forEach((elem) => {
      console.log(elem);
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(elem.first_name);
      cell.append(cellText);
      row.append(cell);
      let cell2 = document.createElement("td");
      let cellText2 = document.createTextNode(elem.last_name);
      cell2.append(cellText2);
      row.append(cell2);
      let cell3 = document.createElement("td");
      let cellText3 = document.createTextNode(elem.email);
      cell3.append(cellText3);
      row.append(cell3);
      let cell4 = document.createElement("td");
      let cellText4 = document.createTextNode(elem.networth);
      cell4.append(cellText4);
      row.append(cell4);
      let cell5 = document.createElement("td");
      let cellText5 = document.createTextNode(elem.favmoviegenre);
      cell5.append(cellText5);
      row.append(cell5);

      tableBody.append(row);
    });
  });
