function positif(){
        $.ajax({
            url: 'https://api.kawalcorona.com/positif',
            type: 'get',
            dataType: 'json',
            success: function(hasil){
                console.log(hasil);
                $.each(hasil, function(i,data) {
                    $('#positif-global').append(`
                        <p>`+ data.name +`</p>
                        <p>`+ data.value +`</p>
                    `);
                });
            }
        });
    }
positif();


function globalData(){
    $.ajax({
        url: 'https://api.kawalcorona.com/',
        type: 'get',
        dataType: 'json',
        success: function(hasil){
            // console.log(hasil);
            $.each(hasil, function(i,data) {
                let data_negara = data.attributes;
                // console.log(data_negara)
                $('#isi-negara').append(`
                <tr>
                    <td scope="row">`+ data_negara.Country_Region +`</td>
                    <td scope="row">`+ data_negara.Confirmed +`</td>
                    <td scope="row">`+ data_negara.Deaths +`</td>
                    <td scope="row">`+ data_negara.Recovered +`</td>
                </tr>
                `);
            });
        }
    });
}
globalData();