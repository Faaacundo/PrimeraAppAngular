angular.module("primeraApp",[])
    .controller("primerController", function($scope){                            
    $scope.nombre = "Facundo";

$scope.nuevoComentario={};
$scope.comentarios=[
{ 
comentario:"Buen tutorial",
username:"TUTOR"
},
{
comentario:"Malísimo el tutorial",
username:"TUTOR2"
}
];
    
$scope.agregarComentario = function(){
 $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
}

});