// function globalData(){
//     $.ajax({
//         url: 'https://coronavirus-19-api.herokuapp.com/countries ',
//         type: 'get',
//         dataType: 'json',
//         success: function(hasil){
//             console.log(hasil);
//             // let data = hasil.attributes;
//             // let baris = '';
//             // for(let i = 0;i < data.length;i++){
//             // baris += '<tr>' + 
//             //             '<td>'+ data. +'</td>' +
//             //         '</tr>';

//             // }
//             // $.each(hasil, function(i,data) {
//                 // let data_negara = data.attributes;
//                 // console.log(data_negara)
                
                
//                 // $('#isi-negara').append(`
//                 // <tr>
//                 //     <td scope="row">`+ data_negara.Country_Region +`</td>
//                 //     <td scope="row">`+ data_negara.Confirmed +`</td>
//                 //     <td scope="row">`+ data_negara.Deaths +`</td>
//                 //     <td scope="row">`+ data_negara.Recovered +`</td>
//                 // </tr>
//                 // `);
//             // });
//             // $('#isi-negara').html(baris);
//         }
//     });
// }
// globalData();