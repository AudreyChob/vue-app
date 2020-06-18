<template>
    <div>
        
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
                {label: 'France', code: 'fr'},
                {label: 'Allemagne', code: 'al'},
                {label: 'Pologne', code: 'po'},
                {label: 'Portugal', code: 'po'},
                {label: 'Espagne', code: 'es'},
                {label: 'Suisse', code: 'su'},
                {label: 'Danemark', code: 'da'},
                {label: 'Irlande', code: 'ir'},
                {label: 'Ecosse', code: 'ec'},
                {label: 'Royaume-uni', code: 'ro'},
                {label: 'Croasie', code: 'cr'},
                {label: 'Ukraine', code: 'uk'},
                {label: 'Roumanie', code: 'ro'},
                {label: 'Slovénie', code: 'sl'},
                {label: 'Belgique', code: 'be'},
                {label: 'Autriche', code: 'au'},


            ]
        }
        
    }
}
</script>