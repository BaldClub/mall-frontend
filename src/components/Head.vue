<template>
  <div class="page-head">
    <div class="head-img">
      <div>
        <img
          style="float: left"
          src="@/assets/img/perfectstairslogo.png"
          alt=""
        />
        <img style="float: right" src="@/assets/img/amazon-logo.png" alt="" />
      </div>
    </div>
    <div class="head-bar">
      <ul>
        <li>
          <a href="#">Stair Calculator</a>
        </li>
        <li>
          <a href="#">dropdown-toggle</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-head {
  width: 100%;
  margin: 0px 0px;
  border-top: 3px solid #1976d2;
}
.head-img {
  text-align: center;
}

.head-img div {
  height: 144px;
  width: 70%;
  margin: 0px auto;
  padding: 20px 0px;
}

.head-bar{
    width: 100%;
    background-color: #2f95f9 ;
    height: 52px;
}
.head-bar ul{
    font-size: 18px;
    line-height: 25px;
    text-shadow: none !important;
    color: #444;
    -webkit-font-smoothing: antialiased;
    width: 70%;
    height: 100%;
    margin: 0px auto;
    list-style: none;

}
.head-bar ul li{
    float: left;
    line-height: 52px;
}
.head-bar ul li a{
    border-left: 1px solid #1187c9;
    padding: 13px 15px 15px;
    text-shadow: none !important;
    color: #fff !important;
   
    font-size: 18px !important
}

.head-bar ul li a:hover{
   background-color: #1187c9;
}
</style>