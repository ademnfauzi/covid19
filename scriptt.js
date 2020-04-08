function all(){
    $.ajax({
        url:'https://api.kawalcorona.com/',
        type:'get',
        dataType:'json',
        success:function(hasil){
             $.each(hasil, function(i,data) {
                 let result = data.attributes;
                    $('#isi-negara').append(`
                    <tr>
                        <td scope="td row">`+ result.Country_Region +`</td>
                        <td scope="td row">`+ result.Confirmed +`</td>
                        <td scope="td row">`+ result.Deaths +`</td>
                        <td scope="td row">`+ result.Recovered +`</td>
                    </tr>
                    `);
                });
                
            }
        });
    }
    all();
    $('#td').hover(function(){
        $(this).css('background-color','blue');
    });



    function count(){
    $.ajax({
        url:'https://coronavirus-19-api.herokuapp.com/all',
        type:'get',
        dataType:'json',
        success:function(hasil){
            $('#meninggal-global').append(`
                <p>KORBAN MENINGGAL</p>
                <p> `+ hasil.deaths +`</p>
            `);
            $('#positif-global').append(`
                <p>KASUS POSITIF </p>
                <p> `+ hasil.cases +`</p>
            `);
            $('#sembuh-global').append(`
                <p>SEMBUH</p>
                <p> `+ hasil.recovered +`</p>
            `);
        }
    });
}
count();

function all_indonesia(){
    $.ajax({
        url:'https://covid19hub-api.now.sh/api/provinsi/today',
        type:'get',
        dataType:'json',
        success:function(result){
                $.each(result, function(i,data) {
                       $('#isi-provinsi').append(`
                       <tr>
                           <td scope="td row">`+ data.nama +`</td>
                           <td scope="td row">`+ data.baru +`</td>
                           <td scope="td row">`+ data.meninggal_baru +`</td>
                           <td scope="td row">`+ data.sembuh_baru +`</td>
                           <td scope="td row">`+ data.kumulatif +`</td>
                           <td scope="td row">`+ data.meninggal +`</td>
                           <td scope="td row">`+ data.sembuh +`</td>
                       </tr>
                       `);
                   });
        }
    });
}
all_indonesia();