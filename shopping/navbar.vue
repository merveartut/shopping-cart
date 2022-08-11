<template>
<div class="nav">
  <a class="active" href="#home">TURBOARD</a>
  <a style="font-size:15px ; padding-left: 1200px;" href="" >made by merveartut</a>
</div>

</template>

<script>




export default {
  
    data() {
        return {
           
           
        };
    },

methods:{

}
}
</script>

<style scoped>
.nav {
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.nav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.nav a.active {
  
  color: white;
}


</style>
