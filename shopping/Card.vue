<template>


    <div style="padding-top:40px ;">
        <input class="form" type="search" style="margin-left:540px ; width: 400px;height: 40px; border-radius: 2px; border-color:#f34079 ;"
            v-model="search" placeholder="Search" aria-label="Search">

        <button type="button" class="button-m" @click.prevent="goToBag(productsInBag, totalPrice)">GO TO BASKET</button>

    </div>
    <div class="card-deck" style="padding-top: 40px;">


        <div v-for="p in filteredItems" :key="p.Id">
            <div class="column" style="padding:10px;">

                <div class="card">
                    <div class="card-body" @click="goToDetail(p.Id)">
                        <img class="card-img-top" :src="p.img" alt="Card image cap">

                        <h6 class="card-title">{{ p.Title }}</h6>
                        <p class="card-text" style="align-self: center;">${{ p.Price }}</p>

                    </div>




                    <div class="inner" style="display:flex; padding:5px;">
                        <button class="button-75" @click.prevent="addToBag(p)">add to basket</button>
                        <div class="box">
                            <div v-if="counts[p.index] == 0" class="label"> </div>
                            <div v-else class="label">{{ counts[p.index] }} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    </div>










</template>

<script>
import MY_JSON from "../product.json";



export default {



    data() {
        return {
            products: MY_JSON,
            totalPrice: 0,
            productsInBag: [],
            search: '',
            counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        };
    },
    created() {
        this.fetchData();


    },
    computed: {
        filteredItems() {


            return this.products.filter(item => {
                return item.Title.toLowerCase().includes(this.search.toLowerCase())
            })

        }
    },
    methods: {
        async fetchData() {
            this.products = MY_JSON;       //json dosyasındaki verileri products listesine atıyoruz
        },
        goToDetail(id) {
            this.$router.push('/detail/' + id);    //detay sayfasina yonlendiren metot
        },

        goToBag(bag, totalPrice) {

            this.$router.push({ name: 'Bag', params: { products: JSON.stringify(bag), totalPrice: totalPrice } });  
          //sepetteki ürünler ve totalPrice değerlerini parametre olarak router ile sepet sayfasına gönderiyor
        },
        addToBag(product) {

            this.productsInBag.push(product); //sepete eklenen ürünleri boş bir listeye ekleyen metot

            this.counts[product.index]++;  

            this.totalPrice = this.totalPrice + product.Price;
             
        },
        goBack() {
            this.$router.go(-1)
        },

    },


};


</script>

<style scoped>
.container div {
    display: inline-block;
    width: 500px;
}

.label {
    float: right;
    margin-right: 25px;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    color: #DC2588;
}

.inner {
    display: inline-block;
}

.col {
    display: inline;
}

.card-group {
    align-items: center;
 
}

.list-group {
    max-width: 400px;
}

.card {
    border: 0.3px solid silver;
    border-radius: 2px;
    max-width: 260px;
    width: 280px;
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0px 1px 3px darkgrey;
    transition: 0.2s;
    height: 350px;
    



}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
}

.column {
    float: left;
    width: 25%;
    padding: 0 10px;
}

.row {
    margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

.button-m {
    background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
    color: #fff;
    float: right;
    margin-right: 50px;
    border-radius: 10px;
    border: 0;
    height: 40px;
    width: 140px;
    cursor: pointer;
    pointer-events: visible;
    font-weight: 500;

}




.box {
    padding-left: 10px;
}

.button-75 {
    display: inline-block;
    align-items: center;
    background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold", sans-serif;
    font-size: 13px;
    font-weight: 700;
    height: 35px;
    justify-content: center;
    letter-spacing: .4px;
    line-height: 1;
    max-width: 120px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 3px;
    pointer-events: visible;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-left: 55px;
    margin-bottom: 15px;
    align-content: center;

}


.button-75:active {
    outline: 0;
}

.button-75:hover {
    outline: 0;
}

.button-75 span {
    transition: all 200ms;
}

.button-75:hover span {
    transform: scale(.9);
    opacity: .75;
}

@media screen and (max-width: 991px) {
    .button-75 {
        font-size: 10px;
        height: 30px;
    }

    .button-75 span {
        line-height: 50px;
    }
}



.col-sm {
    margin-bottom: 2em;
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

.d-flex {

    width: 600px;
    display: inline-block;
    align-self: center;
    margin: 10px;
    padding-left: 50px;
    padding-right: 50px;


}
</style>
