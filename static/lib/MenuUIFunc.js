
function changeData(a) {
    doSomething();
}

function doSomething(){
    var methodname = $('#option_mmethod').val();
    var segnum = $('#option_segnum').val();
    var density = $('#option_density').val();
    var urlStr = 'getdata';

    $.ajax({
        url: urlStr,
        data:{
            // the data here will be sent to python
            set_name: methodname,
            seg_num: segnum,
            fea_den: density 
        },
        dataType: 'JSON',
        type: 'GET',
        success: function(input_data){
            console.log(input_data)
        }
    });
}
    