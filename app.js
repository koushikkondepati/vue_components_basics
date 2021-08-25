let planComponent = {
    template: "#plan-template",
    props: {
        name:{
            type: String,
        },
        selectedPlan:{
            type: String,
        }
    },
    computed:{
        isSelected(){
            return this.name === this.selectedPlan;
        }
    },
    methods:{
        select(){
            this.$emit('select', this.name)
        }
    }
}


let planPickerComponent = {
    template: "#plan-picker-template",
    components:{
        plan: planComponent,
    },
    props:{
        searchedPlan:{
            type: String,
        }
    },
    data(){
        return{
            coffeeTypes:['cold coffee','hot coffee','bed coffee','black coffee'],
            selectedPlan: null,
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        },
        addThePlan(){
            console.log(this.searchedPlan);
            this.coffeeTypes.push(this.searchedPlan);
        }
    },
}



new Vue({
    el: "#app",
    components:{
        'plan-picker': planPickerComponent,
    },
    data(){
        return{
            searchVal: '',
        }
    },
    methods:{
    }
})