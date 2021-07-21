function InsertNumber(num){
    var existtingNum= $("#result").val()
    $("#result").val(existtingNum + num)
}

function clearResult(){
    $("#result").val('')
}

function calculate(){
    var result = eval($("#result").val())
    $("#result").val(result)
}

function deletenum(){
    var value = $("#result").val()
    var res = value.slice(0,-1)
    $("#result").val(res)
}