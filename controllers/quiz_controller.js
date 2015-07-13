exports.question= function(req,res){

   res.render('quizes/question',{pregunta:'Capital de Italia ?'});
};

exports.answer=function(req,res){
var resp = null;
   if (req.query.respuesta.toUpperCase()==='ROMA'){
      resp = {respuesta:'Correcto! La Capital de Italia es Roma'}
   }else{
     resp = {respuesta:'Incorrecto!'}
   }
   res.render('quizes/answer',resp)
};
