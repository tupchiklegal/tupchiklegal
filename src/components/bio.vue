<template>
<div>
  <div class="container p-2">
    <router-link to="/" >	Home </router-link> - <router-link to="/about" >	About </router-link>
    - Vanessa C. Gabriele
  </div>
  <div class="container-fuid bg-dark bg-image">
    <div class="container p-3">
      <h1 class="text-light about">About</h1>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-sm-3">
        <div class="pt-2 text-center" style="font-size: 13px">
        <img class="img-fluid" v-bind:src="require(`./../assets/empty_profile.jpeg`)" alt="">
          <br><br>
          <span class="text-primary">Contact Info</span> <br>
          <span>Phone: 716-856-5556 Ext. 1005</span> <br>
          <span>Email: vgabrieletlg@gmail.com</span>
        </div>
   


      </div>
      <div class="col-sm-9">
        <h3>Vanessa C. Gabriele, Esq</h3>
        <p>
        Ms. Gabriele graduated cum laude from the University of Buffalo and the 
        University of Buffalo Law School where she served as the case 
        note editor for the Buffalo Journal of Gender Law and Social Policy. <p></p>
        Ms. Gabriele has devoted her legal practice to matrimonial and family law a
        nd has established a reputation as a knowledgeable resource and effective advocate 
        for her clients in all matters of divorce, child custody and family court proceedings. 
        Ms. Gabriele is a member of the Executive Committee of the Family Law Section 
        of the New York State Bar Association. 
        In addition, she lectures extensively in the area of Matrimonial and Family Law 
        and has chaired CLE seminars in Erie County and New York State Bar Associations
        as well as lectured at such seminars. Further, 
        Ms. Gabriele has guest lectured on the practice of Matrimonial and 
        Family Law at the University at Buffalo Law School and the State University at Buffalo. 
        </p><p>Ms. Gabriele is one of the co-chairs of the Erie County Bar Association’s 
        Matrimonial and Family Law Committee. 
        She is also a member of the Erie County Family Court Practice and Procedure Committee. 
        rior to her employment here at Bouvier Law, Ms. Gabriele worked at the 
        boutique matrimonial and family law firm of J. Adams and Associates, PLLC, 
        a firm dedicated exclusively to matrimonial and family law litigation. 
        She worked exclusively with and was trained by Joan Casilio Adams, Esq., 
        a fellow of the American Academy of Matrimonial Lawyers and well respected by the Western New York Matrimonial Bar.
        </p>
      </div>

    </div>
  </div>

</div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .bg-image {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./../assets/stock1.jpg');
    background-repeat: no-repeat;
    background-size: cover;

  }
  .about {
      text-shadow: 2px 4px 9px rgba(black, .8);
  }
</style>