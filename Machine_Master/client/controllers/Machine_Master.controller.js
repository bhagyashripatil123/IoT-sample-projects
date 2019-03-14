/**=========================================================
 * Module: machine.js
 =========================================================*/
 (function() {
    'use strict';
  
    angular
        .module('app.Machine_Master')
        .controller("Machine_Mastercontroller",function($scope,$window)
         {
          
            $scope.machine_data=[{machine_name:'Machine_1',type:'Press machine',ID:'01'},
                                  {machine_name:'Machine_2',type:'Injection Moulding machine',ID:'02'},
                                  {machine_name:'Machine_3',type:'Press machine',ID:'03'},
                                  {machine_name:'Machine_4',type:'Injection Moulding machine',ID:'04'},
                                  {machine_name:'Machine_5',type:'Press machine',ID:'05'},
                                  {machine_name:'Machine_6',type:'Strip cutting machine',ID:'06'},
                                  {machine_name:'Machine_7',type:'Injection Moulding machine',ID:'07'},
                                  {machine_name:'Machine_8',type:'Strip cutting machine',ID:'08'},
                                  {machine_name:'Machine_9',type:'Press machine',ID:'09'},
                                  {machine_name:'Machine_8',type:'Strip cutting machine',ID:'10'},
                                  {machine_name:'Machine_9',type:'Press machine',ID:'11'}];
  
            $scope.refersh=function()
                {
                    $scope.name="  ";
                    //console.log( $scope.name);
                    $scope.ID=parseInt("  ");
                    //console.log( $scope.ID);
                    $scope.select="  ";
                    //console.log( $scope.select);
                   
                }
                

             //add data dynamically to table
              $scope.addMachine = function(name,ID,select)
              {	
                  if(name!=undefined && select!=undefined && ID!=undefined )
                  {                     
                        $scope.machine_data.push({machine_name:name,type:select,ID:ID.toString()});
                        console.log("updated machine data is:",$scope.machine_data);
                  }
                  else
                  {
                        $window.alert("Please enter all fields.");
                  }	
              };  
              
              //validate input of form
              $scope.validateInput=function(name,type)
              {
                var input = $scope.form[name];
                return (input.$dirty || vm.submitted) && input.$error[type];
              }
             
              //clear table function 
              $scope.resetTable=function()
              {
  
                  $scope.machine_data=[];
              }
  
              //delete function
              $scope.delete=function(data)
              {
                 
                  //var result=confirm("Are you sure?");
                  if(confirm("Are you sure?"))
                  {
                    
                      var index=$scope.machine_data.indexOf(data);
                      if(index!==-1)
                      {
                          $scope.machine_data.splice(index,1);
                      }
                  }
                  console.log("element deleted at ",index);
                  
              }

            //edit functionality
              $scope.edit=function(data)
              {
                    console.log(data,"data is")
                   
                    $scope.name=data.machine_name;
                    console.log("Machine Name",$scope.name); 

                    $scope.select=data.type;
                    console.log("Machine type",$scope.select);

                    $scope.ID=parseInt(data.ID);
                    console.log("Machine ID",$scope.ID);
                    if($scope.ID==data.ID)
                    {
                        
                        console.log("updated");
                    }

             }

                

                // Submit form
                $scope.submitForm = function($valid) {
                  
                  if ($valid) {
                    console.log('Submitted!!');
                  } else {
                    console.log('Not valid!!');
                    return false;
                  }
                }

             });
  
    
  })();
  