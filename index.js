const url = 'https://62ab6beda62365888bdc2f11.mockapi.io/Hw13';
const Tbody = document.querySelector('tbody');
const row = document.createElement('tr');
let arr1 = [];
let arr2 = [];


async function getData() {
    let response = await fetch(url);
    let result = await response.json();

    row.dataset.id = result.id;
    Tbody.appendChild(row);

    for(let i = 0; i <= 20; i++){
        arr1.push(result[i].SiteId);
    }
    for(let i = 0; i <= 20; i++){
        arr2.push(result[i].ProjectId);
    }

    arr1.sort();
    arr2.sort();
    
    const arr11 = arr1.filter ((value, index, array) => { 
        return array.indexOf (value) == index;
    });

    const arr12 = arr2.filter ((value, index, array) => { 
        return array.indexOf (value) == index;
    });

    // let arr3 = [result.SiteId, result.ProjectId, data];

    // for(let i = 0; i <= 20; i++) {
    //     for(let j = 0; j <= 20; j++) {
    //             if(result.SiteId === result[i].SiteId) {
    //                 if(result.ProjectId === result[j].ProjectId) {
    //                     arr3.push(result.Target);
    //                 }
    //             }
    //         }
    //     }
        // console.log(arr3)
    
for(let i = 1; i <= 7; i++) {
    const siteIdCell = document.createElement('td');
    siteIdCell.innerHTML = i;
    siteIdCell.className = 'text-dark fs-3 text-center bg-success';
    siteIdCell.style.padding = 22;
    row.appendChild(siteIdCell);
}

for(let i = 0; i <= 2; i++) {
    const row = document.createElement('tr');
    row.dataset.id = result.id;
    Tbody.appendChild(row);

    const projectIdCell = document.createElement('td');
    projectIdCell.innerHTML = arr12[i];
    projectIdCell.className = 'text-dark fs-3 text-center bg-warning p-3';
    row.appendChild(projectIdCell);
}

}

const getDatas = document.createElement('button');
getDatas.innerText = 'getDatas';
getDatas.className = 'p-2 m-5 w-10 text-white bg-dark border rounded';
document.body.prepend(getDatas);

getDatas.addEventListener('click', getData);

// function getSiteId(arr1) {
//     const siteIdCell = document.createElement('td');
//     siteIdCell.innerHTML = result.SiteId;
//     siteIdCell.className = 'text-dark fs-3 text-center bg-success';
//     siteIdCell.style.padding = 22;
//     row.appendChild(siteIdCell);
// }

// function getProjectId(result) {
//     const row = document.createElement('tr');
//     row.dataset.id = result.id;
//     Tbody.appendChild(row);

//     const projectIdCell = document.createElement('td');
//     projectIdCell.innerHTML = result.ProjectId;
//     projectIdCell.className = 'text-dark fs-3 text-center bg-warning p-3';
//     row.appendChild(projectIdCell);
// }
