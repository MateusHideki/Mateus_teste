function is_cpf() {
   
    var c = $('#cpf').val();

  if((c = c.replace(/[^\d]/g,"")).length != 11){
    
     $('#avisacpf').text( "CPF invalido" ).css("color", "red");
     $('#cpf').css("color", "red");
    return false;
  }
  
  if ( c == "00000000000" || c == "11111111111" || c == "22222222222" || c == "33333333333" || c == "44444444444" || c == "55555555555" || c == "66666666666" || c == "77777777777" || c == "88888888888" || c == "99999999999"){
    
     $('#avisacpf').text( "CPF invalido" ).css("color", "red");
    return false;
  }
    
  var r;
  var s = 0;   
  
  for (i=1; i<=9; i++)
    s = s + parseInt(c[i-1]) * (11 - i); 

  r = (s * 10) % 11;

  if ((r == 10) || (r == 11)) 
    r = 0;

  if (r != parseInt(c[9])){

     $('#avisacpf').text( "CPF invalido" ).css("color", "red");
     $('#cpf').css("color", "red");
    return false;
  }

  s = 0;

  for (i = 1; i <= 10; i++)
    s = s + parseInt(c[i-1]) * (12 - i);

  r = (s * 10) % 11;

  if ((r == 10) || (r == 11)) 
    r = 0;

  if (r != parseInt(c[10])){
    $('#avisacpf').text( "CPF invalido" ).css("color", "red");
    $('#cpf').css("color", "red");
    return false;
  }

  $('#avisacpf').text( "" );
  $('#cpf').css("color", "green");


}
/* validacao nome.Somente nomes com duas letras ou maior */
function is_nome() {
  var n = $('#nome').val().length;

  if (n < 2 ) {
     $('#avisanome').text( "Nome invalido" ).css("color", "red");
     $('#nome').css("color", "red");
    return false;
  }
  else{
    $('#avisanome').text( "" );
    $('#nome').css("color", "green");
  }


}
function is_data(){
   var n = $('#data_nasci').val().length;

   if (n < 10 ) {
    $('#avisadata').text( "Data invalida").css("color", "red");
    $('#data_nasci').css("color", "red"); 
    return false;
  }
  else{
    $('#data_nasci').text( "Nome valido" ).css("color", "green");
    $('#avisadata').text( "" );
  }

}

$(function(){
 $("#demo4").maskMoney({symbol:'R$ ', 
showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
 })

 $(function(){
        $("#valor").maskMoney();
    })