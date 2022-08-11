<template>


    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Maker</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody v-for="p in productss" :key="p.Id">
            <tr>
                <th scope="row">{{ p.index }}</th>

                <td>{{ p.Title }}</td>
                <td>{{ p.Maker }}</td>
                <td style="color:#DC2588 ;">${{ p.Price }}</td>


            </tr>



        </tbody>
       
    </table>
 <div class="total">
            <p style="font-weight:bold ;">TOTAL</p>
            <p style="color:#DC2588 ; font-weight:bold; font-size: 20px;">${{ totalPrice }}</p>
        </div>
</template>

<script>
import MY_JSON from "../product.json";
export default {
    data() {
        return {
            products: MY_JSON,
            productss: [],
            product: {},
            totalPrice: 0
        }
    },
    mounted() {

        this.productss = JSON.parse(this.$route.params.products);  //router'dan parametre olarak gelen products dizisini boş diziye atıyor
        this.totalPrice = this.$route.params.totalPrice;         //router'dan parametre olarak gelen totalPrice değerini lokal değişkene atıyor
        
    },
    methods: {

    },

}
</script>

<style scoped>
main {
    background-image: url('./images/pexels-fwstudio-131683.jpg');
}

body {
    background-image: url('./images/pexels-fwstudio-131683.jpg');
}

img {
    width: 100%;

}

.card {
    border: 1px solid silver;
    border-radius: 8px;
    max-width: 200px;
    max-height: 400px;
    margin: 0 5px;
    cursor: pointer;
    box-shadow: 0px 1px 3px darkgrey;
    transition: 0.2s;
}
.total{
  padding-right: 90px;
   float: right;
}
.cards {
    display: grid;
}

.title,
.content,
.description {
    padding: 16px;
    text-transform: capitalize;
    text-align: center;
}

.title,
.content {
    border-bottom: 1px solid silver;
}

.title {
    font-size: 1.25em;
}

.button {
    text-align: center;
    margin: 0 70px;
}

.card:hover {
    transition: 0.2s;
    box-shadow: 0px 1px 9px darkgrey;
}
</style>
