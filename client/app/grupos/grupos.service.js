'use strict';

angular.module('notasApp')
  .factory('Grupos',function(){
 //Retorna la asiganción academica 
 return {
      grupos:[
{nombre:'1A',
areas: [{
 nombre : 'Humanidades',
 asignaturas :[
 {
   nombre :'Lengua Castellana',
   docente : 'Paula'
 },
 {
   nombre :'Ingles',
   docente : 'Carmen'
 }
 ]
}]},  {nombre:'2A',
areas: [{
  nombre : 'Humanidades',
  asignaturas :[
  {
   nombre :'Lengua Castellana',
   docente : 'Paula'
 },
 {
   nombre :'Ingles',
   docente : 'Carmen'
 }
 ]
}]},
{nombre:'3A',
areas: [{
  nombre : 'Humanidades',
  asignaturas :[
  {
   nombre :'Lengua Castellana',
   docente : 'Paula'
 },
 {
   nombre :'Ingles',
   docente : 'Carmen'
 },
 ]
}]},{nombre:'9B',
areas: [{
  nombre : 'Humanidades',
  asignaturas :[
  {
   nombre :'Lengua Castellana',
   docente : 'Paula'
 },
 {
   nombre :'Ingles',
   docente : 'Carmen'
 },
 ]
}]}
]
  };
 

 });
