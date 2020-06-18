<template>
    <div id="test">

<v-multiselect-listbox :options="options"
                       :reduce-display-property="(option) => option.label"
                       :reduce-value-property="(option) => option.code">
</v-multiselect-listbox>
    </div>
</template>

<script>
export default {
    name:"Test",
    data() {
        return{
            options: [
                {label: 'Tomate', code: 'fruit'},
                {label: 'Fraise', code: 'fruit'},
                {label: 'Mangue', code: 'fruit'},
                {label: 'Kiwi', code: 'fruit'},
                {label: 'Haricot', code: 'legume'},
                {label: 'Epinard', code: 'legume'},
                {label: 'Poivron', code: 'legume'},
                {label: 'Fromage', code: 'laitage'},
                {label: 'Créme fraîche', code: 'laitage'},
                {label: 'Sardine', code: 'poisson'},
                {label: 'Turbo', code: 'poisson'},
                {label: 'Pâtes', code: 'epicerie'},
                {label: 'Semoule', code: 'epicerie'},
                {label: 'Eau', code: 'boisson'},
                {label: 'Biere', code: 'boisson'},
                {label: 'Foin', code: 'autre'},
            ]
        }
        
    }
}
</script>