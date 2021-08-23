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
    data(){
        return{
            coffeeTypes:['cold coffee','hot coffee','bed coffee','black coffee'],
            selectedPlan: null,
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        }
    }
}



new Vue({
    el: "#app",
    components:{
        'plan-picker': planPickerComponent,
    }
})