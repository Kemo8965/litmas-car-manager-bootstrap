import { api } from '@/helpers/axios-instance'
import {_, cloneDeep } from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_CAR,
        SET_ALL_CARS, 
        GET_ALL_CARS, 

    SET_ALL_CARS_IN_GARAGE,
    GET_ALL_CARS_IN_GARAGE,
    SET_SELECTED_CAR_IN_GARAGE,

    SET_LOADING,
    SET_SELECTED_CAR,
    PUT_CAR_IN_GARAGE,
    
   

    SET_ALL_CARS_AVAILABLE, 
    GET_ALL_CARS_AVAILABLE, 
    SET_SELECTED_CAR_AVAILABLE,


    
    SET_ALL_CARS_IN_NEED_OF_FITNESS, 
    GET_ALL_CARS_IN_NEED_OF_FITNESS, 
    SET_SELECTED_CAR_IN_NEED_OF_FITNESS,

    SET_ALL_CARS_IN_NEED_OF_INSURANCE,
    GET_ALL_CARS_IN_NEED_OF_INSURANCE,
    SET_SELECTED_CAR_IN_NEED_OF_INSURANCE,

    SET_ALL_CARS_IN_NEED_OF_ROAD_TAX, 
    GET_ALL_CARS_IN_NEED_OF_ROAD_TAX, 
    SET_SELECTED_CAR_IN_NEED_OF_ROAD_TAX,


    SET_ALL_CARS_IN_USE, 
    GET_ALL_CARS_IN_USE, 
    SET_SELECTED_CAR_IN_USE,


    SET_ALL_CARS_UNAVAILABLE, 
    GET_ALL_CARS_UNAVAILABLE, 
    SET_SELECTED_CAR_UNAVAILABLE,


   } from '@/helpers/mutation-types'

export const state = () => ({

    loading: false,
    allCars:[],
    allCarsInUse:[],
    allCarsAvailable:[],
    allCarsUnavailable:[],
    allCarsInGarage:[],
    allCarsInNeedOfInsurance:[],
    allCarsInNeedOfRoadTax:[],
    allCarsInNeedOfFitness:[],
    allCarsOutOfService:[],

   

    options:[
        'Kondwani', 'Bob', 'Linda', 'Alison'
    ],
    
    selectedCar: null,
    selectedCarInGarage: null,
    selectedCarInUse:null,
    selectedCarAvailable:null,
    selectedCarUnavailable:null,
    selectedCarInNeedOfInsurance: null,
    selectedCarInNeedOfRoadTax:null,
    selectedCarInNeedOfFitness:null,
    


    carForm:{
        
      make:null,
      model:null,
      datePurchased:null,
      yearOfMake:null,
      registrationNumber:null,
      engineNumber:null,
      chasisNumber:null,
      color:null,
      createdBy:null
      
        
    },

    calfForm:{
        
        calfBreed:null,
        calfDateOfBirth:null,
        sire:null,
        dam:null,
        calfSex:null,
        calfWeight:null,
        earTagID:null,
        earTagColor:null,
        calfColor:null,
        calfStatus:null,
        calfRemarks:null,
        createdBy:null,
        age:null,
        stage:null
          
      },


    milkingForm: {     
        earTagID:null,
        firstMilking:null,
        secondMilking:null,
        thirdMilking:null,
        milkingDate:null,
        createdBy:null,
        milkOwner:null,
        totalDMR:null  
    },

})

    


export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedCar(state) {
        return state.selectedCar
      },

      selectedCarInGarage(state) {
        return state.selectedCarInGarage
      },

      selectedCarInUse(state) {
        return state.selectedCarInUse
      },

      selectedCarAvailable(state) {
        return state.selectedCarAvailable
      },

      selectedCarUnavailable(state) {
        return state.selectedCarUnavailable
      },

      selectedCarInNeedOfInsurance(state) {
        return state.selectedCarInNeedOfInsurance
      },

      selectedCarInNeedOfRoadTax(state) {
        return state.selectedCarInNeedOfRoadTax
      },

      selectedCarInNeedOfFitness(state) {
        return state.selectedCarInNeedOfFitness
      },
     

    allCars(state){
        return state.allCars
    },

    allCarsInUse(state){
      return state.allCarsInUse
  },

    allCarsInGarage(state){
      return state.allCarsInGarage
  },
    allCarsAvailable(state){
      return state.allCarsAvailable
  },

    allCarsUnavailable(state){
        return state.allCarsUnavailable
    },

    allCarsInNeedOfInsurance(state){
        return state.allCarsInNeedOfInsurance
    },

    allCarsInNeedOfRoadTax(state){
      return state.allCarsInNeedOfRoadTax
  },

  allCarsInNeedOfFitness(state){
    return state.allCarsInNeedOfFitness
},

   




}


export const mutations = {

    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING TASKS
    [ADD_CAR](state, newCar){
        state.allCars.push(newCar)
    },


    //----------------ALL CARS --------------------//
    [SET_SELECTED_CAR](state, newCar) {
        state.selectedCar = newCar
      },
    [SET_ALL_CARS](state, payload) {
        state.allCars = payload
    },
    [GET_ALL_CARS](state, payload){
        state.allCars = payload
    },

   // ----------------- CARS IN GARAGE ---------------- //
    [SET_SELECTED_CAR_IN_GARAGE](state, newCar) {
        state.selectedCarInGarage = newCar
      },
    [SET_ALL_CARS_IN_GARAGE](state, payload) {
        state.allCarsInGarage = payload
    },
    [GET_ALL_CARS_IN_GARAGE](state, payload){
        state.allCarsInGarage = payload
    },



//------------------ CARS IN USE ---------------------//
    [SET_SELECTED_CAR_IN_USE](state, newCar) {
        state.selectedCarInUse = newCar
      },
    [SET_ALL_CARS_IN_USE](state, payload) {
        state.allCarsInUse = payload
    },
    [GET_ALL_CARS_IN_USE](state, payload){
        state.allCarsInUse = payload
    },


  

    [PUT_CAR_IN_GARAGE](state, putResponse) {
        state.selectedCar= putResponse
        state.selectedCar.carStatus = "In garage"
        }
    ,



    //-------------------CARS AVAILABLE ----------//
    [SET_SELECTED_CAR_AVAILABLE](state, newCar) {
        state.selectedCarAvailable= newCar
      },
    [SET_ALL_CARS_AVAILABLE](state, payload) {
        state.allCarsAvailable = payload
    },
    [GET_ALL_CARS_AVAILABLE](state, payload){
        state.allCarsAvailable = payload
    },

 //-------------------CARS UNAVAILABLE ----------//
  [SET_SELECTED_CAR_UNAVAILABLE](state, newCar) {
    state.selectedCarUnavailable= newCar
  },
[SET_ALL_CARS_UNAVAILABLE](state, payload) {
    state.allCarsUnavailable = payload
},
[GET_ALL_CARS_UNAVAILABLE](state, payload){
    state.allCarsUnavailable = payload
},


 //-------------------CARS NEEDING IN INSURANCE ----------//
 [SET_SELECTED_CAR_IN_NEED_OF_INSURANCE](state, newCar) {
  state.selectedCarInNeedOfInsurance= newCar
},
[SET_ALL_CARS_IN_NEED_OF_INSURANCE](state, payload) {
  state.allCarsInNeedOfInsurance = payload
},
[GET_ALL_CARS_IN_NEED_OF_INSURANCE](state, payload){
  state.allCarsInNeedOfInsurance = payload
},

 //-------------------CARS NEEDING IN ROAD TAX ----------//
 [SET_SELECTED_CAR_IN_NEED_OF_ROAD_TAX](state, newCar) {
  state.selectedCarInNeedOfRoadTax= newCar
},
[SET_ALL_CARS_IN_NEED_OF_ROAD_TAX](state, payload) {
  state.allCarsInNeedOfRoadTax = payload
},
[GET_ALL_CARS_IN_NEED_OF_ROAD_TAX](state, payload){
  state.allCarsInNeedOfRoadTax = payload
},


 //-------------------CARS NEEDING IN FITNESS ----------//
 [SET_SELECTED_CAR_IN_NEED_OF_FITNESS](state, newCar) {
  state.selectedCarInNeedOfFitness= newCar
},
[SET_ALL_CARS_IN_NEED_OF_FITNESS](state, payload) {
  state.allCarsInNeedOfFitness = payload
},
[GET_ALL_CARS_IN_NEED_OF_FITNESS](state, payload){
  state.allCarsInNeedOfFitness = payload
},




 

 

}

export const actions = {

    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newCarLoad= await api.get(`/cars/allCars`)

           

           // await dispatch('getInactivePolicies')
            console.log(newCarLoad.data)
             commit(SET_ALL_CARS, newCarLoad.data);

             
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL car
    async getAllCars({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allCars} = await api.get(`/cars/allCars`)

        
            
         
           console.log(allCars.data);

        //    console.log(allcar.data[0]._id)


           const carLength = allCars.data.length;

           console.log(carLength);
           
             //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
          //  const filteredCar = allCars.data.filter( c => 
          //   c.createdBy === this.$auth.user.email
          //  );
            
          //  console.log(filteredCar);

            //-----------------FOR LOOP TO CALCULATE THE CURRENT AGE OF EACH COW-------------//
        
              //--------CARS IN GARAGE---------------//
            const filteredCarByCarInGarage = allCars.data.filter( cig => 
               cig.carStatus === "In Garage"
               );
              
               console.log(filteredCarByCarInGarage);

             //--------CARS IN USE---------------//
             const filteredCarByCarInUse = allCars.data.filter( ciu => 
              ciu.carStatus === "In Use" 
             );
              
             console.log(filteredCarByCarInUse);


              //--------CARS AVAILABLE---------------//
            const filteredCarByCarAvailble = allCars.data.filter( cia => 
            cia.carStatus === "Available"
             );
             console.log(filteredCarByCarAvailble);


           //--------CARS UNAVAILABLE---------------//
           const filteredCarByCarUnavailable = allCars.data.filter( csc => 
          csc.carStatus === "Unavailable"
           );
           console.log(filteredCarByCarUnavailable);


           //--------CARS NEED INURANCE---------------//
           const filteredCarByCarInNeedOfInsurance = allCars.data.filter( ciua => 
            ciua.carStatus === "Needs Insurance"
           );
           console.log(filteredCarByCarInNeedOfInsurance);


            //--------CARS NEED ROAD TAX---------------//
          const filteredCarByCarInNeedOfRoadTax = allCars.data.filter( cnrt => 
            cnrt.carStatus === "Needs Road Tax"
           );
           console.log(filteredCarByCarInNeedOfRoadTax);


         //--------CARS NEED FITNESS---------------//
         const filteredCarByCarInNeedOfFitness = allCars.data.filter( cni => 
         cni.carStatus === "Needs Fitness"
         );
          console.log(filteredCarByCarInNeedOfFitness);  
         
        
          

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_CARS, allCars);

           commit(GET_ALL_CARS_AVAILABLE, filteredCarByCarAvailble);

           commit(GET_ALL_CARS_UNAVAILABLE, filteredCarByCarUnavailable);

           commit(GET_ALL_CARS_IN_GARAGE, filteredCarByCarInGarage);

           commit(GET_ALL_CARS_IN_USE, filteredCarByCarInUse);

           commit(GET_ALL_CARS_IN_NEED_OF_INSURANCE, filteredCarByCarInNeedOfInsurance);

           commit(GET_ALL_CARS_IN_NEED_OF_ROAD_TAX, filteredCarByCarInNeedOfRoadTax);

           commit(GET_ALL_CARS_IN_NEED_OF_FITNESS, filteredCarByCarInNeedOfFitness);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
         //   this.$log.error(error.message)
        }
    },

    //ADD NEW TASK TO ALL car
    async addNewCar({ state, commit}){
        try {
            commit(SET_LOADING, true);

            const newCar = cloneDeep(state.carForm);
            newCar.createdBy = this.$auth.user.email;
            
        
            newCar.datePurchased = newCar.datePurchased.toLocaleDateString();
            
           console.log(newCar);

           console.log(newCar.datePurchased);
          
            const response = await api.post(`/cars/addNewCar`, newCar);

            console.log(response.data);

            commit(ADD_CAR, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    },

    

  async  selectCar({ commit }, newCar) {
        try {

            commit(SET_SELECTED_CAR, newCar)
            // console.log(newcar._id)
            // console.log(newcar.earTagID)
            // console.log(newcar)

        } catch (error) {
            console.log('Error')
        }
        
      },


         async putInGarage({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/putInGarage/${newCar._id}`, {newCar, carStatus: "In garage"} )

          commit(PUT_IN_GARAGE, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markAsUnavailable({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsUnavailable/${newCar._id}`, {newCar, carStatus: "Unavailable"} )

          commit(MARK_AS_UNAVAILABLE, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markAsAvailable({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsAavailable/${newCar._id}`, {newCar, carStatus: "Available"} )

          commit(MARK_AS_AVAILABLE, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markAsInUse({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsInUse/${newCar._id}`, {newCar, carStatus: "In Use"} )

          commit(MARK_AS_IN_USE, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async markAsInNeedOfInsurance({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsInNeedOfInsurance/${newCar._id}`, {newCar, carStatus: "Insurance Needed"} )

          commit(MARK_AS_IN_NEED_OF_INSURANCE, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },


      async markAsInNeedOfRoadTax({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsInNeedOfRoadTax/${newCar._id}`, {newCar, carStatus: "Road Tax Needed"} )

          commit(MARK_AS_IN_NEED_OF_ROAD_TAX, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      
      async markAsInNeedOfFitness({ state, commit }, newTask) {
        try {
          commit(SET_LOADING, true) 
            const newCar = state.selectedCar
       //  const newTask = rootGetters['finance/selectedPermitApplication'] 
          console.log(newCar._id)

          const {data: putResponse} = await api.put(`/car/markAsInNeedOfFitness/${newCar._id}`, {newCar, carStatus: "Fitness Needed"} )

          commit(MARK_AS_IN_NEED_OF_FITNESS, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },



}


  
    
