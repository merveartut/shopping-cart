<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
           
            <div class="col-md-4 col-12">
                <img :src="product.img" class="img-fluid">
            </div>
        
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.Title }}</h4>
                <h4 class="catgory font-italic"> {{product.Maker}}</h4>
                <h4  style="font-weight:bold; color:#C0392B ;" > $ {{product.Price}}</h4>
                <p>
                    {{ product.Description }}
                </p>
               
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
            product: {},
        }
    },
    props: {
       
    },
    mounted() {
            this.id = this.$route.params.id;                 //routerdan gelen id parametresini lokal değişkene atıyor
            this.product = this.products.find((product) => product.Id == this.id)  //products listesi içerisinde aranan id'ye sahip product için filtreleme yapıyor
            
        },
    
  
    

}
</script>

<style scoped>
.container{
    border: 3px solid chocolate;
    margin-top: 20px;
    padding: 5px;
    height: 500px;
}
.input {
    display: flex;
    flex-direction: column;
}

.label {
    display: flex;
    justify-content: space-between;
}

.error {
    color: red;
}

.input {
    width: 100%;
}

input {
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid silver;
    margin: 2px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
}
</style>